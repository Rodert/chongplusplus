import "./cacheBuster.js";
import "./style.css";
import { tutorials } from "./tutorialData.js";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";
import { LANGUAGE_OPTIONS, applyDocumentLang, getCurrentLang, localizeTutorials, setLang, t } from "./i18n/index.js";

const app = document.querySelector("#app");
const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const currentLang = getCurrentLang();
const withLang = (path) => (currentLang === "zh" ? `${normalizedBaseUrl}${path}` : `${normalizedBaseUrl}${path}?lang=${currentLang}`);
const homeHref = currentLang === "zh" ? normalizedBaseUrl : `${normalizedBaseUrl}?lang=${currentLang}`;
const rechargeHref = withLang("recharge.html");
const tutorialsHref = withLang("tutorials.html");
const codexHref = withLang("codex.html");
const claudeHref = withLang("claude-code.html");
const tutorialId = document.body.dataset.tutorialId || "codex";
const localizedTutorials = localizeTutorials(tutorials);
const tutorial = localizedTutorials.find((item) => item.id === tutorialId) || localizedTutorials[0];
const tutorialMeta = {
  codex: {
    navLabel: t("tutorialsPage.navCodex", "Codex 教程"),
    logo: "/chatgpt-logo.jpg",
    href: codexHref,
    peerHref: claudeHref
  },
  claude: {
    navLabel: t("tutorialsPage.navClaude", "Claude Code"),
    logo: "/claude-logo.jpg",
    href: claudeHref,
    peerHref: codexHref
  }
};
const currentMeta = tutorialMeta[tutorial.id] || tutorialMeta.codex;

applyDocumentLang();

const resolveAssetUrl = (assetPath) => {
  if (!assetPath || /^(https?:)?\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }
  const cleanPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return `${normalizedBaseUrl}${cleanPath}`;
};

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

function renderSteps(steps = []) {
  return steps
    .map(
      (item, idx) => `
        <li class="tutorial-step stagger" style="--delay:${idx * 80}ms">
          <div class="tutorial-head">
            <span class="tutorial-index">${String(idx + 1).padStart(2, "0")}</span>
            <h3>${item.title}</h3>
          </div>
          <div class="tutorial-body">
            <div class="tutorial-copy">${item.body}</div>
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
        <a href="${tutorialsHref}">教程首页</a>
        <a href="${codexHref}">${t("tutorialsPage.navCodex", "Codex 教程")}</a>
        <a href="${claudeHref}">${t("tutorialsPage.navClaude", "Claude Code")}</a>
        <a href="${rechargeHref}">${t("nav.recharge", "充值中心")}</a>
        <button class="nav-button" type="button" data-action="support">${t("common.support", "支持")}</button>
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
    <section class="tutorial-detail-hero tutorial-detail-${tutorial.id} reveal">
      <div class="tutorial-detail-copy">
        <img class="tutorial-detail-logo" src="${resolveAssetUrl(currentMeta.logo)}" alt="" />
        <p class="badge">${currentMeta.navLabel}</p>
        <h1>${t(`tutorialsPage.sections.${tutorial.id}.title`, tutorial.title)}</h1>
        <p class="hero-text">${t(`tutorialsPage.sections.${tutorial.id}.intro`, tutorial.intro)}</p>
        <div class="tutorial-actions">
          ${tutorialActionsMarkup(tutorial.actions)}
          <a class="btn btn-secondary" href="${tutorialsHref}">返回教程首页</a>
        </div>
      </div>
    </section>

    <section class="tutorial-section tutorial-section-${tutorial.id} reveal">
      <aside class="tutorial-aside">
        <span class="badge">${currentMeta.navLabel}</span>
        <h2>完整步骤</h2>
        <p>按顺序完成配置。如果支付、兑换、下载或网络异常，可以直接联系支持。</p>
      </aside>
      <div class="tutorial-content">
        <ol class="tutorial">${renderSteps(tutorial.steps)}</ol>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} 大象 AI</p>
    <div class="footer-links">
      <button class="footer-link" type="button" data-action="support">${t("common.support", "支持")}</button>
      <a href="${tutorialsHref}">教程首页</a>
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
