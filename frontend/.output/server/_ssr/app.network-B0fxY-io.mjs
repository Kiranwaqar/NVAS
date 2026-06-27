import { a as __toESM } from "../_runtime.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { K as Cpu, h as ShieldHalf, p as Smartphone, w as Router, y as Server, z as HardDrive } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { n as Card, t as Badge } from "./ui-wZjKdO0q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.network-B0fxY-io.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NODES = [
	{
		id: "fw-1",
		type: "Firewall",
		x: 50,
		y: 12,
		risk: "Low"
	},
	{
		id: "rt-1",
		type: "Router",
		x: 50,
		y: 32,
		risk: "Low"
	},
	{
		id: "sw-1",
		type: "Switch",
		x: 25,
		y: 50,
		risk: "Medium"
	},
	{
		id: "sw-2",
		type: "Switch",
		x: 75,
		y: 50,
		risk: "Low"
	},
	{
		id: "srv-1",
		type: "Server",
		x: 12,
		y: 72,
		risk: "High"
	},
	{
		id: "srv-2",
		type: "Server",
		x: 28,
		y: 80,
		risk: "Critical"
	},
	{
		id: "cli-1",
		type: "Client",
		x: 42,
		y: 76,
		risk: "Low"
	},
	{
		id: "cli-2",
		type: "Client",
		x: 58,
		y: 82,
		risk: "Medium"
	},
	{
		id: "iot-1",
		type: "IoT",
		x: 72,
		y: 76,
		risk: "High"
	},
	{
		id: "iot-2",
		type: "IoT",
		x: 86,
		y: 70,
		risk: "Medium"
	}
];
var EDGES = [
	["fw-1", "rt-1"],
	["rt-1", "sw-1"],
	["rt-1", "sw-2"],
	["sw-1", "srv-1"],
	["sw-1", "srv-2"],
	["sw-1", "cli-1"],
	["sw-2", "cli-2"],
	["sw-2", "iot-1"],
	["sw-2", "iot-2"]
];
var ICONS = {
	Server,
	Router,
	Switch: HardDrive,
	Client: Cpu,
	IoT: Smartphone,
	Firewall: ShieldHalf
};
var RISK_COLOR = {
	Critical: "var(--color-danger)",
	High: "var(--color-warning)",
	Medium: "var(--color-secondary)",
	Low: "var(--color-success)"
};
function NetworkPage() {
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const [selected, setSelected] = (0, import_react.useState)(NODES[5]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Network Topology",
		subtitle: "Interactive view of every discovered node, link and exposure."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[1fr_320px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "relative overflow-hidden p-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-3 top-3 z-10 flex gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setZoom((z) => Math.min(2, z + .1)),
						className: "rounded-lg border border-border bg-background/70 px-3 py-1 text-xs",
						children: "+"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setZoom((z) => Math.max(.6, z - .1)),
						className: "rounded-lg border border-border bg-background/70 px-3 py-1 text-xs",
						children: "−"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 cyber-grid opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[16/10] w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 100 100",
						preserveAspectRatio: "none",
						className: "absolute inset-0 h-full w-full",
						children: EDGES.map(([a, b], i) => {
							const A = NODES.find((n) => n.id === a);
							const B = NODES.find((n) => n.id === b);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: A.x,
								y1: A.y,
								x2: B.x,
								y2: B.y,
								stroke: "var(--color-primary)",
								strokeOpacity: "0.4",
								strokeWidth: "0.3"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
								x1: A.x,
								y1: A.y,
								x2: B.x,
								y2: B.y,
								stroke: "var(--color-accent)",
								strokeWidth: "0.15",
								strokeDasharray: "1 2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
									attributeName: "stroke-dashoffset",
									values: "0;-6",
									dur: "2s",
									repeatCount: "indefinite"
								})
							})] }, i);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: {
							transform: `scale(${zoom})`,
							transformOrigin: "center"
						},
						children: NODES.map((n) => {
							const Icon = ICONS[n.type];
							const isSelected = selected?.id === n.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								onClick: () => setSelected(n),
								initial: { scale: 0 },
								animate: { scale: 1 },
								style: {
									left: `${n.x}%`,
									top: `${n.y}%`,
									color: RISK_COLOR[n.risk]
								},
								className: "absolute -translate-x-1/2 -translate-y-1/2 group",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute inset-0 -m-3 rounded-full opacity-50 blur-md",
										style: { background: RISK_COLOR[n.risk] }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `relative grid h-11 w-11 place-items-center rounded-xl border bg-background ${isSelected ? "ring-2 ring-primary" : ""}`,
										style: { borderColor: RISK_COLOR[n.risk] },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-foreground/80",
										children: n.id
									})
								]
							}, n.id);
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 border-t border-border px-4 py-3 text-[11px] text-muted-foreground",
					children: [[
						"Critical",
						"High",
						"Medium",
						"Low"
					].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-full",
								style: { background: RISK_COLOR[r] }
							}),
							" ",
							r
						]
					}, r)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto",
						children: [
							NODES.length,
							" nodes · ",
							EDGES.length,
							" links"
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: "Selected node"
		}), selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-lg font-bold",
					children: selected.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground",
					children: selected.type
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: selected.risk === "Critical" ? "danger" : selected.risk === "High" ? "warning" : selected.risk === "Medium" ? "info" : "success",
						children: [selected.risk, " risk"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "info",
						children: "Active"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Uptime",
							v: "14d 6h"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Bandwidth",
							v: "148 Mbps"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Linked nodes",
							v: String(EDGES.filter((e) => e.includes(selected.id)).length)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Open services",
							v: "6"
						})
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 text-sm text-muted-foreground",
			children: "Click a node to inspect."
		})] })]
	})] });
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-lg border border-border bg-foreground/5 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono",
			children: v
		})]
	});
}
//#endregion
export { NetworkPage as component };
