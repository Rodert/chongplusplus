import "./style.css";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";
import { LANGUAGE_OPTIONS, applyDocumentLang, getCurrentLang, setLang, t } from "./i18n/index.js";

const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const isExternalHref = (href) => /^https?:\/\//i.test(href);
const currentLang = getCurrentLang();
const tutorialsHref =
  currentLang === "zh" ? `${normalizedBaseUrl}tutorials.html` : `${normalizedBaseUrl}tutorials.html?lang=${currentLang}`;
const rechargeHref =
  currentLang === "zh" ? `${normalizedBaseUrl}recharge.html` : `${normalizedBaseUrl}recharge.html?lang=${currentLang}`;
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
    title: t("home.highlights.unified.title", "统一模型接入"),
    desc: t("home.highlights.unified.desc", "兼容 OpenAI API 调用方式，一套接口接入多家主流模型，降低开发与切换成本。")
  },
  {
    title: t("home.highlights.reliable.title", "稳定 API 中转"),
    desc: t("home.highlights.reliable.desc", "优化访问链路，支持流式输出、高频请求和长时间任务调用。")
  },
  {
    title: t("home.highlights.observability.title", "Key 与额度管理"),
    desc: t("home.highlights.observability.desc", "支持多 Key 管理、额度分配、用量统计和消费记录查询。")
  },
  {
    title: "开发者工具友好",
    desc: "适配 Cursor、Claude Code、Cherry Studio、OpenAI SDK 等主流开发工具。"
  }
];

const steps = [
  t("home.steps.1", "注册账号并完成充值或额度准备"),
  t("home.steps.2", "创建 API Key，按项目或团队分配使用"),
  t("home.steps.3", "将客户端 Base URL 指向 https://api.chongplus.plus/"),
  t("home.steps.4", "按 OpenAI 兼容方式调用 GPT、Claude、Gemini、Codex 等模型")
];

const supportedModels = [
  { provider: "GPT 系列", model: "写作 / 编程 / Agent", logo: "/chatgpt-logo.jpg" },
  { provider: "Claude 系列", model: "长文本 / 代码 / 分析", logo: "/claude-logo.jpg" },
  { provider: "Codex", model: "Coding Agent", logo: "/chatgpt-logo.jpg" },
  { provider: "Claude Code", model: "CLI Agent", logo: "/claude-logo.jpg" }
];

const modelRows = [
  {
    series: "GPT 系列",
    status: "支持平台可用版本",
    scene: "编程、写作、Agent、通用推理"
  },
  {
    series: "Claude 系列",
    status: "支持 Opus / Sonnet 等系列",
    scene: "长文本、代码分析、复杂任务"
  },
  {
    series: "Gemini 系列",
    status: "支持主流模型系列",
    scene: "多模态、内容理解、知识处理"
  },
  {
    series: "Codex / Claude Code",
    status: "支持 AI 编程工具接入",
    scene: "代码代理、CLI 工具、开发工作流"
  }
];

const trustItems = [
  {
    title: "稳定可用",
    desc: "持续优化模型访问链路，适合日常开发、工具调用和团队使用。"
  },
  {
    title: "用量透明",
    desc: "支持余额、消耗记录和调用情况查询，方便控制成本。"
  },
  {
    title: "快速接入",
    desc: "兼容主流 API 调用方式，减少迁移和切换成本。"
  },
  {
    title: "售后支持",
    desc: "提供接入指导、问题排查和使用保障。"
  }
];

