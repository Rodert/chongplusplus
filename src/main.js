import "./style.css";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";
import { LANGUAGE_OPTIONS, applyDocumentLang, getCurrentLang, setLang, t } from "./i18n/index.js";

const baseUrl = import.meta.env.BASE_URL || "/";
const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const currentLang = getCurrentLang();
const withLang = (path) =>
  currentLang === "zh" ? `${normalizedBaseUrl}${path}` : `${normalizedBaseUrl}${path}?lang=${currentLang}`;
const homeHref = currentLang === "zh" ? normalizedBaseUrl : `${normalizedBaseUrl}?lang=${currentLang}`;
const tutorialsHref = withLang("tutorials.html");
const rechargeHref = withLang("recharge.html");
const codexHref = withLang("codex.html");
const claudeHref = withLang("claude-code.html");

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

const features = [
  {
    icon: "API",
    title: "统一模型接入",
    desc: "兼容 OpenAI API 调用方式，一套接口接入 GPT、Claude、Gemini 等主流模型。"
  },
  {
    icon: "RT",
    title: "稳定 API 中转",
    desc: "优化访问链路，支持流式输出、高频调用和长任务稳定返回。"
  },
  {
    icon: "KEY",
    title: "Key 与额度管理",
    desc: "支持 API Key 管理、额度分配、余额查询和消费记录追踪。"
  },
  {
    icon: "SDK",
    title: "开发工具友好",
    desc: "适配 Cursor、Claude Code、Cherry Studio、OpenAI SDK 等常用工具。"
  }
];

const models = [
  ["GPT 系列", "写作 / 编程 / Agent"],
  ["Claude 系列", "长文本 / 代码 / 分析"],
  ["Gemini 系列", "多模态 / 内容理解"],
  ["Codex / Claude Code", "AI 编程工具"]
];

