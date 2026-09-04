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
    <section id="lomba" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">
            Kompetisi Berkualitas
          </span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cabang Perlombaan FAMUS 2026
          </h2>
          <p className="mt-3 text-slate-500 text-base leading-relaxed">
            Wadah kreasi, minat, dan bakat islami putra-putri berprestasi dengan
            ragam kategori yang disesuaikan dengan tingkat usia.
          </p>
        </div>

        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            const isFree = cat.fee === 0;
            return (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-md border border-white/80 rounded-2xl p-5 shadow-glass flex flex-col justify-between hover:shadow-premium hover:-translate-y-2 hover:bg-white transition-all duration-300 group"
              >
                <div>
                  {/* Top row: icon + badge */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center text-emerald-600 transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    {/* Kuota & Fee Badges */}
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold border border-slate-200">
                        Kuota: {cat.kuota}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold leading-none shrink-0 ${
                          isFree
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {isFree ? "Gratis" : "Berbayar (Rp 25.000)"}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 leading-snug mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 mb-2.5">
                    {cat.level}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {cat.desc}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="#pendaftaran"
                  className="mt-5 w-full py-2 rounded-xl bg-slate-50 border border-slate-100 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-slate-600 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group-hover:shadow-sm"
                >
                  Pilih Kategori Ini
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
