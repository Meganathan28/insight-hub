import { createFileRoute } from "@tanstack/react-router";
import { DollarSign, Users, Activity, ShoppingBag } from "lucide-react";
import { StatCard } from "@/components/dashboard/stat-card";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { UserGrowthChart } from "@/components/dashboard/user-growth-chart";
import { TransactionsTable } from "@/components/dashboard/transactions-table";
import { TeamMembers } from "@/components/dashboard/team-members";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Dashboard — Lumen" },
      { name: "description", content: "Premium analytics dashboard overview." },
    ],
  }),
});

function Dashboard() {
  return (
    <div className="space-y-6 max-w-[1480px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <div className="text-xs text-muted-foreground tracking-wider uppercase">Overview</div>
          <h1 className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">
            Good morning, <span className="gradient-text">Alex</span>
          </h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Here's how your workspace is performing today.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 px-4 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm hover:bg-white/[0.08] transition">Last 30 days</button>
          <button className="h-10 px-4 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-glow">
            Export report
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total revenue" value="$284,920" delta={12.4} icon={DollarSign} index={0} spark={[20,28,24,38,42,52,58,72,80]} />
        <StatCard label="Active users" value="48,219" delta={8.2} icon={Users} index={1} spark={[40,42,38,52,58,64,70,78,84]} />
        <StatCard label="Conversion rate" value="3.84%" delta={-1.6} icon={Activity} index={2} spark={[60,58,62,55,52,48,50,46,44]} />
        <StatCard label="New orders" value="1,284" delta={24.1} icon={ShoppingBag} index={3} spark={[10,18,22,28,38,48,58,72,90]} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><RevenueChart /></div>
        <UserGrowthChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2"><TransactionsTable /></div>
        <div className="space-y-4">
          <TeamMembers />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ActivityTimeline />
        </div>
        <div className="rounded-2xl p-6 shadow-soft bg-gradient-primary relative overflow-hidden">
          <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-wider text-primary-foreground/80">Lumen AI</div>
            <h3 className="mt-2 text-xl font-semibold text-primary-foreground">Insights, automatically.</h3>
            <p className="mt-2 text-sm text-primary-foreground/85 leading-relaxed">
              Detect churn risk, anomalies and trends before they happen. Powered by your live data.
            </p>
            <button className="mt-5 text-xs font-semibold bg-background/95 text-foreground px-4 py-2 rounded-lg hover:bg-background transition">
              Enable Lumen AI →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
