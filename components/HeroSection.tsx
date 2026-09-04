import {
  CalendarDays,
  MapPin,
  Trophy,
  ArrowDown,
  FileText,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-20 lg:pt-24 min-h-[100dvh] flex items-center overflow-hidden bg-white">
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50/60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-emerald-100/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply animate-pulse-slow" />
      <div className="absolute top-40 -left-40 w-72 h-72 bg-amber-300/20 rounded-full blur-[80px] pointer-events-none mix-blend-multiply" />

      {/* Geometric pattern accent */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #059669 1.5px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left: Hero Messaging ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Pendaftaran Resmi Telah Dibuka &bull; 1 – 30 September 2026
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Santri Cilik Ceria,{" "}
              <span className="text-emerald-600">Berakhlak Mulia</span>
              {", "}
              Cinta Indonesia!
            </h1>

            {/* Subheadline */}
            <p className="mt-4 text-lg text-slate-500 font-semibold leading-relaxed">
              FAMUS 2026 &bull; Ahad, 11 Oktober 2026 di Pondok Pesantren
              Salafiyah Shirothul Fuqoha
            </p>
            <p className="mt-2 text-base text-slate-400 leading-relaxed max-w-xl">
              Festival tahunan terdepan yang dirancang khusus untuk
              menumbuhkembangkan kepercayaan diri, adab islami, dan bakat qurani
              generasi penerus bangsa dalam iklim kompetisi yang objektif dan
              suportif.
            </p>

            {/* Info Chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-white text-slate-700 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
                <CalendarDays className="w-4 h-4 text-emerald-600" />
                Ahad, 11 Okt 2026
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-white text-slate-700 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
                <MapPin className="w-4 h-4 text-emerald-600" />
                PP Shirothul Fuqoha, Sepanjang
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/70 text-amber-800 text-sm font-semibold shadow-sm hover:shadow-md transition-all">
                <Trophy className="w-4 h-4 text-amber-500" />
                Hadiah Jutaan &amp; Piagam
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#pendaftaran"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                Daftar Sekarang
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#syarat"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border-2 border-slate-200 hover:border-emerald-500 text-slate-700 hover:text-emerald-700 font-semibold text-base transition-all"
              >
                <FileText className="w-4 h-4" />
                Petunjuk &amp; Syarat
              </a>
              <a
                href="/guidebook-famus-2026.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 text-emerald-700 font-semibold text-base transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Unduh Guide Book
              </a>
            </div>

            {/* Stats Bar */}
            <div className="mt-10 w-full grid grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden shadow-sm">
              {[
                { value: "8", label: "Cabang Lomba" },
                { value: "500+", label: "Kuota Santri" },
                { value: "PAUD–SD", label: "Tingkat Peserta" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col p-3 sm:p-4 bg-slate-50 items-center justify-center text-center"
                >
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-emerald-600">
                    {stat.value}
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Dignified Visual Card ── */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-md animate-float lg:hover:-translate-y-2 transition-transform duration-500">
              {/* Glow halo */}
              <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-400/30 via-transparent to-amber-400/20 rounded-[2.5rem] blur-3xl pointer-events-none" />

              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-white shadow-premium overflow-hidden">
                {/* Top gradient strip */}
                <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400" />

                {/* Floating badge inside card top */}
                <div className="absolute top-5 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-sm text-xs font-bold text-slate-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Dokumentasi Santri
                </div>
                <div className="absolute top-5 right-4 z-10 px-2.5 py-1 rounded-lg bg-amber-100 text-amber-700 text-xs font-extrabold shadow-sm">
                  FAMUS 2026
                </div>

                {/* Image placeholder */}
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-4xl">🕌</span>
                  </div>
                  <p className="font-bold text-slate-700 text-base">
                    Placeholder Foto Hero
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    Dokumentasi Santri &amp; Kemeriahan FAMUS
                  </p>
                  <div className="mt-4 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-500 shadow-sm">
                    📐 Rekomendasi: 1200 × 800 px (4:3)
                  </div>
                </div>

                {/* Bottom info strip */}
                <div className="px-4 py-3.5 border-t border-slate-100 bg-white flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800 leading-tight">
                        Terakreditasi &amp; Resmi
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        PP Salafiyah Shirothul Fuqoha
                      </p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Edisi 2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
