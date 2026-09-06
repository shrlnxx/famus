import Image from "next/image";
import { School, Scale, Gift, CheckCircle, Quote } from "lucide-react";

const pillars = [
  {
    icon: School,
    color: "emerald" as const,
    title: "Pendidikan Karakter & Adab",
    desc: "Fokus kami bukan semata-mata trofi kompetisi, melainkan melatih adab, kedisiplinan, dan sportivitas santri sejak dini dalam bingkai nilai-nilai ahlussunnah wal jama'ah.",
    footer: "Mendapatkan Pengalaman Berharga",
  },
  {
    icon: Scale,
    color: "amber" as const,
    title: "Standar Penjurian Transparan",
    desc: "Menghadirkan dewan juri ahli yang kompeten di bidang qiraat, retorika dakwah, kesenian islami, dan wawasan keagamaan dengan rubrik penilaian yang adil dan terbuka.",
    footer: "Kriteria Penilaian Baku & Terbuka",
  },
  {
    icon: Gift,
    color: "emerald" as const,
    title: "Fasilitas & Apresiasi Peserta",
    desc: "Setiap anak berhak merasa dihargai. Seluruh peserta mendapatkan piagam penghargaan Digital.",
    footer: "Piagam Penghargaan",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-24 lg:py-32 bg-[#FAF8F5]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Tentang Acara
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Membangun Generasi Qurani Berkarakter Tangguh
            </h2>
          </div>

        </div>

        {/* ── 3 Pillars Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isEmerald = p.color === "emerald";
            return (
              <div
                key={i}
                className="bg-white rounded-[22px] p-7 sm:p-8 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 ${isEmerald
                      ? "bg-emerald-600 group-hover:bg-emerald-700 text-white shadow-sm"
                      : "bg-amber-500 group-hover:bg-amber-600 text-white shadow-sm"
                      }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>
                <div
                  className={`pt-4 border-t flex items-center gap-2.5 text-xs sm:text-sm font-semibold ${isEmerald
                    ? "text-emerald-700 border-emerald-100"
                    : "text-amber-700 border-amber-100"
                    }`}
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{p.footer}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Editorial Quote Card ── */}
        <div className="mt-12 lg:mt-16 bg-white rounded-[24px] p-7 sm:p-9 lg:p-12 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Venue highlight box */}
          <div className="relative w-full lg:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm group shrink-0">
            <Image
              src="/fotopondok.jpg"
              alt="Pondok Pesantren Salafiyah Shirothul Fuqoha"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/25 to-transparent flex flex-col justify-end p-4 sm:p-5 pointer-events-none">
              <span className="text-white text-sm font-bold drop-shadow-sm">
                Pondok Pesantren
              </span>
              <span className="text-emerald-200 text-xs font-medium drop-shadow-sm">
                Salafiyah Shirothul Fuqoha, Sepanjang
              </span>
            </div>
          </div>

          {/* Quote body */}
          <div className="flex flex-col flex-1">
            <Quote className="w-9 h-9 text-amber-500/80 mb-4 shrink-0" />
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-medium italic leading-relaxed">
              &ldquo;Mendidik anak di era modern menuntut perpaduan antara
              keberanian mengekspresikan bakat dan keteguhan memegang akhlak
              karimah. FAMUS 2026 kami persembahkan sebagai panggung kehormatan
              bagi putra-putri kita.&rdquo;
            </p>
            <div className="mt-6 sm:mt-8 pt-6 border-t border-slate-100 flex items-center gap-3.5">

              <div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
