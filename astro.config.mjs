import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio propio del cliente (fisioymes.com) vía CNAME de GitHub Pages.
export default defineConfig({
  site: 'https://fisioymes.com',
  base: '/',
  integrations: [sitemap()],
  // ca en la raíz del base (idioma primario), es bajo /es/
});
