import "./style.css";
import { tutorials } from "./tutorialData.js";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";
import { LANGUAGE_OPTIONS, applyDocumentLang, getCurrentLang, localizeTutorials, setLang, t } from "./i18n/index.js";

const app = document.querySelector("#app");

const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const currentLang = getCurrentLang();
const homeHref = currentLang === "zh" ? normalizedBaseUrl : `${normalizedBaseUrl}?lang=${currentLang}`;
const localizedTutorials = localizeTutorials(tutorials);
applyDocumentLang();
const resolveAssetUrl = (assetPath) => {
  if (!assetPath || /^(https?:)?\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }
  const cleanPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return `${normalizedBaseUrl}${cleanPath}`;
};

function renderTutorialSteps(targetSelector, steps) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  target.innerHTML = steps
    .map(
      (item, idx) => `
      <li class="tutorial-step stagger" style="--delay:${idx * 80}ms">
        <div class="tutorial-head">
          <span class="tutorial-index">${String(idx + 1).padStart(2, "0")}</span>
          <h3>${item.title}</h3>
        </div>
        <div class="tutorial-body">
          <p>${item.body}</p>
          ${(item.images || [])
            .map(
              (src) =>
                `<a class="guide-image-link" href="${resolveAssetUrl(src)}" target="_blank" rel="noreferrer"><img class="guide-image" src="${resolveAssetUrl(src)}" alt="" loading="lazy" /></a>`
            )
            .join("")}
        </div>
      </li>
    `
    )
    .join("");
}

function tutorialActionsMarkup(actions = []) {
  return actions
    .map((a) => {
      if (a.href) {
        return `<a class="btn btn-secondary" href="${a.href}" target="_blank" rel="noreferrer">${a.label}</a>`;
      }
      if (a.action) {
        return `<button class="btn btn-secondary" type="button" data-action="${a.action}">${a.label}</button>`;
      }
      return "";
    })
    .join("");
}

app.innerHTML = `
  <div class="noise"></div>
  <header class="site-header">
    <a class="brand" href="${homeHref}" aria-label="${t("tutorialsPage.backHome", "返回首页")}">
      <span class="brand-dot"></span>
      ChongPlus
    </a>
    <div class="header-tools">
      <nav class="nav">
        <a href="${homeHref}#recharge">${t("nav.recharge", "充值中心")}</a>
        <a href="${homeHref}#links">${t("nav.links", "快速入口")}</a>
        <a href="${homeHref}#faq">${t("nav.faq", "FAQ / 指南")}</a>
        <a href="#codex">${t("tutorialsPage.navCodex", "Codex 教程")}</a>
        <a href="#claude">${t("tutorialsPage.navClaude", "Claude Code")}</a>
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

  <main>
    <section class="hero reveal">
      <p class="badge">${t("tutorialsPage.badge", "教程")}</p>
      <h1>${t("tutorialsPage.title", "Codex / Claude Code 快速上手")}</h1>
      <p class="hero-text">
        ${t("tutorialsPage.subtitle", "两个教程都在本页集中维护，按步骤完成安装与配置即可开始使用。")}
      </p>
      <div class="hero-actions">
        <a class="btn btn-secondary" href="${homeHref}#steps">${t("tutorialsPage.ctaBackSteps", "返回接入流程")}</a>
        <button class="btn btn-secondary" type="button" data-action="support">${t("common.contactSupport", "联系客服支持")}</button>
      </div>
    </section>

    ${localizedTutorials
      .map(
        (tutorialItem) => `
      <section id="${tutorialItem.id}" class="section reveal">
        <h2>${t(`tutorialsPage.sections.${tutorialItem.id}.title`, tutorialItem.title)}</h2>
        <p class="section-note">${t(`tutorialsPage.sections.${tutorialItem.id}.intro`, tutorialItem.intro)}</p>
        <div class="tutorial-actions">
          ${tutorialActionsMarkup(tutorialItem.actions)}
        </div>
        <ol class="tutorial" id="${tutorialItem.id}-steps"></ol>
      </section>
    `
      )
      .join("")}
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ChongPlus</p>
    <div class="footer-links">
      <button class="footer-link" type="button" data-action="support">${t("common.support", "支持")}</button>
      <a href="https://chongplus.plus/" target="_blank" rel="noreferrer">chongplus.plus</a>
    </div>
  </footer>

  ${supportModalMarkup()}
`;

for (const tutorialItem of localizedTutorials) {
  renderTutorialSteps(`#${tutorialItem.id}-steps`, tutorialItem.steps);
}

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
