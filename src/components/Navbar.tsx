"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে ন্যাভবারের অপাসিটি এবং বর্ডার চেঞ্জ করার জন্য
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Project", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Experience", href: "/experience" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 font-sans ${
        scrolled
          ? "bg-abyss-brand/70 backdrop-blur-xl border-b border-slate-brand/20 shadow-2xl shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo with Cinematic Glow hover */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="bg-gradient-to-tr from-slate-brand to-teal-brand p-2 rounded-xl group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 shadow-md shadow-teal-brand/10">
              <Code2 className="text-abyss-brand w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-bold text-xl tracking-tighter text-white group-hover:text-teal-brand transition-colors">
              A.S.M. <span className="text-teal-brand font-medium">SIUM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-lightning/70 hover:text-white transition-colors group"
              >
                {link.name}
                {/* Premium Accent Underline Animation */}
                <span className="absolute bottom-1 left-4 w-0 h-[1.5px] bg-gradient-to-r from-teal-brand to-transparent transition-all duration-300 group-hover:w-[70%]"></span>
              </Link>
            ))}

            {/* Premium CTA Button */}
            <Link
              href="/contact"
              className="ml-6 bg-gradient-to-r from-slate-brand to-ocean-brand text-lightning border border-teal-brand/20 px-5 py-2 rounded-xl text-sm font-semibold hover:border-teal-brand/50 hover:text-white shadow-lg shadow-black/20 hover:shadow-teal-brand/5 active:scale-95 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-lightning/80 hover:text-white hover:bg-white/5 transition-all"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Premium Floating Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-[70px] p-4 transition-all duration-300 md:hidden z-50 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-6 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-ocean-brand/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-brand/30 p-5 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-lightning/80 hover:bg-white/[0.03] hover:text-teal-brand rounded-xl transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-slate-brand to-teal-brand text-abyss-brand py-3.5 rounded-xl font-bold shadow-xl shadow-teal-brand/10 mt-4 active:scale-98 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
