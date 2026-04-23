export const codexTutorial = {
  id: "codex",
  title: "使用 Codex 教程",
  intro:
    "按下面步骤完成安装与配置；若下载/支付/兑换遇到异常，可随时联系客服支持。",
  actions: [
    {
      label: "下载安装包",
      href: "https://kazjsfecs3y.feishu.cn/wiki/JNXAwxqeOiI3Hxky3BXcYdkrnYb"
    },
    {
      label: "联系客服支持",
      action: "support"
    }
  ],
  steps: [
    {
      title: "注册账号",
      body: '官网地址：<a href="https://api.chongplus.plus/" target="_blank" rel="noreferrer">api.chongplus.plus</a>',
      images: []
    },
    {
      title: "安装 cc-switch",
      body:
        '方案一：<a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
        '方案二：百度网盘下载：<a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a>（提取码：6su2）',
      images: ["/codex-guide/image1.png"]
    },
    {
      title: "安装 Codex",
      body: "按提示完成安装。",
      images: ["/codex-guide/image2.png"]
    },
    {
      title: "创建 API Key 并导入 cc-switch",
      body: "创建密钥后导入到 cc-switch，并确保分组配置正确。",
      images: ["/codex-guide/image3.png"]
    },
    {
      title: "初始化并开始使用",
      body:
        "在项目目录打开终端，执行初始化命令，等待 5～10 秒后即可开始使用。Windows 可用 Win+R 输入 cmd；macOS/Linux 直接打开终端。",
      images: []
    }
  ]
};

export const claudeCodeTutorial = {
  id: "claude",
  title: "使用 Claude Code 教程",
  intro:
    "适合快速上手 Claude Code 的安装与配置流程；如果下载或网络异常，可联系客服支持。",
  actions: [
    {
      label: "官方 Quickstart",
      href: "https://code.claude.com/docs/zh-CN/quickstart"
    },
    {
      label: "联系客服支持",
      action: "support"
    }
  ],
  steps: [
    {
      title: "注册账号",
      body:
        '注册网址：<a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
        '官网：<a href="https://chongplus.plus/" target="_blank" rel="noreferrer">chongplus.plus</a>',
      images: []
    },
    {
      title: "安装 cc-switch",
      body:
        '方案一：<a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
        '方案二：百度网盘下载：<a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a>（提取码：6su2）。',
      images: [
        "/claude-code-guide/page01-img01.png",
        "/claude-code-guide/page01-img02.png"
      ]
    },
    {
      title: "安装 Claude Code",
      body:
        '参考官方快速开始：<a href="https://code.claude.com/docs/zh-CN/quickstart" target="_blank" rel="noreferrer">Claude Code Quickstart</a>',
      images: []
    }
  ]
};

export const tutorials = [codexTutorial, claudeCodeTutorial];
