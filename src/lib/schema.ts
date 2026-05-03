export const SITE_URL = 'https://ukmortgagesworldwide.com';
export const SITE_NAME = 'UK Mortgages Worldwide';

type Crumb = { name: string; path?: string };

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description:
      'UK mortgage information and lead-generation for British expats, non-UK residents, foreign nationals, and applicants with foreign income. We pass enquiries to FCA-authorised mortgage brokers.',
    sameAs: [],
  };
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: it.name,
      ...(it.path ? { item: `${SITE_URL}${it.path}` } : {}),
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
    datePublished: opts.datePublished ?? '2026-05-01',
    dateModified: opts.dateModified ?? '2026-05-01',
    image: `${SITE_URL}/og-default.png`,
  };
}

export function serviceSchema(opts: {
  serviceType: string;
  name: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}

export function newsArticleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string | Date;
  dateModified?: string | Date;
  url?: string;
}) {
  const toIso = (d: string | Date) =>
    typeof d === 'string' ? d : d.toISOString();
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: opts.headline,
    description: opts.description,
    datePublished: toIso(opts.datePublished),
    dateModified: toIso(opts.dateModified ?? opts.datePublished),
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
    ...(opts.url ? { mainEntityOfPage: opts.url } : {}),
    image: `${SITE_URL}/og-default.png`,
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
