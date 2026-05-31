import React from "react";

function Icon({ name, className = "h-4 w-4", strokeWidth = 1.7 }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const icons = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: <path d="M14 4h6v6m0-6-9 9m-1-7H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />,
    mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
    map: <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    user: <path d="M20 21a8 8 0 0 0-16 0m8-9a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />,
    sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.4-6.4 1.4-1.4M4.2 19.8l1.4-1.4m0-12.8L4.2 4.2m15.6 15.6-1.4-1.4M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
    moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 7 7 0 1 0 20 15.5Z" />,
    book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12Zm0 0V18m4-11h8m-8 4h8" />,
    cpu: <path d="M8 8h8v8H8zM4 9h2m-2 6h2m12-6h2m-2 6h2M9 4v2m6-2v2M9 18v2m6-2v2" />,
    pen: <path d="M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Zm11-13 3 3" />,
    shield: <path d="M12 3l7 3v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3Zm-3 9 2 2 4-5" />,
    grad: <path d="M3 8l9-4 9 4-9 4-9-4Zm4 3v4c2 2 8 2 10 0v-4M21 8v6" />
  };
  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

const DATA = {
  en: {
    brand: "Wenda Yu",
    nav: [["About", "about"], ["News", "news"], ["Experience", "experience"], ["Paper", "paper"], ["Projects", "projects"]],
    lang: "中文",
    role: "Software Engineering Undergraduate",
    org: "Tongji University",
    location: "Shanghai, China",
    email: "yu_wenda@126.com",
    intro: [
      "I’m Wenda Yu, a software engineering undergraduate at Tongji University. My research interest centers on multimodal agents for real-world environments. I currently focus on VLA models and world models, with prior research in efficient inference and adversarial attack-defense.",
      "I am exploring how embodied agents can move beyond direct action prediction toward world-model-assisted planning and reliable execution, while also studying agents, LLM memory, and the organization of multimodal interaction histories."
    ],
    links: [["Email", "mailto:yu_wenda@126.com"], ["GitHub", "https://github.com/SunnyYWD"], ["AC²-VLA", "https://arxiv.org/abs/2601.19634"]],
    interestsTitle: "Research Interests",
    interests: ["Real-world multimodal agents", "Efficient VLA inference", "Reliable execution", "World models / WAM", "Agents", "LLM Memory", "Multimodal understanding"],
    focusTitle: "Focus",
    focus: [
      ["grad", "Background", "Tongji University", "Software Engineering undergraduate in the College of Computer Science and Technology."],
      ["cpu", "Research", "VLA & Embodied AI", "Efficient inference, reliable execution, adaptive computation, and safety evaluation for VLA systems."],
      ["pen", "Direction", "World Models", "Understanding how actions change the environment, with prediction and planning as a path toward real-world embodied intelligence."],
      ["book", "Agent", "LLM Memory & Multimodal Signals", "Memory mechanisms for agents, plus the retrieval and use of visual, language, action, and feedback histories."]
    ],
    newsTitle: "News",
    news: [
      ["2026.05", "AC²-VLA paper was accepted by IJCAI 2026."],
      ["2026.04", "Independently developed Me Agent, an iOS app for personal agents and long-term memory."],
      ["2026.01", "Started research on VLA safety and robustness."],
      ["2025.09", "Started SmartHire, an intelligent recruiting and career-growth system."],
      ["2025.08", "Started AC²-VLA efficient VLA inference research and interned at Huawei Shanghai Research Institute."],
      ["2024.04", "Joined the video moving-object removal research project, later implemented as Phantom CleanView."]
    ],
    experienceTitle: "Experience",
    experience: [
      ["2026.01 — Now", "VLA Safety & Robustness Research", "Research", "Vision-Language-Action Models"],
      ["2025.08 — 2026.01", "AC²-VLA Research", "Independent First Author · IJCAI 2026 Accepted", "CogACT · SIMPLER · Open-X"],
      ["2025.08 — 2025.09", "Software Engineering Intern", "Huawei Shanghai Research Institute · OpenHarmony", "ArkUI · OpenHarmony"],
      ["2025.01 — 2025.02", "Bond Underwriting Intern", "Sinolink Securities · Bond Department III", "Finance · Research Reports"],
      ["2024.04 — 2025.04", "Video Moving-Object Removal Research", "Core Member · Shanghai College Student Innovation Project", "3D Optical Flow · Point-Cloud Motion Estimation"],
      ["2023.09 — 2027.06", "B.E. Software Engineering", "Tongji University · College of Computer Science and Technology", "Shanghai, China"]
    ],
    paperTitle: "Selected Publication",
    paper: {
      status: "IJCAI 2026",
      title: "AC²-VLA: Action-Context-Aware Adaptive Computation in Vision-Language-Action Models for Efficient Robotic Manipulation",
      authors: "Wenda Yu, Tianshi Wang, Fengling Li, Jingjing Li, Lei Zhu",
      venue: "IJCAI 2026 · arXiv:2601.19634 · Robotics",
      body: "AC²-VLA introduces an action-context-aware adaptive computation framework for efficient closed-loop VLA inference. It exploits temporal, spatial, and depth redundancies through cognition reuse, visual token pruning, and selective execution.",
      metrics: [["1.79×", "Speedup"], ["29.4%", "FLOPs"], ["3", "Redundancy axes"]],
      paperUrl: "https://arxiv.org/abs/2601.19634",
      codeUrl: "https://github.com/SunnyYWD/AC-2-VLA.git",
      read: "Paper",
      code: "Code"
    },
    projectsTitle: "Projects",
    details: "Details",
    projects: [
      ["AC²-VLA", "VLA · Efficiency · Adaptive Computation", "Action-context-aware adaptive computation for efficient VLA inference, with token pruning, layer routing, and cache reuse.", "robot", ["CogACT", "SIMPLER", "CUDA"], "https://github.com/SunnyYWD/AC-2-VLA.git"],
      ["Safe VLA", "Safety · Robustness · Evaluation", "A research thread on real-world deployment risks, attack surfaces, and reproducible safety evaluation for VLA robot foundation models.", "shield", ["VLA", "Security", "Benchmark"], "#"],
      ["Me Agent", "Personal Agent · Memory · iOS", "A personal AI agent concept centered on long-term memory, contextual assistance, voice capture, collections, and mobile-first interaction.", "agent", ["iOS", "Memory", "Tools"], "https://sunnyywd.github.io/Me-Agent-support"],
      ["CareerPilot", "LLM · Matching · HR Platform", "An AI-driven recruiting platform prototype for semantic person-job matching, explainable candidate scoring, and HR-side workflows.", "dashboard", ["Vue", "LLM", "Matching"], "https://github.com/SunnyYWD/CareerPilot.git"],
      ["Phantom CleanView", "Video Editing · 3D Optical Flow", "An intelligent video object removal system guided by 3D optical-flow edges and point-cloud motion estimation, supporting target erasure and voice control.", "video", ["YOLOv8", "E2FGVI", "Streamlit"], "#"],
      ["JiSpeed", "Delivery Platform · Backend", "A full-stack food delivery and management platform covering ordering, merchant operations, rider dispatching, settlement, anomaly detection, and data visualization.", "delivery", ["Spring Boot", "Redis", "Vue"], "https://github.com/SunnyYWD/JiSpeed"],
      ["LeWan", "Elderly Care · WeChat Mini Program", "A health companion mini program for elderly users, integrating medication reminders, health journals, SOS assistance, speech recognition, and LLM-based intent understanding.", "health", ["WXML", "ASR", "DeepSeek"], "#"],
      ["Farm Life Simulator", "Game Development · Cocos2d-x", "A Stardew Valley-inspired farming simulation game with crop planting, animal raising, resident interactions, festival activities, skill systems, and farm mechanics.", "game", ["C++", "Cocos2d-x", "Python"], "https://github.com/SunnyYWD/StarDewValleyGame"]
    ],
    contact: { title: "Contact", desc: "Open to research conversations, collaboration, and thoughtful product ideas.", copyright: "© 2026 Wenda Yu. All rights reserved." }
  },
  zh: {
    brand: "于闻达",
    nav: [["关于", "about"], ["动态", "news"], ["经历", "experience"], ["论文", "paper"], ["项目", "projects"]],
    lang: "EN",
    role: "软件工程专业本科生",
    org: "同济大学",
    location: "上海，中国",
    email: "yu_wenda@126.com",
    intro: [
      "我是于闻达，同济大学计算机科学与技术学院软件工程专业本科生。我的研究兴趣集中在面向真实环境的多模态智能体，目前主要关注 VLA 模型和世界模型，在高效推理和对抗攻防方面进行过研究。",
      "我希望继续沿着具身智能主线，探索世界模型辅助预测与规划、真实场景下的可靠执行，以及 Agent 机制、LLM Memory 与多模态交互历史的组织和利用。"
    ],
    links: [["邮箱", "mailto:yu_wenda@126.com"], ["GitHub", "https://github.com/SunnyYWD"], ["AC²-VLA", "https://arxiv.org/abs/2601.19634"]],
    interestsTitle: "研究兴趣",
    interests: ["真实环境多模态智能体", "VLA 高效推理", "可靠执行", "World Model / WAM", "Agent", "LLM Memory", "多模态理解"],
    focusTitle: "方向",
    focus: [
      ["grad", "背景", "同济大学", "计算机科学与技术学院软件工程专业本科生，长期关注 AI 系统与软件工程实践。"],
      ["cpu", "研究", "VLA 与具身智能", "关注 VLA 模型的高效推理、可靠执行、自适应计算、安全评测与真实部署问题。"],
      ["pen", "方向", "世界模型", "理解动作如何改变环境，把预测与规划能力引入面向真实场景的具身智能。"],
      ["book", "Agent", "LLM Memory 与多模态", "关注 Agent 交互中的记忆机制，以及视觉、语言、动作和任务反馈等多模态历史的检索与利用。"]
    ],
    newsTitle: "近期动态",
    news: [
      ["2026.05", "AC²-VLA 论文被 IJCAI 2026 录用。"],
      ["2026.04", "独立开发 Me Agent 个人智能体与长期记忆助手 iOS 应用。"],
      ["2026.01", "开始 VLA 安全与鲁棒性研究。"],
      ["2025.09", "启动 SmartHire 智能匹配与职业成长招聘系统项目。"],
      ["2025.08", "开展 AC²-VLA 高效 VLA 推理研究，并在华为上海研究所 OpenHarmony 二部实习。"],
      ["2024.04", "参与视频运动目标无痕消除方法研究，成果落地「幻影净界」系统。"]
    ],
    experienceTitle: "经历",
    experience: [
      ["2026.01 — 至今", "VLA 安全与鲁棒性研究", "科研经历", "Vision-Language-Action Models"],
      ["2025.08 — 2026.01", "AC²-VLA 推理加速研究", "科研经历｜独立一作｜IJCAI 2026 录用", "CogACT · SIMPLER · Open-X"],
      ["2025.08 — 2025.09", "软件开发工程师实习生", "华为上海研究所｜终端 BG OpenHarmony 二部", "ArkUI · OpenHarmony"],
      ["2025.01 — 2025.02", "债券承做实习生", "国金证券股份有限公司｜债券三部", "财务分析 · 专题研究报告"],
      ["2024.04 — 2025.04", "视频运动目标无痕消除方法研究", "科研经历｜核心成员｜上海市大学生创新创业训练计划项目", "3D 光流 · 点云运动估计 · 幻影净界"],
      ["2023.09 — 2027.06", "软件工程专业本科", "同济大学｜计算机科学与技术学院", "上海，中国"]
    ],
    paperTitle: "代表论文",
    paper: {
      status: "IJCAI 2026",
      title: "AC²-VLA：面向高效机器人操作的动作上下文自适应计算 VLA 模型",
      authors: "于闻达（Wenda Yu）, Tianshi Wang, Fengling Li, Jingjing Li, Lei Zhu",
      venue: "IJCAI 2026 · arXiv:2601.19634 · Robotics",
      body: "AC²-VLA 提出面向闭环 VLA 推理的动作上下文自适应计算框架，通过认知复用、视觉 token 剪枝与模型组件选择性执行，挖掘时间、空间与深度维度的结构化冗余。",
      metrics: [["1.79×", "最高加速"], ["29.4%", "FLOPs"], ["3", "冗余维度"]],
      paperUrl: "https://arxiv.org/abs/2601.19634",
      codeUrl: "https://github.com/SunnyYWD/AC-2-VLA.git",
      read: "论文",
      code: "代码"
    },
    projectsTitle: "项目",
    details: "查看详情",
    projects: [
      ["AC²-VLA", "VLA · 高效推理 · 自适应计算", "面向机器人操控场景的动作上下文自适应计算框架，结合视觉 token 剪枝、动态跳层与缓存复用提升推理效率。", "robot", ["CogACT", "SIMPLER", "CUDA"], "https://github.com/SunnyYWD/AC-2-VLA.git"],
      ["Safe VLA", "安全 · 鲁棒性 · 评测", "围绕 VLA 机器人基础模型真实部署风险，研究多源输入攻击面、防护机制与可复现实验评测流程。", "shield", ["VLA", "安全", "评测"], "#"],
      ["Me Agent", "个人智能体 · 记忆 · iOS", "一个以长期记忆、上下文理解、语音捕捉、合集展示和移动端交互为核心的个人智能体产品设想。", "agent", ["iOS", "记忆", "工具调用"], "https://sunnyywd.github.io/Me-Agent-support"],
      ["CareerPilot", "LLM · 人岗匹配 · 招聘平台", "AI 驱动的招聘系统原型，支持语义级人岗匹配、可解释候选人评分和 HR 侧业务流程管理。", "dashboard", ["Vue", "LLM", "匹配"], "https://github.com/SunnyYWD/CareerPilot.git"],
      ["幻影净界", "视频编辑 · 3D 光流 · 目标无痕消除", "基于 3D 光流边缘引导与点云运动估计的视频目标无痕消除系统，支持指定目标擦除、视频元素编辑与语音控制交互。", "video", ["YOLOv8", "E2FGVI", "Streamlit"], "#"],
      ["JiSpeed", "外卖配送 · 后端系统 · 数据平台", "一站式外卖配送与管理平台，覆盖用户点餐、商家运营、骑手派单、后台结算、异常检测与全链路数据可视化。", "delivery", ["Spring Boot", "Redis", "Vue"], "https://github.com/SunnyYWD/JiSpeed"],
      ["乐晚", "老年健康 · 微信小程序 · 语音 AI", "面向 60+ 老年用户的健康管理与陪伴小程序，集成用药提醒、健康日记、SOS 求助、一键联系、语音识别与大模型意图理解。", "health", ["WXML", "ASR", "DeepSeek"], "#"],
      ["农场生活模拟游戏", "游戏开发 · C++ · Cocos2d-x", "星露谷风格的农场生活模拟游戏，包含作物种植、动物养殖、居民互动、节日活动、技能系统与农场核心玩法。", "game", ["C++", "Cocos2d-x", "Python"], "https://github.com/SunnyYWD/StarDewValleyGame"]
    ],
    contact: { title: "联系", desc: "欢迎交流研究、产品想法、长期项目和有意思的合作。", copyright: "© 2026 于闻达。保留所有权利。" }
  }
};

