import "./style.css";
import { tutorials } from "./tutorialData.js";
import { supportModalMarkup, wireSupportModal } from "./supportModal.js";

const app = document.querySelector("#app");

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
                `<a class="guide-image-link" href="${src}" target="_blank" rel="noreferrer"><img class="guide-image" src="${src}" alt="" loading="lazy" /></a>`
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
    <a class="brand" href="/" aria-label="返回首页">
      <span class="brand-dot"></span>
      ChongPlus
    </a>
    <nav class="nav">
      <a href="/#recharge">充值中心</a>
      <a href="/#links">快速入口</a>
      <a href="/#faq">FAQ / 指南</a>
      <a href="#codex">Codex 教程</a>
      <a href="#claude">Claude Code</a>
    </nav>
  </header>

  <main>
    <section class="hero reveal">
      <p class="badge">教程</p>
      <h1>Codex / Claude Code 快速上手</h1>
      <p class="hero-text">
        两个教程都在本页集中维护，按步骤完成安装与配置即可开始使用。
      </p>
      <div class="hero-actions">
        <a class="btn btn-secondary" href="/#steps">返回接入流程</a>
        <button class="btn btn-secondary" type="button" data-action="support">联系客服支持</button>
      </div>
    </section>

    ${tutorials
      .map(
        (t) => `
      <section id="${t.id}" class="section reveal">
        <h2>${t.title}</h2>
        <p class="section-note">${t.intro}</p>
        <div class="tutorial-actions">
          ${tutorialActionsMarkup(t.actions)}
        </div>
        <ol class="tutorial" id="${t.id}-steps"></ol>
      </section>
    `
      )
      .join("")}
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

for (const t of tutorials) {
  renderTutorialSteps(`#${t.id}-steps`, t.steps);
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
wireSupportModal();

