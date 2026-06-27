import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-border glass p-5", className)}>{children}</div>;
}

export function StatCard({
  icon: Icon, label, value, sub, accent = "primary",
}: {
  icon: any; label: string; value: ReactNode; sub?: ReactNode;
  accent?: "primary" | "success" | "warning" | "danger" | "secondary";
}) {
  const colorMap: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-danger",
  };
  const bgMap: Record<string, string> = {
    primary: "bg-primary/15",
    secondary: "bg-secondary/15",
    success: "bg-success/15",
    warning: "bg-warning/15",
    danger: "bg-danger/15",
  };
  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
          <div className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{value}</div>
          {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
        </div>
        <div className={cn("grid h-10 w-10 place-items-center rounded-xl", bgMap[accent])}>
          <Icon className={cn("h-5 w-5", colorMap[accent])} />
        </div>
      </div>
    </Card>
  );
}

export function Badge({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "success" | "warning" | "danger" | "info" }) {
  const map: Record<string, string> = {
    default: "bg-muted text-muted-foreground",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    danger: "bg-danger/15 text-danger",
    info: "bg-accent/15 text-accent",
  };
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", map[tone])}>{children}</span>;
}

export function riskTone(r: string): "danger" | "warning" | "info" | "success" {
  if (r === "Critical") return "danger";
  if (r === "High") return "warning";
  if (r === "Medium") return "info";
  return "success";
}
