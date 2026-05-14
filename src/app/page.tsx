"use client";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Command,
  Terminal,
  Code2,
  Layers,
  Cpu,
  Binary,
  FileSpreadsheet,
  Globe2,
} from "lucide-react";

export default function Home() {
  // প্রজেক্ট ও এক্সপেরিয়েন্স স্ট্যাটিস্টিকস ম্যাট্রিক্স
  const stats = [
    {
      id: 1,
      count: "25+",
      label: "Architected Systems",
      icon: <CheckCircle2 size={18} />,
    },
    {
      id: 2,
      count: "12+",
      label: "Global Stakeholders",
      icon: <Users size={18} />,
    },
    {
      id: 3,
      count: "2.5+",
      label: "Years Programming",
      icon: <Briefcase size={18} />,
    },
  ];

  // কোর কোডিং ফ্রেমওয়ার্ক এবং ল্যাঙ্গুয়েজ স্ট্যাক
  const codingSkills = [
    { name: "Next.js / React 19", progress: "w-[92%]", level: "92%" },
    { name: "Nest.js / Node.js", progress: "w-[88%]", level: "88%" },
    { name: "TypeScript / JavaScript", progress: "w-[95%]", level: "95%" },
    { name: "PHP / Laravel", progress: "w-[75%]", level: "75%" },
    { name: "MySQL / PostgreSQL", progress: "w-[85%]", level: "85%" },
    { name: "Tailwind CSS / UI Engine", progress: "w-[95%]", level: "95%" },
  ];

  // এন্টারপ্রাইজ অটোমেশন এবং ডকুমেন্টেশন টুলস (MS Office)
  const enterpriseTools = [
    {
      name: "Microsoft Excel",
      desc: "Data Logic & Architecture",
      icon: <FileSpreadsheet className="text-emerald-400" size={18} />,
    },
    {
      name: "Microsoft PowerPoint",
      desc: "Technical Presentations & Pitch",
      icon: <Briefcase className="text-orange-400" size={18} />,
    },
    {
      name: "Microsoft Word",
      desc: "SRS Documentation & Contracts",
      icon: <Terminal className="text-blue-400" size={18} />,
    },
  ];

  // রিয়েল-ওয়ার্ল্ড প্রজেক্ট ডাটা শোকেস (Unique Embedded SVGs)
  const featuredProjects = [
    {
      title: "REINOIR Luxury E-Commerce",
      desc: "A high-end Next.js application built for a luxury perfume brand featuring lightning-fast state transitions and a premium UI layout.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      github: "#",
      svgIcon: (
        <svg
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="200" fill="#07121c" />
          <g opacity="0.12">
            <path
              d="M 0,20 L 400,20 M 0,60 L 400,60 M 0,100 L 400,100 M 0,140 L 400,140 M 0,180 L 400,180"
              stroke="#4e7376"
              strokeWidth="1"
            />
            <path
              d="M 40,0 L 40,200 M 100,0 L 100,200 M 160,0 L 160,200 M 220,0 L 220,200 M 280,0 L 280,200 M 340,0 L 340,200"
              stroke="#4e7376"
              strokeWidth="1"
            />
          </g>
          <circle
            cx="200"
            cy="100"
            r="45"
            fill="#4e7376"
            fillOpacity="0.05"
            stroke="#80b4b0"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M180 100 L195 115 L225 85"
            stroke="#80b4b0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="20"
            y="180"
            fill="#80b4b0"
            fillOpacity="0.5"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1"
          >
            REINOIR // STACK_OK
          </text>
        </svg>
      ),
    },
    {
      title: "Frostiva Online Food Store",
      desc: "An innovative full-stack e-commerce engine engineered with a Google Sheets real-time backend architecture for rapid order tracking.",
      tags: ["JavaScript", "HTML5", "Node.js", "Google Sheets API"],
      github: "#",
      svgIcon: (
        <svg
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="200" fill="#07121c" />
          <g opacity="0.12">
            <path
              d="M 0,30 L 400,30 M 0,80 L 400,80 M 0,130 L 400,130 M 0,180 L 400,180"
              stroke="#4e7376"
              strokeWidth="1"
            />
            <path
              d="M 50,0 L 50,200 M 150,0 L 150,200 M 250,0 L 250,200 M 350,0 L 350,200"
              stroke="#4e7376"
              strokeWidth="1"
            />
          </g>
          <path
            d="M100 100 L160 60 L240 140 L300 100"
            stroke="#80b4b0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="100"
            cy="100"
            r="4"
            fill="#0a2633"
            stroke="#80b4b0"
            strokeWidth="2"
          />
          <circle
            cx="160"
            cy="60"
            r="4"
            fill="#0a2633"
            stroke="#80b4b0"
            strokeWidth="2"
          />
          <circle
            cx="240"
            cy="140"
            r="4"
            fill="#0a2633"
            stroke="#80b4b0"
            strokeWidth="2"
          />
          <circle
            cx="300"
            cy="100"
            r="4"
            fill="#0a2633"
            stroke="#80b4b0"
            strokeWidth="2"
          />
          <text
            x="20"
            y="180"
            fill="#80b4b0"
            fillOpacity="0.5"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1"
          >
            FROSTIVA // DATA_SYNC
          </text>
        </svg>
      ),
    },
    {
      title: "S&S Heritage Platform",
      desc: "A high-traffic, secure restaurant operations database and user application blending computational logic with strict performance limits.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "#",
      svgIcon: (
        <svg
          className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500"
          viewBox="0 0 400 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="200" fill="#07121c" />
          <g opacity="0.12">
            <path
              d="M 0,40 L 400,40 M 0,90 L 400,90 M 0,140 L 400,140"
              stroke="#4e7376"
              strokeWidth="1"
            />
            <path
              d="M 80,0 L 80,200 M 200,0 L 200,200 M 320,0 L 320,200"
              stroke="#4e7376"
              strokeWidth="1"
            />
          </g>
          <rect
            x="150"
            y="60"
            width="100"
            height="24"
            rx="4"
            fill="#0a2633"
            stroke="#4e7376"
            strokeWidth="1.5"
          />
          <rect
            x="150"
            y="94"
            width="100"
            height="24"
            rx="4"
            fill="#0a2633"
            stroke="#4e7376"
            strokeWidth="1.5"
          />
          <circle cx="165" cy="72" r="3" fill="#80b4b0" />
          <circle cx="165" cy="106" r="3" fill="#80b4b0" />
          <line
            x1="180"
            y1="72"
            x2="230"
            y2="72"
            stroke="#4e7376"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="180"
            y1="106"
            x2="220"
            y2="106"
            stroke="#4e7376"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="20"
            y="180"
            fill="#80b4b0"
            fillOpacity="0.5"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1"
          >
            HERITAGE // DB_SECURE
          </text>
        </svg>
      ),
    },
  ];

  // ল্যাঙ্গুয়েজ ফ্লুয়েন্সি ডেটা (Bangla, English, Urdu, Hindi)
  const languageFluency = [
    { code: "BN // 01", lang: "Bangla", fluency: "Native / Mother Tongue" },
    { code: "EN // 02", lang: "English", fluency: "Professional Working" },
    { code: "UR // 03", lang: "Urdu", fluency: "Conversational Fluent" },
    { code: "HI // 04", lang: "Hindi", fluency: "Spoken Understanding" },
  ];

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative flex flex-col justify-center overflow-hidden">
      {/* BACKGROUND TECH ENGINE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737608_1px,transparent_1px),linear-gradient(to_bottom,#4e737608_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,#4e737615,transparent_50%)] pointer-events-none"></div>

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 min-h-[75vh] flex flex-col justify-center z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 bg-ocean-brand/30 border border-slate-brand/30 px-4 py-2 rounded-xl text-teal-brand text-xs font-mono shadow-xl shadow-black/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-brand animate-ping"></span>
              <span className="text-lightning/80">
                root@sium:~#{" "}
                <span className="text-white">node dev_engine.js</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
              Architecting High <br />
              Performance <br />
              <span className="bg-gradient-to-r from-teal-brand via-slate-brand to-white bg-clip-text text-transparent">
                Digital Systems.
              </span>
            </h1>

            <p className="text-lightning/60 text-lg max-w-xl font-normal leading-relaxed">
              Full-Stack Software Engineer focused on deploying secure backend
              structures, blazing-fast frontends, and data-driven enterprise
              automations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/project"
                className="bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-teal-brand/10 hover:shadow-teal-brand/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                Inspect Frameworks
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/contact"
                className="bg-ocean-brand/40 border border-slate-brand/20 text-lightning px-8 py-4 rounded-xl font-semibold text-sm hover:bg-ocean-brand/70 hover:border-teal-brand/30 active:scale-[0.98] transition-all flex items-center justify-center"
              >
                Compile Resume (.pdf)
              </Link>
            </div>
          </div>

          {/* Right Column: Terminal Window */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-teal-brand/5 rounded-2xl blur-3xl pointer-events-none group-hover:bg-teal-brand/10 transition-all duration-500"></div>
            <div className="bg-[#050b11] border border-slate-brand/30 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs text-lightning/70 backdrop-blur-md">
              <div className="bg-ocean-brand/50 px-4 py-3 border-b border-slate-brand/20 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/40"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/40"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/40"></span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-lightning/40 flex items-center gap-1.5 font-bold">
                  <Command size={10} /> bash
                </span>
              </div>
              <div className="p-5 space-y-3.5 leading-relaxed bg-gradient-to-b from-transparent to-ocean-brand/10">
                <p className="text-slate-brand">
                  // Core Microservices & Stack
                </p>
                <p>
                  <span className="text-teal-brand">const</span> developer ={" "}
                  <span className="text-white">"A.S.M. Sium"</span>;
                </p>
                <p>
                  <span className="text-teal-brand">const</span> frameworks = [
                  <span className="text-amber-400">"Next.js"</span>,{" "}
                  <span className="text-amber-400">"Nest.js"</span>,{" "}
                  <span className="text-amber-400">"MySQL"</span>];
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-brand/10">
                  <p className="text-slate-brand">
                    // Compiling environment runtime...
                  </p>
                  <p className="text-green-400 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-3.5 bg-green-400 animate-pulse"></span>
                    <span>✓ UI Engine Rendering Optimization 100%</span>
                  </p>
                  <p className="text-green-400">
                    ✓ Secure Backend REST API Handshake Established
                  </p>
                  <p className="text-green-400">
                    ✓ Enterprise Excel Logic Engine Mounted
                  </p>
                </div>
                <div className="bg-ocean-brand/30 border border-slate-brand/10 p-3 rounded-xl mt-4 space-y-1">
                  <p className="text-[10px] text-lightning/40 uppercase font-bold tracking-wider">
                    Server Diagnostics
                  </p>
                  <p className="text-white text-[11px]">
                    Memory Usage:{" "}
                    <span className="text-teal-brand">34.2 MB / 512 MB</span>
                  </p>
                  <p className="text-white text-[11px]">
                    Vercel Edge Speed:{" "}
                    <span className="text-teal-brand">14ms (Optimal)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HIGH-TECH CORE COMPETENCIES MATRIX (3 UNIQUE BOXES) ================= */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-brand/20 rounded-2xl overflow-hidden bg-gradient-to-b from-ocean-brand/20 to-transparent backdrop-blur-md shadow-2xl">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`p-8 flex flex-col justify-between h-44 group relative transition-all duration-300 hover:bg-white/[0.01] ${
                idx !== 2
                  ? "border-b md:border-b-0 md:border-r border-slate-brand/20"
                  : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-slate-brand/60 font-bold">
                  0{idx + 1} // MATRIX
                </span>
                <div className="p-2.5 bg-slate-brand/10 text-teal-brand border border-slate-brand/20 rounded-xl group-hover:bg-teal-brand group-hover:text-abyss-brand group-hover:border-transparent transition-all duration-300">
                  {stat.icon}
                </div>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white tracking-tight font-mono group-hover:text-teal-brand transition-colors">
                  {stat.count}
                </h3>
                <p className="text-xs uppercase tracking-widest text-lightning/40 font-semibold mt-1">
                  {stat.label}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-brand to-transparent transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HIGH-TECH SKILLS GRID ================= */}
      <section
        id="services"
        className="py-32 bg-[#050b11]/80 border-t border-slate-brand/10 relative px-6 sm:px-8 z-10"
      >
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-teal-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-brand/10 pb-8 gap-4">
            <div className="space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-brand uppercase">
                <Cpu size={14} /> Technology Matrix
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                Engine Competencies.
              </h2>
            </div>
            <p className="text-lightning/50 max-w-sm text-sm font-normal leading-relaxed text-left md:text-right">
              A comprehensive directory of my scalable development stacks,
              business analytics systems, and communication endpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Box 1: Core Frameworks */}
            <div className="lg:col-span-8 bg-ocean-brand/10 border border-slate-brand/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative group">
              <div className="flex items-center justify-between pb-4 border-b border-slate-brand/10">
                <h3 className="text-sm font-bold tracking-widest text-white uppercase font-mono flex items-center gap-2">
                  <Binary size={16} className="text-teal-brand" /> Core
                  Frameworks & Engineering
                </h3>
                <span className="text-[10px] font-mono text-lightning/30">
                  RUNTIME: v1.2.6
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {codingSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-ocean-brand/20 border border-slate-brand/20 p-4 rounded-xl space-y-3 hover:border-teal-brand/30 transition-all duration-300 group/node"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium text-sm tracking-tight">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-teal-brand bg-slate-brand/20 px-2 py-0.5 rounded border border-slate-brand/30">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-abyss-brand/60 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.progress} bg-gradient-to-r from-slate-brand to-teal-brand rounded-full group-hover/node:bg-teal-brand transition-all`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Box 2 & 3 Column */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-ocean-brand/10 border border-slate-brand/10 rounded-2xl p-6 space-y-5 flex-grow group">
                <h3 className="text-sm font-bold tracking-widest text-white uppercase font-mono flex items-center gap-2 pb-3 border-b border-slate-brand/10">
                  <FileSpreadsheet size={16} className="text-teal-brand" />{" "}
                  Enterprise Automation
                </h3>
                <div className="space-y-3">
                  {enterpriseTools.map((tool, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3.5 bg-ocean-brand/20 border border-slate-brand/20 p-3.5 rounded-xl hover:bg-ocean-brand/40 transition-all duration-300"
                    >
                      <div className="p-2.5 bg-abyss-brand border border-slate-brand/30 rounded-lg text-teal-brand">
                        {tool.icon}
                      </div>
                      <div className="text-left">
                        <p className="text-white text-xs font-semibold tracking-tight">
                          {tool.name}
                        </p>
                        <p className="text-[10px] text-lightning/40 font-mono mt-0.5">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Multi-Language Stack Panel (Bangla, English, Urdu, Hindi) */}
              <div className="bg-ocean-brand/10 border border-slate-brand/10 rounded-2xl p-6 space-y-4 group">
                <h3 className="text-sm font-bold tracking-widest text-white uppercase font-mono flex items-center gap-2 pb-3 border-b border-slate-brand/10">
                  <Globe2 size={16} className="text-teal-brand" /> Team
                  Communication
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {languageFluency.map((l, i) => (
                    <div
                      key={i}
                      className="bg-ocean-brand/20 border border-slate-brand/20 p-3 rounded-xl text-left hover:border-slate-brand/40 transition-all duration-300"
                    >
                      <p className="text-[9px] font-mono text-teal-brand/70">
                        {l.code}
                      </p>
                      <p className="text-xs font-bold text-white mt-0.5 truncate">
                        {l.lang}
                      </p>
                      <p className="text-[10px] text-lightning/40 font-mono mt-0.5 truncate">
                        {l.fluency}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION (ইনলাইন প্রিমিয়াম SVG ইমেজের সাথে) ================= */}
      <section
        id="featured-projects"
        className="py-32 max-w-7xl mx-auto px-6 sm:px-8 relative z-10 border-t border-slate-brand/10"
      >
        <div className="space-y-16">
          <div className="text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-brand uppercase">
              <Layers size={14} /> Production Artifacts
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Featured Projects.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <div
                key={i}
                className="bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl overflow-hidden hover:border-teal-brand/30 hover:bg-[#050b11]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-5">
                  {/* ইনলাইন রেডি-মেড রেন্ডারড SVG ব্যানার ইমেজ (যা কখনো ক্র্যাশ করবে না) */}
                  <div className="h-48 w-full relative overflow-hidden border-b border-slate-brand/10 group-hover:scale-[1.01] transition-transform duration-500">
                    {project.svgIcon}
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss-brand via-transparent to-transparent opacity-70"></div>
                  </div>

                  {/* কার্ড টেক্সট বিবরণী */}
                  <div className="px-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="p-2 bg-slate-brand/10 border border-slate-brand/20 text-teal-brand rounded-xl">
                        <Code2 size={16} />
                      </div>
                      <a
                        href={project.github}
                        aria-label="GitHub Source"
                        className="text-lightning/40 hover:text-teal-brand transition-colors"
                      >
                        <svg
                          className="w-[18px] h-[18px] fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                        </svg>
                      </a>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-brand transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-lightning/50 text-sm leading-relaxed min-h-[64px]">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* টেক ট্যাগসমূহ */}
                <div className="px-6 pb-6 flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono bg-abyss-brand text-lightning/70 px-2.5 py-1 rounded-md border border-slate-brand/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ================= SEE MORE PROJECTS BUTTON ================= */}
          <div className="flex justify-center pt-6">
            <Link
              href="/project"
              className="inline-flex items-center gap-2 bg-ocean-brand/40 border border-slate-brand/20 hover:border-teal-brand/40 text-lightning hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 group shadow-xl active:scale-95"
            >
              See All Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform text-teal-brand"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
