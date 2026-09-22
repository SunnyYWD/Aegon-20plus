import React from "react";

const PROFILE_PHOTO = `${import.meta.env.BASE_URL}profile-photo.png`;

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
    book: <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 1 4 17.5v-12Zm0 0V18m4-11h8m-8 4h8" />,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7A5.4 5.4 0 0 0 19.28 3.75 5 5 0 0 0 19.14 0S17.95-.36 15 1.48a13.38 13.38 0 0 0-7 0C5.05-.36 3.86 0 3.86 0a5 5 0 0 0-.14 3.75A5.4 5.4 0 0 0 2.28 7.5c0 5.38 3.44 6.64 6.72 7A4.8 4.8 0 0 0 8 18v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></>,
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
    nav: [["About", "about"], ["Papers", "paper"], ["News", "news"], ["Internships", "experience"], ["Projects", "projects"]],
    lang: "中文",
    role: "Incoming CS PhD Student",
    org: "Shanghai Jiao Tong University",
    location: "Shanghai, China",
    email: "yu_wenda@126.com",
    languageScore: "IELTS 7.5",
    intro: [
      "I’m Wenda Yu, an incoming PhD student in Computer Science and Technology at Shanghai Jiao Tong University. My research focuses on embodied intelligence and vision-language-action models, especially efficient inference, runtime safeguarding, and reliable execution in real-world environments.",
      "I led AC²-VLA as an independent first author, developing action-context-aware adaptive computation for efficient VLA inference. I am also the first author of ActFovea, a plug-and-play runtime safeguarding framework that uses spatiotemporal visual-action consistency to detect disturbances, recover trustworthy observations, verify action chunks, and trigger bounded safe failure when reliable recovery is impossible.",
      "Beyond these projects, I am interested in world-model-assisted prediction and planning, agent mechanisms, LLM memory, and the organization and retrieval of multimodal interaction histories."
    ],
    introLinks: [["AC²-VLA", "https://arxiv.org/abs/2601.19634"], ["ActFovea", "https://arxiv.org/abs/2607.29169"]],
    links: [["GitHub", "https://github.com/SunnyYWD"]],
    educationTitle: "Education",
    education: [
      ["2027.09", "PhD in Computer Science and Technology", "Shanghai Jiao Tong University · School of Computer Science"],
      ["2023.09 — 2027.06", "B.E. in Software Engineering", "Tongji University · College of Computer Science and Technology"]
    ],
    newsTitle: "News",
    news: [
      ["2026.07", "Released the ActFovea preprint on arXiv, presenting a plug-and-play runtime safeguard for VLA policies."],
      ["2026.05", "AC²-VLA paper was accepted by IJCAI 2026."],
      ["2026.04", "Independently developed Me Agent, an iOS app for personal agents and long-term memory."],
      ["2026.01", "Started ActFovea research on runtime safety and robustness for VLA policies."],
      ["2025.09", "Started CareerPilot, an intelligent recruiting and career-growth system."],
      ["2025.08", "Started AC²-VLA efficient VLA inference research and interned at Huawei Shanghai Research Institute."],
      ["2025.03", "Started developing JiSpeed, a food delivery and management platform."],
      ["2025.01", "Interned at Sinolink Securities, supporting bond underwriting and financial research."],
      ["2024.04", "Joined the video moving-object removal research project, later implemented as Phantom CleanView."]
    ],
    experienceTitle: "Internships",
    experience: [
      ["2025.08 — 2025.09", "Software Engineering Intern", "Huawei Shanghai Research Institute · OpenHarmony", "ArkUI · OpenHarmony"],
      ["2025.01 — 2025.02", "Bond Underwriting Intern", "Sinolink Securities · Bond Department III", "Financial Analysis · Thematic Research Reports"]
    ],
    paperTitle: "Selected Publications",
    papers: [
      {
        status: "arXiv 2026",
        title: "ActFovea: Runtime Safeguarding for VLA Policies via Spatiotemporal Visual-Action Consistency",
        authorName: "Wenda Yu",
        authors: ", Tianshi Wang, Fengling Li, Xin Li, Jingjing Li, Lei Zhu",
        venue: "arXiv:2607.29169 · Robotics",
        body: "ActFovea is a plug-and-play runtime safeguarding framework for frozen VLA policies. It combines action-conditioned foveation, spatiotemporal consistency monitoring, observation recovery, action-chunk verification, and recoverability-aware safe failure without retraining the underlying policy.",
        metrics: [["93.7%", "Attack gap recovered"], ["+9.8 pp", "Visual-delay success"]],
        paperUrl: "https://arxiv.org/abs/2607.29169",
        codeUrl: "https://github.com/SunnyYWD/ActFovea",
        read: "Paper",
        code: "Code"
      },
      {
        status: "IJCAI 2026",
        title: "AC²-VLA: Action-Context-Aware Adaptive Computation in Vision-Language-Action Models for Efficient Robotic Manipulation",
        authorName: "Wenda Yu",
        authors: ", Tianshi Wang, Fengling Li, Jingjing Li, Lei Zhu",
        venue: "IJCAI 2026 · arXiv:2601.19634 · Robotics",
        body: "AC²-VLA introduces an action-context-aware adaptive computation framework for efficient closed-loop VLA inference. It exploits temporal, spatial, and depth redundancies through cognition reuse, visual token pruning, and selective execution.",
        metrics: [["1.79×", "Speedup"], ["29.4%", "FLOPs"], ["3", "Redundancy axes"]],
        paperUrl: "https://arxiv.org/abs/2601.19634",
        codeUrl: "https://github.com/SunnyYWD/AC-2-VLA.git",
        read: "Paper",
        code: "Code"
      }
    ],
    projectsTitle: "Projects",
    details: "Details",
    projects: [
      ["AC²-VLA", "VLA · Efficiency · Adaptive Computation", "Action-context-aware adaptive computation for efficient VLA inference, with token pruning, layer routing, and cache reuse.", "robot", ["CogACT", "SIMPLER", "CUDA"], "https://github.com/SunnyYWD/AC-2-VLA.git"],
      ["ActFovea", "VLA · Runtime Safety · Robustness", "A plug-and-play runtime safeguard that detects spatiotemporal visual-action inconsistencies, recovers trustworthy observations, verifies action chunks, and safely suppresses motion when recovery is not justified.", "shield", ["VLA", "Safety", "LIBERO"], "https://arxiv.org/abs/2607.29169"],
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
    nav: [["关于", "about"], ["论文", "paper"], ["动态", "news"], ["实习经历", "experience"], ["项目", "projects"]],
    lang: "EN",
    role: "CS PhD Student",
    org: "上海交通大学",
    location: "上海，中国",
    email: "yu_wenda@126.com",
    languageScore: "雅思 7.5",
    intro: [
      "我是于闻达，将于 2027 年 9 月进入上海交通大学计算机学院攻读计算机科学与技术博士学位。我的研究聚焦具身智能与视觉-语言-动作模型，尤其关注高效推理、运行时安全，以及真实环境中的可靠执行。",
      "我以独立第一作者开展 AC²-VLA 研究，探索面向 VLA 高效推理的动作上下文自适应计算；同时作为第一作者提出 ActFovea，通过时空视觉-动作一致性检测运行时扰动，恢复可信观测、验证动作 chunk，并在无法可靠恢复时触发有界安全失效。",
      "在此基础上，我也关注世界模型辅助的预测与规划、Agent 机制、LLM Memory，以及多模态交互历史的组织、检索与利用。"
    ],
    introLinks: [["AC²-VLA", "https://arxiv.org/abs/2601.19634"], ["ActFovea", "https://arxiv.org/abs/2607.29169"]],
    links: [["GitHub", "https://github.com/SunnyYWD"]],
    educationTitle: "教育经历",
    education: [
      ["2027.09 入学", "计算机科学与技术专业博士研究生", "上海交通大学｜计算机学院"],
      ["2023.09 — 2027.06", "软件工程专业本科", "同济大学｜计算机科学与技术学院"]
    ],
    newsTitle: "近期动态",
    news: [
      ["2026.07", "ActFovea 预印本发布于 arXiv，提出面向 VLA 策略的即插即用运行时安全防护框架。"],
      ["2026.05", "AC²-VLA 论文被 IJCAI 2026 录用。"],
      ["2026.04", "独立开发 Me Agent 个人智能体与长期记忆助手 iOS 应用。"],
      ["2026.01", "启动 ActFovea 研究，探索 VLA 策略的运行时安全与鲁棒性。"],
      ["2025.09", "启动 CareerPilot 智能匹配与职业成长招聘系统项目。"],
      ["2025.08", "开展 AC²-VLA 高效 VLA 推理研究，并在华为上海研究所 OpenHarmony 二部实习。"],
      ["2025.03", "开始 JiSpeed 外卖配送与管理平台开发。"],
      ["2025.01", "在国金证券债券三部实习，参与债券承做与专题研究工作。"],
      ["2024.04", "参与视频运动目标无痕消除方法研究，成果落地「幻影净界」系统。"]
    ],
    experienceTitle: "实习经历",
    experience: [
      ["2025.08 — 2025.09", "软件开发工程师实习生", "华为上海研究所｜终端 BG OpenHarmony 二部", "ArkUI · OpenHarmony"],
      ["2025.01 — 2025.02", "债券承做实习生", "国金证券股份有限公司｜债券三部", "财务分析 · 专题研究报告"]
    ],
    paperTitle: "代表论文",
    papers: [
      {
        status: "arXiv 2026",
        title: "ActFovea：基于时空视觉-动作一致性的 VLA 策略运行时安全防护",
        authorName: "于闻达（Wenda Yu）",
        authors: ", Tianshi Wang, Fengling Li, Xin Li, Jingjing Li, Lei Zhu",
        venue: "arXiv:2607.29169 · Robotics",
        body: "ActFovea 是面向冻结 VLA 策略的即插即用运行时安全防护框架，结合动作条件注视、时空一致性监测、观测恢复、动作 chunk 验证与可恢复性感知的安全失效机制，无需重新训练底层策略。",
        metrics: [["93.7%", "攻击差距恢复"], ["+9.8 pp", "视觉延迟成功率"]],
        paperUrl: "https://arxiv.org/abs/2607.29169",
        codeUrl: "https://github.com/SunnyYWD/ActFovea",
        read: "论文",
        code: "代码"
      },
      {
        status: "IJCAI 2026",
        title: "AC²-VLA：面向高效机器人操作的动作上下文自适应计算 VLA 模型",
        authorName: "于闻达（Wenda Yu）",
        authors: ", Tianshi Wang, Fengling Li, Jingjing Li, Lei Zhu",
        venue: "IJCAI 2026 · arXiv:2601.19634 · Robotics",
        body: "AC²-VLA 提出面向闭环 VLA 推理的动作上下文自适应计算框架，通过认知复用、视觉 token 剪枝与模型组件选择性执行，挖掘时间、空间与深度维度的结构化冗余。",
        metrics: [["1.79×", "最高加速"], ["29.4%", "FLOPs"], ["3", "冗余维度"]],
        paperUrl: "https://arxiv.org/abs/2601.19634",
        codeUrl: "https://github.com/SunnyYWD/AC-2-VLA.git",
        read: "论文",
        code: "代码"
      }
    ],
    projectsTitle: "项目",
    details: "查看详情",
    projects: [
      ["AC²-VLA", "VLA · 高效推理 · 自适应计算", "面向机器人操控场景的动作上下文自适应计算框架，结合视觉 token 剪枝、动态跳层与缓存复用提升推理效率。", "robot", ["CogACT", "SIMPLER", "CUDA"], "https://github.com/SunnyYWD/AC-2-VLA.git"],
      ["ActFovea", "VLA · 运行时安全 · 鲁棒性", "面向 VLA 策略的即插即用运行时防护框架，通过时空视觉-动作一致性检测扰动，恢复可信观测、验证动作 chunk，并在无法合理恢复时安全抑制运动。", "shield", ["VLA", "安全", "LIBERO"], "https://arxiv.org/abs/2607.29169"],
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
        <div className="mx-auto aspect-square w-44 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
          <img src={PROFILE_PHOTO} alt={t.brand} className="h-full w-full object-cover object-[50%_38%]" />
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
            <Icon name="book" className="h-4 w-4 text-slate-500" /> {t.languageScore}
          </div>
          {t.links.map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-sky-700">
              <Icon name="github" className="h-4 w-4 shrink-0 text-slate-500" /> {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

function RichText({ text, links }) {
  let parts = [text];

  links.forEach(([label, href]) => {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string" || !part.includes(label)) return [part];
      const segments = part.split(label);
      return segments.flatMap((segment, index) => (
        index === segments.length - 1
          ? [segment]
          : [segment, { label, href, key: `${label}-${index}-${segment.length}` }]
      ));
    });
  });

  return parts.map((part, index) => (
    typeof part === "string"
      ? <React.Fragment key={`text-${index}`}>{part}</React.Fragment>
      : (
        <a
          key={`${part.key}-${index}`}
          href={part.href}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-600"
        >
          {part.label}
        </a>
      )
  ));
}

function Intro({ t }) {
  return (
    <div className="space-y-5 rounded-[22px] border border-slate-200 bg-white px-6 py-7 text-[1.02rem] leading-8 text-slate-700 shadow-[0_12px_32px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8 md:text-[1.08rem] md:leading-9">
      {t.intro.map((paragraph) => (
        <p key={paragraph}><RichText text={paragraph} links={t.introLinks} /></p>
      ))}
    </div>
  );
}

function EducationList({ title, items }) {
  return (
    <div className="mt-8">
      <h3 className="mb-4 font-en-title text-2xl text-slate-950">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map(([date, degree, school, detail]) => (
          <article key={`${date}-${degree}`} className="border border-slate-200 bg-slate-50/60 p-5">
            <time className="text-xs font-bold uppercase tracking-[0.12em] text-sky-800">{date}</time>
            <h4 className="mt-3 text-base font-semibold leading-7 text-slate-950">{degree}</h4>
            <p className="mt-1 text-sm leading-6 text-slate-700">{school}</p>
            {detail && <p className="mt-1 text-sm leading-6 text-slate-500">{detail}</p>}
          </article>
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
      <p className="mt-3 text-sm leading-7 text-slate-600">
        <strong className="font-bold text-slate-800">{paper.authorName}</strong>
        {paper.authors}
      </p>
      <p className="mt-4 text-[0.98rem] leading-8 text-slate-700">{paper.body}</p>
      <div className={`mt-5 grid max-w-lg ${paper.metrics.length === 2 ? "grid-cols-2" : "grid-cols-3"} divide-x divide-slate-200 border-y border-slate-200`}>
        {paper.metrics.map(([value, label]) => (
          <div key={label} className="min-w-0 px-2 py-3 first:pl-0 sm:px-4">
            <p className="whitespace-nowrap font-en-title text-xl text-slate-950 sm:text-2xl">{value}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-[11px] sm:tracking-[0.14em]">{label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={paper.paperUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-sky-900 bg-sky-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-800">
          {paper.read}<Icon name="external" className="h-4 w-4" />
        </a>
        {paper.codeUrl && (
          <a href={paper.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-600 hover:text-sky-700">
            {paper.code}<Icon name="external" className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

function PaperList({ papers }) {
  return (
    <div className="space-y-5">
      {papers.map((paper) => <PaperEntry key={paper.title} paper={paper} />)}
    </div>
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
  const [lang, setLang] = React.useState("en");
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
            <button type="button" onClick={() => setLang(isZh ? "en" : "zh")} className="border border-slate-200 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-slate-700 transition hover:border-sky-300 hover:text-sky-700">
              {t.lang}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[280px_1fr] lg:py-14">
        <ProfileCard t={t} isZh={isZh} />
        <div>
          <Section id="about" title="About">
            <Intro t={t} />
            <EducationList title={t.educationTitle} items={t.education} />
          </Section>
          <Section id="paper" title={t.paperTitle}>
            <PaperList papers={t.papers} />
          </Section>
          <Section id="news" title={t.newsTitle}>
            <NewsList items={t.news} />
          </Section>
          <Section id="experience" title={t.experienceTitle}>
            <ExperienceList items={t.experience} />
          </Section>
          <Section id="projects" title={t.projectsTitle}>
            <ProjectList projects={t.projects} details={t.details} />
          </Section>
          <footer id="contact" className="py-10">
            <h2 className="mb-3 font-en-title text-2xl text-slate-950">{t.contact.title}</h2>
            <p className="text-sm leading-7 text-slate-600">{t.contact.desc}</p>
            <p className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500">{t.contact.copyright}</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
