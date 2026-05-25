import { Search, Bell, Command } from "lucide-react";
import { NotificationsDropdown } from "@/components/dashboard/notifications-dropdown";
import { ProfileMenu } from "@/components/dashboard/profile-menu";

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 glass-strong border-b border-white/[0.05] px-4 md:px-8 h-16 flex items-center gap-3 md:gap-4">
      <div className="md:hidden w-10" />
      <div className="flex-1 max-w-xl relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          placeholder="Search anything…"
          className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] pl-10 pr-16 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition"
        />
        <kbd className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-1 text-[10px] text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">
          <Command className="h-3 w-3" /> K
        </kbd>
      </div>
      <div className="flex items-center gap-2">
        <NotificationsDropdown />
        <ProfileMenu />
      </div>
    </header>
  );
}
