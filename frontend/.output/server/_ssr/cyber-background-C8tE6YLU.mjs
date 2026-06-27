import { a as __toESM } from "../_runtime.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cyber-background-C8tE6YLU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CyberBackground({ variant = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 cyber-grid opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-hero)" }
			}),
			variant === "hero" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, { count: 40 }),
			variant === "radar" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadarSweep, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-40 -left-40 h-96 w-96 rounded-full opacity-40 blur-[120px]",
				style: { background: "var(--color-primary)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-40 -right-40 h-96 w-96 rounded-full opacity-30 blur-[120px]",
				style: { background: "var(--color-secondary)" }
			})
		]
	});
}
function Particles({ count }) {
	const [items, setItems] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setItems(Array.from({ length: count }, () => ({
			x: Math.random() * 100,
			y: Math.random() * 100,
			d: 4 + Math.random() * 8,
			s: 1 + Math.random() * 3
		})));
	}, [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0",
		children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute rounded-full bg-accent",
			style: {
				left: `${p.x}%`,
				top: `${p.y}%`,
				width: p.s,
				height: p.s,
				boxShadow: "0 0 12px var(--color-accent)"
			},
			animate: {
				y: [
					0,
					-20,
					0
				],
				opacity: [
					.2,
					.8,
					.2
				]
			},
			transition: {
				duration: p.d,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}, i))
	});
}
function RadarSweep() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 flex items-center justify-center opacity-30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[600px] w-[600px] rounded-full border border-primary/30",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-8 rounded-full border border-primary/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-16 rounded-full border border-primary/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-24 rounded-full border border-primary/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 animate-radar",
					style: {
						background: "conic-gradient(from 0deg, transparent 0deg, var(--color-primary) 60deg, transparent 70deg)",
						borderRadius: "50%"
					}
				})
			]
		})
	});
}
function AnimatedWorldMap() {
	const points = [];
	for (let y = 0; y < 30; y++) for (let x = 0; x < 60; x++) {
		const lat = 90 - y / 30 * 180;
		const lon = -180 + x / 60 * 360;
		if ((lon > -130 && lon < -65 && lat > 8 && lat < 65 || lon > -80 && lon < -35 && lat > -55 && lat < 10 || lon > -10 && lon < 40 && lat > 35 && lat < 65 || lon > -18 && lon < 50 && lat > -35 && lat < 35 || lon > 40 && lon < 145 && lat > 5 && lat < 70 || lon > 110 && lon < 155 && lat > -40 && lat < -10) && Math.random() > .35) points.push({
			x,
			y
		});
	}
	const nodes = [
		{
			x: 18,
			y: 10,
			label: "NA"
		},
		{
			x: 32,
			y: 11,
			label: "EU"
		},
		{
			x: 45,
			y: 16,
			label: "AS"
		},
		{
			x: 50,
			y: 22,
			label: "AU"
		},
		{
			x: 22,
			y: 19,
			label: "SA"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 60 30",
		className: "h-full w-full",
		children: [
			points.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: p.x,
				cy: p.y,
				r: .18,
				fill: "var(--color-accent)",
				opacity: .5
			}, i)),
			nodes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("circle", {
				cx: n.x,
				cy: n.y,
				r: .6,
				fill: "var(--color-primary)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
					attributeName: "r",
					values: "0.6;1.2;0.6",
					dur: "2.5s",
					repeatCount: "indefinite"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
					attributeName: "opacity",
					values: "1;0.3;1",
					dur: "2.5s",
					repeatCount: "indefinite"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: n.x,
				cy: n.y,
				r: .3,
				fill: "white"
			})] }, i)),
			nodes.map((a, i) => nodes.slice(i + 1).map((b, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: a.x,
				y1: a.y,
				x2: b.x,
				y2: b.y,
				stroke: "var(--color-accent)",
				strokeWidth: .08,
				opacity: .4,
				strokeDasharray: "0.5 0.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
					attributeName: "stroke-dashoffset",
					values: "0;1",
					dur: "3s",
					repeatCount: "indefinite"
				})
			}, `${i}-${j}`)))
		]
	});
}
//#endregion
export { CyberBackground as n, AnimatedWorldMap as t };
