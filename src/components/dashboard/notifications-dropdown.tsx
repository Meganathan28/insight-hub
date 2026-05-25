import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, CreditCard, MessageSquare, TrendingUp, UserPlus } from "lucide-react";

const items = [
  { icon: TrendingUp, color: "text-emerald-400", title: "Revenue milestone hit", desc: "MRR crossed $200K today.", time: "2m ago" },
  { icon: UserPlus, color: "text-violet-400", title: "32 new signups", desc: "Acquisition spike from Product Hunt.", time: "14m ago" },
  { icon: CreditCard, color: "text-amber-400", title: "Payment failed", desc: "Acme Inc. card declined.", time: "1h ago" },
  { icon: MessageSquare, color: "text-sky-400", title: "New support thread", desc: "Priya replied to ticket #4821.", time: "3h ago" },
];

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative h-10 w-10 grid place-items-center rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition">
        <Bell className="h-4 w-4" />
        <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-gradient-primary shadow-glow" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[340px] glass-strong border-white/10 p-0">
        <div className="px-4 py-3 flex items-center justify-between">
          <DropdownMenuLabel className="p-0 text-sm">Notifications</DropdownMenuLabel>
          <button className="text-[11px] text-primary hover:underline">Mark all read</button>
        </div>
        <DropdownMenuSeparator />
        <div className="max-h-[360px] overflow-y-auto py-1">
          {items.map((n, i) => (
            <DropdownMenuItem key={i} className="px-4 py-3 gap-3 cursor-pointer focus:bg-white/5">
              <div className={`h-9 w-9 rounded-lg bg-white/[0.04] border border-white/[0.06] grid place-items-center shrink-0 ${n.color}`}>
                <n.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium truncate">{n.title}</div>
                <div className="text-xs text-muted-foreground truncate">{n.desc}</div>
              </div>
              <div className="text-[10px] text-muted-foreground shrink-0">{n.time}</div>
            </DropdownMenuItem>
          ))}
        </div>
        <DropdownMenuSeparator />
        <div className="p-2">
          <button className="w-full text-xs text-center py-2 rounded-lg hover:bg-white/5 text-muted-foreground">View all activity</button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
