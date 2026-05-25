import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const data = [
  { m: "Jan", revenue: 42000, target: 38000 },
  { m: "Feb", revenue: 51000, target: 42000 },
  { m: "Mar", revenue: 58000, target: 50000 },
  { m: "Apr", revenue: 71000, target: 60000 },
  { m: "May", revenue: 84000, target: 70000 },
  { m: "Jun", revenue: 96000, target: 82000 },
  { m: "Jul", revenue: 112000, target: 95000 },
  { m: "Aug", revenue: 128000, target: 108000 },
  { m: "Sep", revenue: 142000, target: 125000 },
  { m: "Oct", revenue: 168000, target: 140000 },
  { m: "Nov", revenue: 184000, target: 160000 },
  { m: "Dec", revenue: 212000, target: 180000 },
];

export function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.6 }}
      className="rounded-2xl glass p-6 shadow-soft"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
        <div>
          <h3 className="text-sm font-semibold">Revenue analytics</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Monthly recurring revenue vs target</p>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Revenue</span>
          <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-white/30" /> Target</span>
        </div>
      </div>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 6, right: 6, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.18 280)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="oklch(0.72 0.18 280)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="tgtGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity={0.15} />
                <stop offset="100%" stopColor="oklch(1 0 0)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
            <XAxis dataKey="m" stroke="oklch(0.65 0.02 260)" tickLine={false} axisLine={false} fontSize={11} />
            <YAxis stroke="oklch(0.65 0.02 260)" tickLine={false} axisLine={false} fontSize={11} tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip
              contentStyle={{
                background: "oklch(0.2 0.02 265 / 0.95)",
                border: "1px solid oklch(1 0 0 / 0.1)",
                borderRadius: 12,
                backdropFilter: "blur(12px)",
                fontSize: 12,
              }}
              formatter={(v: number) => `$${v.toLocaleString()}`}
            />
            <Area type="monotone" dataKey="target" stroke="oklch(1 0 0 / 0.3)" strokeDasharray="4 4" fill="url(#tgtGrad)" strokeWidth={1.5} />
            <Area type="monotone" dataKey="revenue" stroke="oklch(0.72 0.18 280)" fill="url(#revGrad)" strokeWidth={2.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
