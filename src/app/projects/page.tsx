"use client";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Layers,
  ExternalLink,
  ShoppingBag,
  GraduationCap,
  Image as ImageIcon,
} from "lucide-react";
import { Html } from "next/document";

export default function ProjectPage() {
  const [activeTab, setActiveTab] = useState<
    "all" | "marketplace" | "university"
  >("all");

  const allProjects = [
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
      title: "Ocean of Orchid - Photography Website",
      desc: "A visually stunning portfolio site for a professional photographer, built with Next.js and Tailwind CSS, featuring optimized image handling, dynamic galleries, and seamless navigation.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Google Sheets API"],
      category: "Marketplace Project",
      image: "/projects/o.webp",
      github: "https://github.com/SaddadSium/ocean-of-orchid",
      live: "https://ocean-of-orchid.vercel.app/",
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
    {
      title: "Coreedge Agency Website",
      desc: "A sleek and modern marketing website for a digital agency, built with HTML5, CSS3, and JavaScript, featuring responsive design, smooth animations, and optimized performance.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      category: "Marketplace Project",
      image: "/projects/cr.webp",
      github: "https://github.com/SaddadSium/Coreedge-Agency-Website_By_Sium",
      live: "https://saddadsium.github.io/Coreedge-Agency-Website_By_Sium/",
    },
    {
      title: "Modern Calculator",
      desc: "A sleek and intuitive calculator application built with HTML5, CSS3, and JavaScript, featuring a clean user interface, responsive design, and accurate mathematical computations for everyday use.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      category: "Marketplace Project",
      image: "/projects/api-gateway.jpg",
      github: "https://github.com/SaddadSium/CodeAlpha_Calculator",
      live: "https://saddadsium.github.io/CodeAlpha_Calculator/",
    },
    {
      title: "CodeAlpha Music Player",
      desc: "A sleek and intuitive music player application built with HTML5, CSS3, and JavaScript, featuring a clean user interface, responsive design, and high-quality audio playback for everyday use.",
      tags: ["javascript", "HTML5", "CSS3"],
      category: "Marketplace Project",
      image: "/projects/ms.webp",
      github: "https://github.com/SaddadSium/CodeAlpha_MusicPlayer",
      live: "https://saddadsium.github.io/CodeAlpha_MusicPlayer/",
    },
    // {
    //   title: "NextGen Dynamic Form CRM",
    //   desc: "A standalone lightweight lead processing network tracking discovery references, user metadata, and phone connection pools seamlessly.",
    //   tags: ["React 19", "Tailwind CSS", "Sheets Sync", "Serverless"],
    //   category: "Marketplace Project",
    //   image: "/projects/dynamic-crm.jpg",
    //   github: "#",
    //   live: "#",
    // },
    // {
    //   title: "Luxury Portal Dynamic Storefront",
    //   desc: "A modular shopping engine built with optimized client state validation loops, smooth interaction nodes, and fast asset loading policies.",
    //   tags: ["Next.js", "Tailwind CSS", "JavaScript", "REST UI"],
    //   category: "Marketplace Project",
    //   image: "/projects/luxury-store.jpg",
    //   github: "#",
    //   live: "#",
    // },
    // --- UNIVERSITY PROJECTS (7 Nodes) ---
    {
      title: "Echoes of the Indus: 2D Graphics",
      desc: "A complex 2D environmental structural simulation developed natively from scratch using C++ syntax rules and legacy OpenGL (GLUT) library layers.",
      tags: ["C++", "OpenGL", "GLUT", "Computer Graphics"],
      category: "University Project",
      image: "/projects/echoes-indus.jpg",
      github: "https://github.com/SaddadSium/Echos-Indus-CMG",
      live: "https://github.com/SaddadSium/Echos-Indus-CMG",
    },
    {
      title: "QR Code Generator Web App",
      desc: "A client-side QR code generator built with vanilla JavaScript, HTML5, and CSS3, allowing users to create custom QR codes for URLs, text, and contact information with real-time preview.",
      tags: ["JavaScript", "HTML5", "CSS3"],
      category: "University Project",
      image: "/projects/qr.webp",
      github: "https://github.com/SaddadSium/QR-Code-Generator",
      live: "https://saddadsium.github.io/QR-Code-Generator/",
    },
    // {
    //   title: "Secure IPv6 VLAN Network Optimizer",
    //   desc: "A core architecture framework designed to isolate enterprise subnets and optimize data paths using Cisco configurations and rigid access lists.",
    //   tags: ["Cisco Packet Tracer", "IPv6", "VLAN Subnetting", "ACL Security"],
    //   category: "University Project",
    //   image: "/projects/vlan-optimizer.jpg",
    //   github: "#",
    //   live: "#",
    // },
    {
      title: "Ayojon-A Wedding Management System using C#",
      desc: "A comprehensive wedding management system built with C#, implementing core OOP principles, file I/O for data persistence, and thread-safe operations for concurrent user access.",
      tags: ["C#", "OOP Principles", "File IO", "Thread Safe"],
      category: "University Project",
      image: "/projects/banking-terminal.jpg",
      github: "https://github.com/SaddadSium/Ayojon-C--FinalProject",
      live: "https://github.com/SaddadSium/Ayojon-C--FinalProject",
    },
    // {
    //   title: "Distributed File Cache Manager",
    //   desc: "A systems programming utility optimizing read/write load speeds across cluster nodes using strict object-oriented design and multithreading algorithms.",
    //   tags: ["C++", "Multithreading", "File IO Protocols", "Memory Management"],
    //   category: "University Project",
    //   image: "/projects/cache-manager.jpg",
    //   github: "#",
    //   live: "#",
    // },
    // {
    //   title: "Relational Query Log Analyzer",
    //   desc: "A data validation pipeline utility configured to parse relational schema query threads and auto-flag index isolation leaks dynamically.",
    //   tags: [
    //     "SQL / MySQL",
    //     "Database Indexing",
    //     "Query Optimization",
    //     "Python",
    //   ],
    //   category: "University Project",
    //   image: "/projects/query-analyzer.jpg",
    //   github: "#",
    //   live: "#",
    // },
    // {
    //   title: "Agile Scrum Sprint Monitor",
    //   desc: "An academic team workspace monitor tracking task weight metrics and calculating sprint velocity parameters systematically.",
    //   tags: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
    //   category: "University Project",
    //   image: "/projects/sprint-monitor.jpg",
    //   github: "#",
    //   live: "#",
    // },
  ];

  const filteredProjects = allProjects.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "marketplace")
      return project.category === "Marketplace Project";
    if (activeTab === "university")
      return project.category === "University Project";
    return true;
  });

  const getCategoryIcon = (category: string) => {
    return category === "Marketplace Project" ? (
      <ShoppingBag size={14} className="text-teal-brand" />
    ) : (
      <GraduationCap size={14} className="text-amber-400" />
    );
  };

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      {/* BACKGROUND TECH ENGINE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 space-y-12">
        {/* Top Header Row Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-brand/10 pb-8">
          <div className="space-y-2 text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-teal-brand/70 hover:text-teal-brand transition-colors group mb-2"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>cd .. // return home</span>
            </Link>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
              <Layers className="text-teal-brand" size={28} /> Project Registry
            </h1>
          </div>
          <p className="text-lightning/50 max-w-sm text-sm font-normal leading-relaxed text-left sm:text-right font-mono text-xs">
            INDEXED: {filteredProjects.length} / {allProjects.length} NODE
            ARTIFACTS FILTERED // STABLE
          </p>
        </div>

        {/* High-Tech Tab Controllers */}
        <div className="flex flex-wrap gap-3 border-b border-slate-brand/5 pb-6 justify-start">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border font-bold ${
              activeTab === "all"
                ? "bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand border-transparent shadow-lg shadow-teal-brand/5"
                : "bg-ocean-brand/20 border-slate-brand/10 text-lightning/60 hover:text-white hover:border-slate-brand/30"
            }`}
          >
            // All Artifacts ({allProjects.length})
          </button>
          <button
            onClick={() => setActiveTab("marketplace")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border font-bold flex items-center gap-2 ${
              activeTab === "marketplace"
                ? "bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand border-transparent shadow-lg shadow-teal-brand/5"
                : "bg-ocean-brand/20 border-slate-brand/10 text-lightning/60 hover:text-white hover:border-slate-brand/30"
            }`}
          >
            <ShoppingBag size={12} /> Marketplace (
            {
              allProjects.filter((p) => p.category === "Marketplace Project")
                .length
            }
            )
          </button>
          <button
            onClick={() => setActiveTab("university")}
            className={`px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border font-bold flex items-center gap-2 ${
              activeTab === "university"
                ? "bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand border-transparent shadow-lg shadow-teal-brand/5"
                : "bg-ocean-brand/20 border-slate-brand/10 text-lightning/60 hover:text-white hover:border-slate-brand/30"
            }`}
          >
            <GraduationCap size={14} /> University Core (
            {
              allProjects.filter((p) => p.category === "University Project")
                .length
            }
            )
          </button>
        </div>

        {/* 15 Projects Production Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl overflow-hidden hover:border-teal-brand/30 hover:bg-[#050b11]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl relative animate-fadeIn"
            >
              <div className="space-y-5">
                {/* Image Showcase Banner with Fallback Architecture */}
                <div className="h-44 w-full relative overflow-hidden border-b border-slate-brand/10 bg-[#060e16] flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-500"
                    onError={(e) => {
                      // যদি ইমেজ না থাকে বা লোড ফেল করে তবে এটি ব্যাকআপ সাইবার প্লেসহোল্ডার রেন্ডার করবে
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.nextSibling) {
                        (
                          e.currentTarget.nextSibling as HTMLElement
                        ).style.display = "flex";
                      }
                    }}
                  />

                  {/* Backup Standby Standby Grid Element */}
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

                  {/* Category Chip Badge overlay */}
                  <span
                    className={`absolute top-4 left-4 text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded border backdrop-blur-sm shadow-md flex items-center gap-1.5 z-20 ${
                      project.category === "Marketplace Project"
                        ? "bg-teal-brand/10 text-teal-brand border-teal-brand/20"
                        : "bg-amber-400/10 text-amber-400 border-amber-400/20"
                    }`}
                  >
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-brand via-transparent to-transparent opacity-90 z-10"></div>
                </div>

                {/* Core Content Box */}
                <div className="px-6 space-y-3.5">
                  <h2 className="text-lg font-bold text-white group-hover:text-teal-brand transition-colors tracking-tight text-left line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-lightning/50 text-xs sm:text-sm leading-relaxed text-left min-h-[72px] line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Lower Section Technical Framework Badges & Interactive Link Buttons */}
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

                {/* Action Link Row: Code + Live Live Preview Controls */}
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
      </div>
    </div>
  );
}
