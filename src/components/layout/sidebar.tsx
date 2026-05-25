import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  Settings,
  Sparkles,
  Inbox,
  LifeBuoy,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "Customers", to: "/customers", icon: Users },
  { label: "Inbox", to: "/inbox", icon: Inbox },
  { label: "Billing", to: "/billing", icon: CreditCard },
  { label: "Settings", to: "/settings", icon: Settings },
];

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="flex-1 px-3 space-y-1">
      <div className="px-3 pb-2 pt-4 text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Workspace
      </div>
      {nav.map((item) => {
        const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={cn(
              "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
            )}
          >
            {active && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 shadow-glow"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <item.icon className="relative h-4 w-4" />
            <span className="relative">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5 px-5 pt-6 pb-5">
      <div className="relative h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
      </div>
      <div>
        <div className="text-sm font-semibold tracking-tight">Lumen</div>
        <div className="text-[10px] text-muted-foreground tracking-wider uppercase">Analytics Cloud</div>
      </div>
    </Link>
  );
}

function Footer() {
  return (
    <div className="p-3">
      <div className="glass rounded-2xl p-4">
        <div className="flex items-center gap-2 text-xs font-semibold">
          <LifeBuoy className="h-4 w-4 text-primary" />
          Pro plan
        </div>
        <p className="mt-1.5 text-[11px] text-muted-foreground leading-relaxed">
          You're using 64% of your monthly events.
        </p>
        <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div className="h-full w-[64%] bg-gradient-primary" />
        </div>
        <button className="mt-3 w-full rounded-lg bg-gradient-primary text-primary-foreground text-xs font-semibold py-2 hover:opacity-90 transition">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile trigger */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-40 glass-strong rounded-xl p-2.5"
        aria-label="Open menu"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Desktop */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-[260px] flex-col glass-strong border-r border-white/[0.06] z-30">
        <Brand />
        <NavList />
        <Footer />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 bg-background/70 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="md:hidden fixed inset-y-0 left-0 w-[280px] z-50 flex flex-col glass-strong border-r border-white/[0.06]"
            >
              <button onClick={() => setOpen(false)} className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/5">
                <X className="h-4 w-4" />
              </button>
              <Brand />
              <NavList onNavigate={() => setOpen(false)} />
              <Footer />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
