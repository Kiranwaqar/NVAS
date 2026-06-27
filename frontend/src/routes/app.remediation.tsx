import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Wrench, CheckCircle2, Clock, Download, RefreshCw, ExternalLink, ShieldCheck } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { toast } from "sonner";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, StatCard, Badge, riskTone } from "@/components/nvas/ui";
import { Counter } from "@/components/nvas/counter";
import { REMEDIATIONS, PATCH_PROGRESS } from "@/lib/nvas-data";
import { ChartHeader, tooltipStyle } from "./app.dashboard";

export const Route = createFileRoute("/app/remediation")({
  head: () => ({ meta: [{ title: "Remediation Center · Scanvas" }] }),
  component: RemediationPage,
});

function RemediationPage() {
  const [items, setItems] = useState(REMEDIATIONS);

  const applied = items.filter((r) => r.patchStatus === "Applied").length;
  const verified = items.filter((r) => r.patchStatus === "Verified").length;
  const pending = items.filter((r) => r.patchStatus === "Pending" || r.patchStatus === "Scheduled").length;
  const compliance = Math.round(items.reduce((s, r) => s + r.compliance, 0) / items.length);

  function setStatus(id: string, status: typeof items[number]["patchStatus"]) {
    setItems((prev) => prev.map((r) => r.id === id ? { ...r, patchStatus: status } : r));
    if (status === "Verified") toast.success("Patch verified — risk reduced");
    if (status === "Applied") toast("Patch applied — rescan queued");
  }

  return (
    <div>
      <PageHeader
        title="Remediation Center"
        subtitle="Prioritised patches, vendor advisories and verification rescans."
        action={
          <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10">
            <Download className="h-4 w-4" /> Export Plan
          </button>
        }
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard icon={Wrench} label="Open Patches" value={<Counter to={pending} />} accent="warning" />
        <StatCard icon={CheckCircle2} label="Applied" value={<Counter to={applied} />} accent="secondary" sub="Awaiting verification" />
        <StatCard icon={ShieldCheck} label="Verified" value={<Counter to={verified} />} accent="success" />
        <StatCard icon={Clock} label="Compliance" value={<Counter to={compliance} suffix="%" />} accent="primary" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card>
          <ChartHeader title="Patch Progress" subtitle="Applied vs verified over time" />
          <div className="h-60">
            <ResponsiveContainer>
              <AreaChart data={PATCH_PROGRESS}>
                <defs>
                  <linearGradient id="pa" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.4} /><stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} /></linearGradient>
                  <linearGradient id="pv" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-success)" stopOpacity={0.4} /><stop offset="100%" stopColor="var(--color-success)" stopOpacity={0} /></linearGradient>
                </defs>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area dataKey="applied" stroke="var(--color-primary)" strokeWidth={2} fill="url(#pa)" />
                <Area dataKey="verified" stroke="var(--color-success)" strokeWidth={2} fill="url(#pv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <ChartHeader title="Estimated Risk Reduction" subtitle="Per pending remediation" />
          <div className="h-60">
            <ResponsiveContainer>
              <BarChart data={items.slice(0, 10).map((r) => ({ name: r.cve.slice(-5), value: r.riskReduction }))}>
                <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="var(--color-muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="var(--color-success)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="mt-4 overflow-hidden p-0">
        <div className="border-b border-border px-4 py-3 text-sm font-semibold">Recommended Patches</div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-sm">
            <thead className="bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
              <tr>{["CVE", "Asset", "Patch", "Priority", "Risk ↓", "ETA", "Status", "Assigned", "Actions"].map((c) => <th key={c} className="px-4 py-3">{c}</th>)}</tr>
            </thead>
            <tbody>
              {items.map((r) => (
                <tr key={r.id} className="border-t border-border hover:bg-foreground/5">
                  <td className="px-4 py-3 font-mono text-primary">{r.cve}</td>
                  <td className="px-4 py-3 font-medium">{r.asset}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.patch}</td>
                  <td className="px-4 py-3"><Badge tone={riskTone(r.priority)}>{r.priority}</Badge></td>
                  <td className="px-4 py-3 font-mono text-success">-{r.riskReduction}%</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.estimatedTime}</td>
                  <td className="px-4 py-3">
                    <Badge tone={r.patchStatus === "Verified" ? "success" : r.patchStatus === "Applied" ? "info" : r.patchStatus === "Failed" ? "danger" : "warning"}>
                      {r.patchStatus}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-xs">{r.assigned}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <a title="Advisory" href="#" className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10"><ExternalLink className="h-3.5 w-3.5" /></a>
                      <button title="Apply Patch" onClick={() => setStatus(r.id, "Applied")} className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10"><Download className="h-3.5 w-3.5" /></button>
                      <button title="Launch Rescan" onClick={() => { toast("Verification scan launched"); setTimeout(() => setStatus(r.id, "Verified"), 1200); }} className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10"><RefreshCw className="h-3.5 w-3.5" /></button>
                      <button title="Mark Verified" onClick={() => setStatus(r.id, "Verified")} className="grid h-8 w-8 place-items-center rounded-lg border border-border text-success hover:bg-success/10"><CheckCircle2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
