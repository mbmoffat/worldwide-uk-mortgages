import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export const SITE_NAME = 'UK Mortgages Worldwide';
export const SITE_SHORTNAME = 'UK Mortgages Worldwide';

export default defineConfig({
  site: 'https://ukmortgagesworldwide.com',
  integrations: [sitemap()],
});
