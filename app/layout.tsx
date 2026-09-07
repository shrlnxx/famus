import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAMUS 2026 – Festival Anak Muslim | PP Salafiyah Shirothul Fuqoha",
  description:
    "Festival Anak Muslim 2026 — Santri Cilik Ceria, Berakhlak Mulia, Cinta Indonesia! Ahad, 11 Oktober 2026 di Pondok Pesantren Salafiyah Shirothul Fuqoha, Sepanjang. Daftarkan putra-putri Anda sekarang.",
  keywords: [
    "FAMUS 2026",
    "Festival Anak Muslim",
    "Lomba Islami Anak",
    "MTQ Anak",
    "Pondok Pesantren Shirothul Fuqoha",
    "Sepanjang",
  ],
  openGraph: {
    title: "FAMUS 2026 – Festival Anak Muslim",
    description:
      "Festival tahunan terdepan untuk menumbuhkembangkan kepercayaan diri, adab islami, dan bakat qurani generasi penerus bangsa.",
    type: "website",
    locale: "id_ID",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
