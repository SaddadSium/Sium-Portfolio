"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Terminal,
  Mail,
  Send,
  AlertCircle,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialLink: "",
    projectType: "",
    reference: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const GOOGLE_SHEET_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwWG-Q5Wq3F-qDxqiCBNO_KfcEAuR0zQO6PNc9DpdBkosWweJPtmmFhjEgcQEiSdBfA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await fetch(GOOGLE_SHEET_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        socialLink: "",
        projectType: "",
        reference: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-abyss-brand text-gray-100 min-h-screen font-sans relative pt-28 pb-24 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737605_1px,transparent_1px),linear-gradient(to_bottom,#4e737605_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(circle_at_top,#4e737610,transparent_50%)] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6 text-left">
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
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-teal-brand uppercase">
              <Terminal size={14} /> Network_Endpoint
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Let's Talk.
            </h1>
          </div>
          <p className="text-lightning/60 text-sm leading-relaxed">
            Have an application checkpoint, complex backend microservice, or
            database logic that needs architecture? Drop a secure thread.
          </p>
          <div className="flex flex-col gap-3 bg-ocean-brand/20 border border-slate-brand/10 p-4 rounded-xl w-fit">
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-teal-brand" />
              <span className="text-xs font-mono text-lightning/85">
                saddadsium.official@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-ocean-brand/10 border border-slate-brand/15 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md relative group">
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-lightning/40">
                Client Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your full name"
                className="w-full bg-abyss-brand/60 border border-slate-brand/20 focus:border-teal-brand/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-lightning/40">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@gmail.com"
                  className="w-full bg-abyss-brand/60 border border-slate-brand/20 focus:border-teal-brand/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-lightning/40">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+880 1XXX-XXXXXX"
                  className="w-full bg-abyss-brand/60 border border-slate-brand/20 focus:border-teal-brand/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-lightning/40">
                Social Profile Link (LinkedIn / Insta / FB)
              </label>
              <input
                type="text"
                value={formData.socialLink}
                onChange={(e) =>
                  setFormData({ ...formData, socialLink: e.target.value })
                }
                placeholder="@username or social profile URL"
                className="w-full bg-abyss-brand/60 border border-slate-brand/20 focus:border-teal-brand/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-lightning/40">
                  Project Architecture
                </label>
                <div className="relative">
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full bg-abyss-brand/60 border border-slate-brand/20 focus:border-teal-brand/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans appearance-none cursor-pointer pr-10"
                    required
                  >
                    <option value="" className="bg-[#07121c]">
                      Enter Your Project Type
                    </option>
                    <option
                      value="Custom Scripts & Task Automation ($150+)"
                      className="bg-[#07121c]"
                    >
                      Custom Scripts & Automation ($150+)
                    </option>
                    <option
                      value="Google Sheets API Backends ($300+)"
                      className="bg-[#07121c]"
                    >
                      Google Sheets API Backends ($300+)
                    </option>
                    <option
                      value="Responsive Landing Pages & UI Layouts ($450+)"
                      className="bg-[#07121c]"
                    >
                      Responsive Landing Pages ($450+)
                    </option>
                    <option
                      value="Secure RESTful API Architecture ($600+)"
                      className="bg-[#07121c]"
                    >
                      Secure RESTful API Architecture ($600+)
                    </option>
                    <option
                      value="MySQL Database Design & Normalization ($750+)"
                      className="bg-[#07121c]"
                    >
                      MySQL Database Design ($750+)
                    </option>
                    <option
                      value="React & Next.js Dynamic Full-Stack App ($950+)"
                      className="bg-[#07121c]"
                    >
                      React & Next.js Full-Stack App ($950+)
                    </option>
                    <option
                      value="E-Commerce Systems & Luxury Storefronts ($1500+)"
                      className="bg-[#07121c]"
                    >
                      E-Commerce Systems ($1500+)
                    </option>
                    <option
                      value="Domain, Hosting & Server Configuration ($2000+)"
                      className="bg-[#07121c]"
                    >
                      Server & Domain Setup ($2000+)
                    </option>
                    <option
                      value="Enterprise Full-Stack Architecture Suite ($2500+)"
                      className="bg-[#07121c]"
                    >
                      Enterprise Full-Stack Suite ($2500+)
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-lightning/40">
                    <svg
                      className="w-4 h-4 fill-none stroke-current"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-lightning/40">
                  Reference
                </label>
                <div className="relative">
                  <select
                    value={formData.reference}
                    onChange={(e) =>
                      setFormData({ ...formData, reference: e.target.value })
                    }
                    className="w-full bg-abyss-brand/60 border border-slate-brand/20 focus:border-teal-brand/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans appearance-none cursor-pointer pr-10"
                    required
                  >
                    <option value="" className="bg-[#07121c]">
                      Enter Your Discovery Reference
                    </option>
                    <option value="Google Search" className="bg-[#07121c]">
                      Google Search Engine
                    </option>
                    <option value="GitHub Profile" className="bg-[#07121c]">
                      GitHub Profile / Repository
                    </option>
                    <option value="LinkedIn Network" className="bg-[#07121c]">
                      LinkedIn Network
                    </option>
                    <option value="Client Referral" className="bg-[#07121c]">
                      Personal / Client Referral
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-lightning/40">
                    <svg
                      className="w-4 h-4 fill-none stroke-current"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-lightning/40">
                Project Scope Specification
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Describe your compilation targets..."
                className="w-full bg-abyss-brand/60 border border-slate-brand/20 focus:border-teal-brand/50 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans resize-none"
              />
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-teal-brand/10 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
              >
                {status === "loading"
                  ? "Transmitting Packet..."
                  : "Establish Contract Sync"}
                <Send size={14} />
              </button>
            </div>
            {status === "error" && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3.5 rounded-xl flex items-center gap-2.5 text-xs font-mono">
                <AlertCircle size={16} />{" "}
                <span>
                  ERROR: Transmission broken. Verify Web App Script Endpoint.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>

      {status === "success" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-[#050b11] border-2 border-teal-brand/40 max-w-md w-full rounded-2xl p-6 sm:p-8 text-center space-y-6 shadow-2xl shadow-teal-brand/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4e737604_1px,transparent_1px),linear-gradient(to_bottom,#4e737604_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
            <div className="mx-auto w-16 h-16 bg-teal-brand/10 border border-teal-brand/30 rounded-full flex items-center justify-center text-teal-brand shadow-lg shadow-teal-brand/5 animate-pulse">
              <ShieldCheck size={32} className="stroke-[1.5]" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                Handshake Complete //
              </h2>
              <p className="text-lightning/60 text-sm leading-relaxed">
                Your project details have been securely transmitted. Contact
                with you soon!
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={() => router.push("/")}
                className="w-full bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand py-3.5 rounded-xl font-extrabold text-sm tracking-widest uppercase hover:opacity-90 active:scale-[0.98] transition-all shadow-md font-mono"
              >
                Confirm & Exit [OK]
              </button>
            </div>

            <span className="text-[9px] font-mono tracking-widest text-lightning/20 block uppercase">
              connection_status: closed_stable
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
