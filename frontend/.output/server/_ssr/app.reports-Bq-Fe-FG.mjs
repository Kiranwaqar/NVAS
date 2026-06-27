import { a as __toESM } from "../_runtime.mjs";
import { a as motion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Download, H as FileSpreadsheet, U as Eye, V as FileText, c as Trash2, n as X, st as FileBraces } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { n as Card, t as Badge } from "./ui-wZjKdO0q.mjs";
import { i as REPORTS, s as STATS } from "./mock-data-ysx6VlRq.mjs";
import { r as reportsAPI } from "./api-CIz8wyN8.mjs";
import { a as THREAT_INTEL, s as VULN_SUMMARY } from "./nvas-data-Cp019cqo.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.reports-Bq-Fe-FG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReportsPage() {
	const [preview, setPreview] = (0, import_react.useState)(null);
	const [downloading, setDownloading] = (0, import_react.useState)(false);
	const downloadReport = async (type) => {
		setDownloading(true);
		try {
			const blob = await (type === "json" ? await reportsAPI.exportJSON() : type === "csv" ? await reportsAPI.exportCSV() : await reportsAPI.exportPDF()).blob();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Reporting Center",
			subtitle: "Executive, asset, vulnerability and compliance reports."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: [
				{
					icon: FileText,
					title: "Export PDF",
					desc: "Auditor-ready executive summary.",
					tone: "danger",
					label: "PDF"
				},
				{
					icon: FileSpreadsheet,
					title: "Export CSV",
					desc: "Asset + vulnerability tabular data.",
					tone: "success",
					label: "CSV"
				},
				{
					icon: FileBraces,
					title: "Export JSON",
					desc: "Programmatic, integration-friendly.",
					tone: "info",
					label: "JSON"
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "group relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 place-items-center rounded-xl bg-foreground/5 border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5 text-accent" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: c.tone,
							children: c.label
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 text-base font-semibold",
						children: c.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: c.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPreview(c.label),
							className: "inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 py-2 text-sm font-medium hover:bg-foreground/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), " Preview"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => downloadReport(c.label.toLowerCase()),
							disabled: downloading,
							className: "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary disabled:opacity-60",
							style: { background: "var(--gradient-cyber)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }),
								" ",
								downloading ? "Downloading…" : "Generate"
							]
						})]
					})
				]
			}, c.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6 overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-border px-4 py-3 text-sm font-semibold",
				children: "Recent Reports"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[700px] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3",
								children: "ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Name" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Type" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Date" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Size" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Actions" })
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: REPORTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border hover:bg-foreground/5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-muted-foreground",
								children: r.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: r.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: r.type === "PDF" ? "danger" : r.type === "CSV" ? "success" : "info",
									children: r.type
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: r.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: r.size
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
											title: "View",
											onClick: () => setPreview(r.type),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
											title: "Download",
											onClick: () => downloadReport(r.type.toLowerCase()),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
											title: "Delete",
											danger: true,
											onClick: () => toast("Report deleted"),
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
										})
									]
								})
							})
						]
					}, r.id)) })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: preview && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportPreview, {
			type: preview,
			onClose: () => setPreview(null)
		}) })
	] });
}
function ReportPreview({ type, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-40 bg-black/60",
		onClick: onClose
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			scale: .96
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .96
		},
		className: "fixed inset-6 z-50 overflow-hidden rounded-2xl border border-border bg-background glass-strong md:inset-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-border px-5 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm font-semibold",
				children: [
					"Executive Vulnerability Report — Preview (",
					type,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "h-[calc(100%-3rem)] overflow-y-auto p-6 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold gradient-text",
					children: "Scanvas Executive Summary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted-foreground",
					children: [
						"Generated ",
						(/* @__PURE__ */ new Date()).toLocaleString(),
						" · Confidential"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					h: "1. Asset Summary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "ml-4 list-disc",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Total assets discovered: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: STATS.totalAssets })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Online hosts: ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: STATS.onlineHosts }),
								" (",
								Math.round(STATS.onlineHosts / STATS.totalAssets * 100),
								"%)"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Open ports inventoried: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: STATS.openPorts })] })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					h: "2. Vulnerability Summary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-4 gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "Critical",
								v: VULN_SUMMARY.critical,
								c: "danger"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "High",
								v: VULN_SUMMARY.high,
								c: "warning"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "Medium",
								v: VULN_SUMMARY.medium,
								c: "secondary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
								k: "Low",
								v: VULN_SUMMARY.low,
								c: "success"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					h: "3. AI Risk Analysis",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Composite AI risk score across estate: ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [VULN_SUMMARY.avgAiRisk, "/100"] }),
						". Score blends CVSS, EPSS, asset importance, public exposure and live threat intelligence."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					h: "4. Threat Intelligence",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "ml-4 list-disc",
						children: THREAT_INTEL.slice(0, 4).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono",
								children: t.cve
							}),
							" — ",
							t.note,
							" (",
							t.status,
							")"
						] }, t.cve))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					h: "5. Remediation Recommendations",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Prioritise the ",
						VULN_SUMMARY.critical,
						" Critical findings with weaponised exploits. Schedule rolling patch windows and trigger verification rescans through the Remediation Center."
					] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					h: "6. Compliance Score",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 h-2 w-full rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-success",
							style: { width: "82%" }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted-foreground",
						children: "82% — Above industry baseline (CIS, NIST 800-53)"
					})]
				})
			]
		})]
	})] });
}
function Section({ h, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-base font-semibold",
			children: h
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-sm text-muted-foreground",
			children
		})]
	});
}
function Mini({ k, v, c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border p-2",
		style: { background: `color-mix(in oklab, var(--color-${c}) 10%, transparent)` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-lg font-bold",
			style: { color: `var(--color-${c})` },
			children: v
		})]
	});
}
function IconBtn({ children, title, danger, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		title,
		onClick,
		className: `grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10 ${danger ? "text-danger hover:bg-danger/10" : ""}`,
		children
	});
}
//#endregion
export { ReportsPage as component };
