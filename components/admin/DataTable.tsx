"use client";

import { Eye, Check, X, FileText, Search, Filter } from "lucide-react";
import { useState } from "react";

type Participant = {
  id: string;
  name: string;
  institution: string;
  category: string;
  whatsapp: string;
  status: "pending" | "verified" | "rejected";
  date: string;
};

// Mock data
const mockData: Participant[] = [
  {
    id: "REG-001",
    name: "Muhammad Rayhan Al-Fatih",
    institution: "SDIT Permata",
    category: "MTQ",
    whatsapp: "081234567890",
    status: "pending",
    date: "12 Sep 2026",
  },
  {
    id: "REG-002",
    name: "Aisyah Putri Azzahra",
    institution: "TPQ Al-Ikhlas",
    category: "Mewarnai Junior",
    whatsapp: "081987654321",
    status: "verified",
    date: "11 Sep 2026",
  },
  {
    id: "REG-003",
    name: "Ahmad Bintang",
    institution: "SDN 1 Sepanjang",
    category: "Adzan",
    whatsapp: "085612345678",
    status: "rejected",
    date: "10 Sep 2026",
  },
  {
    id: "REG-004",
    name: "Tim Cendekia SD Bina Bangsa",
    institution: "SD Bina Bangsa",
    category: "Cerdas Cermat Islami",
    whatsapp: "082233445566",
    status: "pending",
    date: "12 Sep 2026",
  },
];

export default function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = mockData.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="font-bold text-lg text-slate-900">Data Pendaftar Terbaru</h3>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Cari nama atau instansi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 w-full sm:w-64 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-semibold transition-all">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">
                Nama Lengkap
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">
                Lomba & Instansi
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-100 text-right">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredData.map((participant) => (
              <tr
                key={participant.id}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <p className="font-bold text-slate-900 mb-0.5">
                    {participant.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    ID: {participant.id} • {participant.date}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-slate-700 mb-0.5">
                    {participant.category}
                  </p>
                  <p className="text-xs text-slate-500">
                    {participant.institution}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${
                      participant.status === "verified"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : participant.status === "pending"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {participant.status === "verified" && <Check className="w-3 h-3" />}
                    {participant.status === "pending" && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />}
                    {participant.status === "rejected" && <X className="w-3 h-3" />}
                    {participant.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                      title="Lihat Berkas"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
                      title="Verifikasi"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-slate-500">
                  Tidak ada data yang ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