const steps = [
  {
    title: "注册",
    desc: "先创建 Daxiang AI 账号，进入控制台准备后续充值、兑换和 Key 管理。"
  },
  {
    title: "购买",
    desc: "在充值中心选择新商城、国内商城或备用充值地址，按你的网络环境完成购买。"
  },
  {
    title: "兑换",
    desc: "拿到兑换码后回到控制台兑换余额，余额和消耗记录可查询。"
  },
  {
    title: "导入",
    desc: "创建 API Key 并导入到 Codex、Claude Code、Cursor 或 SDK 中开始调用。"
  }
];

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="home-page">
    <header class="home-nav">
      <div class="home-container home-nav-inner">
        <a class="home-brand" href="${homeHref}">
          <img class="home-logo" src="${resolveAssetUrl("/logo.jpg")}" alt="" onerror="this.hidden=true;this.nextElementSibling.hidden=false" />
          <span class="home-logo-fallback" hidden>D</span>
          <span>Daxiang AI<small>前沿模型统一接入平台</small></span>
        </a>
        <div class="home-nav-tools">
          <nav class="home-nav-links" aria-label="首页导航">
            <a href="#features">核心能力</a>
            <a href="#models">支持模型</a>
            <a href="#start">接入流程</a>
            <a href="${tutorialsHref}">教程</a>
            <a href="${rechargeHref}" class="home-nav-cta">充值中心</a>
          </nav>
          <label class="home-lang" aria-label="${t("common.language", "语言")}">
            <select data-action="lang-switch">${langOptionsMarkup}</select>
          </label>
        </div>
      </div>
    </header>

    <main>
      <section class="home-hero reveal">
        <div class="home-container home-hero-grid">
          <div class="home-hero-copy">
            <div class="home-badge"><span class="home-dot"></span>稳定接入 GPT / Claude / Gemini / Codex 等模型能力</div>
            <h1><span>连接全球前沿模型的统一 API 网关</span></h1>
            <p>Daxiang AI 面向开发者、团队和 AI 应用，提供统一模型接入、API Key 管理、Token 充值、用量统计与稳定中转服务。一套接口，即可快速接入多种主流模型能力。</p>
            <div class="home-actions">
              <a class="home-btn home-btn-primary" href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">立即接入 API</a>
              <a class="home-btn home-btn-secondary" href="${tutorialsHref}">查看接入教程</a>
              <a class="home-btn home-btn-secondary" href="${rechargeHref}">充值中心</a>
            </div>
            <div class="home-trust">
              <span>兼容 OpenAI API 调用方式</span>
              <span>支持流式输出</span>
              <span>用量透明可查</span>
            </div>
          </div>

          <aside class="home-terminal" aria-label="API 调用示例">
            <div class="home-terminal-head">
              <div class="home-lights"><i></i><i></i><i></i></div>
              <div>api.chongplus.plus / v1</div>
            </div>
            <div class="home-terminal-body">
              <div><span class="home-muted">$</span> curl https://api.chongplus.plus/v1/chat/completions</div>
              <div><span class="home-cyan">model</span>: <span class="home-gold">"platform-model"</span></div>
              <div><span class="home-cyan">stream</span>: <span class="home-green">true</span></div>
              <div><span class="home-green">✓</span> request accepted</div>
              <div><span class="home-green">✓</span> routing to best available channel</div>
              <div><span class="home-green">✓</span> response streaming...</div>
            </div>
            <div class="home-stats">
              <div><strong>API</strong><small>统一接入</small></div>
              <div><strong>Key</strong><small>额度管理</small></div>
              <div><strong>Token</strong><small>灵活充值</small></div>
            </div>
          </aside>
        </div>
      </section>

      <div class="home-light">
        <section class="home-section" id="features">
          <div class="home-container">
            <div class="home-section-title">
              <span>Capabilities</span>
              <h2>不是简单中转，而是完整的模型接入基础设施</h2>
              <p>从接入、管理、计费到稳定调用，为开发者和团队减少多模型接入成本。</p>
            </div>
            <div class="home-feature-grid">
              ${features
                .map(
                  (item) => `
                    <article class="home-feature-card">
                      <div class="home-feature-icon">${item.icon}</div>
                      <h3>${item.title}</h3>
                      <p>${item.desc}</p>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </section>

        <section class="home-section" id="models">
          <div class="home-container home-models-wrap">
            <section class="home-panel">
              <div class="home-panel-pad">
                <h2>支持主流前沿模型系列</h2>
                <p>覆盖文本生成、代码编程、长文本分析、Agent 工具调用等核心场景。具体可用模型以平台模型列表为准。</p>
                <div class="home-model-list">
                  ${models.map(([name, scene]) => `<div class="home-model-pill"><strong>${name}</strong><span>${scene}</span></div>`).join("")}
                </div>
              </div>
            </section>

            <section class="home-panel" id="start">
              <div class="home-steps">
                ${steps
                  .map(
                    (item, idx) => `
                      <article class="home-step">
                        <div class="home-num">${idx + 1}</div>
                        <div>
                          <h3>${item.title}</h3>
                          <p>${item.desc}</p>
                        </div>
                      </article>
                    `
                  )
                  .join("")}
              </div>
            </section>
          </div>
        </section>

        <section class="home-section home-docs" id="docs">
          <div class="home-container home-doc-grid">
            <article class="home-doc-card">
              <img src="${resolveAssetUrl("/chatgpt-logo.jpg")}" alt="" />
              <div>
                <h3>Codex 教程</h3>
                <p>按步骤完成 Codex、cc-switch、API Key 导入与项目初始化。</p>
              </div>
              <a class="home-mini-link" href="${codexHref}">查看</a>
            </article>
            <article class="home-doc-card">
              <img src="${resolveAssetUrl("/claude-logo.jpg")}" alt="" />
              <div>
                <h3>Claude Code 教程</h3>
                <p>完成 Claude Code 安装、配置和 Daxiang AI 接入。</p>
              </div>
              <a class="home-mini-link" href="${claudeHref}">查看</a>
            </article>
          </div>
        </section>
      </div>

      <section class="home-dark-band">
        <div class="home-container">
          <div class="home-cta-box">
            <div>
              <h2>开始使用 Daxiang AI</h2>
              <p>无论你是在开发 AI 应用、搭建 Agent、接入编程工具，还是为团队统一管理模型调用，Daxiang AI 都可以帮你更快完成接入。</p>
            </div>
            <div class="home-cta-actions">
              <a class="home-btn home-btn-primary" href="${tutorialsHref}">查看快速开始</a>
              <a class="home-btn home-btn-secondary" href="${rechargeHref}">获取充值方式</a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="home-footer">
      <div class="home-container home-footer-inner">
        <div><strong>Daxiang AI</strong> © ${new Date().getFullYear()}</div>
        <div>统一接入 · 稳定调用 · Key 管理 · Token 充值</div>
      </div>
    </footer>
  </div>
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
