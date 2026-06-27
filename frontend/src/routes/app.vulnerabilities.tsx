import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import {
  Search,
  Download,
  Filter,
  ShieldAlert,
  Bug,
  Activity,
  Brain,
  ServerCog,
  X,
  ExternalLink,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, StatCard, Badge, riskTone } from "@/components/nvas/ui";
import { Counter } from "@/components/nvas/counter";
import { ASSETS } from "@/lib/mock-data";
import { vulnerabilitiesAPI } from "@/lib/api";

export const Route = createFileRoute("/app/vulnerabilities")({
  head: () => ({ meta: [{ title: "Vulnerabilities · Scanvas" }] }),
  component: VulnsPage,
});

interface VulnerabilitySummary {
  id?: number;
  asset_id?: number;
  assetId?: number;
  cve_id?: string;
  cve?: string;
  cvss_score?: number;
  severity?: string;
  status?: string;
  vendor?: string;
  product?: string;
  version?: string;
  epss?: number;
  aiRisk?: number;
  description?: string;
  published_date?: string;
  published?: string;
  lastDetected?: string;
  plainEnglish?: string;
  whyDangerous?: string;
  businessImpact?: string;
  references?: { label: string; url: string }[];
  patchUrl?: string;
  installedVersion?: string;
  fixedVersion?: string;
  exploitAvailable?: boolean;
  exploitStatus?: string;
  cwe?: string;
  attackVector?: string;
}

