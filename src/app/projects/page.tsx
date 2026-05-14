"use client";
import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  Layers,
  Cpu,
  Database,
  Terminal,
  Shield,
  Globe,
} from "lucide-react";

export default function ProjectPage() {
  // ১৫টি রিয়েল এবং স্ট্র্যাটেজিক প্রজেক্ট ডেটা অ্যারে
  const allProjects = [
    {
      title: "REINOIR Luxury E-Commerce",
      desc: "A premium Next.js enterprise web app engineered for a high-end luxury perfume brand featuring optimized state management and seamless Vercel edge deployment.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      category: "Full-Stack",
      github: "#",
    },
    {
      title: "Frostiva Online Food Store",
      desc: "An innovative automated e-commerce engine using a real-time Google Sheets backend API framework for fast order computation and state synchronization.",
      tags: ["JavaScript", "Node.js", "Google Sheets API", "HTML5"],
      category: "Data Systems",
      github: "#",
    },
    {
      title: "S&S Heritage Platform",
      desc: "A high-traffic restaurant operations system with a heavily optimized relational database layout and secure transaction handling scripts.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      category: "Database Backend",
      github: "#",
    },
    {
      title: "Light n Soul Client Management",
      desc: "A professional studio production dashboard built with strict UX standards to handle client booking pipelines, event schedules, and digital delivery workflows.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      category: "Management SaaS",
      github: "#",
    },
    {
      title: "Echoes of the Indus: 2D Graphics",
      desc: "A complex 2D environmental structural simulation developed natively from scratch using C++ syntax rules and legacy OpenGL (GLUT) library layers.",
      tags: ["C++", "OpenGL", "GLUT", "Computer Graphics"],
      category: "CSE Academic",
      github: "#",
    },
    {
      title: "Urban Traffic Congestion Predictor",
      desc: "A data science model researching historical gridlock flows to output precise urban density predictions using machine learning analytical algorithms.",
      tags: ["Python", "Pandas", "Scikit-Learn", "Jupyter"],
      category: "Data Science",
      github: "#",
    },
    {
      title: "Secure IPv6 VLAN Network Optimizer",
      desc: "A core architecture framework designed to isolate enterprise subnets and optimize data paths using Cisco configurations and rigid access lists.",
      tags: ["Cisco Packet Tracer", "IPv6", "VLAN Subnetting", "ACL Security"],
      category: "Networking",
      github: "#",
    },
    {
      title: "Asynchronous REST API Gateway",
      desc: "A backend proxy server handling rate-limiting and security handshakes between multiple client microservices using high-performance Nest.js modules.",
      tags: ["Nest.js", "TypeScript", "Redis Cache", "Docker"],
      category: "Backend Core",
      github: "#",
    },
    {
      title: "Enterprise Excel Logic Sheet Engine",
      desc: "An advanced macros-driven automation system utilizing nested data arrays and pivot indexing algorithms to automate financial auditing logs.",
      tags: ["Microsoft Excel", "VBA Macros", "Data Indexing", "Analytics"],
      category: "Automation Tools",
      github: "#",
    },
    {
      title: "NextGen Secure Authentication Module",
      desc: "A standalone session authentication microservice utilizing encrypted stateless web tokens (JWT), strict CORS policies, and Bcrypt salting hooks.",
      tags: ["Node.js", "Express", "JWT Security", "Bcrypt"],
      category: "Cyber Security",
      github: "#",
    },
    {
      title: "Agile Scrum Sprint Monitor",
      desc: "A real-time Kanban pipeline automation script engineered to coordinate task weight metrics and calculate team velocity parameters automatically.",
      tags: ["React", "JavaScript", "Local Storage", "Tailwind"],
      category: "Management SaaS",
      github: "#",
    },
    {
      title: "Distributed File Cache Manager",
      desc: "A systems programming utility optimizing read/write load speeds across cluster nodes using strict object-oriented design and multithreading.",
      tags: ["C++", "Multithreading", "File IO Protocols", "Memory Management"],
      category: "CSE Academic",
      github: "#",
    },
    {
      title: "Automated Tech Presentation Template",
      desc: "An advanced PowerPoint interactive scripting structure optimized for engineering pitches, architectural system flowcharts, and technical updates.",
      tags: ["Microsoft PowerPoint", "Technical Presentation", "Flowcharts"],
      category: "Automation Tools",
      github: "#",
    },
    {
      title: "Global CDN Edge Router Config",
      desc: "An optimization layout engineered to lower frontend load latency below 20ms using strict static cache policies across distributed regional networks.",
      tags: ["Vercel Edge", "Cloudflare DNS", "CDN Optimization"],
      category: "Networking",
      github: "#",
    },
    {
      title: "Relational Query Log Performance Analyzer",
      desc: "A strict data validation pipeline utility configured to parse database server query threads and auto-flag index isolation leaks dynamically.",
      tags: ["SQL/MySQL", "Database Indexing", "Query Optimization", "Python"],
      category: "Database Backend",
      github: "#",
    },
  ];

  // প্রজেক্টের কাস্টম ক্যাটাগরি অনুযায়ী আইকন রিটার্ন করার ফাংশন
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return <Code2 size={16} />;
      case "Data Systems":
      case "Data Science":
        return <Cpu size={16} />;
      case "Database Backend":
        return <Database size={16} />;
      case "Cyber Security":
        return <Shield size={16} />;
      case "Networking":
        return <Globe size={16} />;
      default:
        return <Terminal size={16} />;
    }
  };

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      {/* BACKGROUND TECH ENGINE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 space-y-16">
        {/* Top Navigation Row */}
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
            INDEXED: {allProjects.length} NODE COMPONENT ARTIFACTS FOUND //
            STABLE
          </p>
        </div>

        {/* 15 Projects Production Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, i) => (
            <div
              key={i}
              className="bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl overflow-hidden hover:border-teal-brand/30 hover:bg-[#050b11]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl relative"
            >
              <div className="space-y-5">
                {/* High-Tech Animated Matrix SVG Top Banner */}
                <div className="h-40 w-full relative overflow-hidden border-b border-slate-brand/10 bg-[#060e16]">
                  <svg
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    viewBox="0 0 400 200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.15">
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
                    <path
                      d={`M${50 + i * 15} 140 L${120 + i * 10} ${40 + i * 5} L${220 + i * 5} ${160 - i * 4} L350 80`}
                      stroke="#80b4b0"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray="2 2"
                    />
                    <circle
                      cx="200"
                      cy="100"
                      r="30"
                      fill="none"
                      stroke="#4e7376"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                    />
                    <text
                      x="20"
                      y="175"
                      fill="#80b4b0"
                      fillOpacity="0.4"
                      fontSize="9"
                      fontFamily="monospace"
                      letterSpacing="1"
                    >
                      SYS_REF // LOCAL_NODE_0{i + 1}
                    </text>
                  </svg>
                  {/* Category Chip Badge overlay on top of card asset banner */}
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest font-bold bg-abyss-brand/80 text-teal-brand px-2.5 py-1 rounded border border-slate-brand/30 backdrop-blur-sm shadow-md">
                    {project.category}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss-brand via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Core Title Description Card Body */}
                <div className="px-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="p-2 bg-slate-brand/10 border border-slate-brand/20 text-teal-brand rounded-xl group-hover:bg-teal-brand group-hover:text-abyss-brand group-hover:border-transparent transition-all duration-300">
                      {getCategoryIcon(project.category)}
                    </div>

                    {/* View Source Code Link */}
                    <a
                      href={project.github}
                      aria-label="GitHub Repository"
                      className="text-lightning/40 hover:text-teal-brand transition-colors p-1"
                    >
                      <svg
                        className="w-[18px] h-[18px] fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                    </a>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-teal-brand transition-colors tracking-tight text-left">
                    {project.title}
                  </h2>
                  <p className="text-lightning/50 text-sm leading-relaxed text-left min-h-[72px]">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Lower Section Technical Framework Badges */}
              <div className="px-6 pb-6 flex flex-wrap gap-2 pt-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono bg-abyss-brand text-lightning/70 px-2.5 py-1 rounded-md border border-slate-brand/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
