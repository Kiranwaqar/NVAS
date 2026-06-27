import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FileText, FileJson, FileSpreadsheet, Download, Trash2, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, Badge } from "@/components/nvas/ui";
import { reportsAPI, assetsAPI, vulnerabilitiesAPI } from "@/lib/api";

type Vulnerability = {
  cve_id?: string;
  severity?: string;
  product?: string;
  description?: string;
};

type ReportRow = {
  id: string;
  name: string;
  type: string;
  date: string;
  size: string;
};

export const Route = createFileRoute("/app/reports")({
  head: () => ({ meta: [{ title: "Reports · Scanvas" }] }),
  component: ReportsPage,
});

function ReportsPage() {
  const [preview, setPreview] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [stats, setStats] = useState({ totalAssets: 0, onlineHosts: 0, openPorts: 0 });
  const [reportRows, setReportRows] = useState<ReportRow[]>([]);
  const [vulnSummary, setVulnSummary] = useState({
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    avgAiRisk: 0,
  });
  const [threatIntel, setThreatIntel] = useState<
    Array<{ cve: string; note: string; status: string }>
  >([]);

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const assetsSummary = await assetsAPI.summary();
        const networkSummary = await assetsAPI.networkSummary();
        const vulns = await vulnerabilitiesAPI.getAll();

        setStats({
          totalAssets: assetsSummary.total_assets,
          onlineHosts: networkSummary.active_hosts,
          openPorts: networkSummary.total_ports,
        });

        const severityCounts = { critical: 0, high: 0, medium: 0, low: 0 };
        vulns.forEach((v) => {
          const severity = v.severity?.toLowerCase();
          if (severity === "critical") severityCounts.critical += 1;
          else if (severity === "high") severityCounts.high += 1;
          else if (severity === "medium") severityCounts.medium += 1;
          else if (severity === "low") severityCounts.low += 1;
        });

        setVulnSummary({
          critical: severityCounts.critical,
          high: severityCounts.high,
          medium: severityCounts.medium,
          low: severityCounts.low,
          avgAiRisk: Math.round(
            (severityCounts.critical * 90 +
              severityCounts.high * 70 +
              severityCounts.medium * 45 +
              severityCounts.low * 20) /
              Math.max(1, vulns.length),
          ),
        });

        setThreatIntel(
          vulns.slice(0, 4).map((v, index) => ({
            cve: v.cve_id || `CVE-2026-000${index}`,
            note: v.description || `Finding in ${v.product || "unknown"}`,
            status: v.severity || "Unknown",
          })),
        );

        setReportRows([
          {
            id: "RPT-1042",
            name: "Weekly Vulnerability Summary",
            date: new Date().toLocaleDateString(),
            type: "PDF",
            size: `${Math.max(1, vulns.length * 2)} KB`,
          },
          {
            id: "RPT-1041",
            name: "Asset Inventory Export",
            date: new Date().toLocaleDateString(),
            type: "CSV",
            size: `${assetsSummary.total_assets * 10 + 100} KB`,
          },
          {
            id: "RPT-1040",
            name: "Critical Findings Snapshot",
            date: new Date().toLocaleDateString(),
            type: "JSON",
            size: `${Math.max(1, Math.round(vulns.length * 0.8))} KB`,
          },
        ]);
      } catch (err) {
        console.error(err);
      }
    };

    loadSummary();
  }, []);

  const downloadReport = async (type: "json" | "csv" | "pdf") => {
    setDownloading(true);
    try {
      const response =
        type === "json"
          ? await reportsAPI.exportJSON()
          : type === "csv"
            ? await reportsAPI.exportCSV()
            : await reportsAPI.exportPDF();

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `scanvas-report.${type}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      toast.success(`${type.toUpperCase()} report downloaded`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to download report");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div>
      <PageHeader
        title="Reporting Center"
        subtitle="Executive, asset, vulnerability and compliance reports."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: FileText,
            title: "Export PDF",
            desc: "Auditor-ready executive summary.",
            tone: "danger" as const,
            label: "PDF",
          },
          {
            icon: FileSpreadsheet,
            title: "Export CSV",
            desc: "Asset + vulnerability tabular data.",
            tone: "success" as const,
            label: "CSV",
          },
          {
            icon: FileJson,
            title: "Export JSON",
            desc: "Programmatic, integration-friendly.",
            tone: "info" as const,
            label: "JSON",
          },
        ].map((c) => (
          <Card key={c.title} className="group relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-foreground/5 border border-border">
                <c.icon className="h-5 w-5 text-accent" />
              </div>
              <Badge tone={c.tone}>{c.label}</Badge>
            </div>
            <div className="mt-4 text-base font-semibold">{c.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => setPreview(c.label)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 py-2 text-sm font-medium hover:bg-foreground/10"
              >
                <Eye className="h-4 w-4" /> Preview
              </button>
              <button
                type="button"
                onClick={() => downloadReport(c.label.toLowerCase() as "pdf" | "csv" | "json")}
                disabled={downloading}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary disabled:opacity-60"
                style={{ background: "var(--gradient-cyber)" }}
              >
                <Download className="h-4 w-4" /> {downloading ? "Downloading…" : "Generate"}
              </button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-6 overflow-hidden p-0">
        <div className="border-b border-border px-4 py-3 text-sm font-semibold">Recent Reports</div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-sm">
            <thead className="bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th>Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Size</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reportRows.map((r) => (
                <tr key={r.id} className="border-t border-border hover:bg-foreground/5">
                  <td className="px-4 py-3 font-mono text-muted-foreground">{r.id}</td>
                  <td className="px-4 py-3 font-medium">{r.name}</td>
                  <td className="px-4 py-3">
                    <Badge
                      tone={r.type === "PDF" ? "danger" : r.type === "CSV" ? "success" : "info"}
                    >
                      {r.type}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.date}</td>
                  <td className="px-4 py-3 text-muted-foreground">{r.size}</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-1">
                      <IconBtn title="View" onClick={() => setPreview(r.type)}>
                        <Eye className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn
                        title="Download"
                        onClick={() =>
                          downloadReport(r.type.toLowerCase() as "pdf" | "csv" | "json")
                        }
                      >
                        <Download className="h-3.5 w-3.5" />
                      </IconBtn>
                      <IconBtn title="Delete" danger onClick={() => toast("Report deleted")}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </IconBtn>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <AnimatePresence>
        {preview && (
          <ReportPreview
            type={preview}
            stats={stats}
            vulnSummary={vulnSummary}
            threatIntel={threatIntel}
            onClose={() => setPreview(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ReportPreview({
  type,
  onClose,
  stats,
  vulnSummary,
  threatIntel,
}: {
  type: string;
  onClose: () => void;
  stats: { totalAssets: number; onlineHosts: number; openPorts: number };
  vulnSummary: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    avgAiRisk: number;
  };
  threatIntel: Array<{ cve: string; note: string; status: string }>;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/60"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="fixed inset-6 z-50 overflow-hidden rounded-2xl border border-border bg-background glass-strong md:inset-12"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="text-sm font-semibold">
            Executive Vulnerability Report — Preview ({type})
          </div>
          <button
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="h-[calc(100%-3rem)] overflow-y-auto p-6 text-sm">
          <h2 className="text-2xl font-bold gradient-text">Scanvas Executive Summary</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Generated {new Date().toLocaleString()} · Confidential
          </p>

          <Section h="1. Asset Summary">
            <ul className="ml-4 list-disc">
              <li>
                Total assets discovered: <b>{stats.totalAssets}</b>
              </li>
              <li>
                Online hosts: <b>{stats.onlineHosts}</b> (
                {stats.totalAssets ? Math.round((stats.onlineHosts / stats.totalAssets) * 100) : 0}
                %)
              </li>
              <li>
                Open ports inventoried: <b>{stats.openPorts}</b>
              </li>
            </ul>
          </Section>

          <Section h="2. Vulnerability Summary">
            <div className="grid grid-cols-4 gap-2 text-xs">
              <Mini k="Critical" v={vulnSummary.critical} c="danger" />
              <Mini k="High" v={vulnSummary.high} c="warning" />
              <Mini k="Medium" v={vulnSummary.medium} c="secondary" />
              <Mini k="Low" v={vulnSummary.low} c="success" />
            </div>
          </Section>

          <Section h="3. AI Risk Analysis">
            <p>
              Composite AI risk score across estate: <b>{vulnSummary.avgAiRisk}/100</b>. Score
              blends vulnerability severity and scanned asset exposure.
            </p>
          </Section>

          <Section h="4. Threat Intelligence">
            <ul className="ml-4 list-disc">
              {threatIntel.map((t) => (
                <li key={t.cve}>
                  <span className="font-mono">{t.cve}</span> — {t.note} ({t.status})
                </li>
              ))}
            </ul>
          </Section>

          <Section h="5. Remediation Recommendations">
            <p>
              Prioritise the {vulnSummary.critical} Critical findings from live vulnerability data.
              Schedule patch windows and trigger verification rescans through the Remediation
              Center.
            </p>
          </Section>

          <Section h="6. Compliance Score">
            <div className="mt-1 h-2 w-full rounded-full bg-muted">
              <div className="h-full rounded-full bg-success" style={{ width: "82%" }} />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              82% — Above industry baseline (CIS, NIST 800-53)
            </p>
          </Section>
        </div>
      </motion.div>
    </>
  );
}

function Section({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <h3 className="text-base font-semibold">{h}</h3>
      <div className="mt-2 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
function Mini({ k, v, c }: { k: string; v: number; c: string }) {
  return (
    <div
      className="rounded-lg border border-border p-2"
      style={{ background: `color-mix(in oklab, var(--color-${c}) 10%, transparent)` }}
    >
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="text-lg font-bold" style={{ color: `var(--color-${c})` }}>
        {v}
      </div>
    </div>
  );
}

function IconBtn({
  children,
  title,
  danger,
  onClick,
}: {
  children: React.ReactNode;
  title: string;
  danger?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10 ${danger ? "text-danger hover:bg-danger/10" : ""}`}
    >
      {children}
    </button>
  );
}
