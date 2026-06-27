import { a as __toESM } from "../_runtime.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as Play, f as Square, l as Timer, rt as Activity, u as Target, y as Server } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { n as Card, r as StatCard } from "./ui-wZjKdO0q.mjs";
import { i as scanAPI } from "./api-CIz8wyN8.mjs";
import { n as CyberBackground } from "./cyber-background-C8tE6YLU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.scan-D_L8yjff.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LINES = [
	{
		c: "text-accent",
		t: "[init] Scanvas scan engine v2.4.1 · 64 workers ready"
	},
	{
		c: "text-muted-foreground",
		t: "[disco] ARP sweep 10.0.0.0/24 ..."
	},
	{
		c: "text-success",
		t: "[host] 10.0.0.14 alive · MAC 9C:8E:CD:21:55:A1"
	},
	{
		c: "text-success",
		t: "[host] 10.0.0.27 alive · MAC F4:5C:89:7E:12:BB"
	},
	{
		c: "text-muted-foreground",
		t: "[port] scanning top 1000 TCP ports ..."
	},
	{
		c: "text-warning",
		t: "[open] 10.0.0.27 :22 ssh OpenSSH 9.0"
	},
	{
		c: "text-warning",
		t: "[open] 10.0.0.27 :443 nginx 1.24"
	},
	{
		c: "text-accent",
		t: "[fp]   OS detected · Ubuntu 22.04 LTS"
	},
	{
		c: "text-danger",
		t: "[cve]  CVE-2024-21413 · critical · exploit available"
	},
	{
		c: "text-muted-foreground",
		t: "[save] writing results to scanvas.db ..."
	},
	{
		c: "text-success",
		t: "[done] subnet complete · 24 hosts · 88 open ports"
	}
];
function ScanPage() {
	const [running, setRunning] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [elapsed, setElapsed] = (0, import_react.useState)(0);
	const [out, setOut] = (0, import_react.useState)([]);
	const [target, setTarget] = (0, import_react.useState)("10.0.0.0/24");
	const [scanId, setScanId] = (0, import_react.useState)(null);
	const [status, setStatus] = (0, import_react.useState)(null);
	const [scanError, setScanError] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const startRef = (0, import_react.useRef)(0);
	const handleStartScan = async () => {
		setScanError(null);
		setLoading(true);
		setProgress(0);
		setElapsed(0);
		setOut([]);
		setStatus("pending");
		try {
			const data = await (await scanAPI.start(target)).json();
			setScanId(data.scan_id);
			setStatus(data.status ?? "pending");
			setRunning(true);
		} catch (err) {
			setScanError(err instanceof Error ? err.message : "Scan failed");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		if (!running) return;
		startRef.current = Date.now();
		const tick = setInterval(() => setElapsed(Math.floor((Date.now() - startRef.current) / 1e3)), 200);
		const prog = setInterval(() => setProgress((p) => Math.min(100, p + 1.2)), 120);
		const lines = setInterval(() => {
			setOut((prev) => {
				if (prev.length >= LINES.length) return prev;
				return [...prev, LINES[prev.length]];
			});
		}, 700);
		return () => {
			clearInterval(tick);
			clearInterval(prog);
			clearInterval(lines);
		};
	}, [running]);
	(0, import_react.useEffect)(() => {
		if (progress >= 100) setRunning(false);
	}, [progress]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Live Scan",
			subtitle: "Concurrent discovery, fingerprinting and exposure assessment."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, { variant: "radar" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid gap-4 lg:grid-cols-[1fr_auto]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-medium text-muted-foreground",
					children: "Target"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: target,
						onChange: (e) => setTarget(e.target.value),
						className: "h-12 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm font-mono outline-none focus:border-primary/60"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: handleStartScan,
						disabled: running || loading,
						className: "inline-flex h-12 items-center gap-2 rounded-xl px-5 text-sm font-semibold text-primary-foreground glow-primary disabled:opacity-60",
						style: { background: "var(--gradient-cyber)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }),
							" ",
							loading ? "Starting scan…" : "Start scan"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setRunning(false),
						className: "inline-flex h-12 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-4 text-sm font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, { className: "h-4 w-4" }), " Stop"]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-[auto_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularProgress, { value: progress })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Server,
						label: "Hosts Found",
						value: Math.min(out.filter((l) => l.t.includes("[host]")).length, 24),
						accent: "primary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Activity,
						label: "Ports Found",
						value: out.filter((l) => l.t.includes("[open]")).length * 11,
						accent: "secondary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Timer,
						label: "Elapsed",
						value: `${elapsed}s`,
						accent: "success"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						icon: Timer,
						label: "ETA",
						value: running ? `${Math.max(0, Math.round((100 - progress) / 1.2 / 8))}s` : "—",
						accent: "warning"
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-border bg-foreground/5 px-4 py-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-danger" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-warning" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-success" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 font-mono",
							children: "scanvas@console:~"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground",
					children: running ? "Streaming…" : "Idle"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-72 overflow-auto bg-[oklch(0.14_0.04_260)] p-4 font-mono text-xs text-foreground",
				children: [
					out.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: "Press “Start scan” to begin · output will stream here in real time."
					}),
					out.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -6
						},
						animate: {
							opacity: 1,
							x: 0
						},
						className: `${l.c} mb-0.5`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [String(i + 1).padStart(2, "0"), " "]
						}), l.t]
					}, i)),
					running && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 inline-flex items-center gap-1 text-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-1.5 animate-pulse bg-accent" })
					})
				]
			})]
		})
	] });
}
function CircularProgress({ value }) {
	const r = 70, c = 2 * Math.PI * r;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-48 w-48",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 180 180",
			className: "h-full w-full -rotate-90",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "90",
					r,
					stroke: "var(--color-border)",
					strokeWidth: "10",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "90",
					cy: "90",
					r,
					stroke: "url(#sg)",
					strokeWidth: "10",
					fill: "none",
					strokeLinecap: "round",
					strokeDasharray: c,
					strokeDashoffset: c - c * value / 100,
					style: {
						transition: "stroke-dashoffset .2s linear",
						filter: "drop-shadow(0 0 8px var(--color-primary))"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "sg",
					x1: "0",
					y1: "0",
					x2: "1",
					y2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "var(--color-primary)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "var(--color-accent)"
					})]
				}) })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 grid place-items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-3xl font-bold tabular-nums",
					children: [Math.round(value), "%"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-[10px] uppercase tracking-widest text-muted-foreground",
					children: "Progress"
				})]
			})
		})]
	});
}
//#endregion
export { ScanPage as component };
