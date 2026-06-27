import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Filter, Eye, RefreshCw, Trash2, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, Badge, riskTone } from "@/components/nvas/ui";
import { assetsAPI } from "@/lib/api";

export const Route = createFileRoute("/app/assets")({
  head: () => ({ meta: [{ title: "Assets · Scanvas" }] }),
  component: AssetsPage,
});

function AssetsPage() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [assets, setAssets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pageSize = 10;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const load = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = q.trim() ? await assetsAPI.search(q.trim()) : await assetsAPI.getAll();
          setAssets(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to load assets");
        } finally {
          setLoading(false);
        }
      };

      load();
    }, 250);

    return () => window.clearTimeout(timer);
  }, [q]);

  const pages = Math.max(1, Math.ceil(assets.length / pageSize));
  const rows = assets.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <PageHeader
        title="Asset Inventory"
        subtitle={loading ? "Loading assets..." : `${assets.length} discovered endpoints across monitored subnets`}
        action={
          <div className="flex gap-2">
            <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10">
              <Filter className="h-4 w-4" /> Filters
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10">
              <Download className="h-4 w-4" /> Export
            </button>
          </div>
        }
      />

      <Card className="overflow-hidden p-0">
        <div className="flex flex-wrap items-center gap-3 border-b border-border px-4 py-3">
          <div className="relative max-w-sm flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Search by IP, hostname, vendor, OS..."
              className="h-10 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none focus:border-primary/60"
            />
          </div>
          <div className="ml-auto text-xs text-muted-foreground">{loading ? "Loading assets..." : `Showing ${rows.length} of ${assets.length}`}</div>
        </div>

        <div className="overflow-x-auto">
          {error ? (
            <div className="p-6 text-sm text-danger">{error}</div>
          ) : (
            <table className="w-full min-w-[1000px] text-sm">
              <thead className="bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  {["IP", "Hostname", "MAC", "Vendor", "OS", "Risk", "Status", "Last Scan", "Actions"].map((c) => (
                    <th key={c} className="px-4 py-3 font-semibold">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((a) => (
                  <tr key={a.id} className="border-t border-border hover:bg-foreground/5">
                    <td className="px-4 py-3 font-mono">{a.ip_address}</td>
                    <td className="px-4 py-3 font-medium">{a.hostname}</td>
                    <td className="px-4 py-3 font-mono text-muted-foreground">{a.mac_address}</td>
                    <td className="px-4 py-3">{a.vendor}</td>
                    <td className="px-4 py-3 text-muted-foreground">{a.os}</td>
                    <td className="px-4 py-3"><Badge tone={riskTone(a.risk ?? "Low")}>{a.risk ?? "Unknown"}</Badge></td>
                    <td className="px-4 py-3"><Badge tone={a.host_status === "up" ? "success" : "default"}>{a.host_status ?? "unknown"}</Badge></td>
                    <td className="px-4 py-3 text-muted-foreground">{a.last_seen ? new Date(a.last_seen).toLocaleDateString() : "—"}</td>
                    <td className="px-4 py-3">
                      <div className="flex gap-1">
                        <Link to="/app/assets/$id" params={{ id: a.id }} className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10" title="View">
                          <Eye className="h-3.5 w-3.5" />
                        </Link>
                        <button className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10" title="Rescan">
                          <RefreshCw className="h-3.5 w-3.5" />
                        </button>
                        <button className="grid h-8 w-8 place-items-center rounded-lg border border-border text-danger hover:bg-danger/10" title="Delete">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-xs">
          <div className="text-muted-foreground">Page {page} of {pages}</div>
          <div className="flex gap-1">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="rounded-lg border border-border px-3 py-1.5 hover:bg-foreground/10">Prev</button>
            <button onClick={() => setPage((p) => Math.min(pages, p + 1))} className="rounded-lg border border-border px-3 py-1.5 hover:bg-foreground/10">Next</button>
          </div>
        </div>
      </Card>
    </div>
  );
}
