import { defineConfig } from "vite";

const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";

export default defineConfig({
  base: isCustomDomain ? "/" : "/chongplusplus/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        tutorials: "tutorials.html"
      }
    }
  }
});
