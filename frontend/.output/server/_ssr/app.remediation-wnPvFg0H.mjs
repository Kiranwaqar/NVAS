import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Download, T as RefreshCw, W as ExternalLink, g as ShieldCheck, q as Clock, r as Wrench, ut as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { r as tooltipStyle, t as ChartHeader } from "./app.dashboard-CWH6_kZ4.mjs";
import { i as riskTone, n as Card, r as StatCard, t as Badge } from "./ui-wZjKdO0q.mjs";
import { a as BarChart, b as ResponsiveContainer, c as XAxis, d as CartesianGrid, f as Bar, l as Area, n as AreaChart, s as YAxis, x as Tooltip } from "../_libs/recharts+[...].mjs";
import { i as REMEDIATIONS, r as PATCH_PROGRESS } from "./nvas-data-Cp019cqo.mjs";
import { t as Counter } from "./counter-Cb-sQ7yr.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.remediation-wnPvFg0H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RemediationPage() {
	const [items, setItems] = (0, import_react.useState)(REMEDIATIONS);
	const applied = items.filter((r) => r.patchStatus === "Applied").length;
	const verified = items.filter((r) => r.patchStatus === "Verified").length;
	const pending = items.filter((r) => r.patchStatus === "Pending" || r.patchStatus === "Scheduled").length;
	const compliance = Math.round(items.reduce((s, r) => s + r.compliance, 0) / items.length);
	function setStatus(id, status) {
		setItems((prev) => prev.map((r) => r.id === id ? {
			...r,
			patchStatus: status
		} : r));
		if (status === "Verified") toast.success("Patch verified — risk reduced");
		if (status === "Applied") toast("Patch applied — rescan queued");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Remediation Center",
			subtitle: "Prioritised patches, vendor advisories and verification rescans.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export Plan"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Wrench,
					label: "Open Patches",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: pending }),
					accent: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: CircleCheck,
					label: "Applied",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: applied }),
					accent: "secondary",
					sub: "Awaiting verification"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ShieldCheck,
					label: "Verified",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: verified }),
					accent: "success"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Clock,
					label: "Compliance",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: compliance,
						suffix: "%"
					}),
					accent: "primary"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Patch Progress",
				subtitle: "Applied vs verified over time"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
					data: PATCH_PROGRESS,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "pa",
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "0%",
								stopColor: "var(--color-primary)",
								stopOpacity: .4
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
								offset: "100%",
								stopColor: "var(--color-primary)",
								stopOpacity: 0
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "pv",
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
							dataKey: "applied",
							stroke: "var(--color-primary)",
							strokeWidth: 2,
							fill: "url(#pa)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							dataKey: "verified",
							stroke: "var(--color-success)",
							strokeWidth: 2,
							fill: "url(#pv)"
						})
					]
				}) })
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartHeader, {
				title: "Estimated Risk Reduction",
				subtitle: "Per pending remediation"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					data: items.slice(0, 10).map((r) => ({
						name: r.cve.slice(-5),
						value: r.riskReduction
					})),
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
							fill: "var(--color-success)"
						})
					]
				}) })
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border px-4 py-3 text-sm font-semibold",
				children: "Recommended Patches"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[1100px] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"CVE",
							"Asset",
							"Patch",
							"Priority",
							"Risk ↓",
							"ETA",
							"Status",
							"Assigned",
							"Actions"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: c
						}, c)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: items.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border hover:bg-foreground/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-primary",
								children: r.cve
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: r.asset
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: r.patch
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: riskTone(r.priority),
									children: r.priority
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 font-mono text-success",
								children: [
									"-",
									r.riskReduction,
									"%"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: r.estimatedTime
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: r.patchStatus === "Verified" ? "success" : r.patchStatus === "Applied" ? "info" : r.patchStatus === "Failed" ? "danger" : "warning",
									children: r.patchStatus
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-xs",
								children: r.assigned
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											title: "Advisory",
											href: "#",
											className: "grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											title: "Apply Patch",
											onClick: () => setStatus(r.id, "Applied"),
											className: "grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											title: "Launch Rescan",
											onClick: () => {
												toast("Verification scan launched");
												setTimeout(() => setStatus(r.id, "Verified"), 1200);
											},
											className: "grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											title: "Mark Verified",
											onClick: () => setStatus(r.id, "Verified"),
											className: "grid h-8 w-8 place-items-center rounded-lg border border-border text-success hover:bg-success/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" })
										})
									]
								})
							})
						]
					}, r.id)) })]
				})
			})]
		})
	] });
}
//#endregion
export { RemediationPage as component };
