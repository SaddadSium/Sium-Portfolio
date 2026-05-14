"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, Camera, Code2, Copy, Check } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const emailAddress = "your.email@example.com"; // এখানে আপনার আসল ইমেইলটি বসাবেন

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <footer className="bg-abyss-brand text-gray-100 pt-20 pb-10 overflow-hidden relative border-t border-slate-brand/10 font-sans">
      {/* Cinematic Stormy Ambient Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-slate-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[300px] h-[300px] bg-teal-brand/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Tier: Call to Action with Copy-Email Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 mb-16 border-b border-slate-brand/10 gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Have a vision in mind?
            </h3>
            <p className="text-lightning/60 text-base sm:text-lg max-w-xl">
              Available for full-stack engineering contracts and premium
              cinematography bookings.
            </p>
          </div>

          {/* Interactive Copy-Email Card */}
          <div className="flex items-center gap-3 bg-ocean-brand/40 backdrop-blur-md border border-slate-brand/20 px-4 py-3 rounded-xl w-full sm:w-auto justify-between group hover:border-teal-brand/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-brand/20 text-teal-brand rounded-lg">
                <Mail size={18} />
              </div>
              <span className="text-sm font-mono text-teal-brand/90 select-all">
                {emailAddress}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-2 text-lightning/40 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              title="Copy Email"
            >
              {copied ? (
                <Check size={16} className="text-green-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        {/* Middle Tier: Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <div className="bg-gradient-to-tr from-slate-brand to-teal-brand p-2 rounded-xl group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-teal-brand/10">
                <Code2 className="text-abyss-brand w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-bold text-2xl tracking-tighter text-white">
                A.S.M. <span className="text-teal-brand font-medium">SIUM</span>
              </span>
            </Link>
            <p className="text-lightning/60 max-w-sm text-base leading-relaxed font-normal">
              Architecting secure backend logics, highly reactive frontends, and
              preserving raw visual aesthetics behind the cinematic lens.
            </p>

            {/* Premium Custom Colored SVG Social Icons */}
            <div className="flex gap-3 pt-2">
              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="w-11 h-11 bg-ocean-brand/30 border border-slate-brand/20 rounded-xl hover:bg-gradient-to-tr hover:from-slate-brand hover:to-teal-brand hover:text-abyss-brand hover:border-transparent hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 fill-current text-lightning/70 group-hover:text-abyss-brand transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-11 h-11 bg-ocean-brand/30 border border-slate-brand/20 rounded-xl hover:bg-gradient-to-tr hover:from-slate-brand hover:to-teal-brand hover:text-abyss-brand hover:border-transparent hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 fill-current text-lightning/70 group-hover:text-abyss-brand transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-11 h-11 bg-ocean-brand/30 border border-slate-brand/20 rounded-xl hover:bg-gradient-to-tr hover:from-slate-brand hover:to-teal-brand hover:text-abyss-brand hover:border-transparent hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
              >
                <svg
                  className="w-5 h-5 stroke-current fill-none text-lightning/70 group-hover:text-abyss-brand transition-colors"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-teal-brand flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-brand"></span>{" "}
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {["About", "Project", "Services", "Experience"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-lightning/60 hover:text-white flex items-center group transition-colors text-base"
                  >
                    <ArrowUpRight
                      size={16}
                      className="mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-teal-brand"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Core Competencies Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-teal-brand flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-brand"></span>{" "}
              Core Competencies
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-ocean-brand/30 border border-slate-brand/20 text-slate-brand group-hover:text-teal-brand group-hover:border-teal-brand/30 rounded-lg transition-all duration-300">
                  <Code2 size={16} />
                </div>
                <div>
                  <p className="font-medium text-white/90 text-base">
                    Full Stack Engineering
                  </p>
                  <p className="text-xs font-mono text-teal-brand/50 mt-0.5">
                    Next.js • Nest.js • REST APIs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-ocean-brand/30 border border-slate-brand/20 text-slate-brand group-hover:text-teal-brand group-hover:border-teal-brand/30 rounded-lg transition-all duration-300">
                  <Camera size={16} />
                </div>
                <div>
                  <p className="font-medium text-white/90 text-base">
                    Cinematography
                  </p>
                  <p className="text-xs font-mono text-teal-brand/50 mt-0.5">
                    Storyboarding • 4K Raw • Post
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Legals */}
        <div className="border-t border-slate-brand/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-lightning/30 text-sm font-normal">
          <p>© {currentYear} A.S.M. Sium. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
