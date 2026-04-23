import "./style.css";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";
import { LANGUAGE_OPTIONS, applyDocumentLang, getCurrentLang, setLang, t } from "./i18n/index.js";

const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const isExternalHref = (href) => /^https?:\/\//i.test(href);
const currentLang = getCurrentLang();
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

const highlights = [
  {
    title: t("home.highlights.unified.title", "统一入口"),
    desc: t("home.highlights.unified.desc", "一个 Base URL 对接多模型供应方，减少业务侧 SDK 和配置分叉。")
  },
  {
    title: t("home.highlights.reliable.title", "高可用中转"),
    desc: t("home.highlights.reliable.desc", "支持流式返回、失败重试与智能回退，保障核心请求稳定在线。")
  },
  {
    title: t("home.highlights.observability.title", "可观测与计费"),
    desc: t("home.highlights.observability.desc", "清晰查看请求量、成功率、时延与消耗，方便团队做成本治理。")
  }
];

const steps = [
  t("home.steps.1", "先注册账号并完成基础设置"),
  t("home.steps.2", "将你的客户端 Base URL 指向 https://api.chongplus.plus/"),
  t("home.steps.3", "用现有请求结构发起调用"),
  t("home.steps.4", "在控制台查看监控与用量")
];

const rechargeLinks = [
  {
    title: t("home.recharge.new.title", "新商城"),
    desc: t("home.recharge.new.desc", "推荐入口，体验更完整。"),
    url: "https://shop.chongplus.plus/",
    cta: t("home.recharge.new.cta", "前往充值")
  },
  {
    title: t("home.recharge.cn.title", "国内商城"),
    desc: t("home.recharge.cn.desc", "国内网络环境可优先使用。"),
    url: "http://wx.wukongkt.vip:28088/",
    cta: t("home.recharge.cn.cta", "前往充值")
  }
];

const quickLinks = [
  {
    title: t("home.quick.register.title", "注册账号"),
    desc: t("home.quick.register.desc", "新用户先完成注册，再进入后续流程。"),
    url: "https://api.chongplus.plus/register",
    cta: t("home.quick.register.cta", "前往注册")
  },
  {
    title: t("home.quick.tutorials.title", "Codex / Claude Code 教程"),
    desc: t("home.quick.tutorials.desc", "两套教程集中在独立页面，按步骤完成安装与配置。"),
    url: tutorialsHref,
    cta: t("home.quick.tutorials.cta", "查看教程")
  },
  {
    title: t("home.quick.keys.title", "创建 Key"),
    desc: t("home.quick.keys.desc", "登录后创建 API Key 用于调用接口。"),
    url: "https://api.chongplus.plus/keys",
    cta: t("home.quick.keys.cta", "创建 Key")
  },
  {
    title: t("home.quick.redeem.title", "兑换入口"),
    desc: t("home.quick.redeem.desc", "已有兑换码可在这里完成兑换。"),
    url: "https://api.chongplus.plus/redeem",
    cta: t("home.quick.redeem.cta", "前往兑换")
  },
  {
    title: t("home.quick.support.title", "支持"),
    desc: t("home.quick.support.desc", "遇到问题可在这里联系支持。"),
    action: "support",
    cta: t("home.quick.support.cta", "查看")
  }
];

const faqs = [
  {
    q: t("home.faq.q1", "需要改很多代码吗？"),
    a: t("home.faq.a1", "通常不需要。大部分场景只要替换 Base URL 和 API Key，即可完成接入。")
  },
  {
    q: t("home.faq.q2", "是否支持流式输出？"),
    a: t("home.faq.a2", "支持。你可以按原有流式方式读取响应，不影响前端或服务端消费逻辑。")
  },
  {
    q: t("home.faq.q3", "如何开始试用？"),
    a: t("home.faq.a3", "访问 chongplus.plus，创建密钥后即可开始调用。")
  }
];

const guideFaqs = [
  {
    q: "订阅用户（每天 50$）如何使用？",
    a: "重新创建密钥，并把密钥指定到对应分组。",
    images: ["/faq-guide/image1.png"]
  },
  {
    q: "充值用户余额未到账怎么办？",
    a: "付款后会得到一个兑换码，点击侧边的兑换按钮输入兑换码完成兑换。",
    images: ["/faq-guide/image2.png"]
  },
  {
    q: "切换新环境后无法访问？",
    a: "检查 Base URL 是否为新环境，然后创建 API Key 并导入；重启你的应用或终端再试。",
    images: ["/faq-guide/image3.png"]
  },
  {
    q: "刚充值的，怎么用不了？",
    a: "先把充值得到的兑换码在平台兑换；再新建 API Key 设置对应分组，或修改之前的 API Key。",
    images: ["/faq-guide/image4.png"]
  },
  {
    q: "请求连不上怎么办？",
    a: "先检查本地网络环境。正常情况不需要魔法；可先切换手机热点测试定位问题。",
    images: ["/faq-guide/image5.png"]
  }
];

const combinedFaqs = [
  ...guideFaqs,
  ...faqs.map((item) => ({ ...item, images: [] }))
];

const app = document.querySelector("#app");
const langOptionsMarkup = LANGUAGE_OPTIONS.map(
  (item) => `<option value="${item.code}" ${item.code === currentLang ? "selected" : ""}>${item.label}</option>`
).join("");

