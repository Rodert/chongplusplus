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
      body:
        '注册地址：<a href="https://api.chongplus.plus/register" target="_blank" rel="noreferrer">api.chongplus.plus/register</a><br />' +
        '官网地址：<a href="https://api.chongplus.plus/" target="_blank" rel="noreferrer">api.chongplus.plus</a>',
      images: []
    },
    {
      title: "购买兑换码",
      body:
        '兑换码购买位置：<a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
        '备用充值地址：<a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
        "进入充值中心后，优先选择新商城；如果新商城打不开，可使用备用充值地址。",
      images: []
    },
    {
      title: "输入兑换码",
      body:
        '购买后拿到兑换码，进入兑换入口输入兑换码完成余额兑换：<a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>',
      images: []
    },
    {
      title: "安装 cc-switch",
      body:
        '方案一：<a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
        '方案二：百度网盘下载：<a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a>（提取码：6su2）',
      images: []
    },
    {
      title: "安装 Codex",
      body:
        '<div class="install-options">' +
        '<article><strong>方案一：下载 Codex 客户端</strong><p>Codex 客户端目前支持 <a href="https://persistent.oaistatic.com/codex-app-prod/Codex.dmg" target="_blank" rel="noreferrer">macOS 版</a> 和 <a href="https://get.microsoft.com/installer/download/9PLM9XGG6VKS?cid=website_cta_psi" target="_blank" rel="noreferrer">Windows 版</a>。国内下载也可使用 <a href="https://pan.baidu.com/s/1ptQ1IDQ-JqSqqY3Fs80Igw?pwd=czvk" target="_blank" rel="noreferrer">百度网盘</a>（提取码：czvk）。如果链接失效，可打开 <a href="https://openai.com/codex/" target="_blank" rel="noreferrer">Codex 官方页面</a> 重新选择下载入口。</p></article>' +
        "<article><strong>方案二：安装 VS Code 插件</strong><p>打开 VS Code 插件商店，搜索 <code>Codex</code> 并安装插件。适合平时主要在 VS Code 里写代码，希望直接在编辑器中使用 Codex 的用户。</p></article>" +
        "<article><strong>方案三：使用 npm 安装 Codex CLI</strong><p>适合习惯终端工作的用户。先确保本机已安装 Node.js 和 npm，然后在终端执行：</p><pre><code>npm install -g @openai/codex</code></pre><p>安装完成后，在项目目录运行 <code>codex</code> 启动；后续需要升级时可执行：</p><pre><code>codex --upgrade</code></pre></article>" +
        "</div>",
      images: ["/codex-guide/image2.png"]
    },
    {
      title: "创建 API Key 并导入 cc-switch",
      body:
        '进入 Key 管理页面创建 API Key：<a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
        "创建后导入到 cc-switch，并确保分组配置正确。",
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
      title: "购买兑换码",
      body:
        '兑换码购买位置：<a href="https://docs.chongplus.plus/recharge" target="_blank" rel="noreferrer">docs.chongplus.plus/recharge</a><br />' +
        '备用充值地址：<a href="https://api.chongplus.plus/purchase" target="_blank" rel="noreferrer">api.chongplus.plus/purchase</a><br />' +
        "进入充值中心后，优先选择新商城；如果新商城打不开，可使用备用充值地址。",
      images: []
    },
    {
      title: "输入兑换码",
      body:
        '购买后拿到兑换码，进入兑换入口输入兑换码完成余额兑换：<a href="https://api.chongplus.plus/redeem" target="_blank" rel="noreferrer">api.chongplus.plus/redeem</a>',
      images: []
    },
    {
      title: "安装 cc-switch",
      body:
        '方案一：<a href="https://github.com/farion1231/cc-switch/releases/" target="_blank" rel="noreferrer">GitHub Releases</a><br />' +
        '方案二：百度网盘下载：<a href="https://pan.baidu.com/s/1lHAMdlaSkqSFOMVLTtlFaA?pwd=6su2" target="_blank" rel="noreferrer">CC-Switch</a>（提取码：6su2）。',
      images: []
    },
    {
      title: "安装 Claude Code",
      body:
        '参考官方快速开始：<a href="https://code.claude.com/docs/zh-CN/quickstart" target="_blank" rel="noreferrer">Claude Code Quickstart</a>',
      images: []
    },
    {
      title: "创建 API Key 并导入配置",
      body:
        '进入 Key 管理页面创建 API Key：<a href="https://api.chongplus.plus/keys" target="_blank" rel="noreferrer">api.chongplus.plus/keys</a><br />' +
        "创建后导入到 cc-switch 或 Claude Code 配置中，并确保分组配置正确。",
      images: []
    }
  ]
};

export const tutorials = [codexTutorial, claudeCodeTutorial];
