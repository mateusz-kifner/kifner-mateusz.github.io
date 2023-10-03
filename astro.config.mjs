import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import preact from "@astrojs/preact"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://mateusz-kifner.github.io",
  integrations: [mdx(), sitemap(), preact()],
  server: {
    tailwindConfig: "./tailwind.config.js",
  },
})
