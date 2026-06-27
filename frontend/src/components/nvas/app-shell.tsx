import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Radar, ServerCog, Network, FileBarChart2, LineChart,
  Settings, User, LogOut, Search, Shield, HelpCircle, Sun, Moon, Menu,
  ShieldAlert, Brain, Wrench, Globe2, BellRing,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logo from "@/images/logo.svg";
import { getStoredUser, StoredUser } from "@/lib/api";

const NAV = [
  { to: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/app/scan", label: "Live Scan", icon: Radar },
  { to: "/app/assets", label: "Assets", icon: ServerCog },
  { to: "/app/vulnerabilities", label: "Vulnerabilities", icon: ShieldAlert },
  { to: "/app/risk", label: "AI Risk", icon: Brain },
  { to: "/app/remediation", label: "Remediation", icon: Wrench },
  { to: "/app/threat-intel", label: "Threat Intel", icon: Globe2 },
  { to: "/app/network", label: "Network", icon: Network },
  { to: "/app/reports", label: "Reports", icon: FileBarChart2 },
  { to: "/app/analytics", label: "Analytics", icon: LineChart },
  { to: "/app/notifications", label: "Notifications", icon: BellRing },
  { to: "/app/settings", label: "Settings", icon: Settings },
  { to: "/app/profile", label: "Profile", icon: User },
];

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 cyber-grid opacity-40" />
      <div className="pointer-events-none fixed -top-40 left-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]" style={{ background: "var(--color-primary)" }} />

      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className="lg:pl-64">
        <Topbar onMenu={() => setOpen(true)} />
        <main className="relative px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}

function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r border-border bg-sidebar transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
          <img src={logo} alt="Scanvas" className="h-9 w-9" />
          <div>
            <div className="text-sm font-bold tracking-tight">Scan<span className="text-accent">vas</span></div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Vulnerability Suite</div>
          </div>
        </div>
        <nav className="px-3 py-4">
          {NAV.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={cn(
                  "group relative mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "color-mix(in oklab, var(--color-primary) 18%, transparent)", boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--color-primary) 40%, transparent)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <Icon className={cn("relative h-4 w-4", active && "text-primary")} />
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-3">
          <Link to="/login" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent">
            <LogOut className="h-4 w-4" /> Logout
          </Link>
        </div>
      </aside>
    </>
  );
}

function Topbar({ onMenu }: { onMenu: () => void }) {
  const { theme, toggle } = useTheme();
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  const displayName = user?.fullName || user?.username || "Security Admin";
  const displayEmail = user?.email || user?.username || "admin@scanvas.io";
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border glass px-4 sm:px-6 lg:px-8">
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={onMenu}>
        <Menu className="h-5 w-5" />
      </Button>
      <div className="relative max-w-md flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          placeholder="Search assets, vulnerabilities, reports..."
          className="h-10 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none transition focus:border-primary/60 focus:bg-muted/60"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggle}>
          {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        <div className="ml-2 flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-2 py-1.5">
          <div className="grid h-7 w-7 place-items-center rounded-lg text-xs font-semibold text-white" style={{ background: "var(--gradient-cyber)" }}>
            {initials}
          </div>
          <div className="hidden text-left sm:block">
            <div className="text-xs font-semibold leading-tight">{displayName}</div>
            <div className="text-[10px] text-muted-foreground">{displayEmail}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