const quickLinks = [
  {
    title: t("home.quick.register.title", "注册账号"),
    desc: t("home.quick.register.desc", "创建账号后即可准备 Key、额度和模型接入。"),
    url: "https://api.chongplus.plus/register",
    cta: t("home.quick.register.cta", "前往注册")
  },
  {
    title: t("home.quick.keys.title", "创建 API Key"),
    desc: t("home.quick.keys.desc", "登录后创建 API Key，用于应用、工具或团队调用。"),
    url: "https://api.chongplus.plus/keys",
    cta: t("home.quick.keys.cta", "创建 Key")
  },
  {
    title: t("home.quick.tutorials.title", "接入教程"),
    desc: t("home.quick.tutorials.desc", "查看 Codex、Claude Code 等工具的独立接入教程。"),
    url: tutorialsHref,
    cta: t("home.quick.tutorials.cta", "查看教程")
  },
  {
    title: t("home.recharge.new.title", "充值中心"),
    desc: t("home.recharge.new.desc", "选择新商城或国内商城，完成 Token 充值。"),
    url: rechargeHref,
    cta: t("home.recharge.new.cta", "获取充值方式")
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
    a: t("home.faq.a3", "注册账号、准备额度、创建 API Key 后，即可按 OpenAI 兼容方式发起调用。")
  },
  {
    q: "模型名称以哪里为准？",
    a: "支持 GPT、Claude、Gemini、Codex 等主流前沿模型系列，具体可用模型以平台模型列表为准。"
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
const modelCardMarkup = (model, compact = false) => `
  <article class="model-card ${compact ? "is-compact" : ""}">
    <img class="model-logo" src="${resolveAssetUrl(model.logo)}" alt="" loading="lazy" />
    <div>
      <strong>${model.provider}</strong>
      <small>${model.model}</small>
    </div>
  </article>
`;

app.innerHTML = `
  <div class="noise"></div>
  <header class="site-header">
    <a class="brand" href="https://chongplus.plus/" target="_blank" rel="noreferrer">
      <img class="brand-logo" src="${resolveAssetUrl("/logo.jpg")}" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false" />
      <span class="brand-dot" hidden></span>
      Daxiang AI
    </a>
    <div class="header-tools">
      <nav class="nav">
        <a href="#advantage">${t("nav.advantage", "核心能力")}</a>
        <a href="#models">支持模型</a>
        <a href="#steps">${t("nav.steps", "接入流程")}</a>
        <a href="${tutorialsHref}">${t("nav.tutorials", "教程")}</a>
        <a href="${rechargeHref}">${t("nav.recharge", "充值中心")}</a>
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
      <div class="hero-shell">
        <div class="hero-copy">
          <p class="badge">${t("home.badge", "Daxiang AI 模型网关")}</p>
          <h1>${t("home.title", "连接全球前沿模型的统一 API 网关")}</h1>
          <p class="hero-text">
            ${t("home.subtitle", "面向开发者、团队和 AI 应用，Daxiang AI 提供统一模型接入、API Key 管理、Token 充值、用量统计与稳定中转服务。一套接口，即可快速接入 GPT、Claude、Gemini、Codex 等主流模型能力。")}
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">立即接入 API</a>
            <a class="btn btn-secondary" href="${tutorialsHref}">查看接入教程</a>
            <a class="btn btn-ghost" href="${rechargeHref}">获取充值方式</a>
          </div>
        </div>

        <aside class="hero-console" aria-label="${t("home.modelsLabel", "已支持模型")}">
          <div class="console-topline">
            <span class="status-dot"></span>
            <span>${t("home.modelsLabel", "已支持模型")}</span>
          </div>
          <div class="featured-models">
            ${supportedModels.slice(0, 2).map((model) => modelCardMarkup(model)).join("")}
          </div>
          <div class="api-console-card">
            <div>
              <span>Base URL</span>
              <code>https://api.chongplus.plus/</code>
            </div>
            <strong>API Gateway</strong>
          </div>
          <div class="mini-metrics">
            <div><span>接入</span><strong>统一 API</strong></div>
            <div><span>管理</span><strong>Key / 用量</strong></div>
            <div><span>模式</span><strong>Stream</strong></div>
          </div>
        </aside>
      </div>
    </section>

    <section id="links" class="action-band reveal" aria-label="${t("home.sectionLinks", "快速入口")}">
      <div class="quick-links" id="quick-links"></div>
    </section>

    <section class="workspace-grid">
      <div class="workspace-main">
        <section id="advantage" class="section reveal">
          <div class="section-heading">
            <span>${t("nav.advantage", "核心能力")}</span>
            <h2>${t("home.sectionAdvantage", "为模型接入而设计的基础能力")}</h2>
          </div>
          <div class="grid" id="highlights"></div>
        </section>

        <section id="models" class="section reveal">
          <div class="section-heading">
            <span>支持模型</span>
            <h2>覆盖主流前沿模型系列</h2>
          </div>
          <div class="model-matrix" id="model-matrix"></div>
          <p class="section-note">具体可用模型以平台控制台实际模型列表为准。</p>
        </section>

        <section id="faq" class="section reveal">
          <div class="section-heading">
            <span>${t("nav.faq", "FAQ / 指南")}</span>
            <h2>${t("home.sectionFaq", "FAQ / 指南")}</h2>
          </div>
          <div class="guide" id="faq-list"></div>
          <p class="section-note">
            ${t("home.faqSupportPrefix", "如遇到支付/兑换/网络异常，")}<button class="inline-link" type="button" data-action="support">${t("common.contactSupport", "联系客服支持")}</button>
          </p>
        </section>
      </div>

      <aside class="workspace-side">
        <section id="steps" class="section steps-panel reveal">
          <div class="section-heading">
            <span>${t("nav.steps", "接入流程")}</span>
            <h2>${t("home.sectionSteps", "4 步完成接入")}</h2>
          </div>
          <ol class="steps" id="steps-list"></ol>
          <div class="side-actions">
            <a class="btn btn-secondary" href="${tutorialsHref}">${t("home.ctaTutorials", "查看教程")}</a>
            <button class="btn btn-secondary" type="button" data-action="support">${t("common.contactSupport", "联系客服支持")}</button>
          </div>
        </section>

        <section class="section trust-panel reveal">
          <div class="section-heading">
            <span>可信接入</span>
            <h2>为什么选择 Daxiang AI</h2>
          </div>
          <div class="trust-list" id="trust-list"></div>
        </section>
      </aside>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} Daxiang AI</p>
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

document.querySelector("#model-matrix").innerHTML = modelRows
  .map(
    (item, idx) => `
      <article class="model-row stagger" style="--delay:${idx * 80}ms">
        <strong>${item.series}</strong>
        <span>${item.status}</span>
        <p>${item.scene}</p>
      </article>
    `
  )
  .join("");

document.querySelector("#trust-list").innerHTML = trustItems
  .map(
    (item, idx) => `
      <article class="trust-list-item stagger" style="--delay:${idx * 80}ms">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `
  )
  .join("");

document.querySelector("#quick-links").innerHTML = quickLinks
  .map(
    (item, idx) => `
      <article class="link-card stagger" style="--delay:${idx * 80}ms">
        <span class="quick-index">${String(idx + 1).padStart(2, "0")}</span>
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
