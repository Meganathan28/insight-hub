import { createFileRoute } from "@tanstack/react-router";
import { TransactionsTable } from "@/components/dashboard/transactions-table";

export const Route = createFileRoute("/customers")({
  component: () => (
    <div className="max-w-[1480px] mx-auto space-y-6">
      <div>
        <div className="text-xs text-muted-foreground tracking-wider uppercase">Directory</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Customers</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Every account and their latest activity.</p>
      </div>
      <TransactionsTable />
    </div>
  ),
});
