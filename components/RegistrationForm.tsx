"use client";

import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  UploadCloud,
  CheckCircle2,
  Lock,
  Send,
  Info,
  AlertCircle,
  ExternalLink,
  XCircle,
  X,
  Sparkles,
  CreditCard,
  Check,
  Copy,
  FileText,
  ShieldCheck,
  Users,
  Music,
} from "lucide-react";

// --- Types ---

type FormValues = {
  cabangLomba: string;
  laguwajib?: string;
  namaKelompok?: string;
  namaPeserta1?: string;
  namaPeserta2?: string;
  namaAnak: string;
  usia: string;
  asalLembaga: string;
  namaPendamping: string;
  noHp: string;
  agreement: boolean;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

// --- Constants ---

const CABANG_OPTIONS = [
  { value: "", label: "Pilih salah satu cabang perlombaan...", disabled: true, fee: 0 },
  { value: "MTQ", label: "Musabaqoh Tartilil Qur'an (MTQ)", fee: 35000 },
  { value: "Menyanyi Religi", label: "Menyanyi Religi", fee: 35000 },
  { value: "Puisi Islami", label: "Cipta Baca Puisi Islami", fee: 35000 },
  { value: "Pidato Putra", label: "Pidato Putra", fee: 35000 },
  { value: "Pidato Putri", label: "Pidato Putri", fee: 35000 },
  { value: "Mewarnai Junior", label: "Mewarnai Junior (6–9 Tahun)", fee: 30000 },
  { value: "Mewarnai Senior", label: "Mewarnai Senior (10–13 Tahun)", fee: 30000 },
  { value: "Storytelling", label: "Storytelling (Bercerita)", fee: 35000 },
  { value: "Adzan", label: "Adzan (Khusus Putra)", fee: 35000 },
  { value: "CCI", label: "Cerdas Cermat Islami (Tim Beregu 2 Anak)", fee: 60000 },
];

const LAGU_OPTIONS = [
  {
    title: "Allahul Kafi",
    url: "https://youtu.be/78tspwSpey8?si=53gW5-oWnDOltQbf",
  },
  {
    title: "Ahmad Ya Habibi",
    url: "https://youtu.be/ljmCoVYDwBQ?si=jWJ7V16kv-fWI6oa",
  },
  {
    title: "Sifat Wajib Bagi Allah",
    url: "https://youtu.be/cJxpyBc_cEs?si=d34Isxra-2kUp6WH",
  },
  {
    title: "Rohatil Athyaru Tasydu",
    url: "https://youtu.be/f2_sCYyNoIw?si=Dvn8BVw0HllHs0or",
  },
  {
    title: "Ya Thoybah",
    url: "https://youtu.be/JRuihz53y08?si=DIBkEJ_MX6HCcvE_",
  },
  {
    title: "Sepohon Kayu",
    url: "https://youtu.be/2CWfyOOgAJQ?si=74NkAfEADNwosZ8s",
  },
];

const GAS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzoXRzkeSN-jZdY3ggZDV0JCLMLZJ8Ac-xsu5iNKq4abWV0ELMjb--8QpGDNc9X1dgD/exec";

const MAX_FILE_BYTES = 2 * 1024 * 1024; // 2 MB

// --- Helper: File to Base64 ---

function convertBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]); // strip data URL prefix
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(0)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// --- Sub-component: File Upload Zone ---

interface FileZoneProps {
  label: string;
  hint: string;
  accept: string;
  required?: boolean;
  disabled?: boolean;
  file: File | null;
  error?: string;
  onChange: (file: File | null) => void;
  accentColor?: "emerald" | "amber";
}

