import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Network, R as HeartPulse, _ as ShieldAlert, et as ArrowUpRight, i as Wifi, lt as CircleGauge, rt as Activity, ut as CircleCheck, y as Server } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { r as tooltipStyle } from "./app.dashboard-CWH6_kZ4.mjs";
import { i as riskTone, n as Card, r as StatCard, t as Badge } from "./ui-wZjKdO0q.mjs";
import { a as RISK_DIST, c as TOP_PORTS, l as TRAFFIC, n as ASSETS_GROWTH, o as SECURITY_RADAR, r as OS_DIST, s as STATS, t as ASSETS } from "./mock-data-ysx6VlRq.mjs";
import { _ as PolarRadiusAxis, a as BarChart, b as ResponsiveContainer, c as XAxis, d as CartesianGrid, f as Bar, g as PolarAngleAxis, h as Pie, i as PieChart, l as Area, m as Radar, n as AreaChart, o as LineChart, r as RadarChart, s as YAxis, u as Line, v as PolarGrid, x as Tooltip, y as Cell } from "../_libs/recharts+[...].mjs";
import { a as THREAT_INTEL, o as VULNS } from "./nvas-data-Cp019cqo.mjs";
import { t as Counter } from "./counter-Cb-sQ7yr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.dashboard-BLtZ5Rzn.js
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"var(--color-primary)",
	"var(--color-secondary)",
	"var(--color-accent)",
	"var(--color-success)",
	"var(--color-warning)"
];
function Dashboard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Security Operations Overview",
			subtitle: "Real-time posture across discovered assets, exposures and active scans.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/app/scan",
				className: "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary",
				style: { background: "var(--gradient-cyber)" },
				children: ["New Scan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
			children: [
				{
					icon: Server,
					label: "Total Assets",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: STATS.totalAssets }),
					sub: "+38 last 24h",
					accent: "primary"
				},
				{
					icon: Wifi,
					label: "Online Hosts",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: STATS.onlineHosts }),
					sub: "89.5% reachable",
					accent: "success"
				},
				{
					icon: Network,
					label: "Open Ports",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: STATS.openPorts }),
					sub: "3 high-risk services",
					accent: "secondary"
				},
				{
					icon: ShieldAlert,
					label: "Critical Vulns",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: STATS.criticalVulns }),
					sub: "9 with public exploits",
					accent: "danger"
				},
				{
					icon: Activity,
					label: "Running Scans",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: STATS.runningScans }),
					sub: "Across 4 subnets",
					accent: "warning"
				},
				{
					icon: CircleCheck,
					label: "Completed Scans",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: STATS.completedScans }),
					sub: "This month",
					accent: "success"
				},
				{
					icon: CircleGauge,
					label: "Average Risk",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: STATS.avgRisk }),
					sub: "Trending ↓",
					accent: "secondary"
				},
				{
					icon: HeartPulse,
					label: "Network Health",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: STATS.networkHealth,
						suffix: "%"
					}),
					sub: "All systems nominal",
					accent: "success"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { delay: i * .04 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, { ...s })
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Asset Growth",
					subtitle: "Tracked endpoints and completed scans"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: ASSETS_GROWTH,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "g1",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--color-primary)",
										stopOpacity: .45
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--color-primary)",
										stopOpacity: 0
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "g2",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "var(--color-secondary)",
										stopOpacity: .4
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "var(--color-secondary)",
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
									type: "monotone",
									dataKey: "assets",
									stroke: "var(--color-primary)",
									strokeWidth: 2,
									fill: "url(#g1)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "scans",
									stroke: "var(--color-secondary)",
									strokeWidth: 2,
									fill: "url(#g2)"
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Risk Distribution",
					subtitle: "Severity across active findings"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-72",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data: RISK_DIST,
						dataKey: "value",
						innerRadius: 55,
						outerRadius: 90,
						paddingAngle: 2,
						children: RISK_DIST.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: d.color }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] }) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-2 text-xs",
					children: RISK_DIST.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-lg border border-border bg-foreground/5 px-2.5 py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { background: d.color }
							}), d.name]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono",
							children: d.value
						})]
					}, d.name))
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Network Traffic",
					subtitle: "Last 24 hours · inbound vs outbound (Mbps)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: TRAFFIC,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "hour",
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "inbound",
								stroke: "var(--color-primary)",
								strokeWidth: 2,
								dot: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "outbound",
								stroke: "var(--color-accent)",
								strokeWidth: 2,
								dot: false
							})
						]
					}) })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Security Score",
				subtitle: "Coverage by domain"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-64",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadarChart, {
					data: SECURITY_RADAR,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarGrid, { stroke: "var(--color-border)" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
							dataKey: "area",
							tick: {
								fill: "var(--color-muted-foreground)",
								fontSize: 10
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarRadiusAxis, {
							tick: false,
							axisLine: false
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radar, {
							dataKey: "score",
							stroke: "var(--color-primary)",
							fill: "var(--color-primary)",
							fillOpacity: .35
						})
					]
				}) })
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Operating Systems",
				subtitle: "Distribution across inventory"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: OS_DIST,
					dataKey: "value",
					nameKey: "name",
					outerRadius: 90,
					label: {
						fontSize: 10,
						fill: "var(--color-muted-foreground)"
					},
					children: OS_DIST.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS[i % COLORS.length] }, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] }) })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Top Open Ports",
					subtitle: "Most frequently exposed services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: TOP_PORTS,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "port",
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "count",
								radius: [
									8,
									8,
									0,
									0
								],
								fill: "var(--color-secondary)"
							})
						]
					}) })
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Recent Critical Findings",
				subtitle: "High-priority hosts requiring action"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[600px] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-left text-[11px] uppercase tracking-widest text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2",
								children: "Host"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "IP" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "OS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Risk" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Status" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ASSETS.slice(0, 6).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 font-medium",
								children: a.hostname
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "font-mono text-muted-foreground",
								children: a.ip
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "text-muted-foreground",
								children: a.os
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: riskTone(a.risk),
								children: a.risk
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: a.status === "Online" ? "success" : "default",
								children: a.status
							}) })
						]
					}, a.id)) })]
				})
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Top Vulnerabilities",
					subtitle: "By composite AI risk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: [...VULNS].sort((a, b) => b.aiRisk - a.aiRisk).slice(0, 5).map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 rounded-lg border border-border bg-foreground/5 p-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 place-items-center rounded-md bg-danger/15 text-xs font-bold text-danger",
								children: v.aiRisk
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-xs text-primary",
									children: v.cve
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "truncate text-xs text-muted-foreground",
									children: [
										v.vendor,
										" · ",
										v.product
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: riskTone(v.severity),
								children: v.severity
							})
						]
					}, v.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Threat Intelligence",
					subtitle: "Latest enrichment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: THREAT_INTEL.slice(0, 5).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-foreground/5 p-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-primary",
								children: t.cve
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: t.status === "Weaponized" ? "danger" : "warning",
								children: t.status
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground truncate",
							children: t.note
						})]
					}, t.cve))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Patch Compliance",
					subtitle: "Across monitored estate"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 space-y-3 text-sm",
					children: [
						{
							l: "Critical Patches",
							v: 71,
							c: "var(--color-danger)"
						},
						{
							l: "High Patches",
							v: 83,
							c: "var(--color-warning)"
						},
						{
							l: "All Severities",
							v: 64,
							c: "var(--color-primary)"
						},
						{
							l: "Verified Rescans",
							v: 58,
							c: "var(--color-success)"
						}
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.l }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono",
							children: [r.v, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-1.5 w-full rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full",
							style: {
								width: `${r.v}%`,
								background: r.c
							}
						})
					})] }, r.l))
				})] })
			]
		})
	] });
}
function ChartHeader({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-4 flex items-start justify-between",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-semibold",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: subtitle
		})] })
	});
}
//#endregion
export { ChartHeader, Dashboard as component };
