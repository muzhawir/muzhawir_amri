// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://muzhawir.com",
	integrations: [
		tailwind(),
		sitemap({
			entryLimit: 45000,
			changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date('2025-01-01'),
		})
	],
	adapter: cloudflare()
});
