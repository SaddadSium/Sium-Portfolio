"use client";
import Link from "next/link";
import {
  ArrowLeft,
  Scale,
  ShieldAlert,
  Gavel,
  Cpu,
  HardDrive,
  FileCheck,
} from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "May 15, 2026";

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
            <Scale className="text-teal-brand" size={32} /> Terms & Conditions
          </h1>
          <p className="text-lightning/40 text-xs font-mono uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>
        </div>
        <div className="space-y-10 leading-relaxed text-lightning/70">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Gavel size={20} className="text-teal-brand" /> 01. Agreement of
              Terms
            </div>
            <p className="text-sm sm:text-base">
              By accessing this website or engaging in a project contract with
              **A.S.M. Sium**, you agree to be bound by these Terms and
              Conditions. These terms apply to all visitors, clients, and others
              who access or use the service.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <Cpu size={20} className="text-teal-brand" /> 02. Project Scope &
              Delivery
            </div>
            <p className="text-sm sm:text-base">
              Each project is governed by a specific Software Requirement
              Specification (SRS). Delivery timelines are estimates based on the
              initial project architecture. Any changes to the project scope
              after the "Handshake" phase may result in adjusted deadlines and
              costs.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <FileCheck size={20} className="text-teal-brand" /> 03. Payment
              Terms & Tiers
            </div>
            <p className="text-sm sm:text-base">
              Payments are structured according to the selected project tier
              (MVP, Custom Full-Stack, or Automation Suite).
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                A non-refundable commencement fee may be required for high-scale
                contracts.
              </li>
              <li>
                Final project files and deployment ownership are transferred
                only upon full settlement of the agreed cost.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <HardDrive size={20} className="text-teal-brand" /> 04.
              Intellectual Property
            </div>
            <p className="text-sm sm:text-base">
              Unless otherwise agreed in a written contract, the underlying
              source code developed specifically for a client remains the
              property of the client upon final payment. However, I reserve the
              right to reuse generic modules, logic patterns, and
              non-proprietary code snippets in future projects.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <ShieldAlert size={20} className="text-teal-brand" /> 05.
              Limitation of Liability
            </div>
            <p className="text-sm sm:text-base">
              In no event shall **A.S.M. Sium** be liable for any indirect,
              incidental, or consequential damages (including loss of profits or
              data) arising out of the use of software products or services
              delivered, beyond the total amount paid by the client for that
              specific project.
            </p>
          </section>

          <section className="space-y-4 border-t border-slate-brand/10 pt-8 text-center sm:text-left">
            <p className="text-sm sm:text-base italic">
              "Building high-performance systems requires mutual trust and clear
              specifications."
            </p>
            <p className="text-xs font-mono text-teal-brand">
              // For detailed contract inquiries, please reach out via the
              Contact Endpoint.
            </p>
          </section>
        </div>
        <div className="pt-12 text-center">
          <p className="text-[10px] font-mono text-lightning/30 uppercase tracking-[0.2em]">
            End of Agreement
          </p>
        </div>
      </div>
    </div>
  );
}
