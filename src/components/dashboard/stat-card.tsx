import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  delta: number;
  icon: LucideIcon;
  spark?: number[];
  index?: number;
}

export function StatCard({ label, value, delta, icon: Icon, spark = [], index = 0 }: StatCardProps) {
  const positive = delta >= 0;
  const max = Math.max(...spark, 1);
  const min = Math.min(...spark, 0);
  const range = max - min || 1;
  const points = spark
    .map((v, i) => `${(i / (spark.length - 1)) * 100},${30 - ((v - min) / range) * 28}`)
    .join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group relative overflow-hidden rounded-2xl glass p-5 shadow-soft hover:shadow-glow transition-shadow"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">{label}</div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
        </div>
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 grid place-items-center">
          <Icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div className={cn(
          "inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold",
          positive ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"
        )}>
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {Math.abs(delta)}%
        </div>
        {spark.length > 0 && (
          <svg viewBox="0 0 100 30" className="h-8 w-24 overflow-visible">
            <defs>
              <linearGradient id={`spark-${label}`} x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.18 280)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.72 0.18 280)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline fill="none" stroke="oklch(0.72 0.18 280)" strokeWidth="1.5" points={points} strokeLinecap="round" strokeLinejoin="round" />
            <polygon fill={`url(#spark-${label})`} points={`0,30 ${points} 100,30`} />
          </svg>
        )}
      </div>
    </motion.div>
  );
}
