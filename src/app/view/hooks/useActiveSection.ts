import { useEffect } from "react";

export function useActiveSection() {
  useEffect(() => {
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav a"));
    const targets = navLinks.flatMap((link) => {
      const href = link.getAttribute("href");
      const section = href?.startsWith("#") ? document.getElementById(href.slice(1)) : null;
      return section ? [{ link, section }] : [];
    });
    if (targets.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const ordered = [...targets].sort(
        (a, b) => a.section.getBoundingClientRect().top - b.section.getBoundingClientRect().top
      );
      const topbarBottom = document.querySelector(".topbar")?.getBoundingClientRect().bottom ?? 0;
      const marker = Math.max(topbarBottom, window.innerHeight * 0.25);
      const nearBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      // Before the first section (the hero), no section link is current.
      let active = nearBottom ? ordered.at(-1) : undefined;
      if (!nearBottom) {
        for (const target of ordered) {
          if (target.section.getBoundingClientRect().top <= marker) active = target;
        }
      }
      navLinks.forEach((link) => {
        const isActive = link === active?.link;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    // Accordion expansion and media loading can move section boundaries without scrolling.
    const resizeObserver = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    const main = document.querySelector("main");
    if (main) resizeObserver?.observe(main);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      navLinks.forEach((link) => {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      });
    };
  }, []);
}
