import "./style.css";
import { tutorials } from "./tutorialData.js";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";
import { LANGUAGE_OPTIONS, applyDocumentLang, getCurrentLang, localizeTutorials, setLang, t } from "./i18n/index.js";

const app = document.querySelector("#app");

const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const currentLang = getCurrentLang();
const homeHref = currentLang === "zh" ? normalizedBaseUrl : `${normalizedBaseUrl}?lang=${currentLang}`;
const rechargeHref =
  currentLang === "zh" ? `${normalizedBaseUrl}recharge.html` : `${normalizedBaseUrl}recharge.html?lang=${currentLang}`;
const codexHref = currentLang === "zh" ? `${normalizedBaseUrl}codex.html` : `${normalizedBaseUrl}codex.html?lang=${currentLang}`;
const claudeHref =
  currentLang === "zh" ? `${normalizedBaseUrl}claude-code.html` : `${normalizedBaseUrl}claude-code.html?lang=${currentLang}`;
const localizedTutorials = localizeTutorials(tutorials);
applyDocumentLang();
const resolveAssetUrl = (assetPath) => {
  if (!assetPath || /^(https?:)?\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }
  const cleanPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return `${normalizedBaseUrl}${cleanPath}`;
};

const tutorialCards = localizedTutorials.map((tutorialItem) => ({
  ...tutorialItem,
  logo: tutorialItem.id === "codex" ? "/chatgpt-logo.jpg" : "/claude-logo.jpg",
  href: tutorialItem.id === "codex" ? codexHref : claudeHref,
  label:
    tutorialItem.id === "codex"
      ? t("tutorialsPage.navCodex", "Codex 教程")
      : t("tutorialsPage.navClaude", "Claude Code")
}));

app.innerHTML = `
  <div class="noise"></div>
  <header class="site-header">
    <a class="brand" href="${homeHref}" aria-label="${t("tutorialsPage.backHome", "返回首页")}">
      <img class="brand-logo" src="${resolveAssetUrl("/logo.jpg")}" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false" />
      <span class="brand-dot" hidden></span>
      大象 AI
    </a>
    <div class="header-tools">
      <nav class="nav">
        <a href="${rechargeHref}">${t("nav.recharge", "充值中心")}</a>
        <a href="${homeHref}#links">${t("nav.links", "快速入口")}</a>
        <a href="${homeHref}#faq">${t("nav.faq", "FAQ / 指南")}</a>
        <a href="${codexHref}">${t("tutorialsPage.navCodex", "Codex 教程")}</a>
        <a href="${claudeHref}">${t("tutorialsPage.navClaude", "Claude Code")}</a>
      </nav>
      <label class="lang-switch" aria-label="${t("common.language", "语言")}">
        <span>${t("common.language", "语言")}</span>
        <select data-action="lang-switch">
          ${LANGUAGE_OPTIONS.map(
            (item) => `<option value="${item.code}" ${item.code === currentLang ? "selected" : ""}>${item.label}</option>`
          ).join("")}
        </select>
      </label>
    </div>
  </header>

  <main class="tutorial-index-page">
    <section class="hero tutorial-index-hero reveal">
      <p class="badge">${t("tutorialsPage.badge", "教程")}</p>
      <h1>${t("tutorialsPage.title", "Codex / Claude Code 快速上手")}</h1>
      <p class="hero-text">
        选择对应工具进入独立教程页面。后续新增教程时，会继续作为单独模块放在这里。
      </p>
      <div class="hero-actions">
        <a class="btn btn-secondary" href="${homeHref}#steps">${t("tutorialsPage.ctaBackSteps", "返回接入流程")}</a>
        <button class="btn btn-secondary" type="button" data-action="support">${t("common.contactSupport", "联系客服支持")}</button>
      </div>
    </section>

    <section class="tutorial-entry-list reveal" aria-label="教程列表">
      ${tutorialCards
      .map(
        (tutorialItem, idx) => `
        <a class="tutorial-entry-card tutorial-entry-${tutorialItem.id} stagger" style="--delay:${idx * 80}ms" href="${tutorialItem.href}">
          <img class="tutorial-entry-logo" src="${resolveAssetUrl(tutorialItem.logo)}" alt="" />
          <div class="tutorial-entry-copy">
            <span class="badge">${tutorialItem.label}</span>
            <h2>${t(`tutorialsPage.sections.${tutorialItem.id}.title`, tutorialItem.title)}</h2>
            <p>${t(`tutorialsPage.sections.${tutorialItem.id}.intro`, tutorialItem.intro)}</p>
          </div>
          <span class="tutorial-entry-action">查看教程</span>
        </a>
      `
      )
      .join("")}
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} 大象 AI</p>
    <div class="footer-links">
      <button class="footer-link" type="button" data-action="support">${t("common.support", "支持")}</button>
      <a href="https://chongplus.plus/" target="_blank" rel="noreferrer">chongplus.plus</a>
    </div>
  </footer>

  ${supportModalMarkup()}
`;

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
const langSwitch = document.querySelector('[data-action="lang-switch"]');
if (langSwitch) {
  langSwitch.addEventListener("change", (event) => {
    setLang(event.target.value, { reload: true });
  });
}
wireSupportModal();
