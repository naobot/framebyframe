export type Lang = 'ja' | 'en';

export const EN_PREFIX = '/en';

/**
 * The locale a page is being rendered for, derived from its URL. Components read
 * this from `Astro.url` rather than taking a prop, so deeply nested ones (Header,
 * Navigation) don't need plumbing from the page.
 */
export function getLang(url: URL): Lang {
  const path = url.pathname;
  return path === EN_PREFIX || path.startsWith(`${EN_PREFIX}/`) ? 'en' : 'ja';
}

/**
 * Read a field in the current language, falling back to the Japanese value when
 * the `_en` twin hasn't been filled in yet. Every `_en` read goes through here.
 */
export function t<T extends Record<string, any>>(
  obj: T | undefined | null,
  field: string,
  lang: Lang
): string | undefined {
  if (!obj) return undefined;

  if (lang === 'en') {
    const translated = obj[`${field}_en`];
    if (translated) return translated;
  }

  return obj[field];
}

/** Prefix an internal path with /en. External links and anchors are left alone. */
export function localePath(lang: Lang, path: string | undefined): string | undefined {
  if (!path) return path;
  if (lang !== 'en') return path;
  if (!path.startsWith('/')) return path; // http(s), mailto:, #anchor, relative
  if (path === EN_PREFIX || path.startsWith(`${EN_PREFIX}/`)) return path;

  return path === '/' ? `${EN_PREFIX}/` : `${EN_PREFIX}${path}`;
}

/** The same page in the other language — used by the switcher and hreflang tags. */
export function counterpartPath(url: URL): string {
  const path = url.pathname;

  if (getLang(url) === 'en') {
    const stripped = path.slice(EN_PREFIX.length);
    return stripped === '' || stripped === '/' ? '/' : stripped;
  }

  return path === '/' ? `${EN_PREFIX}/` : `${EN_PREFIX}${path}`;
}

/**
 * Shared `getStaticPaths` for every page: an undefined rest param collapses to
 * the unprefixed Japanese route, so one file builds both languages.
 */
export function localePaths() {
  return [{ params: { locale: undefined } }, { params: { locale: 'en' } }];
}
