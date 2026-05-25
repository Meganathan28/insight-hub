import { motion } from "framer-motion";
import { CheckCircle2, GitBranch, MessageCircle, Sparkles, UserPlus, Zap } from "lucide-react";

const events = [
  { icon: Sparkles, color: "text-violet-400 bg-violet-500/10 border-violet-500/20", title: "Lumen AI deployed", desc: "Smart insights now live for all workspaces.", time: "Just now" },
  { icon: CheckCircle2, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", title: "Invoice paid", desc: "Stark Industries — $31,500", time: "12 min ago" },
  { icon: UserPlus, color: "text-sky-400 bg-sky-500/10 border-sky-500/20", title: "New teammate", desc: "Ava Lindberg joined the Data team.", time: "1 hr ago" },
  { icon: GitBranch, color: "text-amber-400 bg-amber-500/10 border-amber-500/20", title: "Deploy completed", desc: "v4.18.2 shipped to production.", time: "3 hr ago" },
  { icon: MessageCircle, color: "text-rose-400 bg-rose-500/10 border-rose-500/20", title: "Customer message", desc: "Acme Corp opened a feedback thread.", time: "5 hr ago" },
  { icon: Zap, color: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20", title: "Automation triggered", desc: "Churn alert sent to revenue ops.", time: "Yesterday" },
];

export function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="rounded-2xl glass p-6 shadow-soft"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold">Activity</h3>
          <p className="text-xs text-muted-foreground mt-0.5">Realtime workspace events</p>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Live
        </span>
      </div>
      <div className="relative space-y-5">
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.06 }}
            className="relative flex gap-4"
          >
            <div className={`relative h-9 w-9 rounded-xl border grid place-items-center shrink-0 ${e.color}`}>
              <e.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 pt-1">
              <div className="text-sm font-medium">{e.title}</div>
              <div className="text-xs text-muted-foreground">{e.desc}</div>
              <div className="text-[10px] text-muted-foreground mt-1">{e.time}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
