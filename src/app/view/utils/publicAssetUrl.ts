/** Resolve public assets against Vite's deployment base, preserving external URLs. */
export function publicAssetUrl(path: string): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL;
  const relative = path.startsWith(base) ? path.slice(base.length) : path.replace(/^\/+/, "");
  return `${base}${relative}`;
}
