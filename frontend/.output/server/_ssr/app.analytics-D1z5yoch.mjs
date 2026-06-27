import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { Z as Brain, it as SquareActivity, o as TrendingUp } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { r as tooltipStyle, t as ChartHeader } from "./app.dashboard-CWH6_kZ4.mjs";
import { n as Card } from "./ui-wZjKdO0q.mjs";
import { c as TOP_PORTS, n as ASSETS_GROWTH, r as OS_DIST } from "./mock-data-ysx6VlRq.mjs";
import { a as BarChart, b as ResponsiveContainer, c as XAxis, d as CartesianGrid, f as Bar, h as Pie, i as PieChart, l as Area, n as AreaChart, o as LineChart, s as YAxis, u as Line, x as Tooltip, y as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.analytics-D1z5yoch.js
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"var(--color-primary)",
	"var(--color-secondary)",
	"var(--color-accent)",
	"var(--color-success)",
	"var(--color-warning)"
];
var VENDORS = [
	{
		name: "Cisco",
		value: 28
	},
	{
		name: "Dell",
		value: 22
	},
	{
		name: "HP",
		value: 18
	},
	{
		name: "Apple",
		value: 12
	},
	{
		name: "Ubiquiti",
		value: 9
	},
	{
		name: "Other",
		value: 11
	}
];
var RISK_TREND = ASSETS_GROWTH.map((d, i) => ({
	month: d.month,
	risk: 60 - i * 1.5 + Math.round(Math.sin(i) * 4)
}));
var TOP_VULNS = [
	{
		cve: "CVE-2024-21413",
		count: 47
	},
	{
		cve: "CVE-2024-3094",
		count: 38
	},
	{
		cve: "CVE-2023-50164",
		count: 29
	},
	{
		cve: "CVE-2024-1086",
		count: 22
	},
	{
		cve: "CVE-2023-4863",
		count: 18
	}
];
function AnalyticsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Analytics",
			subtitle: "Deep-dive metrics, AI predictions and trend intelligence."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictionCard, {
					icon: Brain,
					title: "AI Risk Forecast",
					value: "↓ 12%",
					sub: "Next 30 days projection"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictionCard, {
					icon: TrendingUp,
					title: "Monthly Threat Prediction",
					value: "142",
					sub: "Anticipated incidents"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PredictionCard, {
					icon: SquareActivity,
					title: "Network Health Index",
					value: "92 / 100",
					sub: "Stable · trending up"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, { title: "Assets Over Time" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: ASSETS_GROWTH,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "aa",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "var(--color-primary)",
									stopOpacity: .5
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "var(--color-primary)",
									stopOpacity: 0
								})]
							}) }),
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
								dataKey: "assets",
								stroke: "var(--color-primary)",
								fill: "url(#aa)",
								strokeWidth: 2
							})
						]
					}) })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, { title: "Vendor Distribution" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
						data: VENDORS,
						dataKey: "value",
						nameKey: "name",
						outerRadius: 95,
						innerRadius: 50,
						children: VENDORS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS[i % COLORS.length] }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle })] }) })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, { title: "OS Distribution" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: OS_DIST,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "name",
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "value",
								radius: [
									8,
									8,
									0,
									0
								],
								fill: "var(--color-accent)"
							})
						]
					}) })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Risk Trend",
					subtitle: "Average risk score over time"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: RISK_TREND,
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
								dataKey: "risk",
								stroke: "var(--color-warning)",
								strokeWidth: 2,
								dot: { r: 3 }
							})
						]
					}) })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, { title: "Top Vulnerabilities" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: TOP_VULNS,
						layout: "vertical",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "var(--color-border)",
								strokeDasharray: "3 3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								type: "number",
								stroke: "var(--color-muted-foreground)",
								fontSize: 11
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								dataKey: "cve",
								type: "category",
								stroke: "var(--color-muted-foreground)",
								fontSize: 11,
								width: 120
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: tooltipStyle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "count",
								radius: [
									0,
									8,
									8,
									0
								],
								fill: "var(--color-danger)"
							})
						]
					}) })
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
					title: "Port Usage",
					subtitle: "Distribution of open service ports"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-64",
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
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Network Activity Heatmap",
				subtitle: "Activity intensity by hour and day"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heatmap, {})]
		})
	] });
}
function PredictionCard({ icon: Icon, title, value, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-3xl font-bold gradient-text",
					children: value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs text-muted-foreground",
					children: sub
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-10 w-10 place-items-center rounded-xl bg-primary/15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-primary" })
			})]
		})
	});
}
function Heatmap() {
	const days = [
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
		"Sun"
	];
	const hours = Array.from({ length: 24 }, (_, i) => i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "inline-grid gap-1",
			style: { gridTemplateColumns: `48px repeat(24, 1fr)` },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
				hours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center text-[10px] text-muted-foreground",
					children: h
				}, h)),
				days.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pr-2 text-right text-xs text-muted-foreground",
					children: d
				}, d), hours.map((h) => {
					const v = Math.random();
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square min-w-[18px] rounded",
						style: { background: `color-mix(in oklab, var(--color-primary) ${Math.round(v * 90)}%, transparent)` },
						title: `${d} ${h}:00 · ${Math.round(v * 100)}`
					}, `${d}-${h}`);
				})] }))
			]
		})
	});
}
//#endregion
export { AnalyticsPage as component };
