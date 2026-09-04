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
} from "lucide-react";

type Category = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  level: string;
  desc: string;
  fee: number;
  kuota: string;
};

const categories: Category[] = [
  {
    icon: BookOpen,
    title: "Musabaqoh Tilawatil Qur'an",
    level: "6-12 Tahun",
    desc: "Membaca maqra' pilihan dengan tartil, memperhatikan tajwid, fashohah, suara, lagu, dan adab.",
    fee: 25000,
    kuota: "25 Peserta"
  },
  {
    icon: Mic,
    title: "Menyanyi Religi",
    level: "6-12 Tahun",
    desc: "Membawakan lagu religi pilihan panitia dengan instrumen, dinilai dari kualitas vokal, mimik, dan penampilan.",
    fee: 25000,
    kuota: "25 Peserta"
  },
  {
    icon: PenTool,
    title: "Cipta Baca Puisi Islami",
    level: "6-12 Tahun",
    desc: "Membawakan karya puisi islami yang belum pernah dilombakan, dinilai dari penghayatan, vokal, dan diksi.",
    fee: 0,
    kuota: "25 Peserta"
  },
  {
    icon: MessageSquare,
    title: "Pidato Putra",
    level: "6-12 Tahun",
    desc: "Menyampaikan pidato tema islami dengan durasi 4-5 menit, wajib menyertakan dalil Al-Qur'an/Hadis.",
    fee: 0,
    kuota: "25 Putra"
  },
  {
    icon: MessageSquare,
    title: "Pidato Putri",
    level: "6-12 Tahun",
    desc: "Menyampaikan pidato tema islami dengan durasi 4-5 menit, wajib menyertakan dalil Al-Qur'an/Hadis.",
    fee: 0,
    kuota: "25 Putri"
  },
  {
    icon: Palette,
    title: "Mewarnai Junior",
    level: "6-9 Tahun",
    desc: "Lomba mewarnai dengan objek yang disediakan. Diperbolehkan menambah objek gambar (tidak masuk penilaian).",
    fee: 0,
    kuota: "50 Peserta"
  },
  {
    icon: Palette,
    title: "Mewarnai Senior",
    level: "10-12 Tahun",
    desc: "Lomba mewarnai yang mengharuskan peserta menambah objek pada karya untuk masuk dalam penilaian.",
    fee: 0,
    kuota: "50 Peserta"
  },
  {
    icon: BookMarked,
    title: "Storytelling (Bercerita)",
    level: "6-12 Tahun",
    desc: "Menceritakan kisah fabel atau non-fabel yang mengandung hikmah islami (tanpa membawa teks).",
    fee: 0,
    kuota: "25 Peserta"
  },
  {
    icon: Volume2,
    title: "Adzan",
    level: "Khusus Putra",
    desc: "Melantunkan adzan shubuh dengan kebenaran lafadz, suara, dan lagu tanpa mendapat bantuan siapapun.",
    fee: 25000,
    kuota: "25 Peserta"
  },
  {
    icon: Brain,
    title: "Cerdas Cermat Islami",
    level: "Tim Beregu (3 Anak)",
    desc: "Lomba beregu 3 anak usia 9-12 tahun, menjawab soal pilihan ganda, isian singkat, dan babak rebutan.",
    fee: 0,
    kuota: "30 Tim"
  },
];

export default function CategoriesSection() {
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

        {/* ── 3-Column Modern Card Grid (Desktop) / 2-Col (Tablet) / 1-Col (Mobile) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isFree = cat.fee === 0;
            return (
              <div
                key={i}
                className="bg-white rounded-[22px] p-6 sm:p-7 lg:p-8 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Top Row: Icon + Fee & Kuota Badges */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300 group-hover:scale-105 shrink-0 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide leading-none ${
                          isFree
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                            : "bg-amber-50 text-amber-800 border border-amber-200/80"
                        }`}
                      >
                        {isFree ? "Gratis" : "Rp 25.000"}
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
                  <p className="text-sm text-slate-500 leading-relaxed mb-6 line-clamp-3">
                    {cat.desc}
                  </p>
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
                  <a
                    href="#pendaftaran"
                    className="w-full py-3 rounded-xl bg-slate-50 hover:bg-emerald-700 hover:text-white border border-slate-200/70 text-slate-700 font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow"
                  >
                    <span>Daftar Kategori Ini</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
