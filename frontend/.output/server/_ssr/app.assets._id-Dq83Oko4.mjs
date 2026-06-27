import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { M as notFound, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Network, K as Cpu, Z as Brain, g as ShieldCheck, i as Wifi, k as Package, nt as ArrowLeft, r as Wrench, z as HardDrive } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { i as riskTone, n as Card, t as Badge } from "./ui-wZjKdO0q.mjs";
import { t as ASSETS } from "./mock-data-ysx6VlRq.mjs";
import { t as Route } from "./app.assets._id-DBQLUpdQ.mjs";
import { c as vulnsByAsset } from "./nvas-data-Cp019cqo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.assets._id-Dq83Oko4.js
var import_jsx_runtime = require_jsx_runtime();
var SOFTWARE = [
	{
		name: "OpenSSL",
		v: "3.0.7",
		patched: false
	},
	{
		name: "nginx",
		v: "1.24.0",
		patched: true
	},
	{
		name: "OpenSSH",
		v: "9.0p1",
		patched: true
	},
	{
		name: "Python",
		v: "3.11.4",
		patched: true
	},
	{
		name: "curl",
		v: "8.1.2",
		patched: false
	}
];
function AssetDetail() {
	const { id } = Route.useParams();
	const a = ASSETS.find((x) => x.id === id);
	if (!a) throw notFound();
	const vulns = vulnsByAsset(a.id);
	const score = a.risk === "Critical" ? 92 : a.risk === "High" ? 71 : a.risk === "Medium" ? 48 : 22;
	const patched = vulns.filter((v) => v.status === "Fixed" || v.status === "Verified").length;
	const patchPct = vulns.length ? Math.round(patched / vulns.length * 100) : 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/app/assets",
			className: "mb-4 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), " Back to assets"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: a.hostname,
			subtitle: `${a.ip} · ${a.vendor} · ${a.os}`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: riskTone(a.risk),
				children: a.risk
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Cpu,
					label: "Operating System",
					value: a.os
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: HardDrive,
					label: "Vendor",
					value: a.vendor
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Network,
					label: "MAC Address",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: a.mac
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: Wifi,
					label: "Status",
					value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: a.status === "Online" ? "success" : "default",
						children: a.status
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoCard, {
					icon: ShieldCheck,
					label: "Last Scan",
					value: a.lastScan
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-widest text-muted-foreground",
						children: "Asset Risk Score"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-4xl font-bold",
							children: score
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pb-1 text-xs text-muted-foreground",
							children: "/ 100"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-2 w-full rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full",
							style: {
								width: `${score}%`,
								background: "var(--gradient-cyber)"
							}
						})
					})
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-4 text-sm font-semibold",
					children: "Open Ports & Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[500px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-left text-[11px] uppercase tracking-widest text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2",
									children: "Port"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Protocol" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Service" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "State" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "Version" })
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: a.openPorts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-3 font-mono",
									children: p.port
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: p.protocol }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "font-medium",
									children: p.service
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "success",
									children: p.state
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-muted-foreground",
									children: p.version
								})
							]
						}, i)) })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-2 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-4 w-4 text-accent" }), " Installed Software"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2 text-sm",
				children: SOFTWARE.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center justify-between rounded-lg border border-border bg-foreground/5 px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: s.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-xs text-muted-foreground",
						children: s.v
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: s.patched ? "success" : "warning",
						children: s.patched ? "Patched" : "Outdated"
					})]
				}, s.name))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4 overflow-hidden p-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b border-border px-4 py-3 text-sm font-semibold",
				children: [
					"Associated Vulnerabilities (",
					vulns.length,
					")"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[800px] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-foreground/5 text-left text-[11px] uppercase tracking-widest text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"CVE",
							"CVSS",
							"AI Risk",
							"Severity",
							"Vendor / Product",
							"Status"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: c
						}, c)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: vulns.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "px-4 py-8 text-center text-muted-foreground",
						children: "No vulnerabilities detected on this asset."
					}) }) : vulns.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border hover:bg-foreground/5",
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
								className: "px-4 py-3 font-mono",
								children: v.aiRisk
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: riskTone(v.severity),
									children: v.severity
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 text-muted-foreground",
								children: [
									v.vendor,
									" · ",
									v.product
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: v.status === "Verified" ? "success" : v.status === "Open" ? "danger" : "warning",
									children: v.status
								})
							})
						]
					}, v.id)) })]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-4 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-4 w-4 text-success" }), " Patch Status"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-3xl font-bold",
					children: [patchPct, "%"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs text-muted-foreground",
					children: [
						patched,
						" of ",
						vulns.length,
						" findings remediated"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 h-2 w-full rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-success",
						style: { width: `${patchPct}%` }
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center gap-2 text-sm font-semibold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-4 w-4 text-primary" }), " AI Risk Explanation"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm leading-relaxed text-muted-foreground",
					children: [
						"This asset's composite score of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-foreground",
							children: score
						}),
						" reflects ",
						vulns.length,
						" active findings, an OS fingerprint of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "text-foreground",
							children: a.os
						}),
						", public exposure across ",
						a.openPorts.length,
						" listening services, and weighted threat-intel signals for the affected products. ",
						a.risk === "Critical" || a.risk === "High" ? "Prioritise immediate patching and isolate from untrusted networks until verified." : "Maintain current cadence and monitor for new advisories."
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-4 text-sm font-semibold",
				children: "Security Timeline"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "relative ml-3 space-y-4 border-l border-border pl-5 text-sm",
				children: [
					{
						t: "2 h ago",
						c: "Vulnerability scan completed",
						tone: "success"
					},
					{
						t: "6 h ago",
						c: "New port detected: 8080",
						tone: "warning"
					},
					{
						t: "1 d ago",
						c: "AI risk recalculated after EPSS update",
						tone: "info"
					},
					{
						t: "2 d ago",
						c: "Patch applied for CVE-2024-3094",
						tone: "success"
					},
					{
						t: "3 d ago",
						c: "OS fingerprint updated",
						tone: "info"
					},
					{
						t: "1 w ago",
						c: "Asset added to inventory",
						tone: "default"
					}
				].map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full",
							style: { background: "var(--color-primary)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: e.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: e.c })
					]
				}, i))
			})]
		})
	] });
}
function InfoCard({ icon: Icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5 text-accent" }),
			" ",
			label
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-2 text-base font-semibold",
		children: value
	})] });
}
//#endregion
export { AssetDetail as component };
