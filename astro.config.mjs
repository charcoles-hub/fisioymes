import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages (proyecto): sirve en charcoles-hub.github.io/fisioymes/
// Para el dominio propio del cliente: site: 'https://fisioymes.com', base: '/'.
export default defineConfig({
  site: 'https://charcoles-hub.github.io',
  base: '/fisioymes/',
  integrations: [sitemap()],
  // ca en la raíz del base (idioma primario), es bajo /es/
});
