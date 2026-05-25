import { createFileRoute } from "@tanstack/react-router";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";

export const Route = createFileRoute("/inbox")({
  component: () => (
    <div className="max-w-[1280px] mx-auto space-y-6">
      <div>
        <div className="text-xs text-muted-foreground tracking-wider uppercase">Workspace</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Inbox</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Conversations, alerts, and signals in one place.</p>
      </div>
      <ActivityTimeline />
    </div>
  ),
});
