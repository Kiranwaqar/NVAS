import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Router, Server as ServerIcon, Smartphone, ShieldHalf, Cpu, HardDrive } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, Badge } from "@/components/nvas/ui";

export const Route = createFileRoute("/app/network")({
  head: () => ({ meta: [{ title: "Network Topology · Scanvas" }] }),
  component: NetworkPage,
});

type N = { id: string; type: "Server" | "Router" | "Switch" | "Client" | "IoT" | "Firewall"; x: number; y: number; risk: "Critical" | "High" | "Medium" | "Low" };

const NODES: N[] = [
  { id: "fw-1", type: "Firewall", x: 50, y: 12, risk: "Low" },
  { id: "rt-1", type: "Router", x: 50, y: 32, risk: "Low" },
  { id: "sw-1", type: "Switch", x: 25, y: 50, risk: "Medium" },
  { id: "sw-2", type: "Switch", x: 75, y: 50, risk: "Low" },
  { id: "srv-1", type: "Server", x: 12, y: 72, risk: "High" },
  { id: "srv-2", type: "Server", x: 28, y: 80, risk: "Critical" },
  { id: "cli-1", type: "Client", x: 42, y: 76, risk: "Low" },
  { id: "cli-2", type: "Client", x: 58, y: 82, risk: "Medium" },
  { id: "iot-1", type: "IoT", x: 72, y: 76, risk: "High" },
  { id: "iot-2", type: "IoT", x: 86, y: 70, risk: "Medium" },
];

const EDGES: [string, string][] = [
  ["fw-1", "rt-1"], ["rt-1", "sw-1"], ["rt-1", "sw-2"],
  ["sw-1", "srv-1"], ["sw-1", "srv-2"], ["sw-1", "cli-1"],
  ["sw-2", "cli-2"], ["sw-2", "iot-1"], ["sw-2", "iot-2"],
];

const ICONS = { Server: ServerIcon, Router: Router, Switch: HardDrive, Client: Cpu, IoT: Smartphone, Firewall: ShieldHalf };
const RISK_COLOR = { Critical: "var(--color-danger)", High: "var(--color-warning)", Medium: "var(--color-secondary)", Low: "var(--color-success)" } as const;

function NetworkPage() {
  const [zoom, setZoom] = useState(1);
  const [selected, setSelected] = useState<N | null>(NODES[5]);

  return (
    <div>
      <PageHeader title="Network Topology" subtitle="Interactive view of every discovered node, link and exposure." />

      <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
        <Card className="relative overflow-hidden p-0">
          <div className="absolute right-3 top-3 z-10 flex gap-1">
            <button onClick={() => setZoom((z) => Math.min(2, z + 0.1))} className="rounded-lg border border-border bg-background/70 px-3 py-1 text-xs">+</button>
            <button onClick={() => setZoom((z) => Math.max(0.6, z - 0.1))} className="rounded-lg border border-border bg-background/70 px-3 py-1 text-xs">−</button>
          </div>
          <div className="absolute inset-0 cyber-grid opacity-40" />
          <div className="relative aspect-[16/10] w-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              {EDGES.map(([a, b], i) => {
                const A = NODES.find((n) => n.id === a)!; const B = NODES.find((n) => n.id === b)!;
                return (
                  <g key={i}>
                    <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="var(--color-primary)" strokeOpacity="0.4" strokeWidth="0.3" />
                    <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="var(--color-accent)" strokeWidth="0.15" strokeDasharray="1 2">
                      <animate attributeName="stroke-dashoffset" values="0;-6" dur="2s" repeatCount="indefinite" />
                    </line>
                  </g>
                );
              })}
            </svg>
            <div className="absolute inset-0" style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}>
              {NODES.map((n) => {
                const Icon = ICONS[n.type];
                const isSelected = selected?.id === n.id;
                return (
                  <motion.button
                    key={n.id}
                    onClick={() => setSelected(n)}
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    style={{ left: `${n.x}%`, top: `${n.y}%`, color: RISK_COLOR[n.risk] }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  >
                    <span className="absolute inset-0 -m-3 rounded-full opacity-50 blur-md" style={{ background: RISK_COLOR[n.risk] }} />
                    <span className={`relative grid h-11 w-11 place-items-center rounded-xl border bg-background ${isSelected ? "ring-2 ring-primary" : ""}`} style={{ borderColor: RISK_COLOR[n.risk] }}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-foreground/80">
                      {n.id}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 border-t border-border px-4 py-3 text-[11px] text-muted-foreground">
            {(["Critical", "High", "Medium", "Low"] as const).map((r) => (
              <div key={r} className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{ background: RISK_COLOR[r] }} /> {r}
              </div>
            ))}
            <div className="ml-auto">{NODES.length} nodes · {EDGES.length} links</div>
          </div>
        </Card>

        <Card>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Selected node</div>
          {selected ? (
            <div className="mt-3">
              <div className="text-lg font-bold">{selected.id}</div>
              <div className="text-sm text-muted-foreground">{selected.type}</div>
              <div className="mt-3 flex gap-2">
                <Badge tone={selected.risk === "Critical" ? "danger" : selected.risk === "High" ? "warning" : selected.risk === "Medium" ? "info" : "success"}>{selected.risk} risk</Badge>
                <Badge tone="info">Active</Badge>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <Row k="Uptime" v="14d 6h" />
                <Row k="Bandwidth" v="148 Mbps" />
                <Row k="Linked nodes" v={String(EDGES.filter((e) => e.includes(selected.id)).length)} />
                <Row k="Open services" v="6" />
              </div>
            </div>
          ) : (
            <div className="mt-4 text-sm text-muted-foreground">Click a node to inspect.</div>
          )}
        </Card>
      </div>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-foreground/5 px-3 py-2">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-mono">{v}</span>
    </div>
  );
}
