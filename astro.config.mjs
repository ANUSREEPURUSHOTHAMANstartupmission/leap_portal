import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://ANUSREEPURUSHOTHAMANstartupmission.github.io',
  base:'/leap_portal',
  integrations: [tailwind()]
});