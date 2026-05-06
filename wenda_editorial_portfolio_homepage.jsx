import React from "react";

function Icon({ name, className = "h-5 w-5", strokeWidth = 1.35 }) {
  const common = { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    external: <path d="M14 4h6v6m0-6-9 9m-1-7H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />,
    sun: <path d="M12 4V2m0 20v-2m8-8h2M2 12h2m14.4-6.4 1.4-1.4M4.2 19.8l1.4-1.4m0-12.8L4.2 4.2m15.6 15.6-1.4-1.4M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
    moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 7 7 0 1 0 20 15.5Z" />,
    mail: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
    map: <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    user: <path d="M20 21a8 8 0 0 0-16 0m8-9a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />,
    spark: <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />,
    shield: <path d="M12 3l7 3v5c0 5-3.2 8.2-7 10-3.8-1.8-7-5-7-10V6l7-3Zm-3 9 2 2 4-5" />,
    cpu: <path d="M8 8h8v8H8zM4 9h2m-2 6h2m12-6h2m-2 6h2M9 4v2m6-2v2M9 18v2m6-2v2" />,
    book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12Zm0 0V18m4-11h8m-8 4h8" />,
    pen: <path d="M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Zm11-13 3 3" />,
    grad: <path d="M3 8l9-4 9 4-9 4-9-4Zm4 3v4c2 2 8 2 10 0v-4M21 8v6" />,
  };
  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

const DATA = {
  en: {
    brand: "Wenda Yu",
    nav: [["About", "about"], ["Experience", "experience"], ["Paper", "paper"], ["Projects", "projects"], ["Contact", "contact"]],
    lang: "中文",
    side: "Based in Shanghai",
    hero: {
      eyebrow: "Researcher · Builder · Long-term Thinker",
      title: "Wenda Yu",
      desc: "Exploring embodied intelligence, efficient systems, personal agents, and human-centered AI products — from research ideas to working prototypes.",
      primary: "View projects",
      secondary: "Contact me",
      quote: "Build systems that remember context, act safely, and turn ideas into useful things.",
      quoteBy: "— Wenda Yu"
    },
    paper: {
      eyebrow: "Featured Paper",
      status: "Accepted at IJCAI 2026",
      title: "AC²-VLA: Action-Context-Aware Adaptive Computation in Vision-Language-Action Models for Efficient Robotic Manipulation",
      authors: "Wenda Yu, Tianshi Wang, Fengling Li, Jingjing Li, Lei Zhu",
      venue: "IJCAI 2026 · arXiv:2601.19634 · Robotics",
      body: "AC²-VLA introduces an action-context-aware adaptive computation framework for efficient closed-loop VLA inference. It exploits temporal, spatial, and depth redundancies through cognition reuse, visual token pruning, and selective execution.",
      metrics: [["1.79×", "Speedup"], ["29.4%", "FLOPs"], ["3", "Redundancy axes"]],
      paperUrl: "https://arxiv.org/abs/2601.19634",
      codeUrl: "https://github.com/SunnyYWD/AC-2-VLA.git",
      read: "Read paper",
      code: "View code"
    },
    about: {
      title: "About Me",
      body: "I’m Wenda Yu, a software engineering undergraduate at Tongji University. My work connects embodied AI research, efficient VLA inference, safety evaluation, and AI-native product building.",
      items: [["grad", "Background", "Tongji University", "Software Engineering undergraduate in the College of Computer Science and Technology."], ["cpu", "Research", "Embodied AI", "Efficient inference, adaptive computation, and safety evaluation for VLA systems."], ["pen", "Builder", "AI Products", "From personal agents to hiring systems, turning ideas into usable prototypes."], ["book", "Interests", "Long-term Thinking", "Technology, society, finance, history, product design, and human-centered systems."]]
    },
    experienceTitle: "Experience",
    experienceAction: "View full CV",
    experience: [["2026 — Now", "VLA Safety & Robustness Research", "Research", "Vision-Language-Action Models"], ["2025.08 — 2026.01", "AC²-VLA Research", "Efficient VLA Inference", "CogACT · SIMPLER · Open-X"], ["2025.08 — 2025.09", "Software Engineering Intern", "Huawei Lianqiu Lake R&D Center", "ArkUI · OpenHarmony"], ["2025.01 — 2025.02", "Bond Underwriting Intern", "Sinolink Securities", "Finance · Research Reports"], ["2023 — Now", "B.E. Software Engineering", "Tongji University", "Shanghai, China"]],
    projectsTitle: "Featured Projects",
    projectsAction: "View all projects",
    details: "Details",
    projects: [["AC²-VLA", "VLA · Efficiency · Adaptive Computation", "Action-context-aware adaptive computation for efficient VLA inference, with token pruning, layer routing, and cache reuse.", "robot", ["CogACT", "SIMPLER", "CUDA"], "https://github.com/SunnyYWD/AC-2-VLA.git"], ["Safe VLA", "Safety · Robustness · Evaluation", "A research thread on real-world deployment risks, attack surfaces, and reproducible safety evaluation for VLA robot foundation models.", "shield", ["VLA", "Security", "Benchmark"], "#"], ["Me Agent", "Personal Agent · Memory · iOS", "A personal AI agent concept centered on long-term memory, contextual assistance, voice capture, collections, and mobile-first interaction.", "agent", ["iOS", "Memory", "Tools"], "https://sunnyywd.github.io/Me-Agent-support"], ["CareerPilot", "LLM · Matching · HR Platform", "An AI-driven recruiting platform prototype for semantic person-job matching, explainable candidate scoring, and HR-side workflows.", "dashboard", ["Vue", "LLM", "Matching"], "https://github.com/SunnyYWD/CareerPilot.git"], ["Phantom CleanView", "Video Editing · 3D Optical Flow", "An intelligent video object removal system guided by 3D optical-flow edges and point-cloud motion estimation, supporting target erasure and voice control.", "video", ["YOLOv8", "E2FGVI", "Streamlit"], "#"], ["JiSpeed", "Delivery Platform · Backend", "A full-stack food delivery and management platform covering ordering, merchant operations, rider dispatching, settlement, anomaly detection, and data visualization.", "delivery", ["Spring Boot", "Redis", "Vue"], "#"], ["LeWan", "Elderly Care · WeChat Mini Program", "A health companion mini program for elderly users, integrating medication reminders, health journals, SOS assistance, speech recognition, and LLM-based intent understanding.", "health", ["WXML", "ASR", "DeepSeek"], "#"], ["Farm Life Simulator", "Game Development · Cocos2d-x", "A Stardew Valley-inspired farming simulation game with crop planting, animal raising, resident interactions, festival activities, skill systems, and farm mechanics.", "game", ["C++", "Cocos2d-x", "Python"], "#"]],
    contact: { title: "Let’s Connect", desc: "Open to research conversations, collaboration, and thoughtful product ideas.", location: "Shanghai, China", org: "Tongji University", cta: "Get in touch", copyright: "© 2026 Wenda Yu. All rights reserved.", links: ["Privacy", "Terms", "Sitemap"] }
  },
  zh: {
    brand: "于闻达",
    nav: [["关于", "about"], ["经历", "experience"], ["论文", "paper"], ["项目", "projects"], ["联系", "contact"]],
    lang: "EN",
    side: "现居上海",
    hero: {
      eyebrow: "研究者 · 构建者 · 长期主义记录者",
      title: "于闻达",
      desc: "我关注具身智能、高效系统、个人智能体与以人为中心的 AI 产品，尝试把研究问题、工程能力和长期表达连接起来。",
      primary: "查看项目",
      secondary: "联系我",
      quote: "构建能够理解上下文、安全行动，并把想法真正变成有用系统的 AI。",
      quoteBy: "— 于闻达"
    },
    paper: {
      eyebrow: "代表论文",
      status: "已被 IJCAI 2026 接收",
      title: "AC²-VLA：面向高效机器人操作的动作上下文自适应计算 VLA 模型",
      authors: "于闻达（Wenda Yu）, Tianshi Wang, Fengling Li, Jingjing Li, Lei Zhu",
      venue: "IJCAI 2026 · arXiv:2601.19634 · Robotics",
      body: "AC²-VLA 提出面向闭环 VLA 推理的动作上下文自适应计算框架，通过认知复用、视觉 token 剪枝与模型组件选择性执行，挖掘时间、空间与深度维度的结构化冗余。",
      metrics: [["1.79×", "最高加速"], ["29.4%", "FLOPs"], ["3", "冗余维度"]],
      paperUrl: "https://arxiv.org/abs/2601.19634",
      codeUrl: "https://github.com/SunnyYWD/AC-2-VLA.git",
      read: "阅读论文",
      code: "查看代码"
    },
    about: {
      title: "关于我",
      body: "我是于闻达，同济大学计算机科学与技术学院软件工程专业本科生。当前工作围绕具身智能、高效 VLA 推理、安全与鲁棒性评测，以及 AI 原生产品构建展开。",
      items: [["grad", "背景", "同济大学", "计算机科学与技术学院软件工程专业本科生，长期关注 AI 系统与软件工程实践。"], ["cpu", "研究", "具身智能", "关注 VLA 模型的高效推理、自适应计算、安全评测与真实部署问题。"], ["pen", "构建", "AI 产品", "从个人智能体到智能招聘系统，把想法转化为可交互、可使用的原型。"], ["book", "兴趣", "长期思考", "关注科技、社会、财经、历史、产品设计与人的长期成长系统。"]]
    },
    experienceTitle: "经历",
    experienceAction: "查看完整简历",
    experience: [["2026 — 至今", "VLA 安全与鲁棒性研究", "科研经历", "Vision-Language-Action Models"], ["2025.08 — 2026.01", "AC²-VLA 推理加速研究", "高效 VLA 推理", "CogACT · SIMPLER · Open-X"], ["2025.08 — 2025.09", "软件开发工程师实习生", "华为练秋湖研发中心", "ArkUI · OpenHarmony"], ["2025.01 — 2025.02", "债券承做实习生", "国金证券股份有限公司", "财务分析 · 专题研究报告"], ["2023 — 至今", "软件工程专业本科", "同济大学", "上海，中国"]],
    projectsTitle: "代表项目",
    projectsAction: "查看全部项目",
    details: "查看详情",
    projects: [["AC²-VLA", "VLA · 高效推理 · 自适应计算", "面向机器人操控场景的动作上下文自适应计算框架，结合视觉 token 剪枝、动态跳层与缓存复用提升推理效率。", "robot", ["CogACT", "SIMPLER", "CUDA"], "https://github.com/SunnyYWD/AC-2-VLA.git"], ["Safe VLA", "安全 · 鲁棒性 · 评测", "围绕 VLA 机器人基础模型真实部署风险，研究多源输入攻击面、防护机制与可复现实验评测流程。", "shield", ["VLA", "安全", "评测"], "#"], ["Me Agent", "个人智能体 · 记忆 · iOS", "一个以长期记忆、上下文理解、语音捕捉、合集展示和移动端交互为核心的个人智能体产品设想。", "agent", ["iOS", "记忆", "工具调用"], "https://sunnyywd.github.io/Me-Agent-support"], ["CareerPilot", "LLM · 人岗匹配 · 招聘平台", "AI 驱动的招聘系统原型，支持语义级人岗匹配、可解释候选人评分和 HR 侧业务流程管理。", "dashboard", ["Vue", "LLM", "匹配"], "https://github.com/SunnyYWD/CareerPilot.git"], ["幻影净界", "视频编辑 · 3D 光流 · 目标无痕消除", "基于 3D 光流边缘引导与点云运动估计的视频目标无痕消除系统，支持指定目标擦除、视频元素编辑与语音控制交互。", "video", ["YOLOv8", "E2FGVI", "Streamlit"], "#"], ["JiSpeed", "外卖配送 · 后端系统 · 数据平台", "一站式外卖配送与管理平台，覆盖用户点餐、商家运营、骑手派单、后台结算、异常检测与全链路数据可视化。", "delivery", ["Spring Boot", "Redis", "Vue"], "#"], ["乐晚", "老年健康 · 微信小程序 · 语音 AI", "面向 60+ 老年用户的健康管理与陪伴小程序，集成用药提醒、健康日记、SOS 求助、一键联系、语音识别与大模型意图理解。", "health", ["WXML", "ASR", "DeepSeek"], "#"], ["农场生活模拟游戏", "游戏开发 · C++ · Cocos2d-x", "星露谷风格的农场生活模拟游戏，包含作物种植、动物养殖、居民互动、节日活动、技能系统与农场核心玩法。", "game", ["C++", "Cocos2d-x", "Python"], "#"]],
    contact: { title: "保持联系", desc: "欢迎交流研究、产品想法、长期项目和有意思的合作。", location: "上海，中国", org: "同济大学", cta: "联系我", copyright: "© 2026 于闻达。保留所有权利。", links: ["隐私", "条款", "站点地图"] }
  }
};

const CSS = `
@keyframes floatSoft { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(1.2deg); } }
@keyframes orbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes drawLine { 0% { stroke-dashoffset: 760; opacity: .2; } 100% { stroke-dashoffset: 0; opacity: .65; } }
@keyframes shimmer { 0% { transform: translateX(-110%); } 100% { transform: translateX(110%); } }
.animate-float-soft { animation: floatSoft 7s ease-in-out infinite; }
.animate-orbit { animation: orbit 32s linear infinite; transform-origin: center; }
.draw-line { stroke-dasharray: 760; animation: drawLine 4.8s ease-in-out infinite alternate; }
.shimmer::after { content: ''; position: absolute; inset: 0; width: 55%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.32), transparent); animation: shimmer 3.8s ease-in-out infinite; }
.font-cn-title { font-family: "Songti SC", "STSong", "Noto Serif SC", "Source Han Serif SC", "SimSun", serif; font-weight: 400; }
.font-cn-body { font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", system-ui, sans-serif; }
.font-en-title { font-family: "Iowan Old Style", "Palatino Linotype", Georgia, "Times New Roman", serif; font-weight: 400; }
.font-en-body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
@media (prefers-reduced-motion: reduce) { .animate-float-soft, .animate-orbit, .draw-line, .shimmer::after { animation: none; } }
`;

function AbstractImage({ type }) {
  const label = type || "default";
  return (
    <div className="relative h-full overflow-hidden bg-[#ded6c9]">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#8d806f_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="absolute -left-10 -top-12 h-44 w-44 rounded-full bg-[#fbf7ef]/55 blur-2xl" />
      <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#b9aa94]/60" />
      {label === "robot" && (
        <>
          <div className="absolute left-14 top-24 h-2 w-36 -rotate-12 rounded-full bg-[#6f675d]" />
          <div className="absolute left-36 top-16 h-2 w-28 rotate-[28deg] rounded-full bg-[#8c806f]" />
          <div className="absolute left-56 top-28 h-16 w-16 rounded-full border-[10px] border-[#7b7266]" />
        </>
      )}
      {label === "shield" && <Icon name="shield" className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-[#756a5d]" strokeWidth={1.15} />}
      {label === "agent" && <div className="absolute bottom-8 right-8 h-32 w-32 rounded-[48%_52%_45%_55%] bg-[#d8cbbb]" />}
      {label === "dashboard" && <><div className="absolute inset-x-8 top-10 h-4 rounded-full bg-[#f7f2ea]" /><div className="absolute inset-x-8 top-24 h-4 rounded-full bg-[#f7f2ea]" /><div className="absolute inset-x-8 top-[9.5rem] h-4 rounded-full bg-[#f7f2ea]" /></>}
      {label === "video" && <div className="absolute left-8 top-8 h-28 w-44 rounded-[28px] border border-[#8a7c68]/70 bg-[#f6f1e9]/45" />}
      {label === "delivery" && <div className="absolute left-10 top-10 h-24 w-36 rounded-[28px] border border-[#8a7c68] bg-[#f7f2ea]/55" />}
      {label === "health" && <div className="absolute left-10 top-10 h-36 w-28 rounded-[34px] border border-[#9f8966] bg-[#f9f4ec]/70" />}
      {label === "game" && <div className="absolute bottom-16 left-12 h-14 w-10 rounded-t-full bg-[#8a7454] shadow-[64px_-16px_0_8px_rgba(169,147,117,.75),136px_0_0_rgba(123,114,102,.9)]" />}
      <svg className="absolute bottom-6 left-8 h-20 w-56 text-[#8a7454]/70" viewBox="0 0 220 80" fill="none"><path d="M8 62C48 10 84 72 124 28s56 10 88-6" className="draw-line" stroke="currentColor" strokeWidth="1.2" /></svg>
    </div>
  );
}

function SectionTitle({ children, action, isZh }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <div><div className="mb-3 flex items-center gap-3 text-[#9c875f]"><span className="h-px w-12 bg-current" /><Icon name="spark" className="h-4 w-4" strokeWidth={1.1} /></div><h2 className={`${isZh ? "text-3xl tracking-[0.18em]" : "font-en-title text-3xl uppercase tracking-[0.22em]"} text-[#1d1b18]`}>{children}</h2></div>
      {action && <a className="group inline-flex items-center gap-3 border-b border-[#b5a183] pb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#6d604d]" href="#">{action}<Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>}
    </div>
  );
}

function HeroVisual({ t, isZh }) {
  return (
    <div className="relative min-h-[610px] overflow-hidden border-t border-[#ded5c8]/80 lg:border-l lg:border-t-0">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0,transparent_24%,rgba(177,160,134,.2)_24%,rgba(177,160,134,.2)_24.3%,transparent_24.3%),linear-gradient(0deg,transparent_0,transparent_65%,rgba(177,160,134,.18)_65%,rgba(177,160,134,.18)_65.3%,transparent_65.3%)]" />
      <div className="absolute left-[4%] top-[7%] h-[520px] w-[520px] rounded-t-full rounded-b-[40px] bg-[#d7cbbb]/82 shadow-[inset_0_0_0_1px_rgba(255,255,255,.38)]" />
      <div className="absolute left-[11%] top-[14%] h-[405px] w-[405px] rounded-t-full rounded-b-[32px] border border-white/60 bg-[radial-gradient(circle_at_32%_20%,#f7f1e9,transparent_32%),linear-gradient(135deg,#c8baa8,#eee7dd)]" />
      <div className="absolute left-[9%] top-[12%] h-[410px] w-[410px] rounded-full border border-white/55 animate-orbit" />
      <div className="absolute left-[21%] top-[21%] h-36 w-36 rounded-full bg-[#2b2521] shadow-[64px_42px_0_18px_rgba(43,37,33,.92)] animate-float-soft" />
      <div className="absolute left-[29%] top-[45%] h-52 w-40 rounded-t-[72px] bg-[#b5a99b]/92" />
      <div className="absolute left-[19%] top-[40%] h-24 w-40 rounded-full bg-[#e7ded2]" />
      <aside className="absolute bottom-12 right-10 z-20 w-[min(360px,calc(100%-5rem))] border border-[#d8c8b0]/80 bg-[#f6f1e9]/90 px-8 py-7 shadow-[0_18px_60px_rgba(56,46,34,.12)] backdrop-blur-md"><p className="font-en-title text-4xl leading-none text-[#1b1814]">“</p><p className={`${isZh ? "text-[1.32rem] leading-10 tracking-[0.02em]" : "font-en-title text-[1.35rem] leading-8"} mt-2 text-[#302920]`}>{t.hero.quote}</p><p className="mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-[#7e6c51]">{t.hero.quoteBy}</p><div className="mt-6 h-px w-28 bg-[#a89272]" /></aside>
    </div>
  );
}

