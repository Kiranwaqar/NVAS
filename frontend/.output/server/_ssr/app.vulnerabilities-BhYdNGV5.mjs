import { a as __toESM } from "../_runtime.mjs";
import { a as motion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { G as Download, V as FileText, W as ExternalLink, Y as Bug, Z as Brain, _ as ShieldAlert, at as Funnel, b as ServerCog, n as X, rt as Activity, x as Search } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { i as riskTone, n as Card, r as StatCard, t as Badge } from "./ui-wZjKdO0q.mjs";
import { t as ASSETS } from "./mock-data-ysx6VlRq.mjs";
import { o as vulnerabilitiesAPI } from "./api-CIz8wyN8.mjs";
import { t as Counter } from "./counter-Cb-sQ7yr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.vulnerabilities-BhYdNGV5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VulnsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [sev, setSev] = (0, import_react.useState)("All");
	const [page, setPage] = (0, import_react.useState)(1);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [vulns, setVulns] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	const pageSize = 10;
	(0, import_react.useEffect)(() => {
		const load = async () => {
			setLoading(true);
			setError(null);
			try {
				setVulns(await vulnerabilitiesAPI.getAll());
			} catch (err) {
				setError(err instanceof Error ? err.message : "Failed to load vulnerabilities");
			} finally {
				setLoading(false);
			}
		};
		load();
	}, []);
	const filtered = (0, import_react.useMemo)(() => vulns.filter((v) => {
		const m = [
			v.cve_id ?? v.cve,
			v.vendor,
			v.product
		].join(" ").toLowerCase().includes(q.toLowerCase());
		const s = sev === "All" || v.severity === sev;
		return m && s;
	}), [
		q,
		sev,
		vulns
	]);
	const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const rows = filtered.slice((page - 1) * pageSize, page * pageSize);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Vulnerability Management",
			subtitle: "Enriched with CVSS, EPSS and AI-driven composite risk scoring.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Bug,
					label: "Total",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULN_SUMMARY.total }),
					accent: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ShieldAlert,
					label: "Critical",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULN_SUMMARY.critical }),
					accent: "danger"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ShieldAlert,
					label: "High",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULN_SUMMARY.high }),
					accent: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Activity,
					label: "Avg CVSS",
					value: VULN_SUMMARY.avgCvss.toFixed(1),
					accent: "secondary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Brain,
					label: "AI Risk",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULN_SUMMARY.avgAiRisk }),
					sub: "Composite",
					accent: "primary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Activity,
					label: "Avg EPSS",
					value: VULN_SUMMARY.avgEpss.toFixed(3),
					accent: "secondary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ServerCog,
					label: "Assets at Risk",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULN_SUMMARY.assetsAtRisk }),
					accent: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ShieldAlert,
					label: "Medium",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULN_SUMMARY.medium }),
					accent: "secondary"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: ShieldAlert,
					label: "Low",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: VULN_SUMMARY.low }),
					accent: "success"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-6 overflow-hidden p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 border-b border-border px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-sm flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => {
								setQ(e.target.value);
								setPage(1);
							},
							placeholder: "Search CVE, vendor, product...",
							className: "h-10 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none focus:border-primary/60"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-auto text-xs text-muted-foreground",
						children: loading ? "Loading vulnerabilities..." : `Showing ${rows.length} of ${filtered.length}`
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-border px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-muted-foreground" }),
						[
							"All",
							"Critical",
							"High",
							"Medium",
							"Low"
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setSev(s);
								setPage(1);
							},
							className: `rounded-lg border border-border px-2.5 py-1 text-xs ${sev === s ? "bg-primary/15 text-primary border-primary/40" : "hover:bg-foreground/10"}`,
							children: s
						}, s)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto text-xs text-muted-foreground",
							children: [
								"Showing ",
								rows.length,
								" of ",
								filtered.length
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 text-sm text-danger",
						children: error
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[1200px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
								"CVE",
								"CVSS",
								"EPSS",
								"AI Risk",
								"Severity",
								"Exploit",
								"Asset",
								"Vendor / Product",
								"Installed → Fixed",
								"Status"
							].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-semibold",
								children: c
							}, c)) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((v) => {
							const asset = ASSETS.find((a) => a.id === v.assetId);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								onClick: () => setSelected(v),
								className: "cursor-pointer border-t border-border hover:bg-foreground/5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono text-primary",
										children: v.cve
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono",
										children: v.cvss.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono text-muted-foreground",
										children: v.epss.toFixed(3)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskBar, { score: v.aiRisk })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: riskTone(v.severity),
											children: v.severity
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: v.exploitAvailable ? "danger" : "default",
											children: v.exploitStatus
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-medium",
										children: asset?.hostname
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: [
											v.vendor,
											" · ",
											v.product
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3 font-mono text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-danger",
												children: v.installedVersion
											}),
											" → ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-success",
												children: v.fixedVersion
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											tone: v.status === "Verified" ? "success" : v.status === "Fixed" ? "info" : v.status === "In Progress" ? "warning" : "danger",
											children: v.status
										})
									})
								]
							}, v.id);
						}) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-border px-4 py-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-muted-foreground",
						children: [
							"Page ",
							page,
							" of ",
							pages
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPage((p) => Math.max(1, p - 1)),
							className: "rounded-lg border border-border px-3 py-1.5 hover:bg-foreground/10",
							children: "Prev"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setPage((p) => Math.min(pages, p + 1)),
							className: "rounded-lg border border-border px-3 py-1.5 hover:bg-foreground/10",
							children: "Next"
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VulnDrawer, {
			v: selected,
			onClose: () => setSelected(null)
		}) })
	] });
}
function RiskBar({ score }) {
	const color = score >= 80 ? "var(--color-danger)" : score >= 60 ? "var(--color-warning)" : score >= 40 ? "var(--color-secondary)" : "var(--color-success)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-1.5 w-16 rounded-full bg-muted",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full",
				style: {
					width: `${score}%`,
					background: color
				}
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs",
			children: score
		})]
	});
}
function VulnDrawer({ v, onClose }) {
	const asset = ASSETS.find((a) => a.id === v.assetId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-40 bg-black/60",
		onClick: onClose
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
		transition: {
			type: "spring",
			damping: 28,
			stiffness: 240
		},
		className: "fixed inset-y-0 right-0 z-50 w-full max-w-2xl overflow-y-auto border-l border-border bg-background glass-strong",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/80 px-5 py-4 backdrop-blur",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm text-primary",
						children: v.cve
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: riskTone(v.severity),
						children: v.severity
					}),
					v.exploitAvailable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "danger",
						children: v.exploitStatus
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-base font-semibold",
				children: v.description
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "CVSS",
							value: v.cvss.toFixed(1),
							tone: "danger"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "EPSS",
							value: v.epss.toFixed(3),
							tone: "warning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
							label: "AI Risk",
							value: String(v.aiRisk),
							tone: "primary"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Plain-English explanation",
					children: v.plainEnglish
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Why this is dangerous",
					children: v.whyDangerous
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Business impact",
					children: v.businessImpact
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
					title: "Composite AI risk explanation",
					children: [
						"The composite score of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: v.aiRisk }),
						" blends CVSS severity (",
						v.cvss,
						"), EPSS exploitation probability (",
						(v.epss * 100).toFixed(1),
						"%), asset importance (",
						asset?.type ?? "n/a",
						"), public exposure and live threat intelligence. ",
						v.exploitAvailable ? "Active exploitation observed in the wild — prioritised." : "No public exploit yet; deprioritised slightly."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "CWE",
							v: v.cwe
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "Attack Vector",
							v: v.attackVector
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "Vendor",
							v: v.vendor
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "Product",
							v: v.product
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "Installed",
							v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-danger font-mono",
								children: v.installedVersion
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "Fixed in",
							v: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-success font-mono",
								children: v.fixedVersion
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "Published",
							v: v.published
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KV, {
							k: "Last Detected",
							v: v.lastDetected
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Affected asset",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-xl border border-border bg-foreground/5 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: asset?.hostname
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-muted-foreground font-mono",
							children: [
								asset?.ip,
								" · ",
								asset?.os
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: riskTone(asset?.risk ?? "Low"),
							children: asset?.risk
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "Timeline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "relative ml-2 space-y-3 border-l border-border pl-4 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: v.published
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "CVE published by NVD" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "~2 weeks later"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Vendor advisory & patch released" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: v.lastDetected
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Detected by Scanvas on ", asset?.hostname] })] }),
							v.exploitAvailable && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted-foreground",
								children: "Recent"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-danger",
								children: [
									"Exploit marked ",
									v.exploitStatus,
									" by threat feed"
								]
							})] })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
					title: "References",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [v.references.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: r.url,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-2.5 py-1.5 text-xs hover:bg-foreground/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3 w-3" }),
								" ",
								r.label
							]
						}, r.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: v.patchUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-foreground/5 px-2.5 py-1.5 text-xs hover:bg-foreground/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-3 w-3" }), " Vendor Advisory"]
						})]
					})
				})
			]
		})]
	})] });
}
function Metric({ label, value, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-xl border border-border p-3 ${{
			danger: "text-danger bg-danger/10",
			warning: "text-warning bg-warning/10",
			primary: "text-primary bg-primary/10"
		}[tone]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-2xl font-bold",
			children: value
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-1.5 text-xs uppercase tracking-widest text-muted-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-sm leading-relaxed",
		children
	})] });
}
function KV({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-foreground/5 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-medium",
			children: v
		})]
	});
}
//#endregion
export { VulnsPage as component };
