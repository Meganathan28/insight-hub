import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const team = [
  { name: "Sarah Chen", role: "Product Lead", avatar: "SC", color: "from-violet-500 to-fuchsia-500", status: "online" },
  { name: "Marcus Wei", role: "Engineering", avatar: "MW", color: "from-sky-500 to-cyan-500", status: "online" },
  { name: "Priya Patel", role: "Design", avatar: "PP", color: "from-emerald-500 to-teal-500", status: "away" },
  { name: "Jordan Reyes", role: "Growth", avatar: "JR", color: "from-amber-500 to-rose-500", status: "offline" },
  { name: "Ava Lindberg", role: "Data Science", avatar: "AL", color: "from-rose-500 to-pink-500", status: "online" },
];

const statusDot: Record<string, string> = {
  online: "bg-emerald-400",
  away: "bg-amber-400",
  offline: "bg-zinc-500",
};

export function TeamMembers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.6 }}
      className="rounded-2xl glass p-6 shadow-soft"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-sm font-semibold">Team</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{team.length} members active</p>
        </div>
        <button className="text-xs px-3 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition">
          Invite
        </button>
      </div>
      <div className="space-y-3">
        {team.map((m) => (
          <div key={m.name} className="flex items-center gap-3 group hover:bg-white/[0.03] -mx-2 px-2 py-2 rounded-lg transition">
            <div className="relative">
              <div className={cn("h-9 w-9 rounded-full bg-gradient-to-br grid place-items-center text-[11px] font-semibold text-white", m.color)}>
                {m.avatar}
              </div>
              <span className={cn("absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-background", statusDot[m.status])} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">{m.name}</div>
              <div className="text-xs text-muted-foreground truncate">{m.role}</div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 transition text-[11px] text-primary hover:underline">Message</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
