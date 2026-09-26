import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE ?? 'https://shami-momo.github.io',
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