function FileZone({
  label,
  hint,
  accept,
  required,
  disabled,
  file,
  error,
  onChange,
  accentColor = "emerald",
}: FileZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isAmber = accentColor === "amber";

  const borderActive = isAmber
    ? "border-amber-400 bg-amber-50/70"
    : "border-emerald-500 bg-emerald-50/70";
  const borderIdle = isAmber
    ? "border-slate-200 bg-slate-50/60 hover:border-amber-400 hover:bg-amber-50/30"
    : "border-slate-200 bg-slate-50/60 hover:border-emerald-400 hover:bg-emerald-50/30";
  const iconColor = isAmber ? "text-amber-600" : "text-emerald-700";

  return (
    <div className="flex flex-col">
      <div
        className={`relative group rounded-2xl transition-all ${
          disabled ? "opacity-40 grayscale pointer-events-none" : ""
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          required={required && !disabled}
          disabled={disabled}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          onChange={(e) => {
            const f = e.target.files?.[0] ?? null;
            onChange(f);
          }}
        />
        <div
          className={`p-5 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center gap-1.5 transition-all min-h-[135px] ${
            file ? borderActive : borderIdle
          } ${error ? "!border-red-400 !bg-red-50/40" : ""}`}
        >
          {file ? (
            <>
              <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center mb-0.5">
                <CheckCircle2 className={`w-5 h-5 ${iconColor}`} />
              </div>
              <span className="text-xs font-bold text-slate-800 line-clamp-1 max-w-[200px]">
                {label}
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/80 border border-slate-200 text-[11px] text-slate-600 max-w-[200px]">
                <span className="truncate">{file.name}</span>
                <span className="text-slate-400 shrink-0">({formatFileSize(file.size)})</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  onChange(null);
                  if (inputRef.current) inputRef.current.value = "";
                }}
                className="mt-1 text-[11px] font-bold text-red-500 hover:text-red-700 flex items-center gap-1 z-20 relative transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                <span>Ganti Berkas</span>
              </button>
            </>
          ) : (
            <>
              <div className="w-9 h-9 rounded-full bg-white shadow-xs flex items-center justify-center mb-0.5">
                <UploadCloud className={`w-5 h-5 ${iconColor}`} />
              </div>
              <span className="text-xs font-bold text-slate-800">
                {label} {required && <span className="text-red-500">*</span>}
              </span>
              <span className="text-[11px] text-slate-400 leading-tight">
                {disabled ? "Pilih cabang lomba terlebih dahulu" : hint}
              </span>
            </>
          )}
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-[11px] text-red-600 font-medium flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// --- Sub-component: Field Group ---

function FieldGroup({
  label,
  error,
  children,
  helper,
  required,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  helper?: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs sm:text-sm font-bold text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {helper && <div className="text-[11px] text-slate-400">{helper}</div>}
      {error && (
        <p className="text-[11px] text-red-600 font-medium flex items-center gap-1 mt-0.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {error}
        </p>
      )}
    </div>
  );
}

// --- Sub-component: Section Header ---

function SectionHeader({
  num,
  title,
  subtitle,
}: {
  num: number;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-slate-100 pb-3 mb-5">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-700 text-white font-extrabold text-xs shadow-xs shrink-0">
          {num}
        </span>
        <h3 className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
          {title}
        </h3>
      </div>
      {subtitle && (
        <p className="text-xs text-slate-500 mt-1 ml-10 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// --- CSS styles & classes ---

const inputCls = (hasError?: boolean) =>
  `w-full h-12 px-4 rounded-xl bg-slate-50/70 border ${
    hasError
      ? "border-red-400 focus:ring-red-400"
      : "border-slate-200/90 focus:border-emerald-600 focus:ring-emerald-600/10"
  } text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:bg-white transition-all text-sm`;

const selectCls = (hasError?: boolean) =>
  `w-full h-12 px-4 rounded-xl bg-slate-50/70 border ${
    hasError
      ? "border-red-400 focus:ring-red-400"
      : "border-slate-200/90 focus:border-emerald-600 focus:ring-emerald-600/10"
  } text-slate-900 focus:outline-none focus:ring-4 focus:bg-white transition-all appearance-none cursor-pointer text-sm`;

const chevronStyle = {
  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
  backgroundRepeat: "no-repeat" as const,
  backgroundPosition: "right 1rem center" as const,
  backgroundSize: "1em" as const,
};

// --- Main Component ---

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onTouched" });

  // File states (managed separately for base64 reading)
  const [fotoFile, setFotoFile] = useState<File | null>(null);
  const [kkFile, setKkFile] = useState<File | null>(null);
  const [tfFile, setTfFile] = useState<File | null>(null);
  const [fileErrors, setFileErrors] = useState<Record<string, string>>({});

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedRek, setCopiedRek] = useState(false);

  const cabangLomba = watch("cabangLomba", "");
  const selectedLagu = watch("laguwajib", "");
  const isMenyanyi = cabangLomba === "Menyanyi Religi";
  const isCCI = cabangLomba === "CCI";
  const selectedOption = CABANG_OPTIONS.find((o) => o.value === cabangLomba);
  const isPaid = Boolean(cabangLomba && selectedOption && selectedOption.fee > 0);
  const selectedLaguObj = LAGU_OPTIONS.find((l) => l.title === selectedLagu);

  // Listen for quick-register events from CategoriesSection
  useEffect(() => {
    const handler = (e: Event) => {
      const ev = e as CustomEvent<string>;
      if (ev.detail) {
        setValue("cabangLomba", ev.detail, { shouldValidate: true });
      }
    };
    window.addEventListener("select-category", handler);
    return () => window.removeEventListener("select-category", handler);
  }, [setValue]);

  // Copy rekening handler with smooth state feedback
  const handleCopyRek = () => {
    navigator.clipboard.writeText("7148829012");
    setCopiedRek(true);
    setTimeout(() => setCopiedRek(false), 2500);
  };

  // File validation
  const validateFile = (file: File | null, key: string, required: boolean): boolean => {
    if (!file) {
      if (required) {
        setFileErrors((p) => ({ ...p, [key]: "Berkas ini wajib diunggah." }));
        return false;
      }
      setFileErrors((p) => {
        const n = { ...p };
        delete n[key];
        return n;
      });
      return true;
    }
    if (file.size > MAX_FILE_BYTES) {
      setFileErrors((p) => ({
        ...p,
        [key]: `Ukuran berkas melebihi batas 2 MB (${(file.size / (1024 * 1024)).toFixed(1)} MB).`,
      }));
      return false;
    }
    setFileErrors((p) => {
      const n = { ...p };
      delete n[key];
      return n;
    });
    return true;
  };

  // Submit Handler
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const fotoOk = validateFile(fotoFile, "foto", true);
    const kkOk = validateFile(kkFile, "kk", true);
    const tfOk = validateFile(tfFile, "tf", isPaid);

    if (!fotoOk || !kkOk || !tfOk) return;

    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const [fotoBase64, kkBase64] = await Promise.all([
        convertBase64(fotoFile!),
        convertBase64(kkFile!),
      ]);
      const tfBase64 = tfFile ? await convertBase64(tfFile) : "";

      const namaPesertaFinal = isCCI
        ? `${data.namaPeserta1} & ${data.namaPeserta2}`
        : data.namaAnak;

      const detailKhususFinal = isMenyanyi
        ? (data.laguwajib ?? "")
        : isCCI
        ? `Regu: ${data.namaKelompok ?? ""} | Peserta 1: ${data.namaPeserta1 ?? ""} | Peserta 2: ${data.namaPeserta2 ?? ""}`
        : "";

      const payload = {
        cabangLomba: data.cabangLomba,
        detailKhusus: detailKhususFinal,
        namaAnak: namaPesertaFinal,
        usia: data.usia,
        asalLembaga: data.asalLembaga,
        namaPendamping: data.namaPendamping,
        noHp: data.noHp,
        fotoBase64,
        fotoMimeType: fotoFile!.type,
        kkBase64,
        kkMimeType: kkFile!.type,
        tfBase64,
        tfMimeType: tfFile?.type ?? "",
      };

      // Google Apps Script requires mode: no-cors (opaque response)
      await fetch(GAS_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      setSubmitStatus("success");
      reset();
      setFotoFile(null);
      setKkFile(null);
      setTfFile(null);
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Terjadi kesalahan koneksi. Silakan periksa jaringan dan coba lagi."
      );
    }
  };

  const isSubmitting = submitStatus === "loading";

  return (
    <section id="pendaftaran" className="py-20 sm:py-24 lg:py-32 bg-[#FAF8F5] scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Header Section --- */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pendaftaran Resmi Peserta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Formulir Pendaftaran FAMUS 2026
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Lengkapi formulir di bawah ini dengan data yang valid. Data akan digunakan untuk verifikasi berkas, pencetakan piagam resmi, dan komunikasi teknis lomba.
          </p>
        </div>

        {/* --- Success Notification Banner --- */}
        {submitStatus === "success" && (
          <div className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-emerald-950 text-base">
                  Pendaftaran Berhasil Dikirim! 🎉
                </h4>
                <p className="text-xs sm:text-sm text-emerald-800/90 mt-1 leading-relaxed">
                  Alhamdulillah, data pendaftaran calon peserta telah kami terima. Panitia akan segera melakukan verifikasi berkas dan menghubungi nomor WhatsApp Anda untuk konfirmasi teknis serta tautan grup peserta.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Konfirmasi ke Panitia</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* --- Error Notification Banner --- */}
        {submitStatus === "error" && (
          <div className="mb-8 p-6 rounded-2xl bg-red-50 border border-red-200 shadow-sm flex items-start gap-3.5">
            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-extrabold text-red-900 text-base">
                Gagal Mengirim Formulir
              </h4>
              <p className="text-xs sm:text-sm text-red-700/90 mt-1 leading-relaxed">
                {errorMessage} Silakan cek kelengkapan berkas Anda, lalu coba kirim kembali atau hubungi panitia melalui WhatsApp.
              </p>
            </div>
          </div>
        )}

        {/* --- Main Card --- */}
        <div className="bg-white rounded-3xl sm:rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.06)] border border-slate-200/80 p-6 sm:p-10 lg:p-14">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 sm:space-y-12" noValidate>

            {/* ══════════════════════════════════════════════════
                BAGIAN 1 — PILIHAN CABANG LOMBA
            ══════════════════════════════════════════════════ */}
            <div>
              <SectionHeader
                num={1}
                title="Pilihan Cabang Perlombaan"
                subtitle="Pilih kategori lomba yang diikuti beserta instrumen yang dibutuhkan"
              />

              <div className="space-y-4">
                <FieldGroup
                  label="Cabang Perlombaan"
                  required
                  error={errors.cabangLomba?.message}
                >
                  <select
                    {...register("cabangLomba", { required: "Silakan pilih salah satu cabang lomba." })}
                    className={selectCls(!!errors.cabangLomba)}
                    style={chevronStyle}
                  >
                    {CABANG_OPTIONS.map((o) =>
                      o.disabled ? (
                        <option key="placeholder" value="" disabled>
                          {o.label}
                        </option>
                      ) : (
                        <option key={o.value} value={o.value}>
                          {o.label} — [HTM Rp {o.fee.toLocaleString("id-ID")}]
                        </option>
                      )
                    )}
                  </select>
                </FieldGroup>

                {/* Status Biaya Badge */}
                {cabangLomba && selectedOption && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
                    <Info className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="text-slate-600">
                      Biaya Pendaftaran:{" "}
                      <strong className="text-amber-700 font-extrabold">
                        Rp {selectedOption.fee.toLocaleString("id-ID")} {isCCI ? "/ Regu (2 Peserta)" : "/ Peserta"}
                      </strong>
                    </span>
                  </div>
                )}

                {/* Conditional 1: Menyanyi Religi -> Pilihan Lagu Wajib */}
                {isMenyanyi && (
                  <div className="rounded-2xl border border-emerald-200/90 bg-emerald-50/50 p-5 space-y-3.5 animate-fade-in mt-2">
                    <FieldGroup
                      label="Pilihan Lagu Wajib"
                      required
                      error={errors.laguwajib?.message}
                      helper={
                        <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium mt-1">
                          <ExternalLink className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>Pilih 1 lagu wajib. Tautan YouTube referensi nada &amp; aransemen tersedia di bawah:</span>
                        </div>
                      }
                    >
                      <select
                        {...register("laguwajib", {
                          required: isMenyanyi ? "Silakan pilih salah satu lagu wajib." : false,
                        })}
                        className={selectCls(!!errors.laguwajib)}
                        style={chevronStyle}
                      >
                        <option value="" disabled>Pilih judul lagu wajib...</option>
                        {LAGU_OPTIONS.map((l) => (
                          <option key={l.title} value={l.title}>{l.title}</option>
                        ))}
                      </select>
                    </FieldGroup>

                    {/* Selected Song Direct Play Button */}
                    {selectedLaguObj && (
                      <div className="p-3 rounded-xl bg-white border border-emerald-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div className="flex items-center gap-2">
                          <Music className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span className="text-xs font-bold text-slate-800">
                            Referensi Terpilih: <strong>{selectedLaguObj.title}</strong>
                          </span>
                        </div>
                        <a
                          href={selectedLaguObj.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold transition-colors shrink-0 shadow-xs"
                        >
                          <span>Putar di YouTube</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    {/* 6 Song Reference YouTube Links List */}
                    <div className="pt-2 border-t border-emerald-200/60">
                      <p className="text-[11px] font-bold text-emerald-900 mb-2">
                        Daftar Lengkap Tautan YouTube 6 Lagu Wajib:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {LAGU_OPTIONS.map((song, i) => (
                          <a
                            key={i}
                            href={song.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/90 hover:bg-white border border-emerald-200/80 text-xs text-slate-700 hover:text-emerald-900 transition-colors group shadow-xs"
                          >
                            <span className="font-semibold truncate">{i + 1}. {song.title}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-emerald-600 opacity-60 group-hover:opacity-100 shrink-0 ml-1.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Conditional 2: CCI -> Info Regu 2 Anak */}
                {isCCI && (
                  <div className="rounded-2xl border border-amber-200/90 bg-amber-50/60 p-5 space-y-2 animate-fade-in mt-2">
                    <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm">
                      <Users className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Ketentuan Regu Cerdas Cermat Islami (2 Peserta)</span>
                    </div>
                    <p className="text-xs text-amber-800/90 leading-relaxed">
                      Satu kelompok terdiri dari <strong>2 peserta santri/siswa</strong> dari lembaga atau sekolah yang sama. Biaya pendaftaran adalah <strong>Rp 60.000 / Regu</strong>. Kisi-kisi materi soal akan dibagikan pada tanggal <strong>15 September 2026</strong> melalui <strong>Grup WhatsApp Peserta</strong>.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* ══════════════════════════════════════════════════
                BAGIAN 2 — IDENTITAS CALON PESERTA
            ══════════════════════════════════════════════════ */}
            <div>
              <SectionHeader
                num={2}
                title={isCCI ? "Identitas Regu & Anggota Peserta" : "Identitas Calon Peserta"}
                subtitle={
                  isCCI
                    ? "Data kelompok dan nama lengkap kedua peserta lomba Cerdas Cermat Islami"
                    : "Data lengkap anak yang akan berlomba di ajang FAMUS 2026"
                }
              />

              <div className="space-y-4">
                {isCCI ? (
                  <div className="space-y-4">
                    <FieldGroup
                      label="Nama Regu / Kelompok"
                      required
                      error={errors.namaKelompok?.message}
                      helper="Contoh: Regu Al-Khawarizmi / Regu Bilal bin Rabah"
                    >
                      <input
                        type="text"
                        {...register("namaKelompok", {
                          required: isCCI ? "Nama regu/kelompok wajib diisi." : false,
                        })}
                        placeholder="Contoh: Regu Al-Khawarizmi"
                        className={inputCls(!!errors.namaKelompok)}
                      />
                    </FieldGroup>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FieldGroup
                        label="Nama Lengkap Peserta 1 (Ketua Regu)"
                        required
                        error={errors.namaPeserta1?.message}
                        helper="Nama lengkap sesuai akta / KK untuk penulisan piagam"
                      >
                        <input
                          type="text"
                          {...register("namaPeserta1", {
                            required: isCCI ? "Nama Peserta 1 wajib diisi." : false,
                            minLength: { value: 3, message: "Minimal 3 karakter." },
                          })}
                          placeholder="Contoh: Muhammad Rayhan Al-Fatih"
                          className={inputCls(!!errors.namaPeserta1)}
                        />
                      </FieldGroup>

                      <FieldGroup
                        label="Nama Lengkap Peserta 2 (Anggota Regu)"
                        required
                        error={errors.namaPeserta2?.message}
                        helper="Nama lengkap sesuai akta / KK untuk penulisan piagam"
                      >
                        <input
                          type="text"
                          {...register("namaPeserta2", {
                            required: isCCI ? "Nama Peserta 2 wajib diisi." : false,
                            minLength: { value: 3, message: "Minimal 3 karakter." },
                          })}
                          placeholder="Contoh: Ahmad Zaki Mubarok"
                          className={inputCls(!!errors.namaPeserta2)}
                        />
                      </FieldGroup>
                    </div>
                  </div>
                ) : (
                  <FieldGroup
                    label="Nama Lengkap Anak"
                    required
                    error={errors.namaAnak?.message}
                    helper="Tuliskan nama lengkap beserta ejaan yang tepat untuk pencetakan piagam penghargaan."
                  >
                    <input
                      type="text"
                      {...register("namaAnak", {
                        required: !isCCI ? "Nama lengkap anak wajib diisi." : false,
                        minLength: { value: 3, message: "Nama anak minimal 3 karakter." },
                      })}
                      placeholder="Contoh: Muhammad Rayhan Al-Fatih"
                      className={inputCls(!!errors.namaAnak)}
                    />
                  </FieldGroup>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <FieldGroup
                      label="Usia (Tahun)"
                      required
                      error={errors.usia?.message}
                      helper={
                        cabangLomba === "Mewarnai Junior"
                          ? "Maksimal 9 tahun (Mewarnai Junior)"
                          : cabangLomba === "Mewarnai Senior"
                          ? "Rentang 10–13 tahun"
                          : isCCI
                          ? "Rentang 9–13 tahun"
                          : "Batas usia: maksimal 13 tahun"
                      }
                    >
                      <input
                        type="number"
                        min={4}
                        max={cabangLomba === "Mewarnai Junior" ? 9 : 13}
                        {...register("usia", {
                          required: "Usia wajib diisi.",
                          min: { value: 4, message: "Usia minimal 4 tahun." },
                          validate: (val) => {
                            const num = parseInt(val, 10);
                            if (isNaN(num)) return "Masukkan angka usia yang valid.";
                            if (cabangLomba === "Mewarnai Junior" && num > 9) {
                              return "Batas usia Mewarnai Junior maksimal 9 tahun.";
                            }
                            if (num > 13) {
                              return "Batas maksimal usia peserta adalah 13 tahun.";
                            }
                            return true;
                          },
                        })}
                        placeholder={isCCI ? "Contoh: 10" : "Contoh: 9"}
                        className={inputCls(!!errors.usia)}
                      />
                    </FieldGroup>
                  </div>

                  <div className="md:col-span-2">
                    <FieldGroup
                      label="Asal Sekolah / Lembaga / TPQ"
                      required
                      error={errors.asalLembaga?.message}
                      helper="Nama TPQ, Madrasah, SD/MI, atau sekolah asal peserta"
                    >
                      <input
                        type="text"
                        {...register("asalLembaga", {
                          required: "Asal sekolah atau lembaga wajib diisi.",
                        })}
                        placeholder="Contoh: TPQ Al-Ikhlas Sepanjang / SDIT Permata"
                        className={inputCls(!!errors.asalLembaga)}
                      />
                    </FieldGroup>
                  </div>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════
                BAGIAN 3 — DATA WALI & NARAHUBUNG
            ══════════════════════════════════════════════════ */}
            <div>
              <SectionHeader
                num={3}
                title="Data Pendamping & Narahubung"
                subtitle="Kontak orang tua, wali, atau ustadz pembina untuk koordinasi kegiatan"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FieldGroup
                  label="Nama Pendamping (Orang Tua / Wali / Guru)"
                  required
                  error={errors.namaPendamping?.message}
                  helper="Nama wali peserta atau guru pendamping resmi"
                >
                  <input
                    type="text"
                    {...register("namaPendamping", {
                      required: "Nama pendamping wajib diisi.",
                    })}
                    placeholder="Contoh: Ahmad Baihaqi, S.Pd."
                    className={inputCls(!!errors.namaPendamping)}
                  />
                </FieldGroup>

                <FieldGroup
                  label="Nomor WhatsApp Aktif"
                  required
                  error={errors.noHp?.message}
                  helper="Nomor aktif untuk dimasukkan ke grup koordinasi lomba WhatsApp."
                >
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-extrabold text-sm select-none border-r border-slate-200 pr-2.5">
                      +62
                    </span>
                    <input
                      type="tel"
                      {...register("noHp", {
                        required: "Nomor WhatsApp wajib diisi.",
                        pattern: {
                          value: /^[0-9]{8,13}$/,
                          message: "Masukkan 8–13 digit angka (tanpa awalan 0 atau +62).",
                        },
                      })}
                      placeholder="81234567890"
                      className={`${inputCls(!!errors.noHp)} pl-16`}
                    />
                  </div>
                </FieldGroup>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════
                BAGIAN 4 — INFORMASI & PEMBAYARAN HTM
            ══════════════════════════════════════════════════ */}
            <div>
              <SectionHeader
                num={4}
                title="Informasi & Pembayaran HTM"
                subtitle="Rincian biaya pendaftaran dan rekening resmi panitia"
              />

              <div
                className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                  !cabangLomba
                    ? "border-slate-200 bg-slate-50/60"
                    : "border-amber-200/90 bg-amber-50/40"
                }`}
              >
                {!cabangLomba ? (
                  <div className="flex items-center gap-3 py-2 text-slate-500 text-sm justify-center">
                    <Info className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Silakan tentukan cabang lomba di Bagian 1 untuk melihat status pembayaran HTM.</span>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm uppercase tracking-wide">
                      <CreditCard className="w-4 h-4 text-amber-700" />
                      <span>
                        Biaya Pendaftaran: Rp {selectedOption?.fee.toLocaleString("id-ID")}{" "}
                        {isCCI ? "/ Regu (2 Peserta)" : "/ Peserta"}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Biaya pendaftaran untuk cabang <strong>{selectedOption?.label ?? cabangLomba}</strong> adalah sebesar <strong>Rp {selectedOption?.fee.toLocaleString("id-ID")}</strong>{isCCI ? " untuk 1 regu (2 peserta)" : ""}. Silakan selesaikan transfer ke rekening panitia di bawah ini, kemudian unggah bukti transfer pada Bagian 5.
                    </p>

                    {/* Bank Card */}
                    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-extrabold tracking-wider uppercase border border-emerald-200/60 mb-1">
                          Bank Syariah Indonesia (BSI)
                        </span>
                        <p className="font-mono font-black text-2xl text-slate-900 tracking-wider mt-0.5">
                          714 8829 012
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Atas Nama: <strong className="text-slate-800">Panitia FAMUS Sepanjang</strong>
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={handleCopyRek}
                        className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 text-xs font-bold transition-all border border-slate-200 flex items-center justify-center gap-2 shrink-0 active:scale-95"
                      >
                        {copiedRek ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Nomor Rekening Tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-500" />
                            <span>Salin No. Rekening</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-amber-800/80">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Pastikan transfer ditujukan ke rekening resmi BSI panitia FAMUS di atas untuk menghindari penipuan.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ══════════════════════════════════════════════════
                BAGIAN 5 — UNGGAH BERKAS PERSYARATAN
            ══════════════════════════════════════════════════ */}
            <div>
              <SectionHeader
                num={5}
                title="Unggah Berkas Persyaratan"
                subtitle="Format file: JPG, PNG, atau PDF (maksimal 2 MB per berkas)"
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <FileZone
                  label={isCCI ? "Pas Foto (Ketua/Anggota)" : "Pas Foto (3×4)"}
                  hint="Foto setengah badan · JPG / PNG"
                  accept="image/*"
                  required
                  file={fotoFile}
                  error={fileErrors.foto}
                  accentColor="emerald"
                  onChange={(f) => {
                    setFotoFile(f);
                    validateFile(f, "foto", true);
                  }}
                />

                <FileZone
                  label="Kartu Keluarga (KK)"
                  hint="Scan/foto KK jelas · PDF / JPG"
                  accept="image/*,.pdf"
                  required
                  file={kkFile}
                  error={fileErrors.kk}
                  accentColor="emerald"
                  onChange={(f) => {
                    setKkFile(f);
                    validateFile(f, "kk", true);
                  }}
                />

                <FileZone
                  label="Bukti Transfer"
                  hint="Struk / bukti transfer · PDF / JPG"
                  accept="image/*,.pdf"
                  required={isPaid}
                  disabled={!cabangLomba}
                  file={tfFile}
                  error={fileErrors.tf}
                  accentColor="amber"
                  onChange={(f) => {
                    setTfFile(f);
                    validateFile(f, "tf", isPaid);
                  }}
                />
              </div>
            </div>

            {/* ══════════════════════════════════════════════════
                PERNYATAAN & PERSETUJUAN
            ══════════════════════════════════════════════════ */}
            <div className="space-y-2">
              <label className="flex items-start gap-3.5 p-5 bg-slate-50 rounded-2xl border border-slate-200/80 cursor-pointer hover:bg-slate-100/70 transition-colors">
                <input
                  type="checkbox"
                  {...register("agreement", {
                    required: "Anda wajib menyetujui pernyataan ini sebelum mengirim pendaftaran.",
                  })}
                  className="mt-0.5 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer shrink-0"
                />
                <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Saya menyatakan dengan sadar bahwa seluruh data yang diisikan adalah benar, akurat, dan dapat dipertanggungjawabkan. Kami bersedia menaati petunjuk teknis lomba, tata tertib santri, serta menerima keputusan dewan juri <strong className="text-slate-900 font-bold">FAMUS 2026</strong>.
                </span>
              </label>

              {errors.agreement && (
                <p className="text-[11px] text-red-600 font-medium flex items-center gap-1 pl-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.agreement.message}
                </p>
              )}
            </div>

            {/* ══════════════════════════════════════════════════
                TOMBOL KIRIM PENDAFTARAN
            ══════════════════════════════════════════════════ */}
            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="w-full py-4 px-6 rounded-2xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-extrabold text-base sm:text-lg flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Mengirim Formulir Pendaftaran...</span>
                </>
              ) : submitStatus === "success" ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Pendaftaran Terkirim!</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Kirim Formulir Pendaftaran</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* --- Footer Notes & Narahubung --- */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 px-3 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Data pendaftar terenkripsi & hanya digunakan untuk administrasi resmi panitia FAMUS 2026.</span>
          </div>
          <div>
            Butuh bantuan? Hubungi Narahubung:{" "}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
            >
              +62 812-3456-7890
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
