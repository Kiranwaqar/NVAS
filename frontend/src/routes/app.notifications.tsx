import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BellRing, CheckCheck, Filter, ShieldAlert, ServerCog, Globe2, Activity, Wrench } from "lucide-react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, Badge } from "@/components/nvas/ui";
import { NOTIFICATIONS, type Notification } from "@/lib/nvas-data";

export const Route = createFileRoute("/app/notifications")({
  head: () => ({ meta: [{ title: "Notifications · Scanvas" }] }),
  component: NotificationsPage,
});

const ICONS: Record<string, any> = {
  Scan: Activity, Vulnerability: ShieldAlert, Asset: ServerCog, Threat: Globe2, Patch: Wrench,
};

function NotificationsPage() {
  const [items, setItems] = useState<Notification[]>(NOTIFICATIONS);
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? items : items.filter((n) => n.category === filter);
  const unread = items.filter((n) => !n.read).length;

  function markAll() { setItems(items.map((n) => ({ ...n, read: true }))); }
  function toggle(id: string) { setItems(items.map((n) => n.id === id ? { ...n, read: !n.read } : n)); }

  return (
    <div>
      <PageHeader
        title="Notification Center"
        subtitle={`${unread} unread · scans, vulnerabilities, threat intel and patch events.`}
        action={
          <button onClick={markAll} className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10">
            <CheckCheck className="h-4 w-4" /> Mark all read
          </button>
        }
      />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {["All", "Vulnerability", "Threat", "Scan", "Asset", "Patch"].map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={`rounded-lg border border-border px-2.5 py-1 text-xs ${filter === c ? "bg-primary/15 text-primary border-primary/40" : "hover:bg-foreground/10"}`}>{c}</button>
        ))}
      </div>

      <Card className="overflow-hidden p-0">
        <ul>
          {filtered.length === 0 && (
            <li className="grid place-items-center gap-2 py-16 text-sm text-muted-foreground">
              <BellRing className="h-8 w-8 opacity-50" /> No notifications in this category
            </li>
          )}
          {filtered.map((n) => {
            const Icon = ICONS[n.category];
            return (
              <li key={n.id} onClick={() => toggle(n.id)} className={`flex cursor-pointer items-start gap-3 border-b border-border px-4 py-3 transition hover:bg-foreground/5 ${!n.read ? "bg-primary/[0.04]" : ""}`}>
                <div className={`grid h-10 w-10 place-items-center rounded-xl bg-${n.severity}/15 text-${n.severity}`} style={{ background: `color-mix(in oklab, var(--color-${n.severity}) 15%, transparent)`, color: `var(--color-${n.severity})` }}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{n.title}</span>
                    {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  </div>
                  <div className="text-sm text-muted-foreground">{n.detail}</div>
                </div>
                <div className="text-right">
                  <Badge tone={n.severity === "danger" ? "danger" : n.severity === "warning" ? "warning" : n.severity === "success" ? "success" : "info"}>{n.category}</Badge>
                  <div className="mt-1 text-[11px] text-muted-foreground">{n.ts}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </div>
  );
}
