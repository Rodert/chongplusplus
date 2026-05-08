import { defineConfig } from "vite";

export default defineConfig({
  // Relative base makes one build work on both root domains and subpath pages.
  base: "./",
  build: {
    rollupOptions: {
      input: {
        claudeCode: "claude-code.html",
        codex: "codex.html",
        main: "index.html",
        recharge: "recharge.html",
        tutorials: "tutorials.html"
      }
    }
  }
});
