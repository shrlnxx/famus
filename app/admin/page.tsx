import StatCard from "@/components/admin/StatCard";
import DataTable from "@/components/admin/DataTable";
import { Users, FileCheck, Clock } from "lucide-react";

export const metadata = {
  title: "Admin Dashboard | FAMUS 2026",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Ringkasan Pendaftaran
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Data diperbarui secara otomatis setiap ada pendaftar baru.
          </p>
        </div>
        <button className="hidden sm:flex items-center justify-center px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm transition-all">
          Unduh Laporan CSV
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Pendaftar"
          value="142"
          icon={Users}
          trend="+12"
          trendLabel="Dibandingkan minggu lalu"
        />
        <StatCard
          title="Menunggu Verifikasi"
          value="38"
          icon={Clock}
          trend="Perlu Aksi"
          trendUp={false}
          trendLabel="Menunggu pengecekan berkas"
        />
        <StatCard
          title="Pendaftar Terverifikasi"
          value="104"
          icon={FileCheck}
          trend="73%"
          trendLabel="Dari total pendaftar"
        />
      </div>

      {/* Data Table Section */}
      <div>
        <DataTable />
      </div>
    </div>
  );
}
