import "./cacheBuster.js";
import "./style.css";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";
import { LANGUAGE_OPTIONS, applyDocumentLang, getCurrentLang, setLang, t } from "./i18n/index.js";

const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const currentLang = getCurrentLang();
const homeHref = currentLang === "zh" ? normalizedBaseUrl : `${normalizedBaseUrl}?lang=${currentLang}`;
const tutorialsHref =
  currentLang === "zh" ? `${normalizedBaseUrl}tutorials.html` : `${normalizedBaseUrl}tutorials.html?lang=${currentLang}`;

applyDocumentLang();

const resolveAssetUrl = (assetPath) => {
  if (!assetPath || /^(https?:)?\/\//i.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }
  const cleanPath = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  return `${normalizedBaseUrl}${cleanPath}`;
};

const langOptionsMarkup = LANGUAGE_OPTIONS.map(
  (item) => `<option value="${item.code}" ${item.code === currentLang ? "selected" : ""}>${item.label}</option>`
).join("");

const rechargeChannels = [
  {
    label: "新入口",
    title: "新商城",
    desc: "新的充值入口，优先选择这里充值。",
    url: "https://shop.chongplus.plus/",
    cta: "去新商城充值"
  },
  {
    label: "备用入口",
    title: "备用充值地址",
    desc: "如果新商城打不开或访问异常，可以使用备用地址继续充值。",
    url: "https://api.chongplus.plus/purchase",
    cta: "去备用充值"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="noise"></div>
  <header class="site-header recharge-site-header">
    <a class="brand" href="${homeHref}">
      <img class="brand-logo" src="${resolveAssetUrl("/logo.jpg")}" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false" />
      <span class="brand-dot" hidden></span>
      大象 AI
    </a>
    <div class="header-tools">
      <nav class="nav">
        <a href="${homeHref}">首页</a>
        <a href="#channels">充值入口</a>
        <a href="${tutorialsHref}">${t("nav.tutorials", "教程")}</a>
        <button class="nav-button" type="button" data-action="support">支持</button>
      </nav>
      <label class="lang-switch" aria-label="${t("common.language", "语言")}">
        <span>${t("common.language", "语言")}</span>
        <select data-action="lang-switch">${langOptionsMarkup}</select>
      </label>
    </div>
  </header>

  <main class="recharge-page">
    <section class="recharge-hero reveal">
      <div class="recharge-hero-copy">
        <p class="badge">充值中心</p>
        <h1>选择充值入口</h1>
        <p class="hero-text">新商城是新的充值入口，优先选择这里充值。如果新商城打不开，可使用备用充值地址继续购买。</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="https://shop.chongplus.plus/" target="_blank" rel="noreferrer">去新商城充值</a>
          <a class="btn btn-secondary" href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">备用充值地址</a>
          <a class="btn btn-secondary" href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">兑换余额</a>
        </div>
      </div>
      <div id="channels" class="recharge-channel-grid" aria-label="充值入口"></div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} 大象 AI Daxiang AI</p>
    <div class="footer-links">
      <button class="footer-link" type="button" data-action="support">支持</button>
      <a href="${homeHref}">返回首页</a>
    </div>
  </footer>
  ${supportModalMarkup()}
`;

document.querySelector("#channels").innerHTML = rechargeChannels
  .map(
    (item, idx) => `
      <article class="recharge-channel ${idx === 0 ? "is-primary" : ""} stagger" style="--delay:${idx * 80}ms">
        <span class="card-kicker">${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a class="btn ${idx === 0 ? "btn-primary" : "btn-secondary"}" href="${item.url}" target="_blank" rel="noreferrer">${item.cta}</a>
      </article>
    `
  )
  .join("");

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
