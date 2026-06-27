import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as RefreshCw, Z as Brain, g as ShieldCheck, s as TrendingDown, t as Zap } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { r as tooltipStyle, t as ChartHeader } from "./app.dashboard-CWH6_kZ4.mjs";
import { i as riskTone, n as Card, r as StatCard, t as Badge } from "./ui-wZjKdO0q.mjs";
import { t as ASSETS } from "./mock-data-ysx6VlRq.mjs";
import { b as ResponsiveContainer, c as XAxis, d as CartesianGrid, l as Area, n as AreaChart, o as LineChart, p as RadialBar, s as YAxis, t as RadialBarChart, u as Line, x as Tooltip } from "../_libs/recharts+[...].mjs";
import { o as VULNS, s as VULN_SUMMARY, t as AI_RISK_TREND } from "./nvas-data-Cp019cqo.mjs";
import { t as Counter } from "./counter-Cb-sQ7yr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.risk-XMDWo-SW.js
var import_jsx_runtime = require_jsx_runtime();
function RiskPage() {
	const topVulns = [...VULNS].sort((a, b) => b.aiRisk - a.aiRisk).slice(0, 6);
	const assetScores = ASSETS.map((a) => ({
		asset: a,
		score: Math.round(VULNS.filter((v) => v.assetId === a.id).reduce((s, v) => s + v.aiRisk, 0) / Math.max(1, VULNS.filter((v) => v.assetId === a.id).length)),
		count: VULNS.filter((v) => v.assetId === a.id).length
	})).sort((a, b) => b.score - a.score).slice(0, 6);
	const composite = VULN_SUMMARY.avgAiRisk;
	const radial = [{
		name: "AI Risk",
		value: composite,
		fill: "var(--color-primary)"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "AI Risk Analysis",
			subtitle: "Composite scoring blends CVSS, EPSS, asset importance, exposure and threat intel.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-3 py-2 text-xs text-success",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5 animate-spin-slow" }), " Recalculated 2 min ago"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Brain,
					label: "AI Security Score",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: 100 - composite }), "/100"] }),
					accent: "primary",
					sub: "Higher is safer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Zap,
					label: "Composite Risk",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: composite }),
					accent: "danger",
					sub: "0–100 weighted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ShieldCheck,
					label: "Network Health",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: 92,
						suffix: "%"
					}) }),
					accent: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: TrendingDown,
					label: "30-Day Forecast",
					value: "↓ 12%",
					accent: "success",
					sub: "Expected risk drop"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Composite Risk Gauge",
					subtitle: "Live weighted score"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialBarChart, {
						cx: "50%",
						cy: "55%",
						innerRadius: "65%",
						outerRadius: "100%",
						data: radial,
						startAngle: 210,
						endAngle: -30,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialBar, {
							dataKey: "value",
							cornerRadius: 20,
							background: { fill: "color-mix(in oklab, var(--color-primary) 10%, transparent)" }
						})
					}) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "-mt-12 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-4xl font-bold gradient-text",
						children: composite
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Composite AI Risk"
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Risk & Health Trend",
					subtitle: "12-month composite movement"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: AI_RISK_TREND,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "rr",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "var(--color-danger)",
									stopOpacity: .4
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "var(--color-danger)",
									stopOpacity: 0
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "hh",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "var(--color-success)",
									stopOpacity: .4
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "var(--color-success)",
									stopOpacity: 0
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "month",
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								dataKey: "composite",
								stroke: "var(--color-danger)",
								strokeWidth: 2,
								fill: "url(#rr)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								dataKey: "health",
								stroke: "var(--color-success)",
								strokeWidth: 2,
								fill: "url(#hh)"
							})
						]
					}) })
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Highest Risk Vulnerabilities",
				subtitle: "Prioritised by composite AI score"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: topVulns.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-xl border border-border bg-foreground/5 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-lg bg-danger/15 text-danger font-bold",
							children: v.aiRisk
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-xs text-primary",
								children: v.cve
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm",
								children: v.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: riskTone(v.severity),
							children: v.severity
						})
					]
				}, v.id))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Highest Risk Assets",
				subtitle: "Aggregated AI score per host"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2",
				children: assetScores.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3 rounded-xl border border-border bg-foreground/5 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-lg bg-warning/15 text-warning font-bold",
							children: a.score
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-medium",
								children: a.asset.hostname
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-xs text-muted-foreground",
								children: [
									a.asset.ip,
									" · ",
									a.count,
									" CVEs"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: riskTone(a.asset.risk),
							children: a.asset.risk
						})
					]
				}, a.asset.id))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, { title: "How the composite AI score works" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-5",
				children: [
					{
						k: "CVSS",
						w: "35%",
						c: "Base technical severity (NVD)"
					},
					{
						k: "EPSS",
						w: "25%",
						c: "Probability of exploitation in 30 days"
					},
					{
						k: "Asset Importance",
						w: "20%",
						c: "Business criticality of the host"
					},
					{
						k: "Public Exposure",
						w: "10%",
						c: "Reachable from untrusted networks"
					},
					{
						k: "Threat Intel",
						w: "10%",
						c: "Active exploitation, weaponisation"
					}
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-foreground/5 p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: f.k
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xl font-bold gradient-text",
							children: f.w
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: f.c
						})
					]
				}, f.k))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, { title: "Monthly Improvement" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
					data: AI_RISK_TREND,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
							stroke: "var(--color-border)",
							strokeDasharray: "3 3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "month",
							stroke: "var(--color-muted-foreground)",
							fontSize: 11
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							stroke: "var(--color-muted-foreground)",
							fontSize: 11
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
							dataKey: "health",
							stroke: "var(--color-primary)",
							strokeWidth: 2,
							dot: { r: 3 }
						})
					]
				}) })
			})]
		})
	] });
}
//#endregion
export { RiskPage as component };
