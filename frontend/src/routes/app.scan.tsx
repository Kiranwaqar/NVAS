import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Square, Target, Activity, Timer, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, StatCard } from "@/components/nvas/ui";
import { CyberBackground } from "@/components/nvas/cyber-background";
import { scanAPI } from "@/lib/api";

export const Route = createFileRoute("/app/scan")({
  head: () => ({ meta: [{ title: "Live Scan · Scanvas" }] }),
  component: ScanPage,
});

interface ScanHistoryItem {
  id?: number;
  target?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}

function ScanPage() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [target, setTarget] = useState("10.0.0.0/24");
  const [scanId, setScanId] = useState<number | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [scanError, setScanError] = useState<string | null>(null);
  const [history, setHistory] = useState<ScanHistoryItem[]>([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const startRef = useRef<number>(0);
  const progress = scanId
    ? status?.toLowerCase().includes("completed")
      ? 100
      : status?.toLowerCase().includes("running")
        ? 65
        : status?.toLowerCase().includes("pending")
          ? 35
          : 50
    : 0;

  const currentScan = scanId ? history.find((scan) => scan.id === scanId) : undefined;
  const historySource = currentScan ?? history[0];
  const headerStateLabel = running ? "Running" : historySource?.status ?? "Idle";

  const handleStartScan = async () => {
    setScanError(null);
    setLoading(true);
    setElapsed(0);
    setStatus("pending");

    try {
      const response = await scanAPI.start(target);
      const data = await response.json();
      setScanId(data.scan_id);
      setStatus(data.status ?? "pending");
      setRunning(true);
    } catch (err) {
      setScanError(err instanceof Error ? err.message : "Scan failed");
      setRunning(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!scanId) return;

    const interval = setInterval(async () => {
      try {
        const statusData = await scanAPI.getStatus(String(scanId));
        const nextStatus = statusData.status || statusData.message || "pending";
        setStatus(nextStatus);
        const isFinished = /completed|failed|error/i.test(nextStatus);
        setRunning(!isFinished);
      } catch (err) {
        setScanError(err instanceof Error ? err.message : "Failed to fetch scan status");
        setRunning(false);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [scanId]);

  useEffect(() => {
    const loadHistory = async () => {
      setHistoryLoading(true);
      setHistoryError(null);
      try {
        const data = await scanAPI.getHistory();
        setHistory(data);
      } catch (err) {
        setHistoryError(err instanceof Error ? err.message : "Failed to load scan history");
      } finally {
        setHistoryLoading(false);
      }
    };

    loadHistory();
  }, []);

  useEffect(() => {
    if (!running) return;
    startRef.current = Date.now();
    const tick = setInterval(
      () => setElapsed(Math.floor((Date.now() - startRef.current) / 1000)),
      200,
    );
    return () => clearInterval(tick);
  }, [running]);

  return (
    <div>
      <PageHeader
        title="Live Scan"
        subtitle="Concurrent discovery, fingerprinting and exposure assessment."
      />

      <Card className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <CyberBackground variant="radar" />
        </div>
        <div className="relative grid gap-4 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="text-xs font-medium text-muted-foreground">Target</div>
            <div className="relative mt-1.5">
              <Target className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="h-12 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm font-mono outline-none focus:border-primary/60"
              />
            </div>
          </div>
          <div className="flex items-end gap-2">
            <button
              onClick={handleStartScan}
              disabled={running || loading}
              className="inline-flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-primary-foreground glow-primary disabled:opacity-60"
              style={{ background: "var(--gradient-cyber)" }}
            >
              <Play className="h-4 w-4" /> {loading ? "Starting scan…" : "Start scan"}
            </button>
            <button
              onClick={() => setRunning(false)}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-4 text-sm font-semibold"
            >
              <Square className="h-4 w-4" /> Stop
            </button>
          </div>
        </div>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-[auto_1fr]">
        <Card className="grid place-items-center">
          <CircularProgress value={progress} />
        </Card>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={Server}
            label="Scans started"
            value={String(history.length)}
            accent="primary"
          />
          <StatCard
            icon={Activity}
            label="Active scan"
            value={running ? "1" : "0"}
            accent="secondary"
          />
          <StatCard icon={Timer} label="Elapsed" value={`${elapsed}s`} accent="success" />
          <StatCard icon={Timer} label="Status" value={status ? status : "Idle"} accent="warning" />
        </div>
      </div>

      <Card className="mt-4 overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-border bg-foreground/5 px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-danger" />
            <span className="h-2 w-2 rounded-full bg-warning" />
            <span className="h-2 w-2 rounded-full bg-success" />
            <span className="ml-2 font-mono">scanvas@console:~</span>
          </div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            {headerStateLabel}
          </div>
        </div>
        <div className="relative h-72 overflow-auto bg-[oklch(0.14_0.04_260)] p-4 font-mono text-xs text-foreground">
          {scanError && <div className="text-sm text-danger">{scanError}</div>}
          {!scanId && !scanError && (
            <div className="text-muted-foreground">
              Press “Start scan” to begin. Scan status will appear here.
            </div>
          )}
          {scanId && (
            <div className="space-y-3">
              <div className="text-sm text-foreground">Scan ID: {scanId}</div>
              <div className="text-sm text-muted-foreground">Target: {target}</div>
              <div className="text-sm">
                Status: <span className="font-semibold">{status ?? "pending"}</span>
              </div>
              {history.length > 0 && (
                <div className="text-sm text-muted-foreground">
                  Latest history: {history[0].status} on{" "}
                  {new Date(
                    history[0].created_at || history[0].updated_at || Date.now(),
                  ).toLocaleString()}
                </div>
              )}
            </div>
          )}
        </div>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_320px]">
        <Card className="lg:col-span-1">
          <div className="mb-3 text-sm font-semibold">Scan history</div>
          {historyLoading ? (
            <div className="text-sm text-muted-foreground">Loading history...</div>
          ) : historyError ? (
            <div className="text-sm text-danger">{historyError}</div>
          ) : history.length === 0 ? (
            <div className="text-sm text-muted-foreground">No scan history available.</div>
          ) : (
            <div className="space-y-2">
              {[...history]
                .sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
                .slice(0, 6)
                .map((scan) => (
                <div key={scan.id} className="rounded-xl border border-border bg-foreground/5 p-3">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <span>{scan.target}</span>
                    <span className="font-mono text-xs text-muted-foreground">#{scan.id}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{scan.status}</span>
                    <span>
                      {new Date(scan.created_at || scan.updated_at || Date.now()).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

function CircularProgress({ value }: { value: number }) {
  const r = 70,
    c = 2 * Math.PI * r;
  return (
    <div className="relative h-48 w-48">
      <svg viewBox="0 0 180 180" className="h-full w-full -rotate-90">
        <circle cx="90" cy="90" r={r} stroke="var(--color-border)" strokeWidth="10" fill="none" />
        <circle
          cx="90"
          cy="90"
          r={r}
          stroke="url(#sg)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * value) / 100}
          style={{
            transition: "stroke-dashoffset .2s linear",
            filter: "drop-shadow(0 0 8px var(--color-primary))",
          }}
        />
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="text-3xl font-bold tabular-nums">{Math.round(value)}%</div>
          <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
            Progress
          </div>
        </div>
      </div>
    </div>
  );
}
