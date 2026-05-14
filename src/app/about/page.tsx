"use client";
import {
  Command,
  Cpu,
  GraduationCap,
  ShieldCheck,
  User,
  Terminal,
  Binary,
  Award,
  Code2,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  // একাডেমিক সাবজেক্ট বা কোর নলেজ বীকনস
  const academicFocus = [
    "Object-Oriented Programming (OOP)",
    "Relational Database Management (RDBMS)",
    "Data Structures & Algorithms (DSA)",
    "Operating Systems & Architecture",
    "Computer Networking & Subnetting",
    "Software Requirement Specifications (SRS)",
  ];

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      {/* BACKGROUND TECH ENGINE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10 space-y-20">
        {/* Top Floating Navigation Back */}
        <div className="text-left">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-teal-brand/70 hover:text-teal-brand transition-colors group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>cd .. // back to home</span>
          </Link>
        </div>

        {/* ================= SECTION 1: IDENTITY BREAKDOWN ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Elegant Formal Image Framework */}
          <div className="lg:col-span-5 flex justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-brand/20 to-teal-brand/20 rounded-2xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-72 h-96 sm:w-80 sm:h-[420px] bg-gradient-to-b from-ocean-brand to-[#050b11] border-2 border-slate-brand/30 p-3 rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-500 group-hover:border-teal-brand/40 group-hover:-translate-y-1">
              <img
                src="/formal-pic.jpg" // public ফোল্ডারে আপনার ফরমাল ছবি এই নামে রাখবেন
                alt="A.S.M. Sium Formal"
                className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.nextSibling) {
                    (e.currentTarget.nextSibling as HTMLElement).style.display =
                      "flex";
                  }
                }}
              />

              {/* Fallback Cyber Avatar (যদি ছবি না থাকে) */}
              <div className="absolute inset-3 hidden flex-col items-center justify-center bg-[#07121c] border border-slate-brand/10 rounded-xl space-y-3">
                <div className="p-4 bg-ocean-brand border border-slate-brand/20 text-teal-brand rounded-full shadow-lg shadow-black/40">
                  <User size={36} className="stroke-[1.5]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-lightning/30">
                  src/avatar/sium.webp
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-abyss-brand via-transparent to-transparent opacity-80"></div>
            </div>
          </div>

          {/* Right: Bio Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-teal-brand uppercase">
                <Command size={14} /> Profile_Kernel
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                About Me.
              </h1>
            </div>

            <p className="text-lightning/70 text-base sm:text-lg leading-relaxed font-normal">
              I am <span className="text-white font-semibold">A.S.M. Sium</span>
              . As an undergraduate student engineering a career in software
              development, I bridge computational theory with deployment cycles.
              I focus on developing clean backend logics, strict database
              architectures, and highly reactive user interfaces.
            </p>

            <p className="text-lightning/50 text-sm leading-relaxed">
              My core ideology relies on structural efficiency. Whether working
              in cross-functional engineering sprints or automating
              documentation setups, I target zero-redundancy and clean
              deployment protocols.
            </p>

            {/* Monospace Quote Block */}
            <div className="border-l-2 border-teal-brand bg-ocean-brand/20 px-5 py-4 rounded-r-xl font-mono text-xs text-lightning/70 leading-relaxed shadow-xl">
              "System discipline is the baseline of software execution—whether
              running optimized database operations or leading coordinated team
              modules on the field."
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: PILLARS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {/* Pillar 1: Education & CSE Core */}
          <div className="bg-ocean-brand/10 border border-slate-brand/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-slate-brand/30 transition-all shadow-xl text-left">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-brand/10">
              <div className="p-2.5 bg-slate-brand/20 text-teal-brand rounded-xl">
                <GraduationCap size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  Academic Foundations
                </h2>
                <p className="text-xs font-mono text-lightning/40">
                  B.Sc. in Computer Science & Engineering
                </p>
              </div>
            </div>

            <p className="text-lightning/60 text-sm leading-relaxed">
              My engineering degree focuses on high-level system analysis. I
              have spent extensive cycles understanding the architecture behind
              relational indices, hardware memory management, and clean object
              design.
            </p>

            {/* Node List of Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {academicFocus.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs text-lightning/80 bg-ocean-brand/20 border border-slate-brand/10 px-3 py-2 rounded-xl"
                >
                  <div className="w-1 h-1 rounded-full bg-teal-brand"></div>
                  <span className="font-medium truncate" title={item}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: BNCC Military Leadership */}
          <div className="bg-ocean-brand/10 border border-slate-brand/10 rounded-2xl p-6 sm:p-8 space-y-6 hover:border-slate-brand/30 transition-all shadow-xl text-left flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-brand/10">
                <div className="p-2.5 bg-slate-brand/20 text-teal-brand rounded-xl">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    Leadership & Command
                  </h2>
                  <p className="text-xs font-mono text-lightning/40">
                    Bangladesh National Cadet Corps (BNCC)
                  </p>
                </div>
              </div>

              <p className="text-lightning/60 text-sm leading-relaxed">
                As an active cadet, I have been trained in strict field
                coordination, chain-of-command protocols, and crisis management
                tactics. This background significantly enhances my performance
                in Agile software teams:
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3 bg-ocean-brand/20 border border-slate-brand/10 p-3.5 rounded-xl">
                  <div className="text-xs font-mono text-teal-brand mt-0.5">
                    01 //
                  </div>
                  <p className="text-lightning/80 text-xs font-medium leading-relaxed">
                    Tactical Discipline: Ensuring codebase deliveries match
                    strict timelines and scope guidelines without structural
                    decay.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-ocean-brand/20 border border-slate-brand/10 p-3.5 rounded-xl">
                  <div className="text-xs font-mono text-teal-brand mt-0.5 :">
                    02 //
                  </div>
                  <p className="text-lightning/80 text-xs font-medium leading-relaxed">
                    Strategic Operations: Directing deployment environments and
                    setting up documentation templates under strict conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-teal-brand/50 uppercase tracking-widest pt-4 md:pt-0">
              <Award size={12} /> command_handshake // established
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
