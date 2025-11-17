import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tevans002.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static'
});