import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { W as ExternalLink, _ as ShieldAlert, ct as Earth, rt as Activity, t as Zap } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { r as tooltipStyle, t as ChartHeader } from "./app.dashboard-CWH6_kZ4.mjs";
import { n as Card, r as StatCard, t as Badge } from "./ui-wZjKdO0q.mjs";
import { b as ResponsiveContainer, c as XAxis, d as CartesianGrid, o as LineChart, s as YAxis, u as Line, x as Tooltip } from "../_libs/recharts+[...].mjs";
import { a as THREAT_INTEL, o as VULNS } from "./nvas-data-Cp019cqo.mjs";
import { t as Counter } from "./counter-Cb-sQ7yr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.threat-intel-CpXt8-Qn.js
var import_jsx_runtime = require_jsx_runtime();
function ThreatIntelPage() {
	const weaponised = THREAT_INTEL.filter((t) => t.status === "Weaponized").length;
	const epssAvg = THREAT_INTEL.reduce((s, t) => s + t.epss, 0) / THREAT_INTEL.length;
	const trend = Array.from({ length: 14 }, (_, i) => ({
		d: `D-${13 - i}`,
		count: 3 + Math.round(Math.random() * 8 + i * .3)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Threat Intelligence",
			subtitle: "Live enrichment from EPSS, ExploitDB, vendor feeds and NVD."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Earth,
					label: "Tracked CVEs",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULNS.length + 270 }),
					accent: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Zap,
					label: "Weaponized",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: weaponised }),
					accent: "danger",
					sub: "Active in-the-wild"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Activity,
					label: "Avg EPSS",
					value: epssAvg.toFixed(3),
					accent: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ShieldAlert,
					label: "Feed Updates / 24h",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: 312 }),
					accent: "secondary"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "New Exploits Disclosed",
					subtitle: "Last 14 days"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-56",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: trend,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "d",
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								dataKey: "count",
								stroke: "var(--color-danger)",
								strokeWidth: 2,
								dot: { r: 3 }
							})
						]
					}) })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, { title: "Feed Sources" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2 text-sm",
				children: [
					{
						n: "NVD / NIST",
						s: "Synced 4 min ago",
						c: "success"
					},
					{
						n: "FIRST EPSS",
						s: "Synced 11 min ago",
						c: "success"
					},
					{
						n: "ExploitDB",
						s: "Synced 1 h ago",
						c: "success"
					},
					{
						n: "CISA KEV",
						s: "Synced 2 h ago",
						c: "warning"
					},
					{
						n: "Vendor Advisories",
						s: "Synced 18 min ago",
						c: "success"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-xl border border-border bg-foreground/5 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: s.s
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-2 w-2 rounded-full",
						style: { background: `var(--color-${s.c})` }
					})]
				}, s.n))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border px-4 py-3 text-sm font-semibold",
				children: "Recently Updated CVEs"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[800px] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"CVE",
							"Vendor",
							"EPSS",
							"Status",
							"Updated",
							"Note",
							""
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: c
						}, c)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: THREAT_INTEL.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border hover:bg-foreground/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-primary",
								children: t.cve
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: t.vendor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono",
								children: t.epss.toFixed(3)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: t.status === "Weaponized" ? "danger" : t.status === "PoC" ? "warning" : "info",
									children: t.status
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: t.updated
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: t.note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#",
									className: "inline-flex items-center gap-1 text-xs text-primary hover:underline",
									children: ["View ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" })]
								})
							})
						]
					}, t.cve)) })]
				})
			})]
		})
	] });
}
//#endregion
export { ThreatIntelPage as component };
