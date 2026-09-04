import { School, Scale, Gift, CheckCircle, Quote } from "lucide-react";

const pillars = [
  {
    icon: School,
    color: "emerald" as const,
    title: "Pendidikan Karakter & Adab",
    desc: "Fokus kami bukan semata-mata trofi kompetisi, melainkan melatih adab, kedisiplinan, dan sportivitas santri sejak dini dalam bingkai nilai-nilai ahlussunnah wal jama'ah.",
    footer: "Didampingi Asatidz Berpengalaman",
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
    desc: "Setiap anak berhak merasa dihargai. Seluruh peserta mendapatkan piagam kepesertaan resmi, suvenir edukatif, serta fasilitas ruang tunggu yang nyaman bagi wali.",
    footer: "Sertifikat Berpenomoran Lembaga",
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Tentang Acara
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Membangun Generasi Qurani Berkarakter Tangguh
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Sebuah ikhtiar pendidikan di bawah naungan Pondok Pesantren
            Salafiyah Shirothul Fuqoha untuk menumbuhkan adab, integritas, dan
            kecakapan santri cilik nusantara.
          </p>
        </div>

        {/* ── 3 Pillars ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const isEmergald = p.color === "emerald";
            return (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-7 shadow-glass border border-white/60 flex flex-col justify-between hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                      isEmergald
                        ? "bg-emerald-600 group-hover:bg-emerald-700 text-white"
                        : "bg-amber-500 group-hover:bg-amber-600 text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2.5 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div
                  className={`mt-6 pt-4 border-t flex items-center gap-2 text-sm font-semibold ${
                    isEmergald
                      ? "text-emerald-600 border-emerald-100"
                      : "text-amber-600 border-amber-100"
                  }`}
                >
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  {p.footer}
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Editorial Quote ── */}
        <div className="mt-10 bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Image placeholder */}
          <div className="w-full lg:w-1/3 aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-emerald-100 to-slate-100 flex flex-col items-center justify-center shadow-inner shrink-0">
            <div className="text-center">
              <div className="text-6xl mb-3">🏫</div>
              <p className="text-sm text-slate-400 font-medium">
                Venue FAMUS 2026
              </p>
            </div>
          </div>

          {/* Quote body */}
          <div className="flex flex-col flex-1">
            <Quote className="w-10 h-10 text-amber-400 mb-4 shrink-0" />
            <p className="text-lg lg:text-xl text-slate-700 font-medium italic leading-relaxed">
              &ldquo;Mendidik anak di era modern menuntut perpaduan antara
              keberanian mengekspresikan bakat dan keteguhan memegang akhlak
              karimah. FAMUS 2026 kami persembahkan sebagai panggung kehormatan
              bagi putra-putri kita.&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                SF
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800">
                  Keluarga Besar Pengasuh
                </p>
                <p className="text-xs text-slate-500">
                  PP Salafiyah Shirothul Fuqoha, Sepanjang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
