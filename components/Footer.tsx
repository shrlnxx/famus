import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-14">
          {/* 1. About */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                F
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-[15px] text-white tracking-tight">
                  FAMUS 2026
                </span>
                <span className="text-[10px] text-emerald-300 font-medium tracking-wide">
                  Festival Anak Muslim
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-emerald-100/70">
              Platform pendaftaran dan informasi resmi Festival Anak Muslim
              2026. Diselenggarakan oleh Pondok Pesantren Salafiyah Shirothul
              Fuqoha.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/6285641591979"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-900 border border-emerald-800/80 text-white text-xs font-bold hover:bg-emerald-800 transition-colors shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Kak Imam: 0856-4159-1979</span>
              </a>
              <a
                href="https://wa.me/6285784066403"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-900 border border-emerald-800/80 text-white text-xs font-bold hover:bg-emerald-800 transition-colors shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Kak Syavin: 0857-8406-6403</span>
              </a>
            </div>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="#tentang"
                  className="hover:text-white transition-colors text-emerald-100/70 hover:underline"
                >
                  Tentang Acara
                </a>
              </li>
              <li>
                <a
                  href="#lomba"
                  className="hover:text-white transition-colors text-emerald-100/70 hover:underline"
                >
                  Cabang Lomba &amp; HTM
                </a>
              </li>
              <li>
                <a
                  href="#syarat"
                  className="hover:text-white transition-colors text-emerald-100/70 hover:underline"
                >
                  Syarat &amp; Ketentuan
                </a>
              </li>
              <li>
                <a
                  href="#jadwal"
                  className="hover:text-white transition-colors text-emerald-100/70 hover:underline"
                >
                  Jadwal &amp; Timeline
                </a>
              </li>
              <li>
                <a
                  href="#pendaftaran"
                  className="text-amber-400 hover:text-amber-300 transition-colors font-bold"
                >
                  Formulir Pendaftaran
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Social Media */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">
              Media Sosial
            </h4>
            <p className="text-sm leading-relaxed mb-5 text-emerald-100/70">
              Ikuti keseruan dan update terbaru kami melalui sosial media resmi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram FAMUS"
                className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-800/80 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all text-emerald-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Youtube FAMUS"
                className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-800/80 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all text-emerald-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook FAMUS"
                className="w-10 h-10 rounded-xl bg-emerald-900/80 border border-emerald-800/80 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all text-emerald-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4. Contact Address */}
          <div>
            <h4 className="text-white font-bold text-xs sm:text-sm mb-6 uppercase tracking-wider">
              Lokasi Acara
            </h4>
            <div className="flex items-start gap-3 text-sm mb-4 text-emerald-100/80">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="block font-bold text-white mb-0.5">
                  PP Salafiyah Shirothul Fuqoha
                </span>
                Jl. Basuki Rahmat No. 104 Desa Sepanjang, Kec. Gondanglegi, Kab. Malang, Jawa Timur
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm text-emerald-100/80 mb-4">
              <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="block font-bold text-white mb-0.5">
                  Email
                </span>
                munadzomahsantrishifa26.27@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm text-emerald-100/80">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="block font-bold text-white mb-0.5">
                  Narahubung / CP
                </span>
                <p>
                  Kak Imam:{" "}
                  <a
                    href="https://wa.me/6285641591979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline font-medium"
                  >
                    0856-4159-1979
                  </a>
                </p>
                <p className="mt-0.5">
                  Kak Syavin:{" "}
                  <a
                    href="https://wa.me/6285784066403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline font-medium"
                  >
                    0857-8406-6403
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Munadzomah santri Shifa. Hak Cipta
            Dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Syarat Penggunaan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
