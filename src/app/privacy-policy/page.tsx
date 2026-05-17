"use client";
import Link from "next/link";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Globe,
  Terminal,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "May 1, 2026";

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 space-y-12 text-left">
        <div className="space-y-4 border-b border-slate-brand/10 pb-8">
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
            <ShieldCheck className="text-teal-brand" size={32} /> Privacy Policy
          </h1>
          <p className="text-lightning/40 text-xs font-mono uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-10 leading-relaxed text-lightning/70">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Eye size={20} className="text-teal-brand" /> 01. Introduction
            </div>
            <p className="text-sm sm:text-base">
              Welcome to the professional portfolio of **A.S.M. Sium**. Your
              privacy is critically important to me. This policy outlines how I
              collect, use, and protect your information when you interact with
              this website and the integrated contact systems.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <FileText size={20} className="text-teal-brand" /> 02. Data
              Collection
            </div>
            <p className="text-sm sm:text-base">
              I collect minimal data necessary to establish professional
              communication. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                **Identity Data:** Name and professional title provided via the
                contact form.
              </li>
              <li>
                **Contact Data:** Email address, phone number, and social media
                profile links.
              </li>
              <li>
                **Project Data:** Information regarding your project
                architecture, budget, and specific requirements.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Lock size={20} className="text-teal-brand" /> 03. How I Use Your
              Data
            </div>
            <p className="text-sm sm:text-base">
              The data collected is used exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                Establishing a secure communication handshake for project
                discussions.
              </li>
              <li>
                Compiling Software Requirement Specifications (SRS) tailored to
                your needs.
              </li>
              <li>
                Syncing project inquiries with my secure database via protected
                API endpoints.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Globe size={20} className="text-teal-brand" /> 04. Data Security
              & Third Parties
            </div>
            <p className="text-sm sm:text-base">
              Your data is never sold or shared with third-party marketing
              agencies. I use encrypted transmission protocols to sync form data
              with my secure database. However, please remember that no method
              of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-4 border-t border-slate-brand/10 pt-8">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Terminal size={20} className="text-teal-brand" /> 05. Contact for
              Inquiries
            </div>
            <p className="text-sm sm:text-base">
              If you have any questions regarding this policy or wish to request
              the deletion of your data from my records, please contact me
              directly at:
            </p>
            <div className="bg-ocean-brand/20 border border-slate-brand/20 p-4 rounded-xl inline-block">
              <span className="text-teal-brand font-mono text-sm">
                saddadsium.official@gmail.com
              </span>
            </div>
          </section>
        </div>
        <div className="pt-12 text-center">
          <p className="text-[10px] font-mono text-lightning/30 uppercase tracking-[0.2em]">
            End of Transmission
          </p>
        </div>
      </div>
    </div>
  );
}
