import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, CreditCard, Download } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/billing")({
  component: BillingPage,
  head: () => ({ meta: [{ title: "Billing — Lumen" }, { name: "description", content: "Manage plans, payment methods and invoices." }] }),
});

const plans = [
  {
    name: "Starter", price: "$0", desc: "For side projects and exploration.",
    features: ["10K events / mo", "3 team members", "7-day data retention", "Community support"],
  },
  {
    name: "Pro", price: "$49", desc: "Everything growing teams need.", featured: true,
    features: ["1M events / mo", "Unlimited team members", "90-day retention", "Lumen AI insights", "Priority support"],
  },
  {
    name: "Scale", price: "$199", desc: "For high-volume production.",
    features: ["10M events / mo", "SSO + audit logs", "Unlimited retention", "Dedicated CSM", "99.99% SLA"],
  },
];

const invoices = [
  { id: "INV-2026-005", date: "May 1, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-2026-004", date: "Apr 1, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-2026-003", date: "Mar 1, 2026", amount: "$49.00", status: "Paid" },
  { id: "INV-2026-002", date: "Feb 1, 2026", amount: "$49.00", status: "Paid" },
];

function BillingPage() {
  return (
    <div className="max-w-[1280px] mx-auto space-y-6">
      <div>
        <div className="text-xs text-muted-foreground tracking-wider uppercase">Workspace</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Billing</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Plans, payment methods and invoices.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-6 flex flex-wrap items-center gap-6 justify-between"
      >
        <div>
          <div className="text-xs text-muted-foreground uppercase tracking-wider">Current plan</div>
          <div className="mt-1 flex items-center gap-3">
            <span className="text-2xl font-semibold">Pro</span>
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-gradient-primary text-primary-foreground font-semibold">ACTIVE</span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">Renews on June 1, 2026 — $49/mo</div>
        </div>
        <div className="flex-1 min-w-[220px] max-w-md">
          <div className="flex justify-between text-xs text-muted-foreground mb-2"><span>Events used</span><span>640K of 1M</span></div>
          <div className="h-2 rounded-full bg-white/5 overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: "64%" }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full bg-gradient-primary" />
          </div>
        </div>
        <div className="flex gap-2">
          <button className="h-10 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm hover:bg-white/[0.08]">Cancel plan</button>
          <button className="h-10 px-4 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium shadow-glow">Upgrade</button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className={cn(
              "relative rounded-2xl p-6 shadow-soft transition",
              p.featured ? "bg-gradient-to-br from-primary/15 to-transparent border border-primary/30 shadow-glow" : "glass"
            )}
          >
            {p.featured && (
              <div className="absolute -top-2.5 left-6 text-[10px] font-semibold tracking-wider px-2 py-1 rounded-md bg-gradient-primary text-primary-foreground">
                MOST POPULAR
              </div>
            )}
            <div className="text-sm font-semibold">{p.name}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-3xl font-semibold tracking-tight">{p.price}</span>
              <span className="text-xs text-muted-foreground">/month</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">{p.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/85">{f}</span>
                </li>
              ))}
            </ul>
            <button className={cn(
              "mt-6 w-full h-10 rounded-xl text-sm font-medium transition",
              p.featured ? "bg-gradient-primary text-primary-foreground hover:opacity-90" : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]"
            )}>
              {p.featured ? "Current plan" : "Switch plan"}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl p-6"
        >
          <h3 className="text-sm font-semibold">Payment method</h3>
          <div className="mt-4 rounded-xl border border-white/10 p-4 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
            <CreditCard className="h-6 w-6 text-primary" />
            <div className="mt-6 font-mono tracking-widest text-sm">•••• •••• •••• 4242</div>
            <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
              <span>ALEX MORGAN</span><span>09/28</span>
            </div>
          </div>
          <button className="mt-4 w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm hover:bg-white/[0.08]">Update card</button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold">Invoices</h3>
            <button className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]">Download all</button>
          </div>
          <div className="mt-4 divide-y divide-white/[0.05]">
            {invoices.map((inv) => (
              <div key={inv.id} className="flex items-center py-3 group">
                <div className="flex-1">
                  <div className="text-sm font-mono">{inv.id}</div>
                  <div className="text-xs text-muted-foreground">{inv.date}</div>
                </div>
                <div className="text-sm font-medium mr-4">{inv.amount}</div>
                <span className="text-[11px] px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mr-3">{inv.status}</span>
                <button className="p-2 rounded-lg hover:bg-white/5 opacity-0 group-hover:opacity-100 transition">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
