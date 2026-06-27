import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./app-shell-JbBaxSBa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-wZjKdO0q.js
var import_jsx_runtime = require_jsx_runtime();
function Card({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl border border-border glass p-5", className),
		children
	});
}
function StatCard({ icon: Icon, label, value, sub, accent = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-2xl font-bold tracking-tight sm:text-3xl",
					children: value
				}),
				sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs text-muted-foreground",
					children: sub
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid h-10 w-10 place-items-center rounded-xl", {
					primary: "bg-primary/15",
					secondary: "bg-secondary/15",
					success: "bg-success/15",
					warning: "bg-warning/15",
					danger: "bg-danger/15"
				}[accent]),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("h-5 w-5", {
					primary: "text-primary",
					secondary: "text-secondary",
					success: "text-success",
					warning: "text-warning",
					danger: "text-danger"
				}[accent]) })
			})]
		})
	});
}
function Badge({ children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", {
			default: "bg-muted text-muted-foreground",
			success: "bg-success/15 text-success",
			warning: "bg-warning/15 text-warning",
			danger: "bg-danger/15 text-danger",
			info: "bg-accent/15 text-accent"
		}[tone]),
		children
	});
}
function riskTone(r) {
	if (r === "Critical") return "danger";
	if (r === "High") return "warning";
	if (r === "Medium") return "info";
	return "success";
}
//#endregion
export { riskTone as i, Card as n, StatCard as r, Badge as t };
