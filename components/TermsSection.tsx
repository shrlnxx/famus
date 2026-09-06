"use client";

import { useState } from "react";
import {
  CalendarDays,
  Users,
  Trophy,
  Clock,
  ArrowRight,
  FileCheck,
  CheckCircle2,
  Info,
  Shield,
  Download,
  Sparkles,
  MapPin,
  Check,
  Copy,
} from "lucide-react";

export default function TermsSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("639801016707502");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    alert("Mengunduh Juknis & Panduan Lengkap FAMUS 2026 (PDF)...");
  };

  return (
    <>
      {/* ═════════════════════════════════════════════════════════════════
          SECTION 1: ROAD TO FAMUS 2026 — JADWAL & WAKTU PENTING (TIMELINE)
          ═════════════════════════════════════════════════════════════════ */}
      <section
        id="jadwal"
        className="relative py-20 sm:py-24 lg:py-32 bg-[#FAF8F5] overflow-hidden scroll-mt-16"
      >
        {/* Subtle geometric texture accents (very subtle heritage feeling) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#064e3b 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />

        {/* Ambient background glow behind the main milestone */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-1/4 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── Section Header ── */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-[11px] font-extrabold uppercase tracking-[0.22em] shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              ROAD TO FAMUS 2026
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-slate-900 tracking-tight leading-tight">
              Jadwal &amp; Waktu Penting
            </h2>
            <p className="mt-3.5 text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl mx-auto">
              Catat tanggal pentingnya dan bersiap menuju panggung FAMUS 2026.
            </p>
          </div>

          {/* ── Desktop Visual Progress Bar / Journey Indicator ── */}
          <div className="hidden lg:block mb-8 px-4">
            <div className="relative flex items-center justify-between max-w-4xl mx-auto">
              {/* Connecting Line */}
              <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-600 z-0" />

              {/* Step 1 Indicator */}
              <div className="relative z-10 flex items-center gap-2.5 bg-[#FAF8F5] px-3 py-1 rounded-full">
                <span className="w-7 h-7 rounded-full bg-emerald-700 text-white text-xs font-black flex items-center justify-center shadow-sm">
                  01
                </span>
                <span className="text-xs font-black tracking-wider text-slate-800 uppercase">
                  PENDAFTARAN
                </span>
              </div>

              {/* Center arrow indicator */}
              <div className="relative z-10 flex items-center gap-2 bg-[#FAF8F5] px-3 py-1 rounded-full border border-amber-200/70 shadow-xs">
                <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-xs font-black flex items-center justify-center shadow-sm">
                  02
                </span>
                <span className="text-xs font-black tracking-wider text-slate-800 uppercase">
                  TECHNICAL MEETING
                </span>
              </div>

              {/* Step 3 Indicator */}
              <div className="relative z-10 flex items-center gap-2.5 bg-[#FAF8F5] px-3 py-1 rounded-full">
                <span className="w-7 h-7 rounded-full bg-[#064e3b] text-amber-300 text-xs font-black flex items-center justify-center ring-2 ring-amber-400 shadow-sm">
                  03
                </span>
                <span className="text-xs font-black tracking-wider text-[#064e3b] uppercase flex items-center gap-1">
                  HARI H FAMUS 2026
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 inline" />
                </span>
              </div>
            </div>
          </div>

          {/* ── Desktop Horizontal Timeline (3 Cards) ── */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-7 items-stretch">
            {/* ── MILESTONE 01: PENDAFTARAN ── */}
            <div className="group relative bg-white rounded-[24px] p-8 border border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100/90 text-emerald-700 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-emerald-100/80 transition-all duration-300">
                      <CalendarDays className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black tracking-[0.18em] text-emerald-700 uppercase">
                        FASE 01
                      </span>
                      <h3 className="font-extrabold text-base text-slate-900 leading-tight mt-0.5">
                        PENDAFTARAN
                      </h3>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-stone-300 group-hover:text-emerald-700/40 transition-colors">
                    01
                  </span>
                </div>

                {/* Subtitle / Title */}
                <p className="font-bold text-sm text-slate-700 mt-6 mb-2">
                  Periode Pendaftaran Peserta
                </p>

                {/* Prominent Date Display */}
                <div className="bg-stone-50/80 rounded-2xl p-5 border border-stone-100 my-4">
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    07–30
                  </div>
                  <div className="text-sm font-extrabold text-emerald-700 tracking-wider uppercase mt-1">
                    SEPTEMBER 2026
                  </div>
                </div>

                {/* Time & Schedule */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50/70 border border-emerald-100/80 text-emerald-800 text-xs font-semibold mb-4">
                  <Clock className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Pukul 23:59 WIB (Batas Akhir)</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Pendaftaran dilakukan online melalui laman resmi ini. Kuota ditutup sewaktu-waktu bila kapasitas terpenuhi.
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Pendaftaran Online
                </span>
                <span className="text-stone-400">Kuota Terbatas</span>
              </div>
            </div>

            {/* ── MILESTONE 02: TECHNICAL MEETING ── */}
            <div className="group relative bg-white rounded-[24px] p-8 border border-stone-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100/90 text-amber-700 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:bg-amber-100/80 transition-all duration-300">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black tracking-[0.18em] text-amber-700 uppercase">
                        FASE 02
                      </span>
                      <h3 className="font-extrabold text-base text-slate-900 leading-tight mt-0.5">
                        TECHNICAL MEETING
                      </h3>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-stone-300 group-hover:text-amber-700/40 transition-colors">
                    02
                  </span>
                </div>

                {/* Subtitle / Title */}
                <p className="font-bold text-sm text-slate-700 mt-6 mb-2">
                  Technical Meeting (TM)
                </p>

                {/* Prominent Date Display */}
                <div className="bg-stone-50/80 rounded-2xl p-5 border border-stone-100 my-4">
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    04
                  </div>
                  <div className="text-sm font-extrabold text-amber-700 tracking-wider uppercase mt-1">
                    OKTOBER 2026
                  </div>
                </div>

                {/* Time & Schedule */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50/70 border border-amber-100/80 text-amber-800 text-xs font-semibold mb-4">
                  <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Ahad, 09:00 WIB – Selesai</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Digelar secara Online melalui Zoom Meeting &amp;                 </p>
              </div>

              {/* Status footer */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5 text-amber-700">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Online
                </span>
                <span className="text-stone-400">Online</span>
              </div>
            </div>

            {/* ── MILESTONE 03: HARI PELAKSANAAN (MAIN EVENT / DOMINANT) ── */}
            <div className="group relative bg-gradient-to-b from-[#064e3b] via-[#043e30] to-[#022c22] rounded-[24px] p-8 border border-amber-400/40 shadow-[0_20px_45px_-10px_rgba(6,78,59,0.38)] hover:shadow-[0_24px_50px_-10px_rgba(6,78,59,0.48)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-white lg:-mt-2 lg:mb-[-8px]">
              {/* Gold Ribbon / Main Event Tag */}
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-emerald-950 font-black text-[10px] tracking-[0.2em] uppercase shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-emerald-950" />
                MAIN EVENT
              </div>

              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between pb-6 border-b border-emerald-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shadow-md shadow-amber-400/10 group-hover:scale-105 group-hover:bg-amber-400/30 transition-all duration-300">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-black tracking-[0.18em] text-amber-300 uppercase">
                        PUNCAK ACARA
                      </span>
                      <h3 className="font-extrabold text-base text-white leading-tight mt-0.5">
                        HARI PELAKSANAAN
                      </h3>
                    </div>
                  </div>
                  <span className="text-3xl font-black text-amber-300/40 group-hover:text-amber-300/80 transition-colors">
                    03
                  </span>
                </div>

                {/* Subtitle / Title */}
                <p className="font-bold text-sm text-emerald-200 mt-6 mb-2">
                  Hari Pelaksanaan FAMUS 2026
                </p>

                {/* Prominent Date Display */}
                <div className="bg-emerald-900/60 rounded-2xl p-5 border border-emerald-700/60 my-4 shadow-inner">
                  <div className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight drop-shadow-sm">
                    11
                  </div>
                  <div className="text-sm font-extrabold text-emerald-100 tracking-wider uppercase mt-1 flex items-center justify-between">
                    <span>OKTOBER 2026</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                      AHAD
                    </span>
                  </div>
                </div>

                {/* Time & Schedule */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-900/80 border border-emerald-600/50 text-emerald-100 text-xs font-semibold mb-4">
                  <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span>09:00 WIB  Selesai</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Registrasi ulang di lokasi, pawai pembukaan santri, pembagian panggung lomba, dan penyerahan piala pemenang.
                </p>
              </div>

              {/* Status footer */}
              <div className="pt-6 mt-6 border-t border-emerald-800/80 flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <MapPin className="w-3.5 h-3.5" />
                  PP Salafiyah Shirothul Fuqoha
                </span>
                <span className="text-emerald-300/80 font-bold">Sepanjang</span>
              </div>
            </div>
          </div>

          {/* ── Mobile Vertical Timeline Journey (< lg) ── */}
          <div className="block lg:hidden relative pl-6 sm:pl-8">
            {/* Vertical Connecting Line */}
            <div className="absolute left-[19px] sm:left-[27px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-emerald-500 via-amber-400 to-[#064e3b] rounded-full" />

            <div className="space-y-6">
              {/* Mobile Milestone 1 */}
              <div className="relative pl-6 sm:pl-8">
                {/* Dot / Badge */}
                <div className="absolute -left-[19px] sm:-left-[27px] top-4 w-10 h-10 rounded-full bg-emerald-700 text-white font-black text-xs flex items-center justify-center shadow-md ring-4 ring-[#FAF8F5]">
                  01
                </div>

                <div className="bg-white rounded-[22px] p-6 border border-stone-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black tracking-[0.18em] text-emerald-700 uppercase">
                      FASE 01 • PENDAFTARAN
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <CalendarDays className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900">
                    Periode Pendaftaran Peserta
                  </h3>

                  {/* Date Prominence */}
                  <div className="my-3 py-3 border-y border-stone-100">
                    <div className="text-3xl sm:text-4xl font-black text-slate-900">
                      01–30
                    </div>
                    <div className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider mt-0.5">
                      SEPTEMBER 2026
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-100 text-slate-700 text-xs font-semibold mb-2">
                    <Clock className="w-3 h-3 text-emerald-700" />
                    <span>Pukul 23:59 WIB</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Pendaftaran dilakukan online melalui laman resmi ini. Kuota ditutup sewaktu-waktu bila kapasitas terpenuhi.
                  </p>
                </div>
              </div>

              {/* Mobile Milestone 2 */}
              <div className="relative pl-6 sm:pl-8">
                {/* Dot / Badge */}
                <div className="absolute -left-[19px] sm:-left-[27px] top-4 w-10 h-10 rounded-full bg-amber-500 text-white font-black text-xs flex items-center justify-center shadow-md ring-4 ring-[#FAF8F5]">
                  02
                </div>

                <div className="bg-white rounded-[22px] p-6 border border-stone-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black tracking-[0.18em] text-amber-700 uppercase">
                      FASE 02 • TECHNICAL MEETING
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900">
                    Technical Meeting (TM)
                  </h3>

                  {/* Date Prominence */}
                  <div className="my-3 py-3 border-y border-stone-100">
                    <div className="text-3xl sm:text-4xl font-black text-slate-900">
                      04
                    </div>
                    <div className="text-xs font-extrabold text-amber-700 uppercase tracking-wider mt-0.5">
                      OKTOBER 2026
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-100 text-slate-700 text-xs font-semibold mb-2">
                    <Clock className="w-3 h-3 text-amber-700" />
                    <span>09:00 WIB – Selesai</span>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    Digelar secara Online melalui Zoom Meeting &amp;                   </p>
                </div>
              </div>

              {/* Mobile Milestone 3 (Dominant) */}
              <div className="relative pl-6 sm:pl-8">
                {/* Dot / Badge */}
                <div className="absolute -left-[19px] sm:-left-[27px] top-4 w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-emerald-950 font-black text-xs flex items-center justify-center shadow-md ring-4 ring-[#FAF8F5]">
                  03
                </div>

                <div className="bg-gradient-to-b from-[#064e3b] to-[#022c22] rounded-[22px] p-6 border border-amber-400/40 shadow-xl text-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black tracking-[0.2em] text-amber-300 uppercase px-2 py-0.5 rounded bg-amber-400/20 border border-amber-400/30">
                      PUNCAK ACARA • MAIN EVENT
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-white">
                    Hari Pelaksanaan FAMUS 2026
                  </h3>

                  {/* Date Prominence */}
                  <div className="my-3 py-3 border-y border-emerald-700/60">
                    <div className="text-3xl sm:text-4xl font-black text-amber-300">
                      11
                    </div>
                    <div className="text-xs font-extrabold text-emerald-100 uppercase tracking-wider mt-0.5">
                      OKTOBER 2026 (AHAD)
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-900/80 border border-emerald-600/50 text-emerald-100 text-xs font-semibold mb-2">
                    <Clock className="w-3 h-3 text-amber-300" />
                    <span>09:00 WIB – Selesai</span>
                  </div>

                  <p className="text-xs text-emerald-100/90 leading-relaxed mb-3">
                    Registrasi ulang di lokasi, pawai pembukaan santri, pembagian panggung lomba, dan penyerahan piala pemenang.
                  </p>

                  <div className="pt-3 border-t border-emerald-800/80 flex items-center gap-1.5 text-xs text-amber-300 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>PP Salafiyah Shirothul Fuqoha, Sepanjang</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Supporting Bottom Bar: Info Notice & Download Juknis ── */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3.5 shadow-xs">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">
                  Konfirmasi Resmi &amp; Penyesuaian
                </p>
                <p className="text-xs text-slate-500 leading-relaxed mt-0.5">
                  Waktu dan rangkaian acara dapat disesuaikan dengan konfirmasi resmi panitia melalui grup WhatsApp peserta terdaftar.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm text-slate-900">
                    Juknis &amp; Panduan Lengkap
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Format PDF Resmi • 3.8 MB
                  </p>
                </div>
              </div>
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs hover:shadow shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh PDF</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 2: SYARAT & KETENTUAN PESERTA & REKENING RESMI HTM
          ═════════════════════════════════════════════════════════════════ */}
      <section id="syarat" className="py-20 sm:py-24 lg:py-28 bg-white scroll-mt-16 border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">
              Panduan &amp; Regulasi
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Syarat &amp; Ketentuan Berkas
            </h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
              Pastikan berkas dan syarat administratif lengkap untuk kelancaran verifikasi panitia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8 items-start">
            {/* Persyaratan Dokumen Card */}
            <div className="bg-[#FAF8F5] rounded-[24px] p-7 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-xs">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  Persyaratan Dokumen Peserta
                </h3>
              </div>

              {/* Requirement Items */}
              <div className="space-y-3 pt-2">
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/70 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-slate-900">Status Peserta</p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      Terbuka untuk seluruh anak berusia 6-13 tahun di wilayah se-Malang Raya (individu maupun perwakilan lembaga).
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/70 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-slate-900">Pas Foto 3×4</p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      Foto formal terbaru berwarna untuk pencetakan ID card peserta dan lampiran sertifikat resmi.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200/70 flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm text-slate-900">Kartu Keluarga (KK)</p>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      Diperlukan untuk verifikasi tahun kelahiran sesuai ketentuan batasan usia masing-masing kategori.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rekening Pembayaran HTM & Keamanan */}
            <div className="space-y-5">
              <div className="bg-[#FAF8F5] rounded-[24px] p-7 sm:p-8 border border-stone-200/80 shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
                  <span>💳</span>
                  <span>Rekening Resmi Pembayaran HTM</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Berlaku untuk seluruh cabang perlombaan FAMUS 2026 sesuai ketentuan biaya HTM masing-masing kategori:
                </p>

                <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-extrabold text-xs text-emerald-700">
                      Bank Rakyat Indonesia (BRI)
                    </p>
                    <p className="font-mono font-black text-xl sm:text-2xl text-slate-900 tracking-wider mt-0.5">
                      639801016707502
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      a.n. IMAM ABDUL AZIZ
                    </p>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-bold transition-all border border-slate-200 shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Salin No. Rek</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Security Warning Box */}
              <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3.5">
                <Shield className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-amber-900">
                    Pemberitahuan Keamanan
                  </p>
                  <p className="text-xs text-amber-900/80 leading-relaxed mt-0.5">
                    Harap waspada terhadap segala bentuk penipuan. Konfirmasi pendaftaran dan transaksi pembayaran hanya melalui rekening resmi BRI di atas dan nomor kontak resmi panitia (Kak Imam / Kak Syavin).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
