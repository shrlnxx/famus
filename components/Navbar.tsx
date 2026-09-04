"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#lomba", label: "Cabang Lomba" },
  { href: "#syarat", label: "Syarat & Ketentuan" },
  { href: "#jadwal", label: "Jadwal Acara" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-md shadow-slate-200/60"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 group-hover:bg-emerald-700 flex items-center justify-center text-white font-extrabold text-sm shadow-sm transition-colors">
              F
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-[15px] text-emerald-700 tracking-tight">
                FAMUS 2026
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                Festival Anak Muslim
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-500 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#syarat"
              className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              Guide Book
            </a>
          </nav>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <a
              href="#pendaftaran"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold text-sm transition-all shadow-sm hover:shadow-md hover:-translate-y-px"
            >
              Daftar Sekarang
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-slate-100 py-4 pb-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 text-sm font-semibold text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pendaftaran"
              onClick={handleNavClick}
              className="mt-3 mx-0 flex items-center justify-center px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm transition-colors"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
