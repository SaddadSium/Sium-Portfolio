"use client";
import Link from "next/link";
import {
  ArrowLeft,
  Cpu,
  ArrowRight,
  Terminal,
  Code2,
  Sparkles,
  Database,
  Zap,
  Shield,
  FileJson,
  Layers,
  Globe,
  Server,
} from "lucide-react";

export default function ServicesPage() {
  const extendedPricingTiers = [
    {
      id: "AUTOMATION",
      tier: "Custom Scripts & Task Automation",
      cost: "$100+",
      timeline: "6-10 Days",
      desc: "Developing lightweight JavaScript/Node.js task automations, system utilities, or advanced scripts to parse directories, synchronize local data structures, and handle repetitive operational workflows.",
      icon: <Terminal size={18} className="text-teal-brand" />,
      features: [
        "Node.js Task Automations",
        "System I/O Data Parsing",
        "Error Log Handlers",
        "Custom Script Deployment",
      ],
    },
    {
      id: "DATA_SYNC",
      tier: "Google Sheets API Backends",
      cost: "$200+",
      timeline: "4-12 Days",
      desc: "Engineering lightweight backend engines utilizing the Google Sheets API and Google Apps Script. Perfect for budget startups needing serverless forms, active CRM trackers, and synchronous ledger systems.",
      icon: <Layers size={18} className="text-teal-brand" />,
      features: [
        "Google Sheets API Setup",
        "Google Apps Script Endpoints",
        "Real-time Database Sync",
        "Zero-CORS Handshake Channels",
      ],
    },
    {
      id: "FRONTEND_CORE",
      tier: "Responsive Landing Pages & UI Layouts",
      cost: "$250+",
      timeline: "5-15 Days",
      desc: "Building clean, optimized web spaces using HTML5, CSS3, JavaScript, and Tailwind CSS UI tokens. Engineered with fully responsive structural flows, cross-browser compatibility, and lightweight code architecture.",
      icon: <Sparkles size={18} className="text-teal-brand" />,
      features: [
        "HTML5 / CSS3 / Vanilla JS",
        "Tailwind CSS Styling Tokens",
        "Fully Responsive Layouts",
        "SEO-Friendly Schema Blueprints",
      ],
    },
    {
      id: "BACKEND_MICRO",
      tier: "Secure RESTful API Architecture",
      cost: "$420+",
      timeline: "15-35 Days",
      desc: "Architecting backend microservices and secure controller routers with Node.js, Express, or PHP. Complete with strict JSON request validation handlers, error log pipelines, and token-decoded middleware filters.",
      icon: <FileJson size={18} className="text-teal-brand" />,
      features: [
        "Node.js / Express or PHP",
        "RESTful API Endpoints Build",
        "JSON Contract Validations",
        "CORS & Security Header Guard",
      ],
    },
    {
      id: "STORAGE_SCHEMA",
      tier: "MySQL Database Design & Normalization",
      cost: "$650+",
      timeline: "14-40 Days",
      desc: "Designing secure, thread-safe transactional data layers using MySQL. Focused on table normalization, query execution mapping optimizations, multi-table joins, and secure connection pool implementations.",
      icon: <Database size={18} className="text-teal-brand" />,
      features: [
        "MySQL Normalization Matrices",
        "Relational Connection Maps",
        "Query Optimization",
        "Secure Transaction Safeguards",
      ],
    },
    {
      id: "WEB_PLATFORM",
      tier: "React & Next.js Dynamic Full-Stack App",
      cost: "$800+",
      timeline: "20-60 Days",
      desc: "Deploying high-performance dynamic client portals utilizing React 19 and Next.js App Router. Featuring state isolation mechanisms, rapid route transitions, server-side data pools, and edge runtime loading setups.",
      icon: <Zap size={18} className="text-teal-brand" />,
      features: [
        "Next.js Server Framework",
        "React 19 Interactive State",
        "Asynchronous Client Pools",
        "Vercel Production Launch",
      ],
    },
    {
      id: "GATEWAY_SYNC",
      tier: "E-Commerce Systems & Luxury Storefronts",
      cost: "$900+",
      timeline: "20-45 Days",
      desc: "Developing luxury digital storefronts with global client state synchronization, secure order management loops, dynamic catalog filtering grids, and robust automated e-commerce architectures.",
      icon: <Code2 size={18} className="text-teal-brand" />,
      features: [
        "Global Cart State Handlers",
        "Synchronous Inventory Hooks",
        "Complex Analytical Panels",
        "Flexible Modular Engine Build",
      ],
    },
    {
      id: "DEPLOY_INFRA",
      tier: "Domain, Hosting & Server Configuration",
      cost: "$1400+",
      timeline: "10-30 Days",
      desc: "Configuring production-ready environments, domain mapping management, security socket mapping, custom server deployment pipelines, proxy gateway configurations, and zero-downtime optimization steps.",
      icon: <Server size={18} className="text-teal-brand" />,
      features: [
        "Custom Domain Mapping",
        "SSL / TLS Security Handshake",
        "VPS Control Panel Setups",
        "Production Environment Build",
      ],
    },
    {
      id: "ADVANCED_SYSTEMS",
      tier: "Enterprise Full-Stack Architecture Suite",
      cost: "$2200+",
      timeline: "30-45 Days",
      desc: "Top-tier comprehensive system development. Backed by solid Software Requirement Specifications (SRS) blueprints, complete multi-platform payment gateway pipelines, strict API validations, and deep technical deployment auditing.",
      icon: <Shield size={18} className="text-teal-brand" />,
      features: [
        "Rigid Technical SRS Docs",
        "Payment Gateway Integrations",
        "System Telemetry Log Monitors",
        "1 Month Dedicated Support",
      ],
    },
  ];

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 space-y-16">
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
              <span>Return Home</span>
            </Link>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight flex items-center gap-3">
              <Cpu className="text-teal-brand" size={28} /> Engineering Cost
              Matrix
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extendedPricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className="bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:bg-[#050b11]/50 hover:border-teal-brand/30 transition-all duration-300 relative group shadow-xl"
            >

              <div className="absolute top-4 right-4 text-[9px] font-mono tracking-wider text-lightning/20 group-hover:text-teal-brand/40 transition-colors">
                {tier.id}
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 bg-slate-brand/10 border border-slate-brand/20 rounded-xl group-hover:bg-teal-brand group-hover:text-abyss-brand transition-all duration-300 flex-shrink-0">
                    {tier.icon}
                  </div>
                  <div className="space-y-0.5 max-w-[80%]">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-teal-brand transition-colors line-clamp-1">
                      {tier.tier}
                    </h3>
                    <p className="text-teal-brand/70 text-xs font-mono">
                      {tier.timeline}
                    </p>
                  </div>
                </div>
                <div className="py-2.5 border-y border-slate-brand/10 flex items-baseline gap-1.5 bg-[#050b11]/30 px-3.5 rounded-xl border border-slate-brand/5">
                  <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono">
                    {tier.cost}
                  </span>
                </div>

                <p className="text-lightning/60 text-xs sm:text-sm leading-relaxed font-normal line-clamp-4 min-h-[80px]">
                  {tier.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-brand/5">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-lightning/30 block font-bold">
                    // Architecture Deliverables
                  </span>
                  <div className="space-y-1">
                    {tier.features.slice(0, 4).map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-lightning/70"
                      >
                        <div className="w-1 h-1 rounded-full bg-teal-brand/60 flex-shrink-0"></div>
                        <span className="truncate" title={feature}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <Link
                  href="/contact"
                  className="w-full py-2.5 bg-ocean-brand/40 border border-slate-brand/20 text-lightning text-xs font-bold tracking-wide rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn hover:bg-gradient-to-r hover:from-slate-brand hover:to-teal-brand hover:text-abyss-brand hover:border-transparent hover:shadow-lg hover:shadow-teal-brand/5"
                >
                  Book This Project
                  <ArrowRight
                    size={12}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-brand to-transparent transition-all duration-500 group-hover:w-[50%]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
