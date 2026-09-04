import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-50/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* 1. About */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-extrabold text-xs shadow-sm">
                F
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-[14px] text-white tracking-tight">
                  FAMUS 2026
                </span>
                <span className="text-[10px] text-emerald-300 font-medium">
                  Festival Anak Muslim
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Platform pendaftaran dan informasi resmi Festival Anak Muslim 2026. Diselenggarakan oleh Pondok Pesantren Salafiyah Shirothul Fuqoha.
            </p>
            <a href="https://wa.me/6281234567890" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-900 border border-emerald-800 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              WhatsApp Panitia
            </a>
          </div>

          {/* 2. Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Acara</a></li>
              <li><a href="#lomba" className="hover:text-white transition-colors">Cabang Lomba & HTM</a></li>
              <li><a href="#syarat" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#jadwal" className="hover:text-white transition-colors">Jadwal & Timeline</a></li>
              <li><a href="#pendaftaran" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">Formulir Pendaftaran</a></li>
            </ul>
          </div>

          {/* 3. Social Media */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
              Media Sosial
            </h4>
            <p className="text-sm leading-relaxed mb-4">
              Ikuti keseruan dan update terbaru kami melalui sosial media resmi.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 border border-emerald-800 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4. Contact Address */}
          <div>
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">
              Lokasi Acara
            </h4>
            <div className="flex items-start gap-3 text-sm mb-4">
              <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="block font-semibold text-white mb-1">PP Salafiyah Shirothul Fuqoha</span>
                Jl. Raya Sepanjang No. 99, Kec. Taman, Kab. Sidoarjo, Jawa Timur 61257
              </p>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <span className="block font-semibold text-white mb-1">Surel Resmi</span>
                panitia@famus2026.com
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Panitia FAMUS. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat Penggunaan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
