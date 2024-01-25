import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  image: {
    remotePatterns: [{
      protocol: "https"
    }]
  },
  integrations: [react()],
  adapter: vercel({
    edgeMiddleware: true,
  })
});