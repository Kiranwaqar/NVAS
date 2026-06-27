import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Cpu, HardDrive, Network, ShieldCheck, Wifi, Package, Brain, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, Badge, riskTone } from "@/components/nvas/ui";
import { assetsAPI } from "@/lib/api";
import { vulnsByAsset } from "@/lib/nvas-data";

export const Route = createFileRoute("/app/assets/$id")({
  head: () => ({ meta: [{ title: "Asset Details · Scanvas" }] }),
  component: AssetDetail,
});

const SOFTWARE = [
  { name: "OpenSSL", v: "3.0.7", patched: false },
  { name: "nginx", v: "1.24.0", patched: true },
  { name: "OpenSSH", v: "9.0p1", patched: true },
  { name: "Python", v: "3.11.4", patched: true },
  { name: "curl", v: "8.1.2", patched: false },
];

function AssetDetail() {
  const { id } = Route.useParams();
  const [asset, setAsset] = useState<any | null>(null);
  const [ports, setPorts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const assetData = await assetsAPI.getById(id);
        if (!assetData || assetData.message) {
          throw new Error(assetData?.message || "Asset not found");
        }
        setAsset(assetData);
        const portData = await assetsAPI.getPorts(id);
        setPorts(portData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load asset");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return <div className="p-6 text-sm text-muted-foreground">Loading asset details…</div>;
  }

  if (error || !asset) {
    throw notFound();
  }

  const vulns = vulnsByAsset(asset.id);
  const score = asset.host_status === "up" ? 62 : asset.host_status === "down" ? 18 : 42;
  const patched = vulns.filter((v) => v.status === "Fixed" || v.status === "Verified").length;
  const patchPct = vulns.length ? Math.round((patched / vulns.length) * 100) : 100;

  return (
    <div>
      <Link to="/app/assets" className="mb-4 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to assets
      </Link>
      <PageHeader
        title={asset.hostname}
        subtitle={`${asset.ip_address} · ${asset.vendor} · ${asset.os}`}
        action={<Badge tone={riskTone(asset.risk ?? "Low")}>{asset.risk ?? "Unknown"}</Badge>}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <InfoCard icon={Cpu} label="Operating System" value={asset.os} />
        <InfoCard icon={HardDrive} label="Vendor" value={asset.vendor} />
        <InfoCard icon={Network} label="MAC Address" value={<span className="font-mono">{asset.mac_address}</span>} />
        <InfoCard icon={Wifi} label="Status" value={<Badge tone={asset.host_status === "up" ? "success" : "default"}>{asset.host_status ?? "unknown"}</Badge>} />
        <InfoCard icon={ShieldCheck} label="Last Scan" value={asset.last_seen ? new Date(asset.last_seen).toLocaleString() : "—"} />
        <Card>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Asset Risk Score</div>
          <div className="mt-2 flex items-end gap-2">
            <div className="text-4xl font-bold">{score}</div>
            <div className="pb-1 text-xs text-muted-foreground">/ 100</div>
          </div>
          <div className="mt-3 h-2 w-full rounded-full bg-muted">
            <div className="h-full rounded-full" style={{ width: `${score}%`, background: "var(--gradient-cyber)" }} />
          </div>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <div className="mb-4 text-sm font-semibold">Open Ports & Services</div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] text-sm">
              <thead className="text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <tr><th className="py-2">Port</th><th>Protocol</th><th>Service</th><th>State</th><th>Version</th></tr>
              </thead>
              <tbody>
                {ports.map((p, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="py-3 font-mono">{p.port}</td>
                    <td>{p.protocol}</td>
                    <td className="font-medium">{p.service}</td>
                    <td><Badge tone="success">{p.state}</Badge></td>
                    <td className="text-muted-foreground">{p.version}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><Package className="h-4 w-4 text-accent" /> Installed Software</div>
          <ul className="space-y-2 text-sm">
            {SOFTWARE.map((s) => (
              <li key={s.name} className="flex items-center justify-between rounded-lg border border-border bg-foreground/5 px-3 py-2">
                <div>
                  <div className="font-medium">{s.name}</div>
                  <div className="font-mono text-xs text-muted-foreground">{s.v}</div>
                </div>
                <Badge tone={s.patched ? "success" : "warning"}>{s.patched ? "Patched" : "Outdated"}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="mt-4 overflow-hidden p-0">
        <div className="border-b border-border px-4 py-3 text-sm font-semibold">Associated Vulnerabilities ({vulns.length})</div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-sm">
            <thead className="bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
              <tr>{["CVE", "CVSS", "AI Risk", "Severity", "Vendor / Product", "Status"].map((c) => <th key={c} className="px-4 py-3">{c}</th>)}</tr>
            </thead>
            <tbody>
              {vulns.length === 0 ? (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No vulnerabilities detected on this asset.</td></tr>
              ) : vulns.map((v) => (
                <tr key={v.id} className="border-t border-border hover:bg-foreground/5">
                  <td className="px-4 py-3 font-mono text-primary">{v.cve}</td>
                  <td className="px-4 py-3 font-mono">{v.cvss.toFixed(1)}</td>
                  <td className="px-4 py-3 font-mono">{v.aiRisk}</td>
                  <td className="px-4 py-3"><Badge tone={riskTone(v.severity)}>{v.severity}</Badge></td>
                  <td className="px-4 py-3 text-muted-foreground">{v.vendor} · {v.product}</td>
                  <td className="px-4 py-3"><Badge tone={v.status === "Verified" ? "success" : v.status === "Open" ? "danger" : "warning"}>{v.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <Card>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold"><Wrench className="h-4 w-4 text-success" /> Patch Status</div>
          <div className="text-3xl font-bold">{patchPct}%</div>
          <div className="text-xs text-muted-foreground">{patched} of {vulns.length} findings remediated</div>
          <div className="mt-3 h-2 w-full rounded-full bg-muted">
            <div className="h-full rounded-full bg-success" style={{ width: `${patchPct}%` }} />
          </div>
        </Card>

        <Card className="lg:col-span-2">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold"><Brain className="h-4 w-4 text-primary" /> AI Risk Explanation</div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This asset's composite score of <b className="text-foreground">{score}</b> reflects {vulns.length} active findings,
            an OS fingerprint of <b className="text-foreground">{a.os}</b>, public exposure across {a.openPorts.length} listening
            services, and weighted threat-intel signals for the affected products. {a.risk === "Critical" || a.risk === "High"
              ? "Prioritise immediate patching and isolate from untrusted networks until verified."
              : "Maintain current cadence and monitor for new advisories."}
          </p>
        </Card>
      </div>

      <Card className="mt-4">
        <div className="mb-4 text-sm font-semibold">Security Timeline</div>
        <ol className="relative ml-3 space-y-4 border-l border-border pl-5 text-sm">
          {[
            { t: "2 h ago", c: "Vulnerability scan completed", tone: "success" as const },
            { t: "6 h ago", c: "New port detected: 8080", tone: "warning" as const },
            { t: "1 d ago", c: "AI risk recalculated after EPSS update", tone: "info" as const },
            { t: "2 d ago", c: "Patch applied for CVE-2024-3094", tone: "success" as const },
            { t: "3 d ago", c: "OS fingerprint updated", tone: "info" as const },
            { t: "1 w ago", c: "Asset added to inventory", tone: "default" as const },
          ].map((e, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-primary)" }} />
              <div className="text-xs text-muted-foreground">{e.t}</div>
              <div>{e.c}</div>
            </li>
          ))}
        </ol>
      </Card>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: any; label: string; value: any }) {
  return (
    <Card>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-accent" /> {label}
      </div>
      <div className="mt-2 text-base font-semibold">{value}</div>
    </Card>
  );
}
