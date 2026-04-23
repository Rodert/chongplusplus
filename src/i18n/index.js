const DEFAULT_LANG = "zh";
const SUPPORTED_LANGS = ["zh", "en", "ja", "ko"];
const STORAGE_KEY = "chongplus.lang";

const messages = {
  en: {
    common: {
      language: "Language",
      support: "Support",
      contactSupport: "Contact Support"
    },
    nav: {
      recharge: "Recharge",
      links: "Quick Links",
      advantage: "Advantages",
      steps: "Setup Flow",
      tutorials: "Tutorials",
      faq: "FAQ / Guides"
    },
    home: {
      badge: "API Gateway",
      title: "Turn Model Calls Into A Stable Pipeline",
      subtitle:
        "ChongPlus provides a unified and stable API gateway with low migration cost so your app ships faster and runs more reliably.",
      ctaRegister: "Register",
      ctaSteps: "View Setup Steps",
      ctaTutorials: "View Tutorials",
      sectionRecharge: "Recharge Center",
      sectionLinks: "Quick Links",
      sectionAdvantage: "Why ChongPlus",
      sectionSteps: "4-Step Setup",
      sectionFaq: "FAQ / Guides",
      rechargeSupportPrefix: "If payment fails, ",
      faqSupportPrefix: "If payment/redeem/network issues occur, ",
      highlights: {
        unified: {
          title: "Unified Entry",
          desc: "Use one Base URL for multiple model providers and reduce SDK/config branching."
        },
        reliable: {
          title: "High Availability",
          desc: "Supports streaming, retries, and intelligent fallback to keep requests stable."
        },
        observability: {
          title: "Observability & Billing",
          desc: "Track request volume, success rate, latency, and usage for better cost control."
        }
      },
      steps: {
        1: "Register an account and complete basic setup",
        2: "Point your client Base URL to https://api.chongplus.plus/",
        3: "Send requests with your existing API structure",
        4: "Monitor metrics and usage in the console"
      },
      recharge: {
        new: { title: "New Store", desc: "Recommended with a more complete experience.", cta: "Recharge" },
        cn: { title: "Mainland Store", desc: "Recommended for users in mainland network environments.", cta: "Recharge" }
      },
      quick: {
        register: { title: "Register", desc: "New users should create an account first.", cta: "Register" },
        tutorials: {
          title: "Codex / Claude Code Tutorials",
          desc: "Two tutorials on a dedicated page with step-by-step setup.",
          cta: "View Tutorials"
        },
        keys: { title: "Create Key", desc: "Create an API Key after login.", cta: "Create Key" },
        redeem: { title: "Redeem", desc: "Redeem your code here.", cta: "Redeem" },
        support: { title: "Support", desc: "Contact support if you hit issues.", cta: "View" }
      },
      faq: {
        q1: "Do I need major code changes?",
        a1: "Usually no. In most cases, replacing Base URL and API Key is enough.",
        q2: "Does it support streaming output?",
        a2: "Yes. You can consume streaming responses with your existing logic.",
        q3: "How can I start quickly?",
        a3: "Visit chongplus.plus and create an API key to begin."
      }
    },
    tutorialsPage: {
      badge: "Tutorials",
      title: "Codex / Claude Code Quick Start",
      subtitle:
        "Both tutorials are maintained on this page. Follow the steps to complete installation and configuration.",
      ctaBackSteps: "Back To Setup Flow",
      navCodex: "Codex Tutorial",
      navClaude: "Claude Code",
      backHome: "Back to home",
      sections: {
        codex: {
          title: "Using Codex",
          intro:
            "Follow the steps below to finish installation and setup. Contact support if download/payment/redeem fails."
        },
        claude: {
          title: "Using Claude Code",
          intro: "A quick install and setup path for Claude Code. Contact support if network or download fails."
        }
      }
    }
  },
  ja: {
    common: {
      language: "言語",
      support: "サポート",
      contactSupport: "サポートへ連絡"
    },
    nav: {
      recharge: "チャージ",
      links: "クイックリンク",
      advantage: "強み",
      steps: "導入手順",
      tutorials: "チュートリアル",
      faq: "FAQ / ガイド"
    },
    home: {
      badge: "API 中継サイト",
      title: "モデル呼び出しを安定した経路に",
      subtitle:
        "ChongPlus は、低い改修コストで使える統一 API 中継を提供し、より速く安全に運用できます。",
      ctaRegister: "今すぐ登録",
      ctaSteps: "導入手順を見る",
      ctaTutorials: "チュートリアルを見る",
      sectionRecharge: "チャージセンター",
      sectionLinks: "クイックリンク",
      sectionAdvantage: "ChongPlus を選ぶ理由",
      sectionSteps: "4 ステップで導入",
      sectionFaq: "FAQ / ガイド",
      rechargeSupportPrefix: "決済で問題が発生した場合は、",
      faqSupportPrefix: "決済・交換・ネットワークの問題がある場合は、",
      highlights: {
        unified: {
          title: "統一エントリー",
          desc: "1 つの Base URL で複数プロバイダーに接続し、SDK/設定の分岐を減らします。"
        },
        reliable: {
          title: "高可用な中継",
          desc: "ストリーミング、再試行、フェイルバックに対応し、安定した呼び出しを維持します。"
        },
        observability: {
          title: "可観測性と課金",
          desc: "リクエスト数、成功率、遅延、消費量を可視化し、コスト管理を改善します。"
        }
      },
      steps: {
        1: "アカウント登録と基本設定を完了する",
        2: "クライアントの Base URL を https://api.chongplus.plus/ に設定する",
        3: "既存のリクエスト形式で呼び出しを開始する",
        4: "コンソールで監視と利用量を確認する"
      },
      recharge: {
        new: { title: "新ストア", desc: "推奨入口。より完全な体験。", cta: "チャージへ" },
        cn: { title: "国内ストア", desc: "中国本土ネットワーク向けの優先入口。", cta: "チャージへ" }
      },
      quick: {
        register: { title: "アカウント登録", desc: "まず登録を完了してから次の手順へ。", cta: "登録へ" },
        tutorials: {
          title: "Codex / Claude Code チュートリアル",
          desc: "2 つのチュートリアルを 1 ページに集約し、手順で進められます。",
          cta: "チュートリアルを見る"
        },
        keys: { title: "Key 作成", desc: "ログイン後に API Key を作成します。", cta: "Key を作成" },
        redeem: { title: "交換入口", desc: "交換コードをここで利用できます。", cta: "交換へ" },
        support: { title: "サポート", desc: "問題があればここから連絡できます。", cta: "表示" }
      },
      faq: {
        q1: "大きなコード変更は必要ですか？",
        a1: "通常は不要です。多くの場合、Base URL と API Key の差し替えで対応できます。",
        q2: "ストリーミング出力に対応していますか？",
        a2: "対応しています。既存のストリーミング処理をそのまま利用できます。",
        q3: "試用はどう始めればいいですか？",
        a3: "chongplus.plus にアクセスし、API Key を作成して開始してください。"
      }
    },
    tutorialsPage: {
      badge: "チュートリアル",
      title: "Codex / Claude Code クイックスタート",
      subtitle:
        "このページで 2 つのチュートリアルを管理しています。手順通りに進めれば利用を開始できます。",
      ctaBackSteps: "導入手順へ戻る",
      navCodex: "Codex チュートリアル",
      navClaude: "Claude Code",
      backHome: "ホームへ戻る",
      sections: {
        codex: {
          title: "Codex の使い方",
          intro: "以下の手順でインストールと設定を完了できます。ダウンロードや決済の問題時はサポートへ。"
        },
        claude: {
          title: "Claude Code の使い方",
          intro: "Claude Code を素早く導入するための手順です。ダウンロードやネットワーク問題時はサポートへ。"
        }
      }
    }
  },
  ko: {
    common: {
      language: "언어",
      support: "지원",
      contactSupport: "고객 지원 문의"
    },
    nav: {
      recharge: "충전",
      links: "빠른 링크",
      advantage: "장점",
      steps: "연동 절차",
      tutorials: "튜토리얼",
      faq: "FAQ / 가이드"
    },
    home: {
      badge: "API 중계 사이트",
      title: "모델 호출을 안정적인 경로로",
      subtitle:
        "ChongPlus는 낮은 전환 비용으로 통합 API 중계 기능을 제공하여 더 빠르고 안정적으로 서비스할 수 있게 합니다.",
      ctaRegister: "지금 가입",
      ctaSteps: "연동 절차 보기",
      ctaTutorials: "튜토리얼 보기",
      sectionRecharge: "충전 센터",
      sectionLinks: "빠른 링크",
      sectionAdvantage: "ChongPlus를 선택하는 이유",
      sectionSteps: "4단계 연동",
      sectionFaq: "FAQ / 가이드",
      rechargeSupportPrefix: "결제 오류가 발생하면 ",
      faqSupportPrefix: "결제/교환/네트워크 문제가 있으면 ",
      highlights: {
        unified: {
          title: "통합 진입점",
          desc: "하나의 Base URL로 여러 모델 공급자를 연결해 SDK/설정 분기를 줄입니다."
        },
        reliable: {
          title: "고가용성 중계",
          desc: "스트리밍, 재시도, 지능형 페일백으로 요청 안정성을 보장합니다."
        },
        observability: {
          title: "관측성과 과금",
          desc: "요청량, 성공률, 지연, 사용량을 확인해 비용 관리를 쉽게 합니다."
        }
      },
      steps: {
        1: "계정을 등록하고 기본 설정을 완료합니다",
        2: "클라이언트 Base URL을 https://api.chongplus.plus/ 로 설정합니다",
        3: "기존 요청 구조로 호출을 시작합니다",
        4: "콘솔에서 모니터링과 사용량을 확인합니다"
      },
      recharge: {
        new: { title: "신규 스토어", desc: "권장 경로로 더 완성된 경험을 제공합니다.", cta: "충전하기" },
        cn: { title: "국내 스토어", desc: "중국 내 네트워크 환경에서 우선 사용 가능합니다.", cta: "충전하기" }
      },
      quick: {
        register: { title: "계정 등록", desc: "신규 사용자는 먼저 등록을 완료하세요.", cta: "등록하기" },
        tutorials: {
          title: "Codex / Claude Code 튜토리얼",
          desc: "두 튜토리얼을 한 페이지에서 단계별로 확인할 수 있습니다.",
          cta: "튜토리얼 보기"
        },
        keys: { title: "Key 생성", desc: "로그인 후 API Key를 생성하세요.", cta: "Key 생성" },
        redeem: { title: "교환 입구", desc: "교환 코드를 여기서 사용할 수 있습니다.", cta: "교환하기" },
        support: { title: "지원", desc: "문제가 생기면 여기서 지원을 받을 수 있습니다.", cta: "보기" }
      },
      faq: {
        q1: "코드를 많이 수정해야 하나요?",
        a1: "보통은 아닙니다. 대부분 Base URL과 API Key 교체만으로 연동할 수 있습니다.",
        q2: "스트리밍 출력도 지원하나요?",
        a2: "지원합니다. 기존 스트리밍 처리 방식 그대로 사용할 수 있습니다.",
        q3: "어떻게 빠르게 시작하나요?",
        a3: "chongplus.plus에 접속해 API Key를 생성하면 바로 시작할 수 있습니다."
      }
    },
    tutorialsPage: {
      badge: "튜토리얼",
      title: "Codex / Claude Code 빠른 시작",
      subtitle:
        "두 튜토리얼을 이 페이지에서 함께 관리합니다. 순서대로 설치와 설정을 완료하면 바로 시작할 수 있습니다.",
      ctaBackSteps: "연동 절차로 돌아가기",
      navCodex: "Codex 튜토리얼",
      navClaude: "Claude Code",
      backHome: "홈으로 돌아가기",
      sections: {
        codex: {
          title: "Codex 사용 가이드",
          intro: "아래 단계에 따라 설치와 설정을 완료하세요. 다운로드/결제/교환 문제가 있으면 지원에 문의하세요."
        },
        claude: {
          title: "Claude Code 사용 가이드",
          intro: "Claude Code를 빠르게 설치/설정하는 절차입니다. 다운로드나 네트워크 문제가 있으면 지원에 문의하세요."
        }
      }
    }
  }
};