function AboutFusion({ about, isZh }) {
  return (
    <div className="mx-auto grid max-w-[1560px] grid-cols-1 border-t border-[#ded5c8]/80 lg:grid-cols-[0.84fr_1.16fr]">
      <div className="relative overflow-hidden border-b border-[#ded5c8]/80 px-6 py-12 md:px-10 lg:border-b-0 lg:border-r xl:pl-28">
        <div className="absolute right-8 top-8 h-40 w-40 rounded-full border border-[#cdbda5]/70" />
        <div className="absolute bottom-0 right-0 h-32 w-56 bg-[radial-gradient(circle_at_70%_40%,rgba(167,147,114,.18),transparent_60%)]" />
        <div className="relative max-w-2xl">
          <div className="mb-7 flex items-center gap-4 text-[#9c875f]">
            <span className="h-px w-16 bg-current" />
            <Icon name="spark" className="h-4 w-4" strokeWidth={1.1} />
          </div>
          <h2 className={`${isZh ? "text-[2.35rem] tracking-[0.18em]" : "font-en-title text-[2.45rem] uppercase tracking-[0.18em]"} text-[#1d1b18]`}>{about.title}</h2>
          <p className={`${isZh ? "leading-9" : "leading-8"} mt-7 text-base text-[#665d52]`}>{about.body}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y divide-[#ded5c8]/80 md:grid-cols-4 md:divide-x md:divide-y-0">
        {about.items.map(([icon, label, title, body]) => (
          <div key={label} className="group relative min-h-[280px] px-7 py-10 transition duration-300 hover:bg-[#fbf7ef]/55">
            <Icon name={icon} className="h-8 w-8 text-[#887657] transition duration-300 group-hover:-translate-y-1" strokeWidth={1.2} />
            <p className={`${isZh ? "tracking-[0.22em]" : "uppercase tracking-[0.28em]"} mt-8 text-[10px] font-bold text-[#8d806f]`}>{label}</p>
            <h3 className={`${isZh ? "text-xl tracking-[0.04em]" : "font-en-title text-2xl"} mt-5 text-[#231f1a]`}>{title}</h3>
            <p className={`${isZh ? "leading-8" : "leading-7"} mt-4 text-sm text-[#6d6459]`}>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaperSpotlight({ paper, isZh }) {
  return (
    <section id="paper" className="relative z-10 border-b border-[#ded5c8]/80 bg-[#f1eadf]/45 px-6 py-16 md:px-10 xl:px-24">
      <div className="mx-auto grid max-w-[1560px] grid-cols-1 overflow-hidden border-x border-[#ded5c8]/80 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[360px] border-b border-[#ded5c8]/80 bg-[#eee5d8] p-8 lg:border-b-0 lg:border-r lg:p-12"><div className="absolute inset-0 opacity-[0.2] [background-image:radial-gradient(#8d806f_0.8px,transparent_0.8px)] [background-size:18px_18px]" /><div className="relative z-10 flex h-full flex-col justify-between"><div><div className="flex flex-wrap items-center gap-3"><p className={`${isZh ? "tracking-[0.18em]" : "uppercase tracking-[0.26em]"} text-xs font-bold text-[#8c7654]`}>{paper.eyebrow}</p><span className="border border-[#bda783] bg-[#fbf7ef]/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7e6c51]">{paper.status}</span></div><h2 className="font-en-title mt-6 text-[clamp(2.2rem,3.5vw,3.8rem)] leading-[1.04] text-[#211e19]">AC²-VLA</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#6c6256]">{paper.venue}</p></div><div className="mt-10 grid grid-cols-3 divide-x divide-[#cabba5] border-y border-[#cabba5]">{paper.metrics.map(([value, label]) => <div key={label} className="py-5 pr-5 first:pl-0 [&:not(:first-child)]:pl-5"><p className="font-en-title text-3xl text-[#211e19]">{value}</p><p className={`${isZh ? "tracking-[0.16em]" : "uppercase tracking-[0.22em]"} mt-2 text-[10px] font-bold text-[#8c7654]`}>{label}</p></div>)}</div></div></div>
        <div className="relative bg-[#f6f1e9]/80 p-8 lg:p-12"><div className="relative z-10 max-w-4xl"><p className={`${isZh ? "tracking-[0.14em]" : "uppercase tracking-[0.2em]"} text-[11px] font-bold text-[#8c7654]`}>{paper.authors}</p><div className="mt-5 flex flex-wrap items-center gap-3"><span className="rounded-full bg-[#a79372] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white">{paper.status}</span><span className="text-sm leading-6 text-[#7a6e60]">{paper.venue}</span></div><h3 className={`${isZh ? "font-cn-title mt-6 text-[1.9rem] leading-[1.55] tracking-[0.02em]" : "font-en-title mt-6 text-[2.25rem] leading-[1.2]"} text-[#211e19]`}>{paper.title}</h3><p className={`${isZh ? "leading-9" : "leading-8"} mt-7 text-base text-[#665d52]`}>{paper.body}</p><div className="mt-9 flex flex-wrap gap-5"><a href={paper.paperUrl} target="_blank" rel="noreferrer" className="group shimmer relative inline-flex h-12 items-center gap-8 overflow-hidden bg-[#a79372] px-8 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-[#8d795a]"><span className="relative z-10">{paper.read}</span><Icon name="external" className="relative z-10 h-4 w-4" /></a><a href={paper.codeUrl} target="_blank" rel="noreferrer" className="group inline-flex h-12 items-center gap-4 border border-[#b9ac99] bg-[#fbf7ef]/45 px-8 text-xs font-bold uppercase tracking-[0.22em] text-[#4e4538] transition hover:border-[#8d795a] hover:text-[#8d795a]">{paper.code}<Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a></div></div></div>
      </div>
    </section>
  );
}

function ProjectCard({ item, isZh, details, index }) {
  const [title, category, body, image, tags, href = "#"] = item;
  const isExternal = href !== "#";
  return <article className={`group relative overflow-hidden border border-[#d9d0c4] bg-[#f7f2ea] shadow-[0_18px_60px_rgba(66,50,30,.05)] transition duration-500 hover:-translate-y-1.5 hover:border-[#bba98e] hover:shadow-[0_32px_100px_rgba(66,50,30,.13)] ${index === 0 ? "lg:col-span-2" : ""}`}><div className={`h-48 overflow-hidden ${index === 0 ? "lg:h-56" : ""}`}><AbstractImage type={image} /></div><div className="p-7"><div className="mb-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-[#d3c4ad] bg-[#fbf7ef]/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a7454]">{tag}</span>)}</div><h3 className="font-en-title text-3xl text-[#211e19]">{title}</h3><p className={`${isZh ? "tracking-[0.15em]" : "uppercase tracking-[0.24em]"} mt-4 text-[10px] font-bold text-[#8c7654]`}>{category}</p><p className="mt-5 min-h-28 text-sm leading-7 text-[#6c6256]">{body}</p><a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="mt-6 inline-flex items-center gap-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#5d5347]">{details}<Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a></div></article>;
}

function ExperienceTimeline({ items, isZh }) {
  return <div className="relative overflow-hidden px-4 pb-2 pt-8"><div className="absolute left-4 right-4 top-[50px] hidden h-px bg-[#a99b87] lg:block" /><div className="grid grid-cols-1 gap-10 lg:grid-cols-5">{items.map(([date, title, org, location], index) => <div key={title} className="relative group"><div className="mb-8 hidden h-5 w-5 rounded-full border border-[#998b77] bg-[#f6f1e9] ring-4 ring-[#f6f1e9] transition group-hover:scale-125 lg:block"><div className={`${index === 0 ? "bg-[#a88c61]" : "bg-transparent"} m-[5px] h-[8px] w-[8px] rounded-full`} /></div><p className="text-xs font-semibold text-[#8d806f]">{date}</p><h3 className={`${isZh ? "text-lg" : "font-en-title text-xl"} mt-4 text-[#211e19]`}>{title}</h3><p className="mt-2 text-sm font-semibold text-[#4c453c]">{org}</p><p className="mt-1 text-sm text-[#7a7064]">{location}</p></div>)}</div></div>;
}

export default function WendaEditorialPortfolio() {
  const [lang, setLang] = React.useState("zh");
  const isZh = lang === "zh";
  const t = DATA[lang];
  return (
    <main className={`${isZh ? "font-cn-body" : "font-en-body"} min-h-screen bg-[#f6f1e9] text-[#24211d] antialiased selection:bg-[#d7c2a2] selection:text-[#1e1a15]`}>
      <style>{CSS}</style><div className="pointer-events-none fixed inset-0 opacity-[0.46] [background:radial-gradient(circle_at_20%_10%,#fff_0,transparent_25%),radial-gradient(circle_at_82%_0,#e5d8c5_0,transparent_30%),linear-gradient(120deg,rgba(166,143,101,.08),transparent_34%,rgba(255,255,255,.2)_70%,transparent)]" /><div className="pointer-events-none fixed inset-0 opacity-[0.18] [background-image:radial-gradient(#9b8766_0.7px,transparent_0.7px)] [background-size:24px_24px]" />
      <header className="sticky top-0 z-50 border-b border-[#ded5c8]/80 bg-[#f6f1e9]/78 backdrop-blur-xl"><div className="mx-auto flex max-w-[1560px] items-center justify-between px-6 py-5 md:px-10 md:py-7"><a href="#" className={`${isZh ? "font-cn-title text-[1.72rem] tracking-[0.14em]" : "font-en-title text-[1.65rem] tracking-[0.08em]"} text-[#161410]`}>{t.brand}</a><nav className="hidden items-center gap-10 lg:flex xl:gap-12">{t.nav.map(([label, id]) => <a key={id} href={`#${id}`} className={`${isZh ? "tracking-[0.22em]" : "uppercase tracking-[0.32em]"} relative text-[11px] font-semibold text-[#312d27] transition hover:text-[#a38455] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#a38455] after:transition-all hover:after:w-full`}>{label}</a>)}</nav><div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#312d27]"><Icon name="sun" className="h-5 w-5" strokeWidth={1.2} /><button type="button" onClick={() => setLang(isZh ? "en" : "zh")} className="min-w-12 rounded-full border border-[#d6c7b1] bg-[#fbf7ef]/70 px-3 py-2 text-center transition hover:border-[#a38455] hover:text-[#a38455]">{t.lang}</button><Icon name="moon" className="h-4 w-4" strokeWidth={1.2} /></div></div></header>
      <section id="about" className="relative z-10 overflow-hidden border-b border-[#ded5c8]/80">
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative px-6 py-20 md:px-10 lg:py-32 xl:pl-28">
            <div className="absolute left-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-8 xl:flex">
              <div className="h-28 w-px bg-[#b5a183]" />
              <p className={`${isZh ? "tracking-[0.3em]" : "tracking-[0.34em]"} rotate-180 text-[11px] font-semibold uppercase text-[#51483c] [writing-mode:vertical-rl]`}>{t.side}</p>
              <div className="h-28 w-px bg-[#b5a183]" />
            </div>
            <p className={`${isZh ? "tracking-[0.24em]" : "uppercase tracking-[0.38em]"} mb-8 text-xs font-bold text-[#5d554b]`}>{t.hero.eyebrow}</p>
            <h1 className={`${isZh ? "font-cn-title text-[clamp(2.8rem,5.8vw,5.4rem)] tracking-[0.06em]" : "font-en-title text-[clamp(3.4rem,7vw,6.2rem)] tracking-[0.035em]"} leading-[1.06] text-[#14120f]`}>{t.hero.title}</h1>
            <div className="mt-8 flex items-center gap-5"><div className="h-px w-20 bg-[#a89272]" /><Icon name="spark" className="h-4 w-4 text-[#a89272]" /></div>
            <p className={`${isZh ? "text-lg leading-9" : "text-lg leading-8"} mt-9 max-w-xl text-[#6a6258]`}>{t.hero.desc}</p>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="#projects" className="group shimmer relative inline-flex h-12 items-center gap-8 overflow-hidden bg-[#a79372] px-9 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#8d795a]"><span className="relative z-10">{t.hero.primary}</span><Icon name="arrow" className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
              <a href="#contact" className="group inline-flex h-12 items-center gap-4 border border-[#b9ac99] bg-[#fbf7ef]/40 px-8 text-xs font-bold uppercase tracking-[0.25em] text-[#4e4538] transition hover:border-[#8d795a] hover:text-[#8d795a]">{t.hero.secondary}<Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a>
            </div>
          </div>
          <HeroVisual t={t} isZh={isZh} />
        </div>
        <AboutFusion about={t.about} isZh={isZh} />
      </section>
      <section id="experience" className="relative z-10 border-b border-[#ded5c8]/80 px-6 py-18 md:px-10 xl:px-24"><div className="mx-auto max-w-[1560px]"><SectionTitle action={t.experienceAction} isZh={isZh}>{t.experienceTitle}</SectionTitle><ExperienceTimeline items={t.experience} isZh={isZh} /></div></section>
      <PaperSpotlight paper={t.paper} isZh={isZh} />
      <section id="projects" className="relative z-10 border-b border-[#ded5c8]/80 px-6 py-18 md:px-10 xl:px-24"><div className="mx-auto max-w-[1560px]"><SectionTitle action={t.projectsAction} isZh={isZh}>{t.projectsTitle}</SectionTitle><div className="grid grid-cols-1 gap-8 lg:grid-cols-4">{t.projects.map((item, index) => <ProjectCard key={item[0]} item={item} isZh={isZh} details={t.details} index={index} />)}</div></div></section>
      <footer id="contact" className="relative z-10 px-6 py-12 md:px-10 xl:px-24"><div className="mx-auto grid max-w-[1560px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_2fr_auto]"><div><h2 className={`${isZh ? "text-4xl tracking-[0.18em]" : "font-en-title text-4xl uppercase tracking-[0.18em]"}`}>{t.contact.title}</h2><p className={`${isZh ? "leading-7" : "leading-6"} mt-4 text-sm text-[#6c6256]`}>{t.contact.desc}</p></div><div className="grid grid-cols-1 gap-6 border-y border-[#d8cfc1] py-7 md:grid-cols-3 lg:border-x lg:border-y-0 lg:px-12 lg:py-0"><a className="flex items-center gap-4 text-sm text-[#5a5148] transition hover:text-[#9a835e]" href="mailto:yu_wenda@126.com"><Icon name="mail" className="h-5 w-5" strokeWidth={1.3} /> yu_wenda@126.com</a><span className="flex items-center gap-4 text-sm text-[#5a5148]"><Icon name="map" className="h-5 w-5" strokeWidth={1.3} /> {t.contact.location}</span><span className="flex items-center gap-4 text-sm text-[#5a5148]"><Icon name="user" className="h-5 w-5" strokeWidth={1.3} /> {t.contact.org}</span></div><a href="mailto:yu_wenda@126.com" className="group shimmer relative inline-flex h-14 items-center justify-center gap-8 overflow-hidden border border-[#9e907e] px-9 text-xs font-bold uppercase tracking-[0.25em] transition hover:bg-[#211e19] hover:text-[#f6f1e9]"><span className="relative z-10">{t.contact.cta}</span><Icon name="arrow" className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></a></div><div className="mx-auto mt-10 flex max-w-[1560px] flex-col gap-5 border-t border-[#d8cfc1] pt-7 text-[11px] uppercase tracking-[0.24em] text-[#7a7064] md:flex-row md:items-center md:justify-between"><span>{t.contact.copyright}</span><div className="flex gap-9">{t.contact.links.map((item) => <a className="transition hover:text-[#8c7654]" key={item} href="#">{item}</a>)}</div></div></footer>
    </main>
  );
}
