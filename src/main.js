import "./style.css";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";

const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const tutorialsHref = `${normalizedBaseUrl}tutorials.html`;
const isExternalHref = (href) => /^https?:\/\//i.test(href);

const highlights = [
  {
    title: "统一入口",
    desc: "一个 Base URL 对接多模型供应方，减少业务侧 SDK 和配置分叉。"
  },
  {
    title: "高可用中转",
    desc: "支持流式返回、失败重试与智能回退，保障核心请求稳定在线。"
  },
  {
    title: "可观测与计费",
    desc: "清晰查看请求量、成功率、时延与消耗，方便团队做成本治理。"
  }
];

const steps = [
  "先注册账号并完成基础设置",
  "将你的客户端 Base URL 指向 https://api.chongplus.plus/",
  "用现有请求结构发起调用",
  "在控制台查看监控与用量"
];

const rechargeLinks = [
  {
    title: "新商城",
    desc: "推荐入口，体验更完整。",
    url: "https://shop.chongplus.plus/",
    cta: "前往充值"
  },
  {
    title: "国内商城",
    desc: "国内网络环境可优先使用。",
    url: "http://wx.wukongkt.vip:28088/",
    cta: "前往充值"
  }
];

const quickLinks = [
  {
    title: "注册账号",
    desc: "新用户先完成注册，再进入后续流程。",
    url: "https://api.chongplus.plus/register",
    cta: "前往注册"
  },
  {
    title: "Codex / Claude Code 教程",
    desc: "两套教程集中在独立页面，按步骤完成安装与配置。",
    url: tutorialsHref,
    cta: "查看教程"
  },
  {
    title: "创建 Key",
    desc: "登录后创建 API Key 用于调用接口。",
    url: "https://api.chongplus.plus/keys",
    cta: "创建 Key"
  },
  {
    title: "兑换入口",
    desc: "已有兑换码可在这里完成兑换。",
    url: "https://api.chongplus.plus/redeem",
    cta: "前往兑换"
  },
  {
    title: "支持",
    desc: "遇到问题可在这里联系支持。",
    action: "support",
    cta: "查看"
  }
];

const faqs = [
  {
    q: "需要改很多代码吗？",
    a: "通常不需要。大部分场景只要替换 Base URL 和 API Key，即可完成接入。"
  },
  {
    q: "是否支持流式输出？",
    a: "支持。你可以按原有流式方式读取响应，不影响前端或服务端消费逻辑。"
  },
  {
    q: "如何开始试用？",
    a: "访问 chongplus.plus，创建密钥后即可开始调用。"
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

app.innerHTML = `
  <div class="noise"></div>
  <header class="site-header">
    <a class="brand" href="https://chongplus.plus/" target="_blank" rel="noreferrer">
      <span class="brand-dot"></span>
      ChongPlus
    </a>
    <nav class="nav">
      <a href="#recharge">充值中心</a>
      <a href="#links">快速入口</a>
      <a href="#advantage">优势</a>
      <a href="#steps">接入流程</a>
      <a href="${tutorialsHref}">教程</a>
      <a href="#faq">FAQ / 指南</a>
    </nav>
  </header>

  <main>
    <section class="hero reveal">
      <p class="badge">中转 API 官网</p>
      <h1>把模型调用变成一条稳定链路</h1>
      <p class="hero-text">
        chongplus.plus 提供统一、稳定、低改造成本的中转 API 能力，
        让你的应用更快上线、更稳运行。
      </p>
      <div class="hero-actions">
        <a class="btn btn-primary" href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">立即注册</a>
        <a class="btn btn-secondary" href="#steps">查看接入步骤</a>
        <a class="btn btn-secondary" href="${tutorialsHref}">查看教程</a>
      </div>
    </section>

    <section id="recharge" class="section reveal">
      <h2>充值中心</h2>
      <div class="recharge-grid" id="recharge-links"></div>
      <p class="section-note">
        如出现支付异常，<button class="inline-link" type="button" data-action="support">联系客服支持</button>
      </p>
    </section>

    <section id="links" class="section reveal">
      <h2>快速入口</h2>
      <div class="quick-links" id="quick-links"></div>
    </section>

    <section id="advantage" class="section reveal">
      <h2>为什么选择 ChongPlus</h2>
      <div class="grid" id="highlights"></div>
    </section>

    <section id="steps" class="section reveal">
      <h2>4 步完成接入</h2>
      <ol class="steps" id="steps-list"></ol>
    </section>

    <section id="faq" class="section reveal">
      <h2>FAQ / 指南</h2>
      <div class="guide" id="faq-list"></div>
      <p class="section-note">
        如遇到支付/兑换/网络异常，<button class="inline-link" type="button" data-action="support">联系客服支持</button>
      </p>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ChongPlus</p>
    <div class="footer-links">
      <button class="footer-link" type="button" data-action="support">支持</button>
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
                `<a class="guide-image-link" href="${src}" target="_blank" rel="noreferrer"><img class="guide-image" src="${src}" alt="" loading="lazy" /></a>`
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
wireSupportModal();
