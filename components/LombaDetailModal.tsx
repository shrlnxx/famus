"use client";

import { useEffect } from "react";
import {
  X,
  CalendarDays,
  MapPin,
  Users,
  CheckCircle2,
  Trophy,
  Award,
  Wallet,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export type Category = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  level: string;
  desc: string;
  fee: number;
  kuota: string;
  formValue: string;
};

interface LombaDetailModalProps {
  lomba: Category | null;
  onClose: () => void;
  onSelectCategory: (formValue: string) => void;
}

export default function LombaDetailModal({
  lomba,
  onClose,
  onSelectCategory,
}: LombaDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (lomba) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lomba, onClose]);

  if (!lomba) return null;

  const Icon = lomba.icon;
  const isFree = lomba.fee === 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-lomba-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/60 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-[24px] sm:rounded-[28px] shadow-2xl border border-slate-200/80 w-full max-w-2xl sm:max-w-3xl max-h-[90vh] sm:max-h-[86vh] flex flex-col overflow-hidden animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Close Button */}
        <div className="relative px-6 sm:px-8 pt-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4 bg-gradient-to-b from-[#FAF8F5] to-white shrink-0">
          <div className="flex items-center gap-3.5 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100/80 flex items-center justify-center shrink-0 shadow-sm">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wide">
                  {lomba.level}
                </span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-extrabold leading-none ${
                    isFree
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  {isFree ? "Gratis" : "HTM Rp 25.000"}
                </span>
              </div>
              <h2
                id="modal-lomba-title"
                className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug"
              >
                {lomba.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup detail lomba"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0 -mr-2 sm:mr-0 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto px-6 sm:px-8 py-6 space-y-7 divide-y divide-slate-100 text-slate-700">
          {/* 1. Short Description */}
          <div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {lomba.desc}
            </p>
          </div>

          {/* 2. Compact Information Grid */}
          <div className="pt-6">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
              Informasi Pokok Perlombaan
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
              {/* Peserta */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-slate-100 flex flex-col justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase">
                  Sasaran
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-1">
                  {lomba.level}
                </span>
              </div>

              {/* Biaya */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-slate-100 flex flex-col justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase">
                  Biaya
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-emerald-700 mt-1">
                  {isFree ? "Gratis" : "Rp 25.000"}
                </span>
              </div>

              {/* Kuota */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-slate-100 flex flex-col justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase">
                  Kuota
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-1">
                  {lomba.kuota}
                </span>
              </div>

              {/* Tempat */}
              <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-slate-100 flex flex-col justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase">
                  Lokasi
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-1">
                  PP Shirothul Fuqoha
                </span>
              </div>
            </div>

            {/* Date note */}
            <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <CalendarDays className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Pelaksanaan: <strong>Ahad, 11 Oktober 2026</strong> • Registrasi
                Ulang Pukul 07:30 WIB
              </span>
            </div>
          </div>

          {/* 3. Ketentuan Lomba */}
          <div className="pt-6">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3.5">
              Ketentuan &amp; Regulasi Peserta
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Peserta berusia sesuai batasan kategori:{" "}
                  <strong>{lomba.level}</strong> (diverifikasi melalui Kartu
                  Keluarga).
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Terbuka untuk santri/siswa perorangan maupun delegasi resmi
                  TPQ, madrasah, atau sekolah se-Malang Raya.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Wajib mengikuti <strong>Technical Meeting (TM)</strong> pada
                  Ahad, 4 Oktober 2026 untuk pengundian nomor urut tampil.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Mengenakan busana muslim/muslimah yang sopan, rapi, dan menutup
                  aurat saat tampil di panggung perlombaan.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Keputusan dewan juri ahli bersifat mutlak, independen, dan
                  tidak dapat diganggu gugat.
                </span>
              </div>
            </div>
          </div>

          {/* 4. Section 🏆 Hadiah & Apresiasi */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3.5">
              <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Apresiasi &amp; Hadiah Kejuaraan
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Juara 1 */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-amber-50/70 to-white border border-amber-200/80 shadow-sm flex flex-col items-center text-center">
                <span className="text-2xl mb-1">🥇</span>
                <span className="text-xs font-extrabold text-amber-900 uppercase tracking-wide">
                  Juara I
                </span>
                <p className="text-[11px] text-amber-800 font-semibold mt-1">
                  Trofi Kejuaraan + Piagam Resmi Lembaga + Uang Pembinaan
                </p>
              </div>

              {/* Juara 2 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                <span className="text-2xl mb-1">🥈</span>
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                  Juara II
                </span>
                <p className="text-[11px] text-slate-600 font-medium mt-1">
                  Trofi Kejuaraan + Piagam Resmi Lembaga + Uang Pembinaan
                </p>
              </div>

              {/* Juara 3 */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                <span className="text-2xl mb-1">🥉</span>
                <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                  Juara III
                </span>
                <p className="text-[11px] text-slate-600 font-medium mt-1">
                  Trofi Kejuaraan + Piagam Resmi Lembaga + Uang Pembinaan
                </p>
              </div>
            </div>

            {/* Note for all participants */}
            <div className="mt-3 p-3 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center gap-2.5">
              <Award className="w-4 h-4 text-emerald-700 shrink-0" />
              <span className="text-xs text-emerald-900 font-medium">
                Seluruh peserta berhak mendapatkan{" "}
                <strong>Piagam Kepesertaan Resmi Berpenomoran Lembaga</strong>{" "}
                dan suvenir edukatif.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50/90 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Kuota {lomba.kuota} • Pendaftaran ditutup bila kapasitas terpenuhi
          </div>
          <button
            onClick={() => onSelectCategory(lomba.formValue)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-700/20 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span>DAFTAR LOMBA INI</span>
            <ArrowRight className="w-4 h-4 text-amber-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
