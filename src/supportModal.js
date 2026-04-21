const supportQQ = "1073525378";

export function supportModalMarkup() {
  return `
  <div class="modal" id="support-modal" aria-hidden="true">
    <div class="modal-backdrop" data-close="modal"></div>
    <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="support-title">
      <div class="modal-header">
        <h3 id="support-title">支持入口</h3>
        <button class="icon-btn" type="button" aria-label="关闭" data-close="modal">×</button>
      </div>
      <p class="modal-hint">如需售后支持，可扫码加入群聊，或使用群号添加。</p>
      <div class="support-meta">
        <span class="support-label">QQ群</span>
        <code class="support-code" id="support-qq">${supportQQ}</code>
        <button class="mini-btn" type="button" data-action="copy-qq" aria-label="复制QQ群号">复制</button>
      </div>
      <img class="support-image" src="/售后QQ群.jpg" alt="售后 QQ 群入口" loading="lazy" />
      <img class="support-image support-image-secondary" src="/faq-guide/image6.png" alt="客服信息" loading="lazy" />
      <div class="modal-actions">
        <a class="btn btn-secondary" href="https://qm.qq.com/q/7WzZmGksdG" target="_blank" rel="noreferrer">无法扫码？点此加入</a>
      </div>
    </div>
  </div>
`;
}

function setSupportModalOpen(modalEl, open) {
  modalEl.classList.toggle("is-open", open);
  modalEl.setAttribute("aria-hidden", open ? "false" : "true");
  document.documentElement.classList.toggle("has-modal", open);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(ta);
  return ok;
}

export function wireSupportModal() {
  const supportModal = document.querySelector("#support-modal");
  const supportQQEl = document.querySelector("#support-qq");
  if (!supportModal || !supportQQEl) return;

  let copyToastTimer = null;

  function setCopyState(ok) {
    supportQQEl.dataset.copied = ok ? "true" : "false";
    if (copyToastTimer) window.clearTimeout(copyToastTimer);
    copyToastTimer = window.setTimeout(() => {
      supportQQEl.dataset.copied = "false";
    }, 1200);
  }

  document.addEventListener("click", (e) => {
    const actionEl = e.target.closest("[data-action]");
    if (actionEl?.dataset.action === "support") {
      setSupportModalOpen(supportModal, true);
    }
    if (actionEl?.dataset.action === "copy-qq") {
      copyText(supportQQ)
        .then((ok) => setCopyState(ok))
        .catch(() => setCopyState(false));
    }

    const closeEl = e.target.closest("[data-close='modal']");
    if (closeEl) {
      setSupportModalOpen(supportModal, false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && supportModal.classList.contains("is-open")) {
      setSupportModalOpen(supportModal, false);
    }
  });
}

