import Image from "next/image";
import { CalendarDays, MapPin, Award, BookOpen, Volume2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-[#FAF8F5] min-h-[92dvh] flex items-center">
      {/* ── Ambient Background & Islamic Geometry ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#FAF8F5] to-[#F5F2EB] pointer-events-none" />

      {/* Subtle Emerald & Warm Gold Ambient Glows */}
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-gradient-to-br from-emerald-400/15 via-teal-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-amber-300/15 via-yellow-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

      {/* Delicate Islamic 8-Point Star Pattern (Mashrabiya / Khatam Sulayman) */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l6.4 12.8L48 6.4l-6.4 12.8L60 30l-12.8 6.4L48 53.6l-11.6-6.4L30 60l-6.4-12.8L12 53.6l6.4-12.8L0 30l12.8-6.4L12 6.4l11.6 6.4z' fill='%23059669' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Delicate Floating Stars / Sparkles */}
      <div className="absolute top-28 left-[8%] text-amber-400/60 pointer-events-none select-none hidden sm:block animate-pulse">
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5z" />
        </svg>
      </div>
      <div className="absolute top-44 right-[6%] text-emerald-500/40 pointer-events-none select-none hidden lg:block animate-pulse-slow">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5z" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-[48%] text-amber-500/40 pointer-events-none select-none hidden md:block">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5z" />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ══════════════════════════════════════════════════════
              LEFT COLUMN: Editorial Content & Typography
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
            {/* 1. Small Eyebrow: FAMUS 2026 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 shadow-sm mb-5 transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-emerald-800 uppercase">
                FAMUS 2026
              </span>
            </div>

            {/* 2. Dominant Headline: Festival Anak Muslim */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] xl:text-[70px] font-black text-slate-900 tracking-tight leading-[1.08]">
              Festival Anak{" "}
              <span className="relative inline-block text-emerald-700">
                Muslim
                {/* Subtle Decorative Arch Flourish */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-3.5 text-amber-400"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C55 2.5 145 2.5 198 9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* 3. Concise Supporting Text */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              Panggung kehormatan santri cilik mengasah bakat Qur&apos;ani,
              keberanian, dan akhlak mulia dalam festival islami yang kompetitif,
              berkelas, dan penuh keceriaan.
            </p>

            {/* 4. Event Information Display */}
            <div className="mt-7 w-full max-w-xl rounded-2xl bg-white/90 border border-amber-100/90 shadow-sm shadow-slate-200/50 p-3 sm:p-4 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {/* Date: 11 Oktober 2026 */}
                <div className="flex items-center gap-3.5 pt-1 sm:pt-0">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center text-emerald-700 shrink-0 shadow-sm">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Waktu Pelaksanaan
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900">
                      11 Oktober 2026
                    </span>
                  </div>
                </div>

                {/* Location: PP Salafiyah Shirothul Fuqoha */}
                <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100/80 flex items-center justify-center text-amber-700 shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Tempat Acara
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                      PP Salafiyah Shirothul Fuqoha
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Primary CTA: DAFTAR SEKARANG → */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#pendaftaran"
                id="hero-cta-daftar"
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base tracking-wide shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>DAFTAR SEKARANG</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5 text-amber-300 font-bold text-lg">
                  &rarr;
                </span>
              </a>
              <span className="text-xs text-slate-500 font-medium text-center sm:text-left self-center">
                ✨ Kuota terbatas untuk tiap cabang lomba
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              RIGHT COLUMN: Editorial Layered Photography
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-6 relative w-full mt-4 lg:mt-0">
            {/* Background Decorative Islamic Arch Contour */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-emerald-100/40 via-amber-100/30 to-transparent rounded-[2.5rem] lg:rounded-[3.5rem] -rotate-1 pointer-events-none" />

            {/* Backdrop subtle Moroccan Arch Silhouette */}
            <svg
              className="absolute -top-10 -right-6 w-48 sm:w-64 h-48 sm:h-64 text-emerald-600/10 pointer-events-none select-none hidden sm:block"
              viewBox="0 0 100 120"
              fill="currentColor"
            >
              <path d="M50 0 C25 20 5 45 5 80 L5 120 L95 120 L95 80 C95 45 75 20 50 0 Z" />
            </svg>

            {/* Desktop Composition Container */}
            <div className="relative pb-6 lg:pb-12 pt-2">
              {/* ── Main Hero Photo (juara1.JPG) ── */}
              <div className="relative z-10 w-full sm:w-[92%] ml-auto rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white shadow-2xl shadow-emerald-950/15 border border-amber-100/80 transition-all duration-500 hover:shadow-emerald-950/20">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100">
                  <Image
                    src="/juara1.JPG"
                    alt="Pemenang dan Juara Festival Anak Muslim FAMUS"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 550px"
                    className="object-cover object-[50%_35%] transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle vignette gradient for caption contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Main Tag Badge Overlaid Top Right */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/25 text-white text-xs font-bold shadow-md">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Juara &amp; Prestasi FAMUS</span>
                  </div>

                  {/* Caption bottom right */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 text-right text-white">
                    <p className="text-xs sm:text-sm font-extrabold tracking-wide drop-shadow-md">
                      Momen Penuh Kebanggaan &amp; Keberkahan
                    </p>
                    <p className="text-[10px] sm:text-xs text-amber-300/90 font-medium drop-shadow">
                      Dokumentasi Panggung Penghargaan
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Desktop Supporting Photo 1: MTQ (mtq.JPG) ── */}
              <div className="hidden lg:block absolute -bottom-5 left-0 z-20 w-60 xl:w-64 rounded-2xl p-2 bg-white shadow-2xl shadow-slate-900/20 border-2 border-white transition-all duration-300 hover:scale-105 hover:z-30 rotate-1 hover:rotate-0">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/mtq.JPG"
                    alt="Musabaqah Tilawatil Quran santri cilik FAMUS"
                    fill
                    sizes="260px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2.5 right-2 text-white">
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300">
                      <BookOpen className="w-3 h-3" />
                      <span>Tilawatil Qur&apos;an</span>
                    </div>
                    <p className="text-[10px] text-slate-200 line-clamp-1">
                      Kefasihan Tartil Santri
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Desktop Supporting Photo 2: Adzan (adzan.JPG) ── */}
              <div className="hidden lg:block absolute top-6 -left-10 z-20 w-48 xl:w-52 rounded-2xl p-1.5 bg-white shadow-xl shadow-slate-900/15 border-2 border-white transition-all duration-300 hover:scale-105 hover:z-30 -rotate-3 hover:rotate-0">
                <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/adzan.JPG"
                    alt="Lomba Adzan anak santri FAMUS"
                    fill
                    sizes="210px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-1.5 left-2 right-1 text-white">
                    <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300">
                      <Volume2 className="w-2.5 h-2.5" />
                      <span>Gema Adzan Merdu</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Mobile Supporting Photos Grid ── */}
              <div className="grid grid-cols-2 gap-3 mt-3 lg:hidden">
                {/* MTQ Card */}
                <div className="rounded-xl p-1.5 bg-white shadow-md border border-slate-100">
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/mtq.JPG"
                      alt="Tilawatil Quran santri FAMUS"
                      fill
                      sizes="(max-width: 640px) 45vw, 300px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-1.5 left-2 right-1 text-white">
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300">
                        <BookOpen className="w-2.5 h-2.5" />
                        <span>Tilawatil Qur&apos;an</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Adzan Card */}
                <div className="rounded-xl p-1.5 bg-white shadow-md border border-slate-100">
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/adzan.JPG"
                      alt="Lomba Adzan santri FAMUS"
                      fill
                      sizes="(max-width: 640px) 45vw, 300px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-1.5 left-2 right-1 text-white">
                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300">
                        <Volume2 className="w-2.5 h-2.5" />
                        <span>Lomba Adzan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Gold Star Accent */}
              <div className="hidden lg:flex absolute -bottom-4 right-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 border border-amber-200/80 shadow-lg text-slate-800 text-xs font-bold">
                <span className="text-amber-500">⭐</span>
                <span>500+ Santri Cilik Berprestasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
