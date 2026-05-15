"use client";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Award,
  GraduationCap,
  ShieldCheck,
  Calendar,
  Building2,
  Terminal,
} from "lucide-react";

export default function ExperiencePage() {
  const professionalExperience = [
    {
      id: "01",
      type: "work",
      duration: "2026 - PRESENT",
      title: "Frontend Developer",
      organization: "CodeAlpha",
      desc: "Crafting immersive user interfaces with React and Next.js, optimizing performance through advanced caching strategies and Vercel edge functions. Collaborating on microservice architectures to deliver seamless, scalable web applications.",
      highlights: [
        "Next.js 19 App Engine Deployment",
        "Google Sheets Live Real-Time API Hooks",
        "State-Safeguarded E-commerce Pipeline Architectures",
      ],
    },
    {
      id: "02",
      type: "work",
      duration: "2025 - PRESENT",
      title: "Full-Stack Software Engineer & Web Architect",
      organization: "Freelance & Enterprise Systems Contracts",
      desc: "Architecting decentralized microservices, state-safeguarded e-commerce pipelines, and normalized relational database logic maps. Optimizing data loading speed down to sub-20ms environments through aggressive caching and Vercel edge runtime handlers.",
      highlights: [
        "Next.js 19 App Engine Deployment",
        "Node.js Serverless API Orchestration",
        "Microservice Gateway Rate-Limiting Protocols",
      ],
    },
    {
      id: "03",
      type: "education",
      duration: "2022 - PRESENT",
      title: "B.Sc. in Computer Science & Engineering",
      organization: "Undergraduate Academic Degree",
      desc: "Deepening theoretical knowledge limits in computational runtime analysis, discrete logic arrays, relational indexing strategies, and modular object design benchmarks.",
      highlights: [
        "Data Structures & Algorithms Parsing",
        "Subnet Routing & IPv6 Architecture Layouts",
        "Legacy C++ / OpenGL 2D Graphics Implementations",
        "Java & C# Object-Oriented Programming Paradigms",
      ],
    },
    {
      id: "04",
      type: "leadership",
      duration: "2022 - 2024",
      title: "General Member",
      organization: "AIUB Photography Club (AIUBPC)",
      desc: "Led strategic event planning and field operations for the AIUB Photography Club, orchestrating synchronized protocols for squad commands during on-site shoots. Developed agile communication systems to enhance team coordination and execution efficiency in dynamic environments.",
      highlights: [
        "Event Planning & Execution Protocols",
        "Team Coordination & Communication Systems",
        "On-Site Operational Leadership",
      ],
    },
    {
      id: "05",
      type: "work",
      duration: "2021 - 2022",
      title: "Director of Finance & Operations",
      organization: "Layers N Effects (LNE)",
      desc: "Directed financial strategy and operational execution for Layers N Effects, a dynamic event management company. Spearheaded the development of comprehensive event planning protocols and led on-site operational teams to ensure seamless execution of high-profile events, enhancing client satisfaction and organizational efficiency.",
      highlights: [
        "Financial Strategy & Budget Management",
        "Operational Protocol Development",
        "On-Site Event Leadership",
      ],
    },
    {
      id: "06",
      type: "leadership",
      duration: "2021 - 2023",
      title: "Advisor",
      organization: "Photography Club of Rouf College (PCRC)",
      desc: "Provided strategic guidance and mentorship to the Photography Club of Rouf College, advising on financial management and operational protocols. Played a key role in the development of event planning strategies and on-site leadership, contributing to the club's growth and success in organizing impactful photography events.",
      highlights: [
        "Advisory role in photography club operations",
        "Technical mentorship in event planning and execution",
        "Financial oversight and strategic guidance",
      ],
    },
  ];

  const getExperienceIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase size={20} className="text-teal-brand" />;
      case "leadership":
        return <ShieldCheck size={20} className="text-teal-brand" />;
      case "education":
        return <GraduationCap size={20} className="text-teal-brand" />;
      default:
        return <Terminal size={20} className="text-teal-brand" />;
    }
  };

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-16">
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
              <Award className="text-teal-brand" size={28} /> Engineering
              Timeline
            </h1>
          </div>
        </div>

        <div className="relative border-l-2 border-slate-brand/20 pl-6 sm:pl-10 space-y-14 text-left max-w-3xl mx-auto pt-4">
          {professionalExperience.map((exp, index) => (
            <div key={index} className="relative group space-y-4">
              <span className="absolute -left-[3 geometry-accent] -left-[33px] sm:-left-[51px] top-1.5 w-5 h-5 rounded-full bg-abyss-brand border-2 border-slate-brand/40 group-hover:border-teal-brand transition-all duration-300 flex items-center justify-center shadow-lg shadow-black/80 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-brand/40 group-hover:bg-teal-brand transition-colors duration-300"></span>
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="text-xs font-mono text-teal-brand font-bold bg-slate-brand/10 border border-slate-brand/20 px-3 py-1 rounded-xl w-fit shadow-md">
                  {exp.duration}
                </span>
                <span className="text-xs font-mono text-lightning/30 hidden sm:inline">
                  // {exp.id}
                </span>
              </div>
              <div className="bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-teal-brand/20 hover:bg-[#050b11]/40 transition-all duration-300 shadow-2xl relative">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-brand/10">
                  <div className="space-y-1">
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-teal-brand transition-colors">
                      {exp.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-mono text-lightning/50 flex items-center gap-1.5">
                      <Building2 size={12} className="text-slate-brand" />{" "}
                      {exp.organization}
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#050b11]/80 border border-slate-brand/20 text-teal-brand rounded-xl shadow-inner hidden sm:block">
                    {getExperienceIcon(exp.type)}
                  </div>
                </div>
                <p className="text-lightning/60 text-sm leading-relaxed font-normal">
                  {exp.desc}
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    {exp.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-ocean-brand/20 border border-slate-brand/10 px-3 py-1.5 rounded-xl font-mono text-[11px] text-lightning/80 hover:border-slate-brand/30 transition-colors"
                      >
                        <div className="w-1 h-1 rounded-full bg-teal-brand/70"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gradient-to-r from-teal-brand to-transparent transition-all duration-500 group-hover:w-[50%]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
