/**
 * Base path for GitHub Pages (e.g. "/cv"). Empty when running locally or at domain root.
 * Set by the GitHub Actions workflow via NEXT_PUBLIC_BASE_PATH so static asset URLs work.
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}

/** Prefix a path with basePath so it works on GitHub Pages (e.g. /cv/static/...). */
export function assetPath(path: string): string {
  const base = getBasePath();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}
