import { motion } from "framer-motion";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const rows = [
  { id: "INV-29481", name: "Acme Corp", email: "billing@acme.io", amount: 12400, status: "Paid", date: "May 24, 2026", avatar: "AC", color: "from-violet-500 to-fuchsia-500" },
  { id: "INV-29480", name: "Northwind", email: "ar@northwind.co", amount: 4820, status: "Pending", date: "May 24, 2026", avatar: "NW", color: "from-sky-500 to-cyan-500" },
  { id: "INV-29479", name: "Globex Inc", email: "ops@globex.com", amount: 980, status: "Failed", date: "May 23, 2026", avatar: "GI", color: "from-rose-500 to-orange-500" },
  { id: "INV-29478", name: "Initech", email: "lumbergh@initech.io", amount: 7250, status: "Paid", date: "May 23, 2026", avatar: "IN", color: "from-emerald-500 to-teal-500" },
  { id: "INV-29477", name: "Stark Industries", email: "tony@stark.com", amount: 31500, status: "Paid", date: "May 22, 2026", avatar: "SI", color: "from-amber-500 to-rose-500" },
  { id: "INV-29476", name: "Wayne Co.", email: "bruce@wayne.com", amount: 1840, status: "Refunded", date: "May 22, 2026", avatar: "WC", color: "from-slate-500 to-zinc-600" },
];

const statusColor: Record<string, string> = {
  Paid: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Failed: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Refunded: "bg-zinc-500/10 text-zinc-300 border-zinc-500/20",
};

export function TransactionsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="rounded-2xl glass shadow-soft overflow-hidden"
    >
      <div className="p-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold">Recent transactions</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Latest payments across your workspace</p>
        </div>
        <button className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition">View all</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[11px] uppercase tracking-wider text-muted-foreground border-y border-white/[0.05]">
              <th className="text-left font-medium px-6 py-3">Customer</th>
              <th className="text-left font-medium px-6 py-3">Invoice</th>
              <th className="text-left font-medium px-6 py-3">Amount</th>
              <th className="text-left font-medium px-6 py-3">Status</th>
              <th className="text-left font-medium px-6 py-3">Date</th>
              <th className="px-6 py-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={cn("h-9 w-9 rounded-lg bg-gradient-to-br grid place-items-center text-[11px] font-semibold text-white", r.color)}>
                      {r.avatar}
                    </div>
                    <div className="leading-tight">
                      <div className="font-medium">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-muted-foreground font-mono text-xs">{r.id}</td>
                <td className="px-6 py-4 font-semibold">${r.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <span className={cn("inline-flex items-center text-[11px] font-medium px-2 py-1 rounded-md border", statusColor[r.status])}>
                    {r.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-muted-foreground text-xs">{r.date}</td>
                <td className="px-6 py-4">
                  <button className="opacity-0 group-hover:opacity-100 transition p-1.5 rounded-md hover:bg-white/5">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
