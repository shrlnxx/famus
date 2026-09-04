"use client";

import { useState } from "react";
import { UploadCloud, CheckCircle, Lock, Send, Info } from "lucide-react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    childName: "",
    birthPlace: "",
    birthDate: "",
    institution: "",
    parentName: "",
    whatsapp: "",
    category: "",
  });
  
  const [files, setFiles] = useState({
    photo: null as File | null,
    kk: null as File | null,
    transfer: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (e.target.files && e.target.files[0]) {
      setFiles((prev) => ({ ...prev, [field]: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Optional: reset form
    }, 2000);
  };

  const needsPayment = [
    "MTQ",
    "Menyanyi Religi",
    "Adzan",
  ].some((c) => formData.category.includes(c));

  return (
    <section id="pendaftaran" className="py-20 lg:py-28 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Form Container Card */}
        <div className="relative bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-premium border border-white/60 p-6 sm:p-10 lg:p-14 z-10">
          
          {/* Form Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 text-white mb-5 shadow-sm">
              <span className="text-2xl">📝</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Formulir Pendaftaran FAMUS 2026
            </h2>
            <p className="mt-3 text-slate-500 text-sm max-w-lg mx-auto leading-relaxed">
              Mohon isi data calon peserta dan wali secara akurat untuk
              keperluan verifikasi administratif dan pencetakan piagam resmi.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* 1. Data Peserta */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                  1
                </span>
                <h3 className="font-bold text-lg text-emerald-800">
                  Identitas Calon Peserta
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Nama Lengkap Anak *
                  </label>
                  <input
                    type="text"
                    name="childName"
                    required
                    placeholder="Contoh: Muhammad Rayhan Al-Fatih"
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Tempat Lahir *
                  </label>
                  <input
                    type="text"
                    name="birthPlace"
                    required
                    placeholder="Contoh: Malang"
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Tanggal Lahir *
                  </label>
                  <input
                    type="date"
                    name="birthDate"
                    required
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Asal Sekolah / Lembaga / TPQ *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    required
                    placeholder="Contoh: TPQ Al-Ikhlas Gondanglegi / SDIT Permata"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 2. Data Wali */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                  2
                </span>
                <h3 className="font-bold text-lg text-emerald-800">
                  Data Wali &amp; Narahubung
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Nama Orang Tua / Wali Pendamping *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    placeholder="Contoh: Ahmad Baihaqi, S.Pd."
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Nomor WhatsApp Aktif *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold text-sm">
                      +62
                    </span>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      placeholder="81234567890"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Panitia akan mengundang nomor ini ke Grup Peserta.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Kategori Lomba */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                  3
                </span>
                <h3 className="font-bold text-lg text-emerald-800">
                  Pilihan Cabang Lomba
                </h3>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Cabang Perlombaan yang Diikuti *
                </label>
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1em'
                  }}
                >
                  <option value="" disabled>Pilih salah satu cabang perlombaan...</option>
                  <option value="MTQ">Musabaqoh Tilawatil Qur'an (MTQ) — [HTM Rp 25.000]</option>
                  <option value="Menyanyi Religi">Menyanyi Religi — [HTM Rp 25.000]</option>
                  <option value="Puisi Islami">Cipta Baca Puisi Islami — [Gratis]</option>
                  <option value="Pidato Putra">Pidato Putra — [Gratis]</option>
                  <option value="Pidato Putri">Pidato Putri — [Gratis]</option>
                  <option value="Mewarnai Junior">Mewarnai Junior (6-9 Tahun) — [Gratis]</option>
                  <option value="Mewarnai Senior">Mewarnai Senior (10-12 Tahun) — [Gratis]</option>
                  <option value="Storytelling">Storytelling (Bercerita) — [Gratis]</option>
                  <option value="Adzan">Adzan (Khusus Putra) — [HTM Rp 25.000]</option>
                  <option value="CCI">Cerdas Cermat Islami (Tim Beregu 3 Anak) — [Gratis]</option>
                </select>
                
                {/* Dynamic Fee Notice */}
                <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-slate-700">
                      Biaya Pendaftaran: {needsPayment ? 'Rp 25.000' : formData.category ? 'Gratis' : 'Pilih cabang di atas'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Upload Berkas */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                  4
                </span>
                <h3 className="font-bold text-lg text-emerald-800">
                  Unggah Berkas Pendukung
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Photo */}
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={(e) => handleFileChange(e, "photo")}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`p-5 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center transition-all ${files.photo ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-slate-50 group-hover:border-emerald-400 group-hover:bg-emerald-50/50'}`}>
                    {files.photo ? (
                      <CheckCircle className="w-8 h-8 text-emerald-500 mb-2" />
                    ) : (
                      <UploadCloud className="w-8 h-8 text-emerald-600 mb-2" />
                    )}
                    <span className="text-sm font-bold text-slate-800">Pas Foto (3x4) *</span>
                    <span className="text-[11px] text-slate-500 mt-1">{files.photo ? files.photo.name : 'Format .JPG / .PNG (Maks. 2MB)'}</span>
                  </div>
                </div>

                {/* KK */}
                <div className="relative group">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    required
                    onChange={(e) => handleFileChange(e, "kk")}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`p-5 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center transition-all ${files.kk ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 bg-slate-50 group-hover:border-emerald-400 group-hover:bg-emerald-50/50'}`}>
                    {files.kk ? (
                      <CheckCircle className="w-8 h-8 text-emerald-500 mb-2" />
                    ) : (
                      <UploadCloud className="w-8 h-8 text-emerald-600 mb-2" />
                    )}
                    <span className="text-sm font-bold text-slate-800">Kartu Keluarga (KK) *</span>
                    <span className="text-[11px] text-slate-500 mt-1">{files.kk ? files.kk.name : 'Format .PDF / .JPG (Maks. 5MB)'}</span>
                  </div>
                </div>

                {/* Transfer (Optional based on category) */}
                <div className={`relative group ${needsPayment ? 'opacity-100' : 'opacity-50 grayscale pointer-events-none'}`}>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    required={needsPayment}
                    onChange={(e) => handleFileChange(e, "transfer")}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className={`p-5 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center transition-all ${files.transfer ? 'border-amber-500 bg-amber-50' : 'border-slate-200 bg-slate-50 group-hover:border-amber-400 group-hover:bg-amber-50/50'}`}>
                     {files.transfer ? (
                      <CheckCircle className="w-8 h-8 text-amber-500 mb-2" />
                    ) : (
                      <UploadCloud className="w-8 h-8 text-amber-500 mb-2" />
                    )}
                    <span className="text-sm font-bold text-slate-800">Bukti Transfer {needsPayment ? '*' : ''}</span>
                    <span className="text-[11px] text-slate-500 mt-1">{files.transfer ? files.transfer.name : 'Hanya untuk cabang bertarif'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Persetujuan */}
            <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer">
              <input type="checkbox" required className="mt-1 w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300" />
              <span className="text-sm text-slate-700 leading-relaxed">
                Saya menyatakan dengan sadar bahwa data yang diisikan adalah benar dan sah. Saya bersedia menaati seluruh petunjuk teknis, etika santri, dan keputusan dewan juri pada perhelatan <strong>FAMUS 2026</strong>.
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memproses Pendaftaran...
                </>
              ) : isSuccess ? (
                 <>
                   <CheckCircle className="w-5 h-5" />
                   Berhasil Dikirim!
                 </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Kirim Pendaftaran Sekarang
                </>
              )}
            </button>

          </form>
        </div>

        {/* Footer Info */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-600" />
            Data dilindungi secara rahasia untuk administrasi internal panitia.
          </div>
          <div>
            Butuh bantuan? Hubungi panitia:{' '}
            <a href="#" className="font-bold text-emerald-600 hover:underline">+62 812-3456-7890</a>
          </div>
        </div>
      </div>
    </section>
  );
}