const CSS = `
.font-cn-title { font-family: "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", "SimSun", serif; font-weight: 400; }
.font-cn-body { font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif; }
.font-en-title { font-family: Georgia, "Times New Roman", Times, serif; font-weight: 400; }
.font-en-body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
html { scroll-padding-top: 88px; }
`;

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-slate-200 py-10 first:pt-0">
      <h2 className="mb-6 border-b border-slate-200 pb-2 font-en-title text-[1.72rem] leading-tight text-slate-950">{title}</h2>
      {children}
    </section>
  );
}

function ProfileCard({ t, isZh }) {
  return (
    <aside className="lg:sticky lg:top-28">
      <div className="border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mx-auto flex aspect-square w-44 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-[radial-gradient(circle_at_34%_28%,#e8eef7_0,#e8eef7_18%,transparent_19%),linear-gradient(135deg,#f8fafc,#e8edf3_42%,#d6dde7)] text-slate-800">
          <span className="font-en-title text-5xl tracking-wide">WY</span>
        </div>
        <div className="mt-6 text-center">
          <h1 className={`${isZh ? "font-cn-title text-4xl tracking-[0.12em]" : "font-en-title text-4xl"} text-slate-950`}>{t.brand}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">{t.role}</p>
          <p className="text-sm leading-6 text-slate-600">{t.org}</p>
        </div>
        <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
          <a className="flex items-center gap-3 transition hover:text-sky-700" href={`mailto:${t.email}`}>
            <Icon name="mail" className="h-4 w-4 text-slate-500" /> {t.email}
          </a>
          <div className="flex items-center gap-3">
            <Icon name="map" className="h-4 w-4 text-slate-500" /> {t.location}
          </div>
          <div className="flex items-center gap-3">
            <Icon name="user" className="h-4 w-4 text-slate-500" /> {t.org}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {t.links.map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="inline-flex items-center gap-1.5 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
              {label}
              {href.startsWith("http") && <Icon name="external" className="h-3.5 w-3.5" />}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function Intro({ t }) {
  return (
    <div className="space-y-5 text-[1.02rem] leading-8 text-slate-700">
      {t.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <div>
        <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">{t.interestsTitle}</h3>
        <div className="flex flex-wrap gap-2">
          {t.interests.map((item) => (
            <span key={item} className="border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">{item}</span>
          ))}
        </div>
      </div>
      <div className="grid gap-4 pt-2 md:grid-cols-2">
        {t.focus.map(([icon, label, title, body]) => (
          <div key={label} className="border border-slate-200 bg-white p-5">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-slate-200 bg-slate-50 text-slate-600">
                <Icon name={icon} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <h3 className="mt-1 font-en-title text-xl text-slate-950">{title}</h3>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map(([date, text]) => (
        <li key={`${date}-${text}`} className="grid gap-3 border-b border-slate-100 pb-3 text-sm leading-7 last:border-b-0 md:grid-cols-[88px_1fr]">
          <span className="font-semibold text-sky-800">{date}</span>
          <span className="text-slate-700">{text}</span>
        </li>
      ))}
    </ul>
  );
}

function ExperienceList({ items }) {
  return (
    <div className="space-y-4">
      {items.map(([date, title, org, location]) => (
        <article key={`${date}-${title}`} className="grid gap-3 border-b border-slate-100 pb-4 last:border-b-0 md:grid-cols-[160px_1fr]">
          <time className="text-sm font-semibold text-slate-500">{date}</time>
          <div>
            <h3 className="text-base font-semibold text-slate-950">{title}</h3>
            <p className="mt-1 text-sm text-slate-700">{org}</p>
            <p className="mt-1 text-sm text-slate-500">{location}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function PaperEntry({ paper }) {
  return (
    <article className="border border-slate-200 bg-white p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="bg-sky-900 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">{paper.status}</span>
        <span className="text-sm text-slate-500">{paper.venue}</span>
      </div>
      <h3 className="mt-4 font-en-title text-2xl leading-snug text-slate-950">{paper.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{paper.authors}</p>
      <p className="mt-4 text-[0.98rem] leading-8 text-slate-700">{paper.body}</p>
      <div className="mt-5 grid max-w-lg grid-cols-3 divide-x divide-slate-200 border-y border-slate-200">
        {paper.metrics.map(([value, label]) => (
          <div key={label} className="px-4 py-3 first:pl-0">
            <p className="font-en-title text-2xl text-slate-950">{value}</p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={paper.paperUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-sky-900 bg-sky-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800">
          {paper.read}<Icon name="external" className="h-4 w-4" />
        </a>
        <a href={paper.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-600 hover:text-sky-700">
          {paper.code}<Icon name="external" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function ProjectList({ projects, details }) {
  return (
    <div className="grid auto-rows-fr gap-4 md:grid-cols-2">
      {projects.map(([title, category, body, , tags, href = "#"]) => {
        const isExternal = href !== "#";
        return (
          <article key={title} className="flex h-full min-h-[280px] flex-col border border-slate-200 bg-white p-5 transition hover:border-sky-300 hover:shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-sky-800">{category}</p>
            <h3 className="mt-3 font-en-title text-2xl text-slate-950">{title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{tag}</span>
              ))}
            </div>
            <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-800 transition hover:text-sky-700">
              {details}
              <Icon name={isExternal ? "external" : "arrow"} className="h-4 w-4" />
            </a>
          </article>
        );
      })}
    </div>
  );
}

export default function WendaEditorialPortfolio() {
  const [lang, setLang] = React.useState("zh");
  const isZh = lang === "zh";
  const t = DATA[lang];
  return (
    <main className={`${isZh ? "font-cn-body" : "font-en-body"} min-h-screen bg-white text-slate-900 antialiased selection:bg-sky-100 selection:text-sky-950`}>
      <style>{CSS}</style>
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#about" className={`${isZh ? "font-cn-title text-2xl tracking-[0.12em]" : "font-en-title text-2xl"} text-slate-950`}>{t.brand}</a>
          <nav className="hidden items-center gap-7 md:flex">
            {t.nav.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-600 transition hover:text-sky-700">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Icon name="sun" className="hidden h-4 w-4 text-slate-500 sm:block" />
            <button type="button" onClick={() => setLang(isZh ? "en" : "zh")} className="border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
              {t.lang}
            </button>
            <Icon name="moon" className="hidden h-4 w-4 text-slate-500 sm:block" />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[280px_1fr] lg:py-14">
        <ProfileCard t={t} isZh={isZh} />
        <div>
          <Section id="about" title="About">
            <Intro t={t} />
          </Section>
          <Section id="news" title={t.newsTitle}>
            <NewsList items={t.news} />
          </Section>
          <Section id="experience" title={t.experienceTitle}>
            <ExperienceList items={t.experience} />
          </Section>
          <Section id="paper" title={t.paperTitle}>
            <PaperEntry paper={t.paper} />
          </Section>
          <Section id="projects" title={t.projectsTitle}>
            <ProjectList projects={t.projects} details={t.details} />
          </Section>
          <footer id="contact" className="py-10">
            <h2 className="mb-3 font-en-title text-2xl text-slate-950">{t.contact.title}</h2>
            <p className="text-sm leading-7 text-slate-600">{t.contact.desc}</p>
            <a href={`mailto:${t.email}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-800 hover:text-sky-600">
              <Icon name="mail" /> {t.email}
            </a>
            <p className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500">{t.contact.copyright}</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
