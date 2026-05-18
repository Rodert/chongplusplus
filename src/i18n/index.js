const DEFAULT_LANG = "zh";
const SUPPORTED_LANGS = ["zh", "en", "ja", "ko"];
const STORAGE_KEY = "chongplus.lang";

const messages = {
  en: {
    common: {
      language: "Language",
      support: "Support",
      contactSupport: "Contact Support",
      recommended: "Recommended",
      backup: "Backup"
    },
    nav: {
      recharge: "Recharge",
      links: "Quick Links",
      advantage: "Core Capabilities",
      steps: "Setup Flow",
      tutorials: "Tutorials",
      faq: "FAQ / Guides"
    },
    home: {
      badge: "Daxiang AI Model Gateway",
      title: "A unified API gateway for frontier models",
      subtitle:
        "Daxiang AI provides unified model access, API key management, Token recharge, usage visibility, and stable API routing for GPT, Claude, Gemini, Codex, and more.",
      modelsLabel: "Supported models",
      ctaRegister: "Register",
      ctaSteps: "View Setup Steps",
      ctaTutorials: "View Tutorials",
      sectionRecharge: "Recharge Center",
      sectionLinks: "Quick Links",
      sectionAdvantage: "Infrastructure capabilities for model access",
      sectionSteps: "4-Step Setup",
      sectionFaq: "FAQ / Guides",
      rechargeSupportPrefix: "If payment fails, ",
      faqSupportPrefix: "If payment/redeem/network issues occur, ",
      highlights: {
        unified: {
          title: "Unified Model Access",
          desc: "Use an OpenAI-compatible API to access multiple model providers with less integration and switching cost."
        },
        reliable: {
          title: "Stable API Routing",
          desc: "Optimized access routes support streaming output, frequent requests, and long-running tasks."
        },
        observability: {
          title: "Key & Quota Management",
          desc: "Manage multiple API keys, quotas, usage stats, and consumption records in one place."
        }
      },
      steps: {
        1: "Register an account and prepare balance or quota",
        2: "Create API keys for apps, projects, or teams",
        3: "Point your client Base URL to https://api.chongplus.plus/",
        4: "Call GPT, Claude, Gemini, Codex, and other model series through a compatible API"
      },
      recharge: {
        new: { title: "New Store", desc: "Recommended with a more complete experience.", cta: "Recharge" },
        cn: { title: "Mainland Store", desc: "Recommended for users in mainland network environments.", cta: "Recharge" }
      },
      quick: {
        register: { title: "Register", desc: "Create an account to prepare keys, quota, and model access.", cta: "Register" },
        tutorials: {
          title: "Integration Tutorials",
          desc: "View dedicated tutorials for Codex, Claude Code, and more.",
          cta: "View Tutorials"
        },
        keys: { title: "Create API Key", desc: "Create keys for apps, tools, and team usage after login.", cta: "Create Key" },
        redeem: { title: "Redeem", desc: "Redeem your code here.", cta: "Redeem" },
        support: { title: "Support", desc: "Contact support if you hit issues.", cta: "View" }
      },
      faq: {
        q1: "Do I need major code changes?",
        a1: "Usually no. In most cases, replacing Base URL and API Key is enough.",
        q2: "Does it support streaming output?",
        a2: "Yes. You can consume streaming responses with your existing logic.",
        q3: "How can I start quickly?",
        a3: "Register, recharge Token, create an API key, and start calling supported models."
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
      contactSupport: "サポートへ連絡",
      recommended: "推奨",
      backup: "予備"
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
      badge: "Daxiang AI モデルゲートウェイ",
      title: "先端モデル向け統合 API ゲートウェイ",
      subtitle:
        "Daxiang AI は GPT、Claude、Gemini、Codex などに対応し、統合モデル接続、API Key 管理、Token チャージ、利用量管理、安定した API ルーティングを提供します。",
      modelsLabel: "対応モデル",
      ctaRegister: "今すぐ登録",
      ctaSteps: "導入手順を見る",
      ctaTutorials: "チュートリアルを見る",
      sectionRecharge: "チャージセンター",
      sectionLinks: "クイックリンク",
      sectionAdvantage: "モデル接続のための基盤機能",
      sectionSteps: "4 ステップで導入",
      sectionFaq: "FAQ / ガイド",
      rechargeSupportPrefix: "決済で問題が発生した場合は、",
      faqSupportPrefix: "決済・交換・ネットワークの問題がある場合は、",
      highlights: {
        unified: {
          title: "統合モデル接続",
          desc: "OpenAI 互換 API で複数の主流モデルに接続し、開発と切り替えコストを削減します。"
        },
        reliable: {
          title: "安定した API ルーティング",
          desc: "ストリーミング出力、高頻度リクエスト、長時間タスクに対応する接続経路を提供します。"
        },
        observability: {
          title: "Key と利用量管理",
          desc: "複数 API Key、利用枠、消費記録、利用統計をまとめて管理できます。"
        }
      },
      steps: {
        1: "アカウントを登録し、残高または利用枠を準備する",
        2: "アプリやチーム用の API Key を作成する",
        3: "クライアントの Base URL を https://api.chongplus.plus/ に設定する",
        4: "OpenAI 互換 API で GPT、Claude、Gemini、Codex などを呼び出す"
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
        a3: "登録、Token チャージ、API Key 作成後、対応モデルを呼び出せます。"
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
      contactSupport: "고객 지원 문의",
      recommended: "추천",
      backup: "예비"
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
      badge: "Daxiang AI 모델 게이트웨이",
      title: "프런티어 모델을 위한 통합 API 게이트웨이",
      subtitle:
        "Daxiang AI는 GPT, Claude, Gemini, Codex 등을 위한 통합 모델 접속, API Key 관리, Token 충전, 사용량 관리, 안정적인 API 라우팅을 제공합니다.",
      modelsLabel: "지원 모델",
      ctaRegister: "지금 가입",
      ctaSteps: "연동 절차 보기",
      ctaTutorials: "튜토리얼 보기",
      sectionRecharge: "충전 센터",
      sectionLinks: "빠른 링크",
      sectionAdvantage: "모델 접속을 위한 핵심 인프라",
      sectionSteps: "4단계 연동",
      sectionFaq: "FAQ / 가이드",
      rechargeSupportPrefix: "결제 오류가 발생하면 ",
      faqSupportPrefix: "결제/교환/네트워크 문제가 있으면 ",
      highlights: {
        unified: {
          title: "통합 모델 접속",
          desc: "OpenAI 호환 API로 여러 주요 모델에 접속해 개발과 전환 비용을 줄입니다."
        },
        reliable: {
          title: "안정적인 API 라우팅",
          desc: "스트리밍 출력, 고빈도 요청, 장시간 작업 호출을 지원하는 접속 경로를 제공합니다."
        },
        observability: {
          title: "Key 및 사용량 관리",
          desc: "여러 API Key, 할당량, 사용 통계, 소비 기록을 한곳에서 관리합니다."
        }
      },
      steps: {
        1: "계정을 등록하고 잔액 또는 사용 한도를 준비합니다",
        2: "앱, 프로젝트, 팀을 위한 API Key를 생성합니다",
        3: "클라이언트 Base URL을 https://api.chongplus.plus/ 로 설정합니다",
        4: "OpenAI 호환 API로 GPT, Claude, Gemini, Codex 등을 호출합니다"
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
        a3: "가입, Token 충전, API Key 생성 후 지원 모델 호출을 시작할 수 있습니다."
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

const tutorialOverlays = {
  en: {
    codex: {
      actions: [{ label: "Download Package" }, { label: "Contact Support" }],
      steps: [
        {
          title: "Register Account",
          body:
            'Register: <a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
            'Website: <a href="https://api.chongplus.plus/" target="_blank" rel="noreferrer">api.chongplus.plus</a>'
        },
        {
          title: "Buy Redeem Code",
          body:
            'Purchase location: <a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
            'Backup purchase address: <a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
            "Choose the new store or mainland store based on your network environment. If those entries do not open, use the backup purchase address."
        },
        {
          title: "Enter Redeem Code",
          body:
            'After purchase, enter the redeem code here to add balance: <a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>'
        },
        {
          title: "Install cc-switch",
          body:
            'Option 1: <a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
            'Option 2: Baidu Netdisk: <a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a> (code: 6su2)'
        },
        {
          title: "Install Codex",
          body:
            '<div class="install-options">' +
            '<article><strong>Option 1: Download the Codex client</strong><p>The Codex client is available for <a href="https://persistent.oaistatic.com/codex-app-prod/Codex.dmg" target="_blank" rel="noreferrer">macOS</a> and <a href="https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi" target="_blank" rel="noreferrer">Windows</a>. Mainland users can also download from <a href="https://pan.baidu.com/s/1ptQ1IDQ-JqSqqY3Fs80Igw?pwd=czvk" target="_blank" rel="noreferrer">Baidu Netdisk</a> (code: czvk). If either link stops working, open the <a href="https://openai.com/codex/" target="_blank" rel="noreferrer">official Codex page</a> and choose the current download entry.</p></article>' +
            "<article><strong>Option 2: Install the VS Code extension</strong><p>Open the VS Code extension marketplace, search for <code>Codex</code>, and install the extension. Use this if you want Codex inside your editor.</p></article>" +
            "<article><strong>Option 3: Install Codex CLI with npm</strong><p>Use this if you prefer terminal workflows. Make sure Node.js and npm are installed, then run:</p><pre><code>npm install -g @openai/codex</code></pre><p>After installation, run <code>codex</code> in your project directory. To upgrade later, run:</p><pre><code>codex --upgrade</code></pre></article>" +
            "</div>"
        },
        {
          title: "Create API Key and Import to cc-switch",
          body:
            'Create an API key here: <a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
            "Import it into cc-switch and make sure the group configuration is correct."
        },
        {
          title: "Initialize and Start",
          body:
            "Open terminal in your project directory, run the init command, and wait 5-10 seconds. Windows: Win+R then cmd; macOS/Linux: open Terminal."
        }
      ]
    },
    claude: {
      actions: [{ label: "Official Quickstart" }, { label: "Contact Support" }],
      steps: [
        {
          title: "Register Account",
          body:
            'Register: <a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
            'Website: <a href="https://chongplus.plus/" target="_blank" rel="noreferrer">chongplus.plus</a>'
        },
        {
          title: "Buy Redeem Code",
          body:
            'Purchase location: <a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
            'Backup purchase address: <a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
            "Choose the new store or mainland store based on your network environment. If those entries do not open, use the backup purchase address."
        },
        {
          title: "Enter Redeem Code",
          body:
            'After purchase, enter the redeem code here to add balance: <a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>'
        },
        {
          title: "Install cc-switch",
          body:
            'Option 1: <a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
            'Option 2: Baidu Netdisk: <a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a> (code: 6su2)'
        },
        {
          title: "Install Claude Code",
          body:
            'Reference: <a href="https://code.claude.com/docs/zh-CN/quickstart" target="_blank" rel="noreferrer">Claude Code Quickstart</a>'
        },
        {
          title: "Create API Key and Import Configuration",
          body:
            'Create an API key here: <a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
            "Import it into cc-switch or Claude Code configuration and make sure the group configuration is correct."
        }
      ]
    }
  },
  ja: {
    codex: {
      actions: [{ label: "インストーラーをダウンロード" }, { label: "サポートへ連絡" }],
      steps: [
        {
          title: "アカウント登録",
          body:
            '登録: <a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
            '公式サイト: <a href="https://api.chongplus.plus/" target="_blank" rel="noreferrer">api.chongplus.plus</a>'
        },
        {
          title: "交換コードを購入",
          body:
            '購入場所: <a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
            '予備の購入先: <a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
            "ネットワーク環境に応じて新ストアまたは国内ストアを選択します。どちらも開けない場合は予備の購入先を使用してください。"
        },
        {
          title: "交換コードを入力",
          body:
            '購入後、交換コードをここで入力して残高に反映します: <a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>'
        },
        {
          title: "cc-switch をインストール",
          body:
            '方法1: <a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
            '方法2: Baidu Netdisk: <a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a>（抽出コード: 6su2）'
        },
        {
          title: "Codex をインストール",
          body:
            '<div class="install-options">' +
            '<article><strong>方法1: Codex クライアントをダウンロード</strong><p>Codex クライアントは <a href="https://persistent.oaistatic.com/codex-app-prod/Codex.dmg" target="_blank" rel="noreferrer">macOS 版</a> と <a href="https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi" target="_blank" rel="noreferrer">Windows 版</a> を利用できます。中国国内では <a href="https://pan.baidu.com/s/1ptQ1IDQ-JqSqqY3Fs80Igw?pwd=czvk" target="_blank" rel="noreferrer">Baidu Netdisk</a>（抽出コード: czvk）からもダウンロードできます。リンクが無効になった場合は <a href="https://openai.com/codex/" target="_blank" rel="noreferrer">Codex 公式ページ</a> から最新のダウンロード入口を選択してください。</p></article>' +
            "<article><strong>方法2: VS Code 拡張機能をインストール</strong><p>VS Code の拡張機能マーケットプレイスで <code>Codex</code> を検索してインストールします。エディタ内で Codex を使いたい場合に適しています。</p></article>" +
            "<article><strong>方法3: npm で Codex CLI をインストール</strong><p>ターミナル中心の利用に適しています。Node.js と npm を用意し、次を実行します。</p><pre><code>npm install -g @openai/codex</code></pre><p>インストール後、プロジェクトディレクトリで <code>codex</code> を実行します。アップグレードは次のコマンドです。</p><pre><code>codex --upgrade</code></pre></article>" +
            "</div>"
        },
        {
          title: "API Key を作成し cc-switch にインポート",
          body:
            'API Key はここで作成します: <a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
            "作成後 cc-switch にインポートし、グループ設定が正しいことを確認します。"
        },
        {
          title: "初期化して利用開始",
          body:
            "プロジェクトディレクトリでターミナルを開き、初期化コマンドを実行します。5-10 秒待てば開始できます。"
        }
      ]
    },
    claude: {
      actions: [{ label: "公式 Quickstart" }, { label: "サポートへ連絡" }],
      steps: [
        {
          title: "アカウント登録",
          body:
            '登録: <a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
            '公式サイト: <a href="https://chongplus.plus/" target="_blank" rel="noreferrer">chongplus.plus</a>'
        },
        {
          title: "交換コードを購入",
          body:
            '購入場所: <a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
            '予備の購入先: <a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
            "ネットワーク環境に応じて新ストアまたは国内ストアを選択します。どちらも開けない場合は予備の購入先を使用してください。"
        },
        {
          title: "交換コードを入力",
          body:
            '購入後、交換コードをここで入力して残高に反映します: <a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>'
        },
        {
          title: "cc-switch をインストール",
          body:
            '方法1: <a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
            '方法2: Baidu Netdisk: <a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a>（抽出コード: 6su2）'
        },
        {
          title: "Claude Code をインストール",
          body:
            '公式ガイド: <a href="https://code.claude.com/docs/zh-CN/quickstart" target="_blank" rel="noreferrer">Claude Code Quickstart</a>'
        },
        {
          title: "API Key を作成して設定にインポート",
          body:
            'API Key はここで作成します: <a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
            "作成後 cc-switch または Claude Code の設定にインポートし、グループ設定が正しいことを確認します。"
        }
      ]
    }
  },
  ko: {
    codex: {
      actions: [{ label: "설치 패키지 다운로드" }, { label: "고객 지원 문의" }],
      steps: [
        {
          title: "계정 등록",
          body:
            '등록: <a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
            '공식 사이트: <a href="https://api.chongplus.plus/" target="_blank" rel="noreferrer">api.chongplus.plus</a>'
        },
        {
          title: "교환 코드 구매",
          body:
            '구매 위치: <a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
            '예비 구매 주소: <a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
            "네트워크 환경에 따라 신규 스토어 또는 국내 스토어를 선택하세요. 두 입구가 열리지 않으면 예비 구매 주소를 사용하세요."
        },
        {
          title: "교환 코드 입력",
          body:
            '구매 후 받은 교환 코드를 여기서 입력해 잔액으로 전환하세요: <a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>'
        },
        {
          title: "cc-switch 설치",
          body:
            '방법 1: <a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
            '방법 2: Baidu Netdisk: <a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a> (추출 코드: 6su2)'
        },
        {
          title: "Codex 설치",
          body:
            '<div class="install-options">' +
            '<article><strong>방법 1: Codex 클라이언트 다운로드</strong><p>Codex 클라이언트는 <a href="https://persistent.oaistatic.com/codex-app-prod/Codex.dmg" target="_blank" rel="noreferrer">macOS용</a> 및 <a href="https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi" target="_blank" rel="noreferrer">Windows용</a>으로 제공됩니다. 중국 본토 사용자는 <a href="https://pan.baidu.com/s/1ptQ1IDQ-JqSqqY3Fs80Igw?pwd=czvk" target="_blank" rel="noreferrer">Baidu Netdisk</a> (추출 코드: czvk)에서도 다운로드할 수 있습니다. 링크가 동작하지 않으면 <a href="https://openai.com/codex/" target="_blank" rel="noreferrer">Codex 공식 페이지</a>에서 최신 다운로드 항목을 선택하세요.</p></article>' +
            "<article><strong>방법 2: VS Code 확장 설치</strong><p>VS Code 확장 마켓플레이스에서 <code>Codex</code>를 검색해 설치합니다. 에디터 안에서 Codex를 사용하려는 경우에 적합합니다.</p></article>" +
            "<article><strong>방법 3: npm으로 Codex CLI 설치</strong><p>터미널 중심 워크플로에 적합합니다. Node.js와 npm을 준비한 뒤 다음을 실행합니다.</p><pre><code>npm install -g @openai/codex</code></pre><p>설치 후 프로젝트 디렉터리에서 <code>codex</code>를 실행합니다. 업그레이드는 다음 명령을 사용합니다.</p><pre><code>codex --upgrade</code></pre></article>" +
            "</div>"
        },
        {
          title: "API Key 생성 및 cc-switch 가져오기",
          body:
            'API Key는 여기에서 생성합니다: <a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
            "생성 후 cc-switch에 가져오고, 그룹 설정이 올바른지 확인하세요."
        },
        {
          title: "초기화 후 시작",
          body: "프로젝트 폴더에서 터미널을 열어 초기화 명령을 실행하고 5-10초 대기한 뒤 사용하세요."
        }
      ]
    },
    claude: {
      actions: [{ label: "공식 Quickstart" }, { label: "고객 지원 문의" }],
      steps: [
        {
          title: "계정 등록",
          body:
            '등록: <a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
            '공식 사이트: <a href="https://chongplus.plus/" target="_blank" rel="noreferrer">chongplus.plus</a>'
        },
        {
          title: "교환 코드 구매",
          body:
            '구매 위치: <a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
            '예비 구매 주소: <a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
            "네트워크 환경에 따라 신규 스토어 또는 국내 스토어를 선택하세요. 두 입구가 열리지 않으면 예비 구매 주소를 사용하세요."
        },
        {
          title: "교환 코드 입력",
          body:
            '구매 후 받은 교환 코드를 여기서 입력해 잔액으로 전환하세요: <a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>'
        },
        {
          title: "cc-switch 설치",
          body:
            '방법 1: <a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
            '방법 2: Baidu Netdisk: <a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a> (추출 코드: 6su2)'
        },
        {
          title: "Claude Code 설치",
          body:
            '공식 가이드: <a href="https://code.claude.com/docs/zh-CN/quickstart" target="_blank" rel="noreferrer">Claude Code Quickstart</a>'
        },
        {
          title: "API Key 생성 및 설정 가져오기",
          body:
            'API Key는 여기에서 생성합니다: <a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
            "생성 후 cc-switch 또는 Claude Code 설정에 가져오고, 그룹 설정이 올바른지 확인하세요."
        }
      ]
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

export function localizeTutorials(baseTutorials = []) {
  const overlay = tutorialOverlays[currentLang];
  if (!overlay) return baseTutorials;

  return baseTutorials.map((tutorial) => {
    const patch = overlay[tutorial.id];
    if (!patch) return tutorial;

    const localized = { ...tutorial };
    if (typeof patch.title === "string") localized.title = patch.title;
    if (typeof patch.intro === "string") localized.intro = patch.intro;

    if (Array.isArray(tutorial.actions)) {
      localized.actions = tutorial.actions.map((action, idx) => ({
        ...action,
        ...(patch.actions?.[idx] || {})
      }));
    }

    if (Array.isArray(tutorial.steps)) {
      localized.steps = tutorial.steps.map((step, idx) => ({
        ...step,
        ...(patch.steps?.[idx] || {})
      }));
    }

    return localized;
  });
}

export function applyDocumentLang() {
  currentLang = getCurrentLang();
  document.documentElement.lang = currentLang;
}