export const LANGUAGE_OPTIONS = [
  { code: "zh", label: "中文" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" }
];

function normalizeLang(raw) {
  if (!raw) return DEFAULT_LANG;
  const lower = String(raw).toLowerCase();
  if (lower.startsWith("zh")) return "zh";
  if (lower.startsWith("en")) return "en";
  if (lower.startsWith("ja")) return "ja";
  if (lower.startsWith("ko")) return "ko";
  return DEFAULT_LANG;
}

function pickSupported(raw) {
  const normalized = normalizeLang(raw);
  return SUPPORTED_LANGS.includes(normalized) ? normalized : DEFAULT_LANG;
}

function readStoredLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStoredLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Ignore storage failures and keep URL-based behavior.
  }
}

export function getCurrentLang() {
  const url = new URL(window.location.href);
  const queryLang = url.searchParams.get("lang");
  if (queryLang) return pickSupported(queryLang);

  const stored = readStoredLang();
  if (stored) return pickSupported(stored);

  return pickSupported(navigator.language);
}

let currentLang = getCurrentLang();

export function setLang(lang, options = {}) {
  const nextLang = pickSupported(lang);
  currentLang = nextLang;
  writeStoredLang(nextLang);

  const { reload = false } = options;
  const nextUrl = new URL(window.location.href);
  if (nextLang === DEFAULT_LANG) {
    nextUrl.searchParams.delete("lang");
  } else {
    nextUrl.searchParams.set("lang", nextLang);
  }

  if (reload) {
    window.location.href = nextUrl.toString();
    return;
  }
  window.history.replaceState(null, "", nextUrl.toString());
}

function readMessage(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
}

export function t(key, fallback = "") {
  const dict = messages[currentLang] || {};
  const value = readMessage(dict, key);
  if (typeof value === "string") return value;
  return fallback;
}

export function applyDocumentLang() {
  currentLang = getCurrentLang();
  document.documentElement.lang = currentLang;
}
