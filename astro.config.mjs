import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fisioymes.com',
  base: '/',
  integrations: [sitemap()],
  // ca en la raíz del base (idioma primario), es bajo /es/
});
