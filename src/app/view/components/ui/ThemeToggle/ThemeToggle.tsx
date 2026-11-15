import { useEffect, useRef, useState } from "react";
import "./theme-toggle.css";

type BaseTheme = "light" | "dark" | "auto";
type Atmosphere = "none" | "rain" | "snow";

const BASE_KEY = "portfolio-base-theme";
const ATMOSPHERE_KEY = "portfolio-atmosphere";

function readBaseTheme(): BaseTheme {
  const saved = localStorage.getItem(BASE_KEY);
  if (saved === "light" || saved === "dark" || saved === "auto") return saved;
  return localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "auto";
}

function readAtmosphere(): Atmosphere {
  const saved = localStorage.getItem(ATMOSPHERE_KEY);
  if (saved === "rain" || saved === "snow" || saved === "none") return saved;
  const legacy = localStorage.getItem("portfolio-theme");
  return legacy === "rain" || legacy === "snow" ? legacy : "none";
}

function createRainEffect() {
  const canvas = document.createElement("canvas");
  canvas.className = "theme-effect-canvas theme-effect-canvas--rain";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return () => undefined;
  }

  let animationFrame = 0;
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  resize();
  const drops = Array.from({ length: 90 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    length: Math.random() * 14 + 8,
    speed: Math.random() * 2 + 1,
  }));
  const animate = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue("--atmosphere-mark").trim() || "rgba(122, 162, 255, .28)";
    ctx.lineWidth = 1;
    drops.forEach((drop) => {
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x - 2, drop.y + drop.length);
      ctx.stroke();
      drop.y += drop.speed;
      if (drop.y > window.innerHeight) {
        drop.y = -drop.length;
        drop.x = Math.random() * window.innerWidth;
      }
    });
    animationFrame = requestAnimationFrame(animate);
  };
  animate();
  window.addEventListener("resize", resize);
  return () => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resize);
    canvas.remove();
  };
}

function createSnowEffect() {
  const canvas = document.createElement("canvas");
  canvas.className = "theme-effect-canvas theme-effect-canvas--snow";
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return () => undefined;
  }

  let animationFrame = 0;
  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  resize();
  const flakes = Array.from({ length: 110 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 2 + 1,
    speed: Math.random() * 0.8 + 0.35,
    wind: Math.random() * 0.35 - 0.175,
  }));
  const animate = () => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--atmosphere-mark").trim() || "rgba(255, 255, 255, .65)";
    flakes.forEach((flake) => {
      ctx.beginPath();
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();
      flake.y += flake.speed;
      flake.x += flake.wind;
      if (flake.y > window.innerHeight) {
        flake.y = -8;
        flake.x = Math.random() * window.innerWidth;
      }
      if (flake.x > window.innerWidth) flake.x = 0;
      else if (flake.x < 0) flake.x = window.innerWidth;
    });
    animationFrame = requestAnimationFrame(animate);
  };
  animate();
  window.addEventListener("resize", resize);
  return () => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("resize", resize);
    canvas.remove();
  };
}

export default function ThemeToggle() {
  const [baseTheme, setBaseTheme] = useState<BaseTheme>(readBaseTheme);
  const [atmosphere, setAtmosphere] = useState<Atmosphere>(readAtmosphere);
  const [systemPrefersDark, setSystemPrefersDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const resolvedTheme = baseTheme === "auto" ? (systemPrefersDark ? "dark" : "light") : baseTheme;

  useEffect(() => {
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateSystemTheme = () => setSystemPrefersDark(colorScheme.matches);
    const updateMotion = () => setReducedMotion(motionPreference.matches);
    colorScheme.addEventListener("change", updateSystemTheme);
    motionPreference.addEventListener("change", updateMotion);
    return () => {
      colorScheme.removeEventListener("change", updateSystemTheme);
      motionPreference.removeEventListener("change", updateMotion);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.baseTheme = baseTheme;
    root.dataset.theme = resolvedTheme;
    root.style.colorScheme = resolvedTheme;
    const themeColor = resolvedTheme === "dark" ? "#20304f" : "#edf2f7";
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute("content", themeColor);
    localStorage.setItem(BASE_KEY, baseTheme);
  }, [baseTheme, resolvedTheme]);

  useEffect(() => {
    document.documentElement.dataset.atmosphere = atmosphere;
    localStorage.setItem(ATMOSPHERE_KEY, atmosphere);
    if (reducedMotion || atmosphere === "none") return;
    return atmosphere === "rain" ? createRainEffect() : createSnowEffect();
  }, [atmosphere, reducedMotion]);

  const options = <T extends string,>(values: readonly T[], current: T, select: (value: T) => void) =>
    values.map((value) => (
      <button
        key={value}
        type="button"
        className={`theme-option${current === value ? " is-selected" : ""}`}
        aria-pressed={current === value}
        onClick={() => select(value)}
      >
        {value[0].toUpperCase() + value.slice(1)}
      </button>
    ));

  return (
    <div className="theme-toggle">
      <button
        ref={triggerRef}
        className="theme-toggle-btn"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Appearance and atmosphere settings"
        aria-expanded={isOpen}
        aria-controls="appearance-menu"
        title="Appearance and atmosphere"
      >
        <span aria-hidden="true">{resolvedTheme === "dark" ? "◐" : "☼"}</span>
      </button>
      {isOpen && (
        <div
          className="theme-menu"
          id="appearance-menu"
          role="group"
          aria-label="Appearance and atmosphere settings"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setIsOpen(false);
              triggerRef.current?.focus();
            }
          }}
        >
          <div className="theme-setting" role="group" aria-labelledby="base-theme-label">
            <p className="theme-setting-label" id="base-theme-label">Appearance</p>
            <div className="theme-options">{options(["light", "dark", "auto"] as const, baseTheme, setBaseTheme)}</div>
          </div>
          <div className="theme-setting" role="group" aria-labelledby="atmosphere-label">
            <p className="theme-setting-label" id="atmosphere-label">Atmosphere</p>
            <div className="theme-options">{options(["none", "rain", "snow"] as const, atmosphere, setAtmosphere)}</div>
          </div>
        </div>
      )}
    </div>
  );
}
