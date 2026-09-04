"use client";

import { LayoutDashboard, Users, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Pendaftar", href: "/admin/pendaftar", icon: Users },
    { name: "Pengaturan", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-emerald-950 text-emerald-50 shrink-0">
        <div className="p-6 border-b border-emerald-900/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            F
          </div>
          <div>
            <h1 className="font-bold text-white text-lg tracking-tight leading-tight">Admin</h1>
            <p className="text-xs text-emerald-400 font-medium">FAMUS 2026</p>
          </div>
        </div>
        
        <nav className="p-4 space-y-1.5 flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-emerald-800/80 text-white font-semibold shadow-sm"
                    : "text-emerald-300 hover:bg-emerald-900/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-emerald-900/50 hidden md:block">
           <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-400 hover:bg-red-500/10 hover:text-red-400 transition-all">
             <LogOut className="w-5 h-5" />
             <span className="text-sm font-medium">Keluar</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
