import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, LogOut, Settings, User, Keyboard, Sun } from "lucide-react";

export function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2.5 pl-1 pr-2 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition">
        <div className="h-8 w-8 rounded-lg bg-gradient-accent grid place-items-center text-xs font-semibold text-primary-foreground">
          AM
        </div>
        <div className="hidden sm:block text-left leading-tight">
          <div className="text-xs font-semibold">Alex Morgan</div>
          <div className="text-[10px] text-muted-foreground">alex@lumen.io</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 glass-strong border-white/10">
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-accent grid place-items-center text-xs font-semibold text-primary-foreground">AM</div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Alex Morgan</div>
              <div className="text-[11px] text-muted-foreground">Workspace owner</div>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild><Link to="/settings"><User className="h-4 w-4" /> Profile</Link></DropdownMenuItem>
        <DropdownMenuItem asChild><Link to="/billing"><CreditCard className="h-4 w-4" /> Billing</Link></DropdownMenuItem>
        <DropdownMenuItem asChild><Link to="/settings"><Settings className="h-4 w-4" /> Settings</Link></DropdownMenuItem>
        <DropdownMenuItem><Keyboard className="h-4 w-4" /> Keyboard shortcuts</DropdownMenuItem>
        <DropdownMenuItem><Sun className="h-4 w-4" /> Appearance</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive"><LogOut className="h-4 w-4" /> Sign out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
