import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const SITE_MAP_PATH = path.join(PUBLIC_DIR, "sitemap.xml");
const ROBOTS_PATH = path.join(PUBLIC_DIR, "robots.txt");
const CNAME_PATH = path.join(PUBLIC_DIR, "CNAME");

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
}

function normalizeSiteUrl(raw) {
  const trimmed = raw.trim();
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  return withProtocol.replace(/\/+$/, "");
}

function toUrlPath(htmlFile) {
  if (htmlFile === "index.html") {
    return "/";
  }
  return `/${htmlFile}`;
}

async function resolveSiteUrl() {
  if (process.env.SITE_URL && process.env.SITE_URL.trim()) {
    return normalizeSiteUrl(process.env.SITE_URL);
  }

  const cname = (await fs.readFile(CNAME_PATH, "utf8")).trim();
  if (!cname) {
    throw new Error("public/CNAME is empty, cannot infer site URL.");
  }
  return normalizeSiteUrl(cname);
}

async function getHtmlPages() {
  const entries = await fs.readdir(ROOT_DIR, { withFileTypes: true });
  const htmlFiles = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".html"))
    .map((entry) => entry.name)
    .sort();

  if (htmlFiles.length === 0) {
    throw new Error("No *.html pages found in repository root.");
  }
  return htmlFiles;
}

async function writeSitemap(siteUrl, htmlFiles) {
  const urls = htmlFiles.map((htmlFile) => `${siteUrl}${toUrlPath(htmlFile)}`);
  const xmlLines = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">",
    ...urls.flatMap((url) => ["  <url>", `    <loc>${escapeXml(url)}</loc>`, "  </url>"]),
    "</urlset>"
  ];

  await fs.mkdir(PUBLIC_DIR, { recursive: true });
  await fs.writeFile(SITE_MAP_PATH, `${xmlLines.join("\n")}\n`, "utf8");
}

async function upsertRobotsSitemap(siteUrl) {
  const sitemapLine = `Sitemap: ${siteUrl}/sitemap.xml`;
  let content = "";

  try {
    content = await fs.readFile(ROBOTS_PATH, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter((line, index, source) => !(index === source.length - 1 && line === ""));
  const withoutSitemap = lines.filter((line) => !/^sitemap:/i.test(line));

  if (!withoutSitemap.some((line) => line.trim() !== "")) {
    withoutSitemap.push("User-agent: *", "Allow: /");
  }

  const nextLines = [...withoutSitemap];
  if (nextLines[nextLines.length - 1] !== "") {
    nextLines.push("");
  }
  nextLines.push(sitemapLine);

  await fs.writeFile(ROBOTS_PATH, `${nextLines.join("\n")}\n`, "utf8");
}

async function main() {
  const siteUrl = await resolveSiteUrl();
  const htmlFiles = await getHtmlPages();
  await writeSitemap(siteUrl, htmlFiles);
  await upsertRobotsSitemap(siteUrl);

  console.log(
    `Generated sitemap for ${htmlFiles.length} page(s): ${htmlFiles.join(", ")} -> ${siteUrl}/sitemap.xml`
  );
}

main().catch((error) => {
  console.error(`Failed to generate sitemap: ${error.message}`);
  process.exit(1);
});
