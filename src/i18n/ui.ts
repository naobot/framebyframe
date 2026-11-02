import type { Lang } from './index';

/**
 * UI chrome that lives in .astro files rather than the CMS.
 *
 * Note: the section/page headings ("News", "Issues", "Upcoming") stay English in
 * both languages — the design already uses English headings decoratively on the
 * Japanese site. Only sentence-like copy, labels and alt text are translated.
 */
const strings = {
  heroTagline: {
    ja: 'アニメ業界発、フェミニストとクィア当事者のアニメ業界人たちによる社会のことを考えるZINE',
    en: 'A zine from inside the anime industry — feminist and queer industry workers thinking about society.',
  },
  heroCta: {
    ja: '→ もっと見る',
    en: '→ More issues',
  },
  newsHeading: {
    ja: 'News',
    en: 'News',
  },
  newsUpcoming: {
    ja: 'Upcoming',
    en: 'Upcoming',
  },
  newsReadMore: {
    ja: '詳しく見る',
    en: 'Read more',
  },
  issuesHeading: {
    ja: 'Issues',
    en: 'Issues',
  },
  samplePages: {
    ja: 'サンプル画像はこちら',
    en: 'View sample pages',
  },
  samplePageAlt: {
    ja: 'サンプルページ',
    en: 'Sample page',
  },
  homeLinkAlt: {
    ja: 'コマ送り ホームページ',
    en: 'Frame by Frame homepage',
  },
  lightboxClose: {
    ja: '閉じる',
    en: 'Close',
  },
  lightboxPrev: {
    ja: '前へ',
    en: 'Previous',
  },
  lightboxNext: {
    ja: '次へ',
    en: 'Next',
  },
} satisfies Record<string, Record<Lang, string>>;

export type UiKey = keyof typeof strings;

export function ui(key: UiKey, lang: Lang): string {
  return strings[key][lang];
}
