import { createFileRoute } from "@tanstack/react-router";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { UserGrowthChart } from "@/components/dashboard/user-growth-chart";

export const Route = createFileRoute("/analytics")({
  component: () => (
    <div className="max-w-[1480px] mx-auto space-y-6">
      <div>
        <div className="text-xs text-muted-foreground tracking-wider uppercase">Insights</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Analytics</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Deep-dive into revenue and engagement.</p>
      </div>
      <RevenueChart />
      <UserGrowthChart />
    </div>
  ),
});
