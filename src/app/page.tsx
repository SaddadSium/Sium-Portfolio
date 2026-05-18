"use client";
import Link from "next/link";
import { useState } from "react";
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
  Globe2,
  Image as ImageIcon,
  Database,
  FileJson,
  Sparkles,
  ExternalLink,
  GraduationCap,
  ShoppingBag,
  X,
  Download,
  Eye,
} from "lucide-react";

export default function Home() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const stats = [
    {
      id: 1,
      count: "15+",
      label: "Architected Systems",
      icon: <CheckCircle2 size={18} />,
    },
    {
      id: 2,
      count: "7+",
      label: "Global Stakeholders",
      icon: <Users size={18} />,
    },
    {
      id: 3,
      count: "2+",
      label: "Years Programming",
      icon: <Briefcase size={18} />,
    },
  ];

  const codingSkills = [
    { name: "Next.js / React 19", progress: "w-[85%]", level: "85%" },
    { name: "TypeScript / JavaScript", progress: "w-[90%]", level: "90%" },
    { name: "Nest.js / Node.js", progress: "w-[80%]", level: "80%" },
    { name: "PHP", progress: "w-[80%]", level: "80%" },
    { name: "Java / OOP Architecture", progress: "w-[85%]", level: "85%" },
    { name: "C#", progress: "w-[80%]", level: "80%" },
    { name: "C++ / OpenGL Graphics", progress: "w-[88%]", level: "88%" },
    { name: "MySQL / PostgreSQL DB", progress: "w-[85%]", level: "85%" },
    { name: "Tailwind CSS / UI Engine", progress: "w-[92%]", level: "92%" },
  ];

  const creativeAndDataTools = [
    {
      name: "Google Sheets",
      desc: "API Endpoints & Cloud Data Sync",
      icon: <Layers className="text-emerald-400" size={18} />,
    },
    {
      name: "Adobe Lightroom",
      desc: "Color Grading & Raw Image Parsing",
      icon: <Sparkles className="text-sky-400" size={18} />,
    },
    {
      name: "Adobe Photoshop",
      desc: "Digital Composition & UI Assets",
      icon: <Code2 className="text-indigo-400" size={18} />,
    },
  ];

  const languageFluency = [
    { code: "01", lang: "Bangla", fluency: "Native / Mother Tongue" },
    { code: "02", lang: "English", fluency: "Professional Working" },
    { code: "03", lang: "Urdu", fluency: "Conversational Fluent" },
    { code: "04", lang: "Hindi", fluency: "Spoken Understanding" },
  ];

  const featuredProjects = [
    {
      title: "REINOIR Luxury E-Commerce",
      desc: "A premium Next.js enterprise web app engineered for a high-end luxury perfume brand featuring optimized state management, global cart handlers, and seamless edge deployment.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Sheets API"],
      category: "Marketplace Project",
      image: "/projects/r.webp",
      github: "https://github.com/SaddadSium/Reinoir-Perfume-Brand",
      live: "https://reinoir-perfume-brand.vercel.app/",
    },
    {
      title: "Frostiva Online Food Shop",
      desc: "An innovative automated e-commerce engine using a real-time Google Sheets backend API framework for fast order computation and state synchronization.",
      tags: ["JavaScript", "Google Sheets API", "HTML5", "CSS3"],
      category: "Marketplace Project",
      image: "/projects/f.webp",
      github: "https://github.com/SaddadSium/Frostiva",
      live: "https://saddadsium.github.io/Frostiva/",
    },
    {
      title: "S&S Heritage Restaurant Hub",
      desc: "A high-traffic restaurant operations system with a heavily optimized relational database layout, active billing ledger, and secure transaction handling scripts.",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5"],
      category: "University Project",
      image: "/projects/ss.webp",
      github: "https://github.com/SaddadSium/Restaurant-Management-System",
      live: "https://restaurentmanagementsystem.free.nf/Restaurant-Management-System/?i=1",
    },
  ];

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737608_1px,transparent_1px),linear-gradient(to_bottom,#4e737608_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_top,#4e737615,transparent_50%)] pointer-events-none"></div>
      <section
        id="home"
        className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-16 min-h-[75vh] flex flex-col justify-center z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 bg-ocean-brand/30 border border-slate-brand/30 px-4 py-2 rounded-xl text-teal-brand text-xs font-mono shadow-xl shadow-black/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-brand animate-ping"></span>
              <span className="text-lightning/80">
                root@sium:~#{" "}
                <span className="text-white">node dev_engine.js</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
              Architecting High <br /> Performance <br />
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
                href="/projects"
                className="bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-teal-brand/10 hover:shadow-teal-brand/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                Inspect Frameworks
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="bg-ocean-brand/40 border border-slate-brand/20 text-lightning px-8 py-4 rounded-xl font-semibold text-sm hover:bg-ocean-brand/70 hover:border-teal-brand/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Eye size={16} className="text-teal-brand" /> Compile Resume
                (.pdf)
              </button>
            </div>
          </div>

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
                    ✓ Systems Automation Architecture Loaded
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
      <section className="relative max-w-7xl mx-auto px-6 sm:px-8 pb-24 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-brand/20 rounded-2xl overflow-hidden bg-gradient-to-b from-ocean-brand/20 to-transparent backdrop-blur-md shadow-2xl">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`p-8 flex flex-col justify-between h-44 group relative transition-all duration-300 hover:bg-white/[0.01] ${idx !== 2 ? "border-b md:border-b-0 md:border-r border-slate-brand/20" : ""}`}
            >
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-slate-brand/60 font-bold">
                  0{idx + 1}
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
              production systems, and communication endpoints.
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

            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-ocean-brand/10 border border-slate-brand/10 rounded-2xl p-6 space-y-5 flex-grow group">
                <h3 className="text-sm font-bold tracking-widest text-white uppercase font-mono flex items-center gap-2 pb-3 border-b border-slate-brand/10">
                  <Terminal size={16} className="text-teal-brand" /> Media &
                  Data Systems
                </h3>
                <div className="space-y-3">
                  {creativeAndDataTools.map((tool, i) => (
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
      ]
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
                className="bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl overflow-hidden hover:border-teal-brand/30 hover:bg-[#050b11]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl relative animate-fadeIn"
              >
                <div className="space-y-5">
                  <div className="h-44 w-full relative overflow-hidden border-b border-slate-brand/10 bg-[#060e16] flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        if (e.currentTarget.nextSibling) {
                          (
                            e.currentTarget.nextSibling as HTMLElement
                          ).style.display = "flex";
                        }
                      }}
                    />
                    <div className="absolute inset-0 hidden flex-col items-center justify-center space-y-2 bg-[#060e16] px-4 font-mono text-center">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737603_1px,transparent_1px),linear-gradient(to_bottom,#4e737603_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                      <ImageIcon
                        size={20}
                        className="text-slate-brand/40 animate-pulse relative z-10"
                      />
                      <span className="text-[9px] uppercase tracking-widest text-lightning/20 relative z-10">
                        IMG_REF // STATIC_NODE_SHIELD
                      </span>
                    </div>

                    <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded border backdrop-blur-sm shadow-md flex items-center gap-1.5 z-20 bg-teal-brand/10 text-teal-brand border-teal-brand/20">
                      <ShoppingBag size={14} className="text-teal-brand" />
                      {project.category}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss-brand via-transparent to-transparent opacity-90 z-10"></div>
                  </div>

                  <div className="px-6 space-y-3.5">
                    <h2 className="text-lg font-bold text-white group-hover:text-teal-brand transition-colors tracking-tight text-left line-clamp-1">
                      {project.title}
                    </h2>
                    <p className="text-lightning/50 text-xs sm:text-sm leading-relaxed text-left min-h-[72px] line-clamp-3">
                      {project.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 space-y-5 pt-4">
                  <div className="flex flex-wrap gap-1.5 h-[52px] overflow-hidden content-start">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono bg-abyss-brand text-lightning/60 px-2 py-0.5 rounded border border-slate-brand/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-brand/5">
                    <a
                      href={project.github}
                      target="_blank"
                      className="py-2.5 px-3 bg-ocean-brand/30 border border-slate-brand/15 rounded-xl text-xs font-semibold text-lightning/80 hover:text-white hover:border-slate-brand/40 transition-colors flex items-center justify-center gap-1.5 font-mono"
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                      Source Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      className="py-2.5 px-3 bg-teal-brand/5 border border-teal-brand/15 rounded-xl text-xs font-bold text-teal-brand hover:bg-teal-brand hover:text-abyss-brand hover:border-transparent transition-all flex items-center justify-center gap-1.5 font-mono shadow-sm"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-6">
            <Link
              href="/projects"
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
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 animate-fadeIn">
          <div className="bg-[#050b11] border border-slate-brand/30 max-w-5xl w-full h-[85vh] rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-black/80 relative">
            <div className="bg-ocean-brand/40 px-5 py-4 border-b border-slate-brand/20 flex justify-between items-center z-10 relative">
              <div className="flex items-center gap-2.5 text-left">
                <div className="p-1.5 bg-slate-brand/10 border border-slate-brand/20 text-teal-brand rounded-lg">
                  <Terminal size={14} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white tracking-tight font-mono">
                    Resume Preview // A.S.M. Sium
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="ASM_Sium_Resume.pdf"
                  className="bg-teal-brand/10 border border-teal-brand/20 text-teal-brand px-3 py-1.5 rounded-xl font-bold text-xs hover:bg-teal-brand hover:text-abyss-brand transition-all flex items-center gap-1.5 font-mono"
                >
                  <Download size={12} /> Download CV
                </a>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                  title="Close Preview"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            <div className="flex-1 bg-[#121314] relative">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0"
                className="w-full h-full border-none"
                title="A.S.M. Sium Professional Resume"
              ></iframe>
            </div>

            <div className="bg-ocean-brand/20 border-t border-slate-brand/15 py-2 px-4 flex justify-between items-center text-[9px] font-mono text-lightning/30 uppercase tracking-widest">
              <span>format: PDF Document</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
