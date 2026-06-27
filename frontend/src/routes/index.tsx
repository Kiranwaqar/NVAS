import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield, Radar, Network, ServerCog, ScanSearch, Activity, Brain, FileBarChart2,
  ArrowRight, CheckCircle2, Cpu, Lock, Globe, Zap,
} from "lucide-react";
import { CyberBackground, AnimatedWorldMap } from "@/components/nvas/cyber-background";
import { Counter } from "@/components/nvas/counter";
import logo from "@/images/logo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scanvas — AI Powered Network Vulnerability Assessment System" },
      { name: "description", content: "Discover, monitor and protect your network with intelligent vulnerability detection and asset discovery." },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: Network, title: "Network Discovery", desc: "Auto-discover every host, switch and IoT device across segmented networks." },
  { icon: ScanSearch, title: "Port Scanning", desc: "Sweep 65,535 ports with concurrency-tuned probes and TLS fingerprinting." },
  { icon: Cpu, title: "OS Detection", desc: "Passive and active OS fingerprinting with vendor and version correlation." },
  { icon: ServerCog, title: "Asset Inventory", desc: "A live, queryable CMDB of every endpoint, service and exposure." },
  { icon: Brain, title: "AI Risk Analysis", desc: "Transformer-driven risk scoring with CVE correlation and exploit prediction." },
  { icon: Activity, title: "Live Monitoring", desc: "Sub-second telemetry, anomaly detection and behavioural baselines." },
  { icon: Shield, title: "Threat Intelligence", desc: "Curated IOCs, MITRE ATT&CK mapping and adversary-aware prioritisation." },
  { icon: FileBarChart2, title: "Report Generation", desc: "One-click PDF, CSV and JSON exports for SOC, audit and executive teams." },
];

const STEPS = [
  { n: "01", title: "Connect", desc: "Drop the lightweight collector into any subnet — agentless and zero-config." },
  { n: "02", title: "Discover", desc: "Scanvas sweeps the network, fingerprints assets and maps every exposed surface." },
  { n: "03", title: "Assess", desc: "The AI engine scores risk, predicts exploitability and prioritises action." },
  { n: "04", title: "Remediate", desc: "Ship findings to your SIEM, ITSM or generate auditor-ready reports." },
];

function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-border glass px-5 py-3 sm:mx-6 lg:mx-auto">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Scanvas" className="h-10 w-10" />
            <div>
              <div className="text-sm font-bold tracking-tight">Scan<span className="text-accent">vas</span></div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Cyber Intelligence</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground sm:block">Login</Link>
            <Link to="/register" className="rounded-xl border border-border bg-foreground/5 px-3.5 py-2 text-sm font-medium hover:bg-foreground/10">Get Started</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-24 sm:pt-44">
        <CyberBackground variant="hero" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center justify-center mb-6"
              >
                <img src={logo} alt="Scanvas" className="h-24 w-24" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
                className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Scan<span className="text-accent">vas</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
              >
                AI Powered Network Vulnerability Assessment System
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link to="/register" className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground glow-primary transition hover:translate-y-[-1px]" style={{ background: "var(--gradient-cyber)" }}>
                  Get Started <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link to="/login" className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-5 py-3 text-sm font-semibold hover:bg-foreground/10">
                  <Lock className="h-4 w-4" /> Login
                </Link>
              </motion.div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                {["Built for security teams", "Enterprise ready", "Open and extensible", "Community driven"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-success" />{b}</div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-border glass p-6">
                <div className="absolute inset-0 cyber-grid opacity-50" />
                <div className="relative h-full w-full">
                  <AnimatedWorldMap />
                </div>
                <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-border bg-background/60 px-4 py-3 text-xs backdrop-blur">
                  <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-accent" /> 5 regions · 1,284 nodes</div>
                  <div className="flex items-center gap-2 text-success"><Zap className="h-3.5 w-3.5" /> All systems nominal</div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border glass p-4 sm:block animate-float">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">AI Risk</div>
                <div className="mt-1 text-2xl font-bold text-success">Low · 38</div>
              </div>
              <div className="absolute -top-6 -right-6 hidden rounded-2xl border border-border glass p-4 sm:block">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Critical CVEs</div>
                <div className="mt-1 text-2xl font-bold text-danger">27</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Platform</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Every capability your SOC needs</h2>
            <p className="mt-3 text-muted-foreground">Eight modules, one unified control plane — engineered for speed, scale and the modern threat landscape.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 4) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border glass p-5 transition hover:border-primary/40"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition group-hover:opacity-30" style={{ background: "var(--color-primary)" }} />
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-foreground/5">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="mt-4 text-base font-semibold">{f.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Workflow</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From signal to remediation in four steps</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="relative rounded-2xl border border-border glass p-6">
                <div className="text-xs font-mono text-accent">{s.n}</div>
                <div className="mt-2 text-lg font-semibold">{s.title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border glass p-10 text-center">
            <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative">
              <h3 className="text-3xl font-bold sm:text-4xl">Ready to see your network the way an attacker does?</h3>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Spin up Scanvas in under 5 minutes. No agents, no friction, no excuses.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link to="/register" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground glow-primary" style={{ background: "var(--gradient-cyber)" }}>
                  Get Started Free <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/app/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-5 py-3 text-sm font-semibold hover:bg-foreground/10">
                  View Live Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-xs text-muted-foreground sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded-lg" style={{ background: "var(--gradient-cyber)" }}>
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span>© 2026 Scanvas — Final Year Project · All rights reserved.</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Security</a>
            <a href="#" className="hover:text-foreground">Docs</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
