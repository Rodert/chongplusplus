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
    label: "推荐",
    title: "新商城",
    desc: "适合大多数充值场景，流程清晰，支付后按页面提示完成兑换。",
    url: "https://shop.chongplus.plus/",
    cta: "进入新商城"
  },
  {
    label: "备用",
    title: "国内商城",
    desc: "国内网络环境可优先尝试，适合作为备用充值入口。",
    url: "http://wx.wukongkt.vip:28088/",
    cta: "进入国内商城"
  }
];

const trustItems = [
  {
    value: "Key",
    title: "密钥独立管理",
    desc: "充值后在控制台创建或调整 Key，便于区分个人、项目和团队消耗。"
  },
  {
    value: "API",
    title: "统一接入",
    desc: "同一个 Base URL 承接主流模型调用，降低切换模型时的配置成本。"
  },
  {
    value: "Support",
    title: "售后支持",
    desc: "支付、兑换、余额或网络问题可通过支持入口集中处理。"
  }
];

const processItems = [
  "选择充值入口并完成支付",
  "获取商城提供的兑换码",
  "前往控制台兑换余额",
  "创建 Key 后开始调用模型"
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
        <a href="#process">充值流程</a>
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
        <h1>大象 AI Daxiang AI</h1>
        <p class="hero-text">Token 充值、兑换、Key 管理和售后支持集中处理。入口清晰，到账路径明确，适合个人开发者和团队稳定接入前沿模型。</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="https://shop.chongplus.plus/" target="_blank" rel="noreferrer">立即充值</a>
          <a class="btn btn-secondary" href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">兑换余额</a>
          <button class="btn btn-ghost" type="button" data-action="support">联系客服</button>
        </div>
      </div>
      <aside class="recharge-ledger" aria-label="充值状态概览">
        <div class="ledger-topline">
          <span class="status-dot"></span>
          <span>Recharge Console</span>
        </div>
        <div class="ledger-balance">
          <span>Token Balance</span>
          <strong>Ready</strong>
        </div>
        <div class="ledger-row">
          <span>支付</span>
          <strong>商城完成</strong>
        </div>
        <div class="ledger-row">
          <span>兑换</span>
          <strong>控制台处理</strong>
        </div>
        <div class="ledger-row">
          <span>调用</span>
          <strong>API Key</strong>
        </div>
      </aside>
    </section>

    <section id="channels" class="recharge-panel reveal">
      <div class="section-heading">
        <span>充值入口</span>
        <h2>选择合适的充值通道</h2>
      </div>
      <div class="recharge-channel-grid" id="recharge-channel-list"></div>
    </section>

    <section class="recharge-trust-band reveal" aria-label="服务保障">
      <div class="trust-copy">
        <p class="badge">可信赖的 Token 服务</p>
        <h2>把充值、兑换和接入放在同一条清晰链路里</h2>
      </div>
      <div class="trust-grid" id="trust-list"></div>
    </section>

    <section id="process" class="recharge-panel reveal">
      <div class="section-heading">
        <span>充值流程</span>
        <h2>从支付到调用，按四步完成</h2>
      </div>
      <ol class="recharge-process" id="process-list"></ol>
      <div class="recharge-ops">
        <a class="btn btn-secondary" href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">创建 Key</a>
        <a class="btn btn-secondary" href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">兑换码兑换</a>
        <button class="btn btn-secondary" type="button" data-action="support">遇到问题</button>
      </div>
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

document.querySelector("#recharge-channel-list").innerHTML = rechargeChannels
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

document.querySelector("#trust-list").innerHTML = trustItems
  .map(
    (item, idx) => `
      <article class="trust-item stagger" style="--delay:${idx * 80}ms">
        <span>${item.value}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `
  )
  .join("");

document.querySelector("#process-list").innerHTML = processItems
  .map(
    (item, idx) => `
      <li class="recharge-process-item stagger" style="--delay:${idx * 80}ms">
        <span>${String(idx + 1).padStart(2, "0")}</span>
        <p>${item}</p>
      </li>
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
