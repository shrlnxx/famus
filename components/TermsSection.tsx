"use client";

import {
  CalendarCheck,
  FileCheck,
  CheckCircle2,
  Info,
  Shield,
  Download,
} from "lucide-react";

const timeline = [
  {
    num: 1,
    title: "Periode Pendaftaran Peserta",
    date: "1 – 30 September 2026 (Pukul 23:59 WIB)",
    desc: "Pendaftaran dilakukan online melalui laman resmi ini. Kuota ditutup sewaktu-waktu bila kapasitas terpenuhi.",
    color: "emerald" as const,
  },
  {
    num: 2,
    title: "Technical Meeting (TM)",
    date: "Ahad, 4 Oktober 2026 (09:00 WIB – Selesai)",
    desc: "Digelar secara hibrida melalui Zoom Meeting & bertempat di Aula Utama Pesantren untuk pengambilan nomor undian tampil.",
    color: "amber" as const,
  },
  {
    num: 3,
    title: "Hari Pelaksanaan FAMUS 2026",
    date: "Ahad, 11 Oktober 2026 (07:30 WIB – Selesai)",
    desc: "Registrasi ulang di lokasi, pawai pembukaan santri, pembagian panggung lomba, dan penyerahan piala pemenang.",
    color: "emerald" as const,
  },
];

const requirements = [
  {
    title: "Status Peserta",
    desc: "Terbuka untuk seluruh anak berusia 6-12 tahun di wilayah se-Malang Raya (individu maupun perwakilan lembaga).",
  },
  {
    title: "Pas Foto 3×4",
    desc: "Foto formal terbaru berwarna untuk pencetakan ID card peserta dan lampiran sertifikat resmi.",
  },
  {
    title: "Kartu Keluarga (KK)",
    desc: "Diperlukan untuk verifikasi tahun kelahiran sesuai ketentuan batasan usia masing-masing kategori.",
  },
];

export default function TermsSection() {
  const handleCopy = () => {
    navigator.clipboard.writeText("7148829012");
    alert("Nomor rekening BSI berhasil disalin!");
  };

  const handleDownload = () => {
    alert("Mengunduh Juknis & Panduan Lengkap FAMUS 2026 (PDF)...");
  };

  return (
    <section id="syarat" className="py-24 lg:py-32 bg-[#FAF8F5]/80">
      {/* Anchor for #jadwal nav link */}
      <span id="jadwal" className="absolute -mt-28" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">
            Panduan &amp; Regulasi
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight">
            Syarat, Jadwal &amp; Ketentuan
          </h2>
          <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            Penyelenggaraan terstruktur menjamin keteraturan dan kepastian bagi
            setiap calon peserta, wali, dan ustadz pendamping.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
          {/* ── Card A: Timeline ── */}
          <div className="bg-white rounded-[22px] p-7 sm:p-8 lg:p-9 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900">
                  Jadwal &amp; Waktu Penting
                </h3>
              </div>

              {/* Timeline list */}
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div
                    key={item.num}
                    className="bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-100 flex items-start gap-4 transition-colors hover:bg-slate-50"
                  >
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm shrink-0 ${
                        item.color === "emerald"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {item.num}
                    </span>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-slate-900">
                        {item.title}
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold mt-1 ${
                          item.color === "emerald"
                            ? "text-emerald-700"
                            : "text-amber-700"
                        }`}
                      >
                        {item.date}
                      </p>
                      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-2">
              {/* Info note */}
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                <Info className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                <p className="text-xs font-medium text-emerald-900 leading-relaxed">
                  Waktu dan rangkaian acara dapat disesuaikan dengan konfirmasi
                  resmi panitia melalui grup WhatsApp peserta.
                </p>
              </div>

              {/* Download Juknis */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">
                      Juknis &amp; Panduan Lengkap
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Format PDF Resmi • Ukuran 3.8 MB
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-sm hover:shadow shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Unduh PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Card B: Requirements ── */}
          <div className="bg-white rounded-[22px] p-7 sm:p-8 lg:p-9 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900">
                  Persyaratan Berkas &amp; Ketentuan
                </h3>
              </div>

              {/* Requirements list */}
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div
                    key={i}
                    className="bg-slate-50/90 rounded-2xl p-4 sm:p-5 border border-slate-100 flex items-start gap-3.5 transition-colors hover:bg-slate-50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-slate-900">
                        {req.title}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                        {req.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bank Account Box */}
                <div className="bg-slate-50/90 rounded-2xl p-5 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wide">
                    <span>💳</span>
                    <span>Rekening Resmi Pembayaran HTM</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Berlaku untuk cabang MTQ, Menyanyi Religi, dan Adzan (Rp
                    25.000 / peserta):
                  </p>
                  <div className="bg-white rounded-xl p-4 flex items-center justify-between border border-slate-200/80 shadow-sm">
                    <div>
                      <p className="font-extrabold text-xs text-emerald-700">
                        Bank Syariah Indonesia (BSI)
                      </p>
                      <p className="font-mono font-black text-lg sm:text-xl text-slate-900 tracking-wider mt-0.5">
                        714 8829 012
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        a.n. Panitia FAMUS Sepanjang
                      </p>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 text-xs font-bold transition-colors border border-slate-200"
                    >
                      Salin
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Security warning */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
              <Shield className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <p className="text-xs font-medium text-amber-900 leading-relaxed">
                Harap waspada terhadap penipuan. Konfirmasi pendaftaran hanya
                melalui rekening resmi di atas dan kontak resmi panitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