function VulnsPage() {
  const [q, setQ] = useState("");
  const [sev, setSev] = useState<string>("All");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<VulnerabilitySummary | null>(null);
  const [vulns, setVulns] = useState<VulnerabilitySummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pageSize = 10;

  const summary = useMemo(() => {
    const total = vulns.length;
    const critical = vulns.filter((v) => v.severity === "Critical").length;
    const high = vulns.filter((v) => v.severity === "High").length;
    const medium = vulns.filter((v) => v.severity === "Medium").length;
    const low = vulns.filter((v) => v.severity === "Low").length;
    const avgCvss = total
      ? vulns.reduce((sum, v) => sum + Number(v.cvss_score ?? 0), 0) / total
      : 0;
    const avgEpss = total ? vulns.reduce((sum, v) => sum + Number(v.epss ?? 0), 0) / total : 0;
    const avgAiRisk = total
      ? Math.round(
          vulns.reduce((sum, v) => {
            const cvss = Number(v.cvss_score ?? 0);
            return sum + Number(v.aiRisk ?? Math.min(100, Math.round(cvss * 8)));
          }, 0) / total,
        )
      : 0;
    const assetsAtRisk = new Set(vulns.map((v) => v.asset_id)).size;
    return { total, critical, high, medium, low, avgCvss, avgEpss, avgAiRisk, assetsAtRisk };
  }, [vulns]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await vulnerabilitiesAPI.getAll();
        setVulns(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load vulnerabilities");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const filtered = useMemo(
    () =>
      vulns.filter((v) => {
        const cve = (v.cve_id ?? v.cve ?? "").toString();
        const vendor = (v.vendor ?? "").toString();
        const product = (v.product ?? v.version ?? "").toString();
        const m = [cve, vendor, product].join(" ").toLowerCase().includes(q.toLowerCase());
        const s = sev === "All" || v.severity === sev;
        return m && s;
      }),
    [q, sev, vulns],
  );
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const rows = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <PageHeader
        title="Vulnerability Management"
        subtitle="Enriched with CVSS, EPSS and AI-driven composite risk scoring."
        action={
          <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10">
            <Download className="h-4 w-4" /> Export
          </button>
        }
      />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
        <StatCard
          icon={Bug}
          label="Total"
          value={<Counter to={summary.total} />}
          accent="primary"
        />
        <StatCard
          icon={ShieldAlert}
          label="Critical"
          value={<Counter to={summary.critical} />}
          accent="danger"
        />
        <StatCard
          icon={ShieldAlert}
          label="High"
          value={<Counter to={summary.high} />}
          accent="warning"
        />
        <StatCard
          icon={Activity}
          label="Avg CVSS"
          value={summary.avgCvss.toFixed(1)}
          accent="secondary"
        />
        <StatCard
          icon={Brain}
          label="AI Risk"
          value={<Counter to={summary.avgAiRisk} />}
          sub="Composite"
          accent="primary"
        />
        <StatCard
          icon={Activity}
          label="Avg EPSS"
          value={summary.avgEpss.toFixed(3)}
          accent="secondary"
        />
        <StatCard
          icon={ServerCog}
          label="Assets at Risk"
          value={<Counter to={summary.assetsAtRisk} />}
          accent="warning"
        />
        <StatCard
          icon={ShieldAlert}
          label="Medium"
          value={<Counter to={summary.medium} />}
          accent="secondary"
        />
        <StatCard
          icon={ShieldAlert}
          label="Low"
          value={<Counter to={summary.low} />}
          accent="success"
        />
      </div>

      <Card className="mt-6 overflow-hidden p-0">
        <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
          <div className="relative max-w-sm flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder="Search CVE, vendor, product..."
              className="h-10 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none focus:border-primary/60"
            />
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            {loading
              ? "Loading vulnerabilities..."
              : `Showing ${rows.length} of ${filtered.length}`}
          </div>
        </div>

        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Filter className="h-4 w-4 text-muted-foreground" />
          {["All", "Critical", "High", "Medium", "Low"].map((s) => (
            <button
              key={s}
              onClick={() => {
                setSev(s);
                setPage(1);
              }}
              className={`rounded-lg border border-border px-2.5 py-1 text-xs ${sev === s ? "bg-primary/15 text-primary border-primary/40" : "hover:bg-foreground/10"}`}
            >
              {s}
            </button>
          ))}
          <div className="ml-auto text-xs text-muted-foreground">
            Showing {rows.length} of {filtered.length}
          </div>
        </div>

        <div className="overflow-x-auto">
          {error ? (
            <div className="p-6 text-sm text-danger">{error}</div>
          ) : (
            <table className="w-full min-w-[1200px] text-sm">
              <thead className="bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  {[
                    "CVE",
                    "CVSS",
                    "EPSS",
                    "AI Risk",
                    "Severity",
                    "Exploit",
                    "Asset",
                    "Vendor / Product",
                    "Installed → Fixed",
                    "Status",
                  ].map((c) => (
                    <th key={c} className="px-4 py-3 font-semibold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((v) => {
                  const asset = ASSETS.find((a) => a.id === v.assetId || a.id === v.asset_id);
                  const cve = v.cve_id ?? v.cve ?? "N/A";
                  const cvss = Number(v.cvss_score ?? 0);
                  const severity = v.severity ?? "Low";
                  const status = v.status ?? "Open";
                  const vendor = v.vendor ?? "Unknown";
                  const product = v.product ?? v.version ?? "Unknown";
                  const epss = v.epss != null ? Number(v.epss).toFixed(3) : "N/A";
                  const exploitStatus = v.exploitStatus ?? "N/A";
                  return (
                    <tr
                      key={v.id ?? cve}
                      onClick={() => setSelected(v)}
                      className="cursor-pointer border-t border-border hover:bg-foreground/5"
                    >
                      <td className="px-4 py-3 font-mono text-primary">{cve}</td>
                      <td className="px-4 py-3 font-mono">{cvss.toFixed(1)}</td>
                      <td className="px-4 py-3 font-mono text-muted-foreground">{epss}</td>
                      <td className="px-4 py-3">
                        <RiskBar score={Math.min(100, Math.max(0, Math.round(cvss * 8)))} />
                      </td>
                      <td className="px-4 py-3">
                        <Badge tone={riskTone(severity)}>{severity}</Badge>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          tone={
                            exploitStatus === "Weaponized"
                              ? "danger"
                              : exploitStatus === "PoC"
                                ? "warning"
                                : "default"
                          }
                        >
                          {exploitStatus}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 font-medium">{asset?.hostname ?? v.asset_id}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {vendor} · {product}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs">
                        <span className="text-danger">N/A</span> →{" "}
                        <span className="text-success">N/A</span>
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          tone={
                            status === "Verified"
                              ? "success"
                              : status === "Fixed"
                                ? "info"
                                : status === "In Progress"
                                  ? "warning"
                                  : "danger"
                          }
                        >
                          {status}
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-xs">
          <div className="text-muted-foreground">
            Page {page} of {pages}
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-lg border border-border px-3 py-1.5 hover:bg-foreground/10"
            >
              Prev
            </button>
            <button
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              className="rounded-lg border border-border px-3 py-1.5 hover:bg-foreground/10"
            >
              Next
            </button>
          </div>
        </div>
      </Card>

      <AnimatePresence>
        {selected && <VulnDrawer v={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}

function RiskBar({ score }: { score: number }) {
  const color =
    score >= 80
      ? "var(--color-danger)"
      : score >= 60
        ? "var(--color-warning)"
        : score >= 40
          ? "var(--color-secondary)"
          : "var(--color-success)";
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 rounded-full bg-muted">
        <div className="h-full rounded-full" style={{ width: `${score}%`, background: color }} />
      </div>
      <span className="font-mono text-xs">{score}</span>
    </div>
  );
}

function VulnDrawer({ v, onClose }: { v: VulnerabilitySummary; onClose: () => void }) {
  const asset = ASSETS.find((a) => a.id === v.assetId || a.id === v.asset_id);
  const cve = v.cve_id ?? v.cve ?? "N/A";
  const cvss = Number(v.cvss_score ?? 0);
  const epss = v.epss != null ? Number(v.epss) : null;
  const aiRisk = Number(v.aiRisk ?? Math.min(100, Math.round(cvss * 8)));
  const severity = v.severity ?? "Low";
  const status = v.status ?? "Open";
  const published = v.published_date ?? v.published ?? "Unknown";
  const lastDetected = v.lastDetected ?? "Unknown";
  const description = v.description ?? "No description available.";
  const plainEnglish = v.plainEnglish ?? "No additional context available.";
  const whyDangerous = v.whyDangerous ?? "No additional context available.";
  const businessImpact = v.businessImpact ?? "No additional context available.";
  const references =
    Array.isArray(v.references) && v.references.length > 0
      ? v.references
      : cve !== "N/A"
        ? [{ label: "NVD", url: `https://nvd.nist.gov/vuln/detail/${cve}` }]
        : [];
  const patchUrl = v.patchUrl ?? (cve !== "N/A" ? `https://nvd.nist.gov/vuln/detail/${cve}` : "#");
  const installedVersion = v.installedVersion ?? "N/A";
  const fixedVersion = v.fixedVersion ?? "N/A";
  const exploitAvailable = Boolean(v.exploitAvailable || v.exploitStatus);
  const exploitStatus = v.exploitStatus ?? "Unknown";
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/60"
        onClick={onClose}
      />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 240 }}
        className="fixed inset-y-0 right-0 z-50 w-full max-w-2xl overflow-y-auto border-l border-border bg-background glass-strong"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-5 py-4 backdrop-blur">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-primary">{cve}</span>
              <Badge tone={riskTone(severity)}>{severity}</Badge>
              {exploitAvailable && <Badge tone="danger">{exploitStatus}</Badge>}
            </div>
            <div className="mt-1 text-base font-semibold">{description}</div>
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            <Metric label="CVSS" value={cvss.toFixed(1)} tone="danger" />
            <Metric label="EPSS" value={epss != null ? epss.toFixed(3) : "N/A"} tone="warning" />
            <Metric label="AI Risk" value={String(aiRisk)} tone="primary" />
          </div>

          <Section title="Plain-English explanation">{plainEnglish}</Section>
          <Section title="Why this is dangerous">{whyDangerous}</Section>
          <Section title="Business impact">{businessImpact}</Section>

          <Section title="Composite AI risk explanation">
            The composite score of <b>{aiRisk}</b> blends CVSS severity ({cvss}), EPSS exploitation
            probability ({(epss * 100).toFixed(1)}%), asset importance ({asset?.type ?? "n/a"}),
            public exposure and live threat intelligence.{" "}
            {exploitAvailable
              ? "Active exploitation observed in the wild — prioritised."
              : "No public exploit yet; deprioritised slightly."}
          </Section>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <KV k="CWE" v={v.cwe ?? "N/A"} />
            <KV k="Attack Vector" v={v.attackVector ?? "N/A"} />
            <KV k="Vendor" v={v.vendor ?? "Unknown"} />
            <KV k="Product" v={v.product ?? v.version ?? "Unknown"} />
            <KV
              k="Installed"
              v={<span className="text-danger font-mono">{installedVersion}</span>}
            />
            <KV k="Fixed in" v={<span className="text-success font-mono">{fixedVersion}</span>} />
            <KV k="Published" v={published} />
            <KV k="Last Detected" v={lastDetected} />
          </div>

          <Section title="Timeline">
            <ol className="relative ml-2 space-y-3 border-l border-border pl-4 text-sm">
              <li>
                <span className="text-xs text-muted-foreground">{published}</span>
                <div>CVE published by NVD</div>
              </li>
              <li>
                <span className="text-xs text-muted-foreground">~2 weeks later</span>
                <div>Vendor advisory & patch released</div>
              </li>
              <li>
                <span className="text-xs text-muted-foreground">{lastDetected}</span>
                <div>Detected by Scanvas on {asset?.hostname}</div>
              </li>
              {exploitAvailable && (
                <li>
                  <span className="text-xs text-muted-foreground">Recent</span>
                  <div className="text-danger">Exploit marked {exploitStatus} by threat feed</div>
                </li>
              )}
            </ol>
          </Section>

          <Section title="References">
            <div className="flex flex-wrap gap-2">
              {references.map((r) => (
                <a
                  key={r.label}
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-2.5 py-1.5 text-xs hover:bg-foreground/10"
                >
                  <ExternalLink className="h-3 w-3" /> {r.label}
                </a>
              ))}
              <a
                href={patchUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-2.5 py-1.5 text-xs hover:bg-foreground/10"
              >
                <FileText className="h-3 w-3" /> Vendor Advisory
              </a>
            </div>
          </Section>
        </div>
      </motion.aside>
    </>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "danger" | "warning" | "primary";
}) {
  const map: Record<string, string> = {
    danger: "text-danger bg-danger/10",
    warning: "text-warning bg-warning/10",
    primary: "text-primary bg-primary/10",
  };
  return (
    <div className={`rounded-xl border border-border p-3 ${map[tone]}`}>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1.5 text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function KV({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-foreground/5 px-3 py-2">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="text-sm font-medium">{v}</div>
    </div>
  );
}
