import { createFileRoute } from "@tanstack/react-router";
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Brain, TrendingUp, ActivitySquare } from "lucide-react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card } from "@/components/nvas/ui";
import { ASSETS_GROWTH, OS_DIST, TOP_PORTS, TRAFFIC } from "@/lib/mock-data";
import { ChartHeader, tooltipStyle } from "./app.dashboard";

export const Route = createFileRoute("/app/analytics")({
  head: () => ({ meta: [{ title: "Analytics · Scanvas" }] }),
  component: AnalyticsPage,
});

const COLORS = ["var(--color-primary)", "var(--color-secondary)", "var(--color-accent)", "var(--color-success)", "var(--color-warning)"];

const VENDORS = [
  { name: "Cisco", value: 28 }, { name: "Dell", value: 22 }, { name: "HP", value: 18 },
  { name: "Apple", value: 12 }, { name: "Ubiquiti", value: 9 }, { name: "Other", value: 11 },
];

const RISK_TREND = ASSETS_GROWTH.map((d, i) => ({ month: d.month, risk: 60 - i * 1.5 + Math.round(Math.sin(i) * 4) }));

const TOP_VULNS = [
  { cve: "CVE-2024-21413", count: 47 },
  { cve: "CVE-2024-3094", count: 38 },
  { cve: "CVE-2023-50164", count: 29 },
  { cve: "CVE-2024-1086", count: 22 },
  { cve: "CVE-2023-4863", count: 18 },
];

function AnalyticsPage() {
  return (
    <div>
      <PageHeader title="Analytics" subtitle="Deep-dive metrics, AI predictions and trend intelligence." />

      <div className="grid gap-4 md:grid-cols-3">
        <PredictionCard icon={Brain} title="AI Risk Forecast" value="↓ 12%" sub="Next 30 days projection" />
        <PredictionCard icon={TrendingUp} title="Monthly Threat Prediction" value="142" sub="Anticipated incidents" />
        <PredictionCard icon={ActivitySquare} title="Network Health Index" value="92 / 100" sub="Stable · trending up" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Card>
          <ChartHeader title="Assets Over Time" />
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={ASSETS_GROWTH}>
                <defs>
                  <linearGradient id="aa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area dataKey="assets" stroke="var(--color-primary)" fill="url(#aa)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Vendor Distribution" />
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={VENDORS} dataKey="value" nameKey="name" outerRadius={95} innerRadius={50}>
                  {VENDORS.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="OS Distribution" />
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={OS_DIST}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="var(--color-accent)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Risk Trend" subtitle="Average risk score over time" />
          <div className="h-64">
            <ResponsiveContainer>
              <LineChart data={RISK_TREND}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line dataKey="risk" stroke="var(--color-warning)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Top Vulnerabilities" />
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={TOP_VULNS} layout="vertical">
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis type="number" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis dataKey="cve" type="category" stroke="var(--color-muted-foreground)" fontSize={11} width={120} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="count" radius={[0, 8, 8, 0]} fill="var(--color-danger)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Port Usage" subtitle="Distribution of open service ports" />
          <div className="h-64">
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

      <Card className="mt-4">
        <ChartHeader title="Network Activity Heatmap" subtitle="Activity intensity by hour and day" />
        <Heatmap />
      </Card>
    </div>
  );
}

function PredictionCard({ icon: Icon, title, value, sub }: { icon: any; title: string; value: string; sub: string }) {
  return (
    <Card className="relative overflow-hidden">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
          <div className="mt-2 text-3xl font-bold gradient-text">{value}</div>
          <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
        </div>
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
    </Card>
  );
}

function Heatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  return (
    <div className="overflow-x-auto">
      <div className="inline-grid gap-1" style={{ gridTemplateColumns: `48px repeat(24, 1fr)` }}>
        <div />
        {hours.map((h) => <div key={h} className="text-center text-[10px] text-muted-foreground">{h}</div>)}
        {days.map((d) => (
          <>
            <div key={d} className="pr-2 text-right text-xs text-muted-foreground">{d}</div>
            {hours.map((h) => {
              const v = Math.random();
              return (
                <div key={`${d}-${h}`} className="aspect-square min-w-[18px] rounded" style={{ background: `color-mix(in oklab, var(--color-primary) ${Math.round(v * 90)}%, transparent)` }} title={`${d} ${h}:00 · ${Math.round(v * 100)}`} />
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}
