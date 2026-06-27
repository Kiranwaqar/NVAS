import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Zap, Activity, ShieldAlert, ExternalLink } from "lucide-react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, StatCard, Badge } from "@/components/nvas/ui";
import { Counter } from "@/components/nvas/counter";
import { THREAT_INTEL, VULNS } from "@/lib/nvas-data";
import { ChartHeader, tooltipStyle } from "./app.dashboard";

export const Route = createFileRoute("/app/threat-intel")({
  head: () => ({ meta: [{ title: "Threat Intelligence · Scanvas" }] }),
  component: ThreatIntelPage,
});

function ThreatIntelPage() {
  const weaponised = THREAT_INTEL.filter((t) => t.status === "Weaponized").length;
  const epssAvg = (THREAT_INTEL.reduce((s, t) => s + t.epss, 0) / THREAT_INTEL.length);

  const trend = Array.from({ length: 14 }, (_, i) => ({
    d: `D-${13 - i}`, count: 3 + Math.round(Math.random() * 8 + i * 0.3),
  }));

  return (
    <div>
      <PageHeader title="Threat Intelligence" subtitle="Live enrichment from EPSS, ExploitDB, vendor feeds and NVD." />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon={Globe2} label="Tracked CVEs" value={<Counter to={VULNS.length + 270} />} accent="primary" />
        <StatCard icon={Zap} label="Weaponized" value={<Counter to={weaponised} />} accent="danger" sub="Active in-the-wild" />
        <StatCard icon={Activity} label="Avg EPSS" value={epssAvg.toFixed(3)} accent="warning" />
        <StatCard icon={ShieldAlert} label="Feed Updates / 24h" value={<Counter to={312} />} accent="secondary" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <ChartHeader title="New Exploits Disclosed" subtitle="Last 14 days" />
          <div className="h-56">
            <ResponsiveContainer>
              <LineChart data={trend}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="d" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line dataKey="count" stroke="var(--color-danger)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Feed Sources" />
          <ul className="space-y-2 text-sm">
            {[
              { n: "NVD / NIST", s: "Synced 4 min ago", c: "success" as const },
              { n: "FIRST EPSS", s: "Synced 11 min ago", c: "success" as const },
              { n: "ExploitDB", s: "Synced 1 h ago", c: "success" as const },
              { n: "CISA KEV", s: "Synced 2 h ago", c: "warning" as const },
              { n: "Vendor Advisories", s: "Synced 18 min ago", c: "success" as const },
            ].map((s) => (
              <li key={s.n} className="flex items-center justify-between rounded-xl border border-border bg-foreground/5 px-3 py-2">
                <div>
                  <div className="font-medium">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.s}</div>
                </div>
                <span className="h-2 w-2 rounded-full" style={{ background: `var(--color-${s.c})` }} />
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-4 overflow-hidden p-0">
        <div className="border-b border-border px-4 py-3 text-sm font-semibold">Recently Updated CVEs</div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
              <tr>{["CVE", "Vendor", "EPSS", "Status", "Updated", "Note", ""].map((c) => <th key={c} className="px-4 py-3">{c}</th>)}</tr>
            </thead>
            <tbody>
              {THREAT_INTEL.map((t) => (
                <tr key={t.cve} className="border-t border-border hover:bg-foreground/5">
                  <td className="px-4 py-3 font-mono text-primary">{t.cve}</td>
                  <td className="px-4 py-3">{t.vendor}</td>
                  <td className="px-4 py-3 font-mono">{t.epss.toFixed(3)}</td>
                  <td className="px-4 py-3"><Badge tone={t.status === "Weaponized" ? "danger" : t.status === "PoC" ? "warning" : "info"}>{t.status}</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">{t.updated}</td>
                  <td className="px-4 py-3 text-muted-foreground">{t.note}</td>
                  <td className="px-4 py-3"><a href="#" className="inline-flex items-center gap-1 text-xs text-primary hover:underline">View <ExternalLink className="h-3 w-3" /></a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
