/* global __BUILD_VERSION__ */

const VERSION_FILE = "build-version.json";
const VERSION_STORAGE_KEY = "chongplus.buildVersion";
const RELOAD_KEY_PREFIX = "chongplus.cacheReload.";

const getVersionUrl = () => {
  const url = new URL(VERSION_FILE, window.location.href);
  url.searchParams.set("_", Date.now().toString());
  return url;
};

const readLatestVersion = async () => {
  const response = await fetch(getVersionUrl(), {
    cache: "no-store",
    credentials: "same-origin"
  });

  if (!response.ok) {
    return "";
  }

  const payload = await response.json();
  return typeof payload.version === "string" ? payload.version : "";
};

const reloadWithVersion = (version) => {
  const reloadKey = `${RELOAD_KEY_PREFIX}${version}`;
  if (sessionStorage.getItem(reloadKey) === "1") {
    return;
  }

  sessionStorage.setItem(reloadKey, "1");
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("v", version);
  window.location.replace(nextUrl.toString());
};

const checkBuildVersion = async () => {
  try {
    const latestVersion = await readLatestVersion();
    if (!latestVersion) {
      return;
    }

    localStorage.setItem(VERSION_STORAGE_KEY, latestVersion);

    if (latestVersion !== __BUILD_VERSION__) {
      reloadWithVersion(latestVersion);
    }
  } catch {
    // Cache refresh is best-effort; keep the page usable if the version check fails.
  }
};

if (typeof window !== "undefined" && typeof fetch === "function") {
  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", checkBuildVersion, { once: true });
  } else {
    checkBuildVersion();
  }
}
