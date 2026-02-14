import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://meetcost.co',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
