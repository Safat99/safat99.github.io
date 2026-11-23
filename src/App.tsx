import HomeView from "./app/view/HomeView";
import { useEffect, useState } from "react";
import { getSiteModel } from "./app/controller/siteController";
import DetailPageView from "./app/view/DetailPageView";

type Route = { type: "home" } | { type: "detail"; slug: string } | { type: "not-found" };

function getRoute(hash: string): Route {
  if (!hash.startsWith("#/")) return { type: "home" };

  const match = hash.match(/^#\/detail\/([^/?#]+)\/?$/);
  if (!match?.[1]) return { type: "not-found" };

  try {
    return { type: "detail", slug: decodeURIComponent(match[1]) };
  } catch {
    return { type: "not-found" };
  }
}

function updateMeta(selector: string, value: string) {
  document.head.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
}

function NotFoundView() {
  return (
    <>
      <a className="skip-link" href="#not-found-main">Skip to main content</a>
      <main className="not-found container" id="not-found-main" tabIndex={-1}>
        <h1>Page not found</h1>
        <p>The requested portfolio page could not be found.</p>
        <a href={import.meta.env.BASE_URL}>Return to the homepage</a>
      </main>
    </>
  );
}

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const model = getSiteModel();
  const route = getRoute(hash);

  useEffect(() => {
    const syncRoute = () => setHash(window.location.hash);
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  const page = route.type === "detail"
    ? model.detailPages.find(item => item.slug === route.slug)
    : undefined;
  const isNotFound = route.type === "not-found" || (route.type === "detail" && !page);
  const title = page
    ? `${page.title} | ${model.brand.name}`
    : isNotFound
      ? `Page not found | ${model.brand.name}`
      : `${model.brand.name} | Research Portfolio`;
  const description = page?.summary
    ?? (isNotFound
      ? "The requested page could not be found in Sarker Safat Mahmud's research portfolio."
      : "Research portfolio of Sarker Safat Mahmud, focused on machine learning, computer vision, robotics, and intelligent systems.");
  const metaDescription = description.length > 160
    ? `${description.slice(0, 157).trimEnd().replace(/\s+\S*$/, "")}...`
    : description;

  useEffect(() => {
    const canonicalUrl = new URL(import.meta.env.BASE_URL, window.location.origin).href;
    const pageUrl = page ? `${canonicalUrl}#/detail/${encodeURIComponent(page.slug)}` : canonicalUrl;
    document.title = title;
    updateMeta('meta[name="description"]', metaDescription);
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', metaDescription);
    updateMeta('meta[property="og:url"]', pageUrl);
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', metaDescription);
    updateMeta('meta[name="twitter:url"]', pageUrl);
    document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
  }, [metaDescription, page, title]);

  useEffect(() => {
    if (route.type !== "home") return;
    const targetId = hash.slice(1);
    if (!targetId || targetId.startsWith("/")) return;
    requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
  }, [hash, route.type]);

  if (page) return <DetailPageView page={page} />;
  if (isNotFound) return <NotFoundView />;
  return <HomeView />;
}