app.innerHTML = `
  <div class="noise"></div>
  <header class="site-header">
    <a class="brand" href="https://chongplus.plus/" target="_blank" rel="noreferrer">
      <span class="brand-dot"></span>
      ChongPlus
    </a>
    <div class="header-tools">
      <nav class="nav">
        <a href="#recharge">${t("nav.recharge", "充值中心")}</a>
        <a href="#links">${t("nav.links", "快速入口")}</a>
        <a href="#advantage">${t("nav.advantage", "优势")}</a>
        <a href="#steps">${t("nav.steps", "接入流程")}</a>
        <a href="${tutorialsHref}">${t("nav.tutorials", "教程")}</a>
        <a href="#faq">${t("nav.faq", "FAQ / 指南")}</a>
      </nav>
      <label class="lang-switch" aria-label="${t("common.language", "语言")}">
        <span>${t("common.language", "语言")}</span>
        <select data-action="lang-switch">${langOptionsMarkup}</select>
      </label>
    </div>
  </header>

  <main>
    <section class="hero reveal">
      <p class="badge">${t("home.badge", "中转 API 官网")}</p>
      <h1>${t("home.title", "把模型调用变成一条稳定链路")}</h1>
      <p class="hero-text">
        ${t("home.subtitle", "chongplus.plus 提供统一、稳定、低改造成本的中转 API 能力，让你的应用更快上线、更稳运行。")}
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">${t("home.ctaRegister", "立即注册")}</a>
        <a class="btn btn-secondary" href="#steps">${t("home.ctaSteps", "查看接入步骤")}</a>
        <a class="btn btn-secondary" href="${tutorialsHref}">${t("home.ctaTutorials", "查看教程")}</a>
      </div>
    </section>

    <section id="recharge" class="section reveal">
      <h2>${t("home.sectionRecharge", "充值中心")}</h2>
      <div class="recharge-grid" id="recharge-links"></div>
      <p class="section-note">
        ${t("home.rechargeSupportPrefix", "如出现支付异常，")}<button class="inline-link" type="button" data-action="support">${t("common.contactSupport", "联系客服支持")}</button>
      </p>
    </section>

    <section id="links" class="section reveal">
      <h2>${t("home.sectionLinks", "快速入口")}</h2>
      <div class="quick-links" id="quick-links"></div>
    </section>

    <section id="advantage" class="section reveal">
      <h2>${t("home.sectionAdvantage", "为什么选择 ChongPlus")}</h2>
      <div class="grid" id="highlights"></div>
    </section>

    <section id="steps" class="section reveal">
      <h2>${t("home.sectionSteps", "4 步完成接入")}</h2>
      <ol class="steps" id="steps-list"></ol>
    </section>

    <section id="faq" class="section reveal">
      <h2>${t("home.sectionFaq", "FAQ / 指南")}</h2>
      <div class="guide" id="faq-list"></div>
      <p class="section-note">
        ${t("home.faqSupportPrefix", "如遇到支付/兑换/网络异常，")}<button class="inline-link" type="button" data-action="support">${t("common.contactSupport", "联系客服支持")}</button>
      </p>
    </section>
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

document.querySelector("#highlights").innerHTML = highlights
  .map(
    (item, idx) => `
      <article class="card stagger" style="--delay:${idx * 80}ms">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `
  )
  .join("");

document.querySelector("#steps-list").innerHTML = steps
  .map(
    (step, idx) => `
      <li class="step stagger" style="--delay:${idx * 80}ms">
        <span>${String(idx + 1).padStart(2, "0")}</span>
        <p>${step}</p>
      </li>
    `
  )
  .join("");

document.querySelector("#recharge-links").innerHTML = rechargeLinks
  .map(
    (item, idx) => `
      <article class="link-card stagger" style="--delay:${idx * 80}ms">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <a class="btn btn-secondary" href="${item.url}" target="_blank" rel="noreferrer">${item.cta}</a>
      </article>
    `
  )
  .join("");

document.querySelector("#quick-links").innerHTML = quickLinks
  .map(
    (item, idx) => `
      <article class="link-card stagger" style="--delay:${idx * 80}ms">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        ${
          item.action === "support"
            ? `<button class="btn btn-secondary" type="button" data-action="support">${item.cta}</button>`
            : `<a class="btn btn-secondary" href="${item.url}" ${isExternalHref(item.url) ? 'target="_blank" rel="noreferrer"' : ""}>${item.cta}</a>`
        }
      </article>
    `
  )
  .join("");

document.querySelector("#faq-list").innerHTML = combinedFaqs
  .map(
    (item, idx) => `
      <details class="guide-item stagger" style="--delay:${idx * 80}ms">
        <summary>${item.q}</summary>
        <div class="guide-body">
          <p>${item.a}</p>
          ${(item.images || [])
            .map(
              (src) =>
                `<a class="guide-image-link" href="${resolveAssetUrl(src)}" target="_blank" rel="noreferrer"><img class="guide-image" src="${resolveAssetUrl(src)}" alt="" loading="lazy" /></a>`
            )
            .join("")}
        </div>
      </details>
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
