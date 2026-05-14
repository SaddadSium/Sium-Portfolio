"use client";
import Link from "next/link";
import {
  ArrowLeft,
  Cpu,
  Code2,
  Database,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export default function ServicesPage() {
  // সার্ভিস ক্যাটাগরি ডেটা অ্যারে
  const coreServices = [
    {
      id: "01 // ARCHITECTURE",
      title: "Full-Stack Web Engineering",
      tagline: "Building reactive, production-ready frontend ecosystems.",
      desc: "Developing highly responsive client-side architectures optimized for low latency and smooth micro-interactions. Specializing in component modularity, global state patterns, and strict type-safety boundaries.",
      icon: <Code2 size={24} />,
      capabilities: [
        "React 19 & Next.js App Router Architecture",
        "TypeScript State Isolation & Strict Interfaces",
        "Tailwind CSS UI Engines & Custom Tokens",
        "Edge Rendering Optimization (SSR, ISR, SSG)",
        "Redux Toolkit & Asynchronous Client Data Pools",
      ],
    },
    {
      id: "02 // DATABASE",
      title: "Robust Backend & API Architecture",
      tagline: "Engineering secure, multithreaded microservices.",
      desc: "Architecting server infrastructures capable of parsing intensive computational requests. Focused on secure gateway logic, token authorization streams, rate-limiting, and relational schema normalization.",
      icon: <Database size={24} />,
      capabilities: [
        "Nest.js & Express Microservice Architectures",
        "RESTful API Contract Design & Validation Layers",
        "MySQL & PostgreSQL Relational Schema Normalization",
        "Stateless JWT Token Authentication & Salted Encryption",
        "Query Optimization & Multi-table Thread Benchmarking",
      ],
    },
    {
      id: "03 // AUTOMATION",
      title: "Enterprise Workflow Automation",
      tagline:
        "Translating complex business calculations into computational logic.",
      desc: "Designing macros and technical scripts to streamline operations and parse enterprise ledger arrays. Expert at constructing rigid Software Requirement Specifications (SRS) and turning manual procedures into automated threads.",
      icon: <FileSpreadsheet size={24} />,
      capabilities: [
        "Advanced Microsoft Excel Analytical Engine & Pivot Arrays",
        "VBA Scripting & Data Migration Macro Routines",
        "Comprehensive Technical SRS Documentation Specs",
        "Automated PowerPoint Systems Pitch Decks & Wireframes",
        "System Log Parsing & Automated Error-Flag Handlers",
      ],
    },
  ];

  // নতুন যুক্ত করা প্রজেক্ট কস্ট ও বুকিং ডেটা ম্যাট্রিক্স (বাজেট অনুযায়ী টায়ার)
  const pricingTiers = [
    {
      tier: "MVP / Prototype",
      cost: "$500+",
      timeline: "7-14 Days Delivery",
      target:
        "For startups looking to validate a core software or product idea with clean codebase limits.",
      features: [
        "Core Feature Architecture",
        "Next.js Frontend Implementation",
        "Basic REST API Integrations",
        "Supabase / Firebase Storage Setup",
        "Vercel Production Deployment",
      ],
      cta: "Book MVP Build",
    },
    {
      tier: "Custom Full-Stack Platform",
      cost: "$1200+",
      timeline: "21-35 Days Delivery",
      target:
        "For scaled local and global businesses requiring rigid custom database logics and state safety.",
      features: [
        "Advanced Nest.js Backend",
        "Complete Normalized Relational DB",
        "Secure JWT Session Logic Hooks",
        "Complex Analytical UI Layouts",
        "1 Month Performance Support",
      ],
      cta: "Book Full-Stack Build",
      popular: true,
    },
    {
      tier: "Enterprise Logic & Automation",
      cost: "$800+",
      timeline: "14-21 Days Delivery",
      target:
        "For automated pipeline synchronization, bulk dataset auditing, and microservices management.",
      features: [
        "VBA Advanced Macros Engine",
        "Complex Data Validation Logic",
        "Full Technical SRS Documentation",
        "System Log Monitoring Routines",
        "Automated Ledger Data Pools",
      ],
      cta: "Book Automation Setup",
    },
  ];

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      {/* BACKGROUND TECH ENGINE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-24">
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
              <Cpu className="text-teal-brand" size={28} /> Core Competencies
            </h1>
          </div>
          <p className="text-lightning/50 max-w-sm text-sm font-normal leading-relaxed text-left sm:text-right font-mono text-xs uppercase tracking-widest">
            STATUS // SYSTEMS_OPERATIONAL_
          </p>
        </div>

        {/* 3 Detailed Service Blocks Column Layout */}
        <div className="space-y-12">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 hover:border-teal-brand/30 hover:bg-[#050b11]/50 transition-all duration-300 shadow-2xl relative group"
            >
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-slate-brand/60 font-bold tracking-wider">
                    {service.id}
                  </span>
                  <div className="p-3 bg-slate-brand/10 border border-slate-brand/20 text-teal-brand rounded-xl group-hover:bg-teal-brand group-hover:text-abyss-brand group-hover:border-transparent transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-teal-brand transition-colors">
                  {service.title}
                </h2>
                <p className="text-teal-brand/80 text-xs font-mono leading-relaxed">
                  {service.tagline}
                </p>
                <p className="text-lightning/50 text-sm leading-relaxed pt-2">
                  {service.desc}
                </p>
              </div>

              <div className="lg:col-span-7 bg-abyss-brand/40 border border-slate-brand/10 rounded-xl p-6 flex flex-col justify-center space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-lightning/30 block mb-2 text-left font-bold">
                  // Verified Engineering Endpoints
                </span>
                <div className="space-y-2.5">
                  {service.capabilities.map((capability, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-ocean-brand/20 border border-slate-brand/10 px-4 py-3 rounded-xl hover:border-teal-brand/20 transition-colors group/item"
                    >
                      <div className="text-teal-brand flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-xs sm:text-sm text-lightning/80 font-medium text-left leading-tight">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-teal-brand via-slate-brand to-transparent transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* ================= PROJECT ARCHITECTURE COST MATRICES (নতুন কস্ট সেকশন) ================= */}
        <div className="space-y-16 pt-12">
          <div className="text-left space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-brand uppercase">
              <Terminal size={14} /> Budget_Pricing_Nodes
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Project Cost Matrix.
            </h2>
            <p className="text-lightning/50 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Transparent tier structures mapped directly to your computational
              architecture demands and target sprint deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`bg-ocean-brand/10 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#050b11]/50 transition-all duration-300 relative group shadow-xl ${
                  tier.popular
                    ? "border-teal-brand/50 ring-1 ring-teal-brand/20 shadow-teal-brand/5"
                    : "border-slate-brand/15 hover:border-slate-brand/30"
                }`}
              >
                {/* Popular Badge Glow Overlay */}
                {tier.popular && (
                  <span className="absolute -top-3 right-6 bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg font-mono">
                    Most Requested
                  </span>
                )}

                <div className="space-y-6 text-left">
                  {/* Top Tier Info */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-teal-brand transition-colors">
                      {tier.tier}
                    </h3>
                    <p className="text-lightning/40 text-xs font-mono">
                      {tier.timeline}
                    </p>
                  </div>

                  {/* Core Large Cost Node */}
                  <div className="py-4 border-y border-slate-brand/10 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                      {tier.cost}
                    </span>
                    <span className="text-xs font-mono text-lightning/40 uppercase">
                      / Project Based
                    </span>
                  </div>

                  <p className="text-lightning/60 text-xs sm:text-sm leading-relaxed min-h-[48px]">
                    {tier.target}
                  </p>

                  {/* Capability List */}
                  <div className="space-y-2.5 pt-2">
                    {tier.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs text-lightning/80"
                      >
                        <div className="w-1 h-1 rounded-full bg-teal-brand flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secure Contract Booking Action Button */}
                <div className="pt-8">
                  <Link
                    href="/contact"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all active:scale-[0.98] flex items-center justify-center gap-2 group/btn ${
                      tier.popular
                        ? "bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand shadow-lg shadow-teal-brand/10 hover:shadow-teal-brand/20"
                        : "bg-ocean-brand/40 border border-slate-brand/20 text-lightning hover:bg-ocean-brand/70 hover:border-teal-brand/20"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
