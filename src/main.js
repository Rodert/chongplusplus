import "./style.css";

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
  "将你的客户端 Base URL 指向 chongplus.plus",
  "用现有请求结构发起调用",
  "在控制台查看监控与用量"
];

const quickLinks = [
  {
    title: "注册账号",
    desc: "新用户先完成注册，再进入后续流程。",
    url: "https://api.chongplus.plus/register",
    cta: "前往注册"
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
    title: "售后联系方式",
    desc: "点击加入 QQ 群：大象业务 Token 售后①群。",
    url: "https://qm.qq.com/q/7WzZmGksdG",
    cta: "加入售后群"
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

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="noise"></div>
  <header class="site-header">
    <a class="brand" href="https://chongplus.plus" target="_blank" rel="noreferrer">
      <span class="brand-dot"></span>
      ChongPlus
    </a>
    <nav class="nav">
      <a href="#links">快速入口</a>
      <a href="#advantage">优势</a>
      <a href="#steps">接入流程</a>
      <a href="#faq">FAQ</a>
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
      </div>
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
      <h2>常见问题</h2>
      <div class="faq" id="faq-list"></div>
    </section>
  </main>

  <footer class="site-footer">
    <p>© ${new Date().getFullYear()} ChongPlus</p>
    <a href="https://chongplus.plus" target="_blank" rel="noreferrer">chongplus.plus</a>
  </footer>
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

document.querySelector("#quick-links").innerHTML = quickLinks
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

document.querySelector("#faq-list").innerHTML = faqs
  .map(
    (item, idx) => `
      <details class="faq-item stagger" style="--delay:${idx * 80}ms">
        <summary>${item.q}</summary>
        <p>${item.a}</p>
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
