"use client";

import { useState } from "react";
import {
  BookOpen,
  Mic,
  PenTool,
  MessageSquare,
  Palette,
  BookMarked,
  Volume2,
  Brain,
  ArrowRight,
  Users,
  FileText,
} from "lucide-react";
import LombaDetailModal, { Category } from "@/components/LombaDetailModal";

const categories: Category[] = [
  {
    icon: BookOpen,
    title: "Musabaqoh Tartilil Qur'an",
    level: "6-13 Tahun",
    desc: "Membaca maqra' pilihan dengan tartil, memperhatikan tajwid, fashohah, suara, lagu, dan adab.",
    fee: 35000,
    kuota: "25 Peserta",
    formValue: "MTQ",
  },
  {
    icon: Mic,
    title: "Menyanyi Religi",
    level: "6-13 Tahun",
    desc: "Membawakan lagu religi pilihan panitia dengan instrumen, dinilai dari kualitas vokal, mimik, dan penampilan.",
    fee: 35000,
    kuota: "25 Peserta",
    formValue: "Menyanyi Religi",
  },
  {
    icon: PenTool,
    title: "Cipta Baca Puisi Islami",
    level: "6-13 Tahun",
    desc: "Membawakan karya puisi islami yang belum pernah dilombakan, dinilai dari penghayatan, vokal, dan diksi.",
    fee: 35000,
    kuota: "25 Peserta",
    formValue: "Puisi Islami",
  },
  {
    icon: MessageSquare,
    title: "Pidato Putra",
    level: "6-13 Tahun",
    desc: "Menyampaikan pidato tema islami dengan durasi 4-5 menit, wajib menyertakan dalil Al-Qur'an/Hadis.",
    fee: 35000,
    kuota: "25 Putra",
    formValue: "Pidato Putra",
  },
  {
    icon: MessageSquare,
    title: "Pidato Putri",
    level: "6-13 Tahun",
    desc: "Menyampaikan pidato tema islami dengan durasi 4-5 menit, wajib menyertakan dalil Al-Qur'an/Hadis.",
    fee: 35000,
    kuota: "25 Putri",
    formValue: "Pidato Putri",
  },
  {
    icon: Palette,
    title: "Mewarnai Junior",
    level: "6-9 Tahun",
    desc: "Lomba mewarnai dengan objek yang disediakan. Diperbolehkan menambah objek gambar (tidak masuk penilaian).",
    fee: 30000,
    kuota: "50 Peserta",
    formValue: "Mewarnai Junior",
  },
  {
    icon: Palette,
    title: "Mewarnai Senior",
    level: "10-13 Tahun",
    desc: "Lomba mewarnai yang mengharuskan peserta menambah objek pada karya untuk masuk dalam penilaian.",
    fee: 30000,
    kuota: "50 Peserta",
    formValue: "Mewarnai Senior",
  },
  {
    icon: BookMarked,
    title: "Storytelling (Bercerita)",
    level: "6-13 Tahun",
    desc: "Menceritakan kisah fabel atau non-fabel yang mengandung hikmah islami (tanpa membawa teks).",
    fee: 35000,
    kuota: "25 Peserta",
    formValue: "Storytelling",
  },
  {
    icon: Volume2,
    title: "Adzan",
    level: "Khusus Putra (6-13 Th)",
    desc: "Melantunkan adzan shubuh dengan kebenaran lafadz, suara, dan lagu tanpa mendapat bantuan siapapun.",
    fee: 35000,
    kuota: "25 Peserta",
    formValue: "Adzan",
  },
  {
    icon: Brain,
    title: "Cerdas Cermat Islami",
    level: "Tim Beregu (2 Anak)",
    desc: "Lomba beregu 2 anak usia 9-13 tahun, menjawab soal pilihan ganda, isian singkat, dan babak rebutan.",
    fee: 60000,
    kuota: "30 Tim",
    formValue: "CCI",
  },
];

export default function CategoriesSection() {
  const [selectedLomba, setSelectedLomba] = useState<Category | null>(null);

  const handleSelectCategory = (formValue: string) => {
    setSelectedLomba(null);
    window.dispatchEvent(
      new CustomEvent("select-category", { detail: formValue })
    );
    const el = document.getElementById("pendaftaran");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="lomba" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">
            Kompetisi Berkualitas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight">
            Cabang Perlombaan FAMUS 2026
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            Wadah kreasi, minat, dan bakat islami putra-putri berprestasi dengan
            ragam kategori yang disesuaikan dengan tingkat usia.
          </p>
        </div>

        {/* ── Grid Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                role="button"
                tabIndex={0}
                aria-label={`Buka detail lomba ${cat.title}`}
                onClick={() => setSelectedLomba(cat)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedLomba(cat);
                  }
                }}
                className="bg-white rounded-[22px] p-6 sm:p-7 lg:p-8 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-emerald-600 select-none"
              >
                <div>
                  {/* Top Row: Icon + Fee & Kuota Badges */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 group-hover:scale-105 shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide leading-none bg-amber-50 text-amber-800 border border-amber-200/80">
                        Rp {cat.fee.toLocaleString("id-ID")}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                        <Users className="w-3 h-3 text-slate-400" />
                        {cat.kuota}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 leading-snug mb-2 group-hover:text-emerald-800 transition-colors">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                    {cat.desc}
                  </p>

                  {/* Special Note for Cerdas Cermat Islami */}
                  {cat.formValue === "CCI" && (
                    <div className="mb-5 p-3 rounded-xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-2 text-xs text-amber-900 leading-relaxed">
                      <FileText className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        <strong>Kisi-kisi Soal:</strong> Akan dibagikan pada tanggal <strong>15 September 2026</strong> melalui <strong>Grup WhatsApp Peserta</strong>.
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  {/* Metadata: Tingkat Usia */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs mb-5">
                    <span className="text-slate-400 font-medium">
                      Target Peserta:
                    </span>
                    <span className="font-bold text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-md">
                      {cat.level}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <div className="w-full py-3 rounded-xl bg-slate-50 group-hover:bg-emerald-700 group-hover:text-white border border-slate-200/70 text-slate-700 font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Interactive Detail Modal ── */}
      <LombaDetailModal
        lomba={selectedLomba}
        onClose={() => setSelectedLomba(null)}
        onSelectCategory={handleSelectCategory}
      />
    </section>
  );
}
