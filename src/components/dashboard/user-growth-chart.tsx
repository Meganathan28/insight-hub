import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const data = [
  { d: "Mon", active: 2400, new: 800 },
  { d: "Tue", active: 3100, new: 1100 },
  { d: "Wed", active: 2800, new: 940 },
  { d: "Thu", active: 3600, new: 1320 },
  { d: "Fri", active: 4200, new: 1580 },
  { d: "Sat", active: 3300, new: 1090 },
  { d: "Sun", active: 3900, new: 1450 },
];

export function UserGrowthChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="rounded-2xl glass p-6 shadow-soft"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-sm font-semibold">User growth</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Active vs new this week</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-semibold gradient-text">+18.4%</div>
          <div className="text-[10px] text-muted-foreground">vs last week</div>
        </div>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 6, right: 6, left: -16, bottom: 0 }} barCategoryGap={18}>
            <defs>
              <linearGradient id="barActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.18 280)" />
                <stop offset="100%" stopColor="oklch(0.5 0.18 280)" />
              </linearGradient>
              <linearGradient id="barNew" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.7 0.16 200)" />
                <stop offset="100%" stopColor="oklch(0.5 0.16 200)" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
            <XAxis dataKey="d" stroke="oklch(0.65 0.02 260)" tickLine={false} axisLine={false} fontSize={11} />
            <YAxis stroke="oklch(0.65 0.02 260)" tickLine={false} axisLine={false} fontSize={11} />
            <Tooltip
              cursor={{ fill: "oklch(1 0 0 / 0.04)" }}
              contentStyle={{
                background: "oklch(0.2 0.02 265 / 0.95)",
                border: "1px solid oklch(1 0 0 / 0.1)",
                borderRadius: 12,
                fontSize: 12,
              }}
            />
            <Bar dataKey="active" fill="url(#barActive)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="new" fill="url(#barNew)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
