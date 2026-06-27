import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as logo_default } from "./logo-BrNkwB4c.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Network, B as Globe, F as Lock, K as Cpu, S as ScanSearch, Z as Brain, b as ServerCog, m as Shield, ot as FileChartColumn, rt as Activity, t as Zap, tt as ArrowRight, ut as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as CyberBackground, t as AnimatedWorldMap } from "./cyber-background-C8tE6YLU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bkf4BjWZ.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		icon: Network,
		title: "Network Discovery",
		desc: "Auto-discover every host, switch and IoT device across segmented networks."
	},
	{
		icon: ScanSearch,
		title: "Port Scanning",
		desc: "Sweep 65,535 ports with concurrency-tuned probes and TLS fingerprinting."
	},
	{
		icon: Cpu,
		title: "OS Detection",
		desc: "Passive and active OS fingerprinting with vendor and version correlation."
	},
	{
		icon: ServerCog,
		title: "Asset Inventory",
		desc: "A live, queryable CMDB of every endpoint, service and exposure."
	},
	{
		icon: Brain,
		title: "AI Risk Analysis",
		desc: "Transformer-driven risk scoring with CVE correlation and exploit prediction."
	},
	{
		icon: Activity,
		title: "Live Monitoring",
		desc: "Sub-second telemetry, anomaly detection and behavioural baselines."
	},
	{
		icon: Shield,
		title: "Threat Intelligence",
		desc: "Curated IOCs, MITRE ATT&CK mapping and adversary-aware prioritisation."
	},
	{
		icon: FileChartColumn,
		title: "Report Generation",
		desc: "One-click PDF, CSV and JSON exports for SOC, audit and executive teams."
	}
];
var STEPS = [
	{
		n: "01",
		title: "Connect",
		desc: "Drop the lightweight collector into any subnet — agentless and zero-config."
	},
	{
		n: "02",
		title: "Discover",
		desc: "Scanvas sweeps the network, fingerprints assets and maps every exposed surface."
	},
	{
		n: "03",
		title: "Assess",
		desc: "The AI engine scores risk, predicts exploitability and prioritises action."
	},
	{
		n: "04",
		title: "Remediate",
		desc: "Ship findings to your SIEM, ITSM or generate auditor-ready reports."
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 z-50 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-border glass px-5 py-3 sm:mx-6 lg:mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Scanvas",
								className: "h-10 w-10"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-bold tracking-tight",
								children: ["Scan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "vas"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Cyber Intelligence"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-6 text-sm text-muted-foreground md:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#features",
								className: "hover:text-foreground",
								children: "Features"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how",
								className: "hover:text-foreground",
								children: "How it works"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/login",
								className: "hidden rounded-xl px-3 py-2 text-sm text-muted-foreground hover:text-foreground sm:block",
								children: "Login"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/register",
								className: "rounded-xl border border-border bg-foreground/5 px-3.5 py-2 text-sm font-medium hover:bg-foreground/10",
								children: "Get Started"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative pt-40 pb-24 sm:pt-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, { variant: "hero" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-12 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 10
								},
								animate: {
									opacity: 1,
									y: 0
								},
								className: "inline-flex items-center justify-center mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Scanvas",
									className: "h-24 w-24"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .05 },
								className: "text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl",
								children: ["Scan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "vas"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .1 },
								className: "mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl",
								children: "AI Powered Network Vulnerability Assessment System"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 20
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .15 },
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/register",
									className: "group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground glow-primary transition hover:translate-y-[-1px]",
									style: { background: "var(--gradient-cyber)" },
									children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/login",
									className: "inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-5 py-3 text-sm font-semibold hover:bg-foreground/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }), " Login"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground",
								children: [
									"Built for security teams",
									"Enterprise ready",
									"Open and extensible",
									"Community driven"
								].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-success" }), b]
								}, b))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .96
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							transition: { delay: .2 },
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-[5/4] overflow-hidden rounded-3xl border border-border glass p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 cyber-grid opacity-50" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative h-full w-full",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedWorldMap, {})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-border bg-background/60 px-4 py-3 text-xs backdrop-blur",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4 text-accent" }), " 5 regions · 1,284 nodes"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 text-success",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), " All systems nominal"]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-6 -left-6 hidden rounded-2xl border border-border glass p-4 sm:block animate-float",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "AI Risk"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-2xl font-bold text-success",
										children: "Low · 38"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -top-6 -right-6 hidden rounded-2xl border border-border glass p-4 sm:block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Critical CVEs"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-2xl font-bold text-danger",
										children: "27"
									})]
								})
							]
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "features",
				className: "relative py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-[0.25em] text-accent",
								children: "Platform"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl font-bold sm:text-4xl",
								children: "Every capability your SOC needs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: "Eight modules, one unified control plane — engineered for speed, scale and the modern threat landscape."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: FEATURES.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i % 4 * .05 },
							className: "group relative overflow-hidden rounded-2xl border border-border glass p-5 transition hover:border-primary/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition group-hover:opacity-30",
									style: { background: "var(--color-primary)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-foreground/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5 text-accent" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4 text-base font-semibold",
									children: f.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: f.desc
								})
							]
						}, f.title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "how",
				className: "relative py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.25em] text-accent",
							children: "Workflow"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-bold sm:text-4xl",
							children: "From signal to remediation in four steps"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4",
						children: STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: i * .06 },
							className: "relative rounded-2xl border border-border glass p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-mono text-accent",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-lg font-semibold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: s.desc
								})
							]
						}, s.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl border border-border glass p-10 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 opacity-60",
							style: { background: "var(--gradient-hero)" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl font-bold sm:text-4xl",
									children: "Ready to see your network the way an attacker does?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-3 max-w-xl text-muted-foreground",
									children: "Spin up Scanvas in under 5 minutes. No agents, no friction, no excuses."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/register",
										className: "inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground glow-primary",
										style: { background: "var(--gradient-cyber)" },
										children: ["Get Started Free ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/app/dashboard",
										className: "inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-5 py-3 text-sm font-semibold hover:bg-foreground/10",
										children: "View Live Demo"
									})]
								})
							]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-xs text-muted-foreground sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-7 w-7 place-items-center rounded-lg",
							style: { background: "var(--gradient-cyber)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "h-4 w-4 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "© 2026 Scanvas — Final Year Project · All rights reserved." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Security"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Docs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:text-foreground",
								children: "Contact"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
