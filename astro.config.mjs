import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  integrations: [react()],
  adapter: vercelServerless({
    edgeMiddleware: true,
  })
});