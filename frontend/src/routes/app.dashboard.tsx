import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Server, Wifi, Network, ShieldAlert, Activity, CheckCircle2, GaugeCircle, HeartPulse, ArrowUpRight,
} from "lucide-react";
import {
  AreaChart, Area, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, Tooltip, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar as RRadar,
} from "recharts";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, StatCard, Badge, riskTone } from "@/components/nvas/ui";
import { Counter } from "@/components/nvas/counter";
import { assetsAPI } from "@/lib/api";
import { ASSETS, ASSETS_GROWTH, OS_DIST, RISK_DIST, SECURITY_RADAR, STATS, TOP_PORTS, TRAFFIC } from "@/lib/mock-data";
import { VULNS, THREAT_INTEL } from "@/lib/nvas-data";

export const Route = createFileRoute("/app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard · Scanvas" }] }),
  component: Dashboard,
});

const COLORS = ["var(--color-primary)", "var(--color-secondary)", "var(--color-accent)", "var(--color-success)", "var(--color-warning)"];

function Dashboard() {
  const [summary, setSummary] = useState<{ total_assets: number; active_assets: number } | null>(null);
  const [networkSummary, setNetworkSummary] = useState<{ total_assets: number; active_hosts: number; total_ports: number } | null>(null);
  const [summaryError, setSummaryError] = useState<string | null>(null);

  useEffect(() => {
    const loadSummary = async () => {
      setSummaryError(null);
      try {
        const [assetsSummary, networkSummaryData] = await Promise.all([
          assetsAPI.summary(),
          assetsAPI.networkSummary(),
        ]);
        setSummary(assetsSummary);
        setNetworkSummary(networkSummaryData);
      } catch (err) {
        setSummaryError(err instanceof Error ? err.message : "Failed to load dashboard summary");
      }
    };

    loadSummary();
  }, []);

  const totalAssets = summary?.total_assets ?? STATS.totalAssets;
  const onlineHosts = networkSummary?.active_hosts ?? STATS.onlineHosts;
  const openPorts = networkSummary?.total_ports ?? STATS.openPorts;

  return (
    <div>
      <PageHeader
        title="Security Operations Overview"
        subtitle={summaryError ?? "Real-time posture across discovered assets, exposures and active scans."}
        action={
          <Link to="/app/scan" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary" style={{ background: "var(--gradient-cyber)" }}>
            New Scan <ArrowUpRight className="h-4 w-4" />
          </Link>
        }
      />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          { icon: Server, label: "Total Assets", value: <Counter to={totalAssets} />, sub: "+38 last 24h", accent: "primary" as const },
          { icon: Wifi, label: "Online Hosts", value: <Counter to={onlineHosts} />, sub: "Active hosts on the network", accent: "success" as const },
          { icon: Network, label: "Open Ports", value: <Counter to={openPorts} />, sub: "Open service endpoints", accent: "secondary" as const },
          { icon: ShieldAlert, label: "Critical Vulns", value: <Counter to={STATS.criticalVulns} />, sub: "9 with public exploits", accent: "danger" as const },
          { icon: Activity, label: "Running Scans", value: <Counter to={STATS.runningScans} />, sub: "Across 4 subnets", accent: "warning" as const },
          { icon: CheckCircle2, label: "Completed Scans", value: <Counter to={STATS.completedScans} />, sub: "This month", accent: "success" as const },
          { icon: GaugeCircle, label: "Average Risk", value: <Counter to={STATS.avgRisk} />, sub: "Trending ↓", accent: "secondary" as const },
          { icon: HeartPulse, label: "Network Health", value: <Counter to={STATS.networkHealth} suffix="%" />, sub: "All systems nominal", accent: "success" as const },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
            <StatCard {...s} />
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <ChartHeader title="Asset Growth" subtitle="Tracked endpoints and completed scans" />
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ASSETS_GROWTH}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="assets" stroke="var(--color-primary)" strokeWidth={2} fill="url(#g1)" />
                <Area type="monotone" dataKey="scans" stroke="var(--color-secondary)" strokeWidth={2} fill="url(#g2)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Risk Distribution" subtitle="Severity across active findings" />
          <div className="h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={RISK_DIST} dataKey="value" innerRadius={55} outerRadius={90} paddingAngle={2}>
                  {RISK_DIST.map((d, i) => <Cell key={i} fill={d.color as string} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {RISK_DIST.map((d) => (
              <div key={d.name} className="flex items-center justify-between rounded-lg border border-border bg-foreground/5 px-2.5 py-1.5">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: d.color as string }} />{d.name}</span>
                <span className="font-mono">{d.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <ChartHeader title="Network Traffic" subtitle="Last 24 hours · inbound vs outbound (Mbps)" />
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={TRAFFIC}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="hour" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="inbound" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="outbound" stroke="var(--color-accent)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Security Score" subtitle="Coverage by domain" />
          <div className="h-64">
            <ResponsiveContainer>
              <RadarChart data={SECURITY_RADAR}>
                <PolarGrid stroke="var(--color-border)" />
                <PolarAngleAxis dataKey="area" tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }} />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <RRadar dataKey="score" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.35} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card>
          <ChartHeader title="Operating Systems" subtitle="Distribution across inventory" />
          <div className="h-60">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={OS_DIST} dataKey="value" nameKey="name" outerRadius={90} label={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}>
                  {OS_DIST.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <ChartHeader title="Top Open Ports" subtitle="Most frequently exposed services" />
          <div className="h-60">
            <ResponsiveContainer>
              <BarChart data={TOP_PORTS}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="port" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]} fill="var(--color-secondary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <ChartHeader title="Recent Critical Findings" subtitle="High-priority hosts requiring action" />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead className="text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <tr><th className="py-2">Host</th><th>IP</th><th>OS</th><th>Risk</th><th>Status</th></tr>
              </thead>
              <tbody>
                {ASSETS.slice(0, 6).map((a) => (
                  <tr key={a.id} className="border-t border-border">
                    <td className="py-3 font-medium">{a.hostname}</td>
                    <td className="font-mono text-muted-foreground">{a.ip}</td>
                    <td className="text-muted-foreground">{a.os}</td>
                    <td><Badge tone={riskTone(a.risk)}>{a.risk}</Badge></td>
                    <td><Badge tone={a.status === "Online" ? "success" : "default"}>{a.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card>
          <ChartHeader title="Top Vulnerabilities" subtitle="By composite AI risk" />
          <ul className="space-y-2">
            {[...VULNS].sort((a, b) => b.aiRisk - a.aiRisk).slice(0, 5).map((v) => (
              <li key={v.id} className="flex items-center gap-3 rounded-lg border border-border bg-foreground/5 p-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-md bg-danger/15 text-xs font-bold text-danger">{v.aiRisk}</div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-xs text-primary">{v.cve}</div>
                  <div className="truncate text-xs text-muted-foreground">{v.vendor} · {v.product}</div>
                </div>
                <Badge tone={riskTone(v.severity)}>{v.severity}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <ChartHeader title="Threat Intelligence" subtitle="Latest enrichment" />
          <ul className="space-y-2">
            {THREAT_INTEL.slice(0, 5).map((t) => (
              <li key={t.cve} className="rounded-lg border border-border bg-foreground/5 p-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary">{t.cve}</span>
                  <Badge tone={t.status === "Weaponized" ? "danger" : "warning"}>{t.status}</Badge>
                </div>
                <div className="mt-1 text-xs text-muted-foreground truncate">{t.note}</div>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <ChartHeader title="Patch Compliance" subtitle="Across monitored estate" />
          <div className="mt-2 space-y-3 text-sm">
            {[
              { l: "Critical Patches", v: 71, c: "var(--color-danger)" },
              { l: "High Patches", v: 83, c: "var(--color-warning)" },
              { l: "All Severities", v: 64, c: "var(--color-primary)" },
              { l: "Verified Rescans", v: 58, c: "var(--color-success)" },
            ].map((r) => (
              <div key={r.l}>
                <div className="mb-1 flex justify-between text-xs"><span>{r.l}</span><span className="font-mono">{r.v}%</span></div>
                <div className="h-1.5 w-full rounded-full bg-muted"><div className="h-full rounded-full" style={{ width: `${r.v}%`, background: r.c }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export function ChartHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-4 flex items-start justify-between">
      <div>
        <div className="text-sm font-semibold">{title}</div>
        {subtitle && <div className="text-xs text-muted-foreground">{subtitle}</div>}
      </div>
    </div>
  );
}

export const tooltipStyle = {
  background: "var(--color-popover)",
  border: "1px solid var(--color-border)",
  borderRadius: 12,
  fontSize: 12,
  color: "var(--color-foreground)",
};
