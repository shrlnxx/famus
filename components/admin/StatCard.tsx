import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendLabel?: string;
  trendUp?: boolean;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  trendLabel,
  trendUp = true,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-bold ${
              trendUp
                ? "bg-emerald-50 text-emerald-700"
                : "bg-amber-50 text-amber-700"
            }`}
          >
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-1">
          {title}
        </h3>
        <p className="text-3xl font-extrabold text-slate-900">{value}</p>
        {trendLabel && (
          <p className="text-xs text-slate-400 mt-2">{trendLabel}</p>
        )}
      </div>
    </div>
  );
}
