import { defineConfig } from "vite";

const builtAt = new Date().toISOString();
const buildVersion =
  process.env.GITHUB_SHA || process.env.VITE_BUILD_VERSION || builtAt.replace(/[-:TZ.]/g, "").slice(0, 14);

export default defineConfig({
  // Relative base makes one build work on both root domains and subpath pages.
  base: "./",
  define: {
    __BUILD_VERSION__: JSON.stringify(buildVersion)
  },
  plugins: [
    {
      name: "build-version",
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "build-version.json",
          source: `${JSON.stringify({ version: buildVersion, builtAt }, null, 2)}\n`
        });
      },
      transformIndexHtml() {
        return [
          {
            tag: "meta",
            attrs: {
              name: "build-version",
              content: buildVersion
            },
            injectTo: "head"
          }
        ];
      }
    }
  ],
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
