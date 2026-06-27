import { createFileRoute } from "@tanstack/react-router";
import { Brain, TrendingDown, Zap, ShieldCheck, RefreshCw } from "lucide-react";
import { AreaChart, Area, LineChart, Line, RadialBarChart, RadialBar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, StatCard, Badge, riskTone } from "@/components/nvas/ui";
import { Counter } from "@/components/nvas/counter";
import { AI_RISK_TREND, VULNS, VULN_SUMMARY } from "@/lib/nvas-data";
import { ASSETS } from "@/lib/mock-data";
import { ChartHeader, tooltipStyle } from "./app.dashboard";

export const Route = createFileRoute("/app/risk")({
  head: () => ({ meta: [{ title: "AI Risk Analysis · Scanvas" }] }),
  component: RiskPage,
});

function RiskPage() {
  const topVulns = [...VULNS].sort((a, b) => b.aiRisk - a.aiRisk).slice(0, 6);
  const assetScores = ASSETS.map((a) => ({
    asset: a,
    score: Math.round(
      VULNS.filter((v) => v.assetId === a.id).reduce((s, v) => s + v.aiRisk, 0) /
      Math.max(1, VULNS.filter((v) => v.assetId === a.id).length),
    ),
    count: VULNS.filter((v) => v.assetId === a.id).length,
  })).sort((a, b) => b.score - a.score).slice(0, 6);

  const composite = VULN_SUMMARY.avgAiRisk;
  const radial = [{ name: "AI Risk", value: composite, fill: "var(--color-primary)" }];

  return (
    <div>
      <PageHeader
        title="AI Risk Analysis"
        subtitle="Composite scoring blends CVSS, EPSS, asset importance, exposure and threat intel."
        action={
          <div className="inline-flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-3 py-2 text-xs text-success">
            <RefreshCw className="h-3.5 w-3.5 animate-spin-slow" /> Recalculated 2 min ago
          </div>
        }
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon={Brain} label="AI Security Score" value={<><Counter to={100 - composite} />/100</>} accent="primary" sub="Higher is safer" />
        <StatCard icon={Zap} label="Composite Risk" value={<Counter to={composite} />} accent="danger" sub="0–100 weighted" />
        <StatCard icon={ShieldCheck} label="Network Health" value={<><Counter to={92} suffix="%" /></>} accent="success" />
        <StatCard icon={TrendingDown} label="30-Day Forecast" value="↓ 12%" accent="success" sub="Expected risk drop" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card>
          <ChartHeader title="Composite Risk Gauge" subtitle="Live weighted score" />
          <div className="h-60">
            <ResponsiveContainer>
              <RadialBarChart cx="50%" cy="55%" innerRadius="65%" outerRadius="100%" data={radial} startAngle={210} endAngle={-30}>
                <RadialBar dataKey="value" cornerRadius={20} background={{ fill: "color-mix(in oklab, var(--color-primary) 10%, transparent)" }} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="-mt-12 text-center">
            <div className="text-4xl font-bold gradient-text">{composite}</div>
            <div className="text-xs text-muted-foreground">Composite AI Risk</div>
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <ChartHeader title="Risk & Health Trend" subtitle="12-month composite movement" />
          <div className="h-60">
            <ResponsiveContainer>
              <AreaChart data={AI_RISK_TREND}>
                <defs>
                  <linearGradient id="rr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-danger)" stopOpacity={0.4} /><stop offset="100%" stopColor="var(--color-danger)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="hh" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-success)" stopOpacity={0.4} /><stop offset="100%" stopColor="var(--color-success)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area dataKey="composite" stroke="var(--color-danger)" strokeWidth={2} fill="url(#rr)" />
                <Area dataKey="health" stroke="var(--color-success)" strokeWidth={2} fill="url(#hh)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <ChartHeader title="Highest Risk Vulnerabilities" subtitle="Prioritised by composite AI score" />
          <ul className="space-y-2">
            {topVulns.map((v) => (
              <li key={v.id} className="flex items-center gap-3 rounded-xl border border-border bg-foreground/5 p-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-danger/15 text-danger font-bold">{v.aiRisk}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-primary">{v.cve}</div>
                  <div className="truncate text-sm">{v.description}</div>
                </div>
                <Badge tone={riskTone(v.severity)}>{v.severity}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <ChartHeader title="Highest Risk Assets" subtitle="Aggregated AI score per host" />
          <ul className="space-y-2">
            {assetScores.map((a) => (
              <li key={a.asset.id} className="flex items-center gap-3 rounded-xl border border-border bg-foreground/5 p-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-warning/15 text-warning font-bold">{a.score}</div>
                <div className="flex-1 min-w-0">
                  <div className="truncate text-sm font-medium">{a.asset.hostname}</div>
                  <div className="font-mono text-xs text-muted-foreground">{a.asset.ip} · {a.count} CVEs</div>
                </div>
                <Badge tone={riskTone(a.asset.risk)}>{a.asset.risk}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-4">
        <ChartHeader title="How the composite AI score works" />
        <div className="grid gap-3 md:grid-cols-5">
          {[
            { k: "CVSS", w: "35%", c: "Base technical severity (NVD)" },
            { k: "EPSS", w: "25%", c: "Probability of exploitation in 30 days" },
            { k: "Asset Importance", w: "20%", c: "Business criticality of the host" },
            { k: "Public Exposure", w: "10%", c: "Reachable from untrusted networks" },
            { k: "Threat Intel", w: "10%", c: "Active exploitation, weaponisation" },
          ].map((f) => (
            <div key={f.k} className="rounded-xl border border-border bg-foreground/5 p-3">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{f.k}</div>
              <div className="mt-1 text-xl font-bold gradient-text">{f.w}</div>
              <div className="mt-1 text-xs text-muted-foreground">{f.c}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mt-4">
        <ChartHeader title="Monthly Improvement" />
        <div className="h-56">
          <ResponsiveContainer>
            <LineChart data={AI_RISK_TREND}>
              <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line dataKey="health" stroke="var(--color-primary)" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
