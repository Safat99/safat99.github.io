import HomeView from "./app/view/HomeView";
import { useEffect, useState } from "react";
import { getSiteModel } from "./app/controller/siteController";
import DetailPageView from "./app/view/DetailPageView";

function getDetailSlug() {
  const match = window.location.hash.match(/^#\/detail\/([^/?#]+)/);
  return match?.[1] ? decodeURIComponent(match[1]) : null;
}

export default function App() {
  const [detailSlug, setDetailSlug] = useState(getDetailSlug);
  const model = getSiteModel();

  useEffect(() => {
    const syncRoute = () => setDetailSlug(getDetailSlug());
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  const page = detailSlug ? model.detailPages.find(item => item.slug === detailSlug) : undefined;
  useEffect(() => {
    document.title = page ? `${page.title} | ${model.brand.name}` : `${model.brand.name} | AI/ML & Intelligent Systems Research`;
  }, [model.brand.name, page]);

  useEffect(() => {
    if (detailSlug) return;
    const targetId = window.location.hash.slice(1);
    if (!targetId || targetId.startsWith("/")) return;
    requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
  }, [detailSlug]);

  return page ? <DetailPageView page={page} /> : <HomeView />;
}
