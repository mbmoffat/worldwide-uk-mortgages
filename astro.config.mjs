import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export const SITE_NAME = 'UK Mortgages Worldwide';
export const SITE_SHORTNAME = 'UK Mortgages Worldwide';

export default defineConfig({
  site: 'https://ukmortgagesworldwide.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Per-page priority and changefreq overrides based on URL pattern
        if (item.url === 'https://ukmortgagesworldwide.com/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (item.url.match(/\/expat-mortgages\/?$|\/non-uk-resident-mortgages\/?$|\/uk-mortgage-foreign-income\/?$|\/uk-mortgage-living-abroad\/?$|\/seafarer-mortgages\/?$|\/uk-mortgage-for-foreign-nationals\/?$|\/expat-mortgages\/buy-to-let\/?$/)) {
          // Hub pages
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else if (item.url.match(/\/expat-mortgages\/countries\//)) {
          // Country pages
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else if (item.url.match(/\/news\//)) {
          // News articles
          item.changefreq = 'monthly';
          item.priority = 0.6;
        } else if (item.url.match(/\/(about|contact|complaints|terms|sitemap)\/?$/)) {
          // Operational pages
          item.changefreq = 'monthly';
          item.priority = 0.4;
        } else if (item.url.match(/\/tools\//)) {
          // Calculators
          item.changefreq = 'monthly';
          item.priority = 0.7;
        } else {
          // Default for situation, lender, guide pages
          item.changefreq = 'monthly';
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
});
