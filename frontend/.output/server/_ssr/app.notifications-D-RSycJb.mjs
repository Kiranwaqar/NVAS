import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { J as CheckCheck, Q as BellRing, _ as ShieldAlert, at as Funnel, b as ServerCog, ct as Earth, r as Wrench, rt as Activity } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { n as Card, t as Badge } from "./ui-wZjKdO0q.mjs";
import { n as NOTIFICATIONS } from "./nvas-data-Cp019cqo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.notifications-D-RSycJb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	Scan: Activity,
	Vulnerability: ShieldAlert,
	Asset: ServerCog,
	Threat: Earth,
	Patch: Wrench
};
function NotificationsPage() {
	const [items, setItems] = (0, import_react.useState)(NOTIFICATIONS);
	const [filter, setFilter] = (0, import_react.useState)("All");
	const filtered = filter === "All" ? items : items.filter((n) => n.category === filter);
	const unread = items.filter((n) => !n.read).length;
	function markAll() {
		setItems(items.map((n) => ({
			...n,
			read: true
		})));
	}
	function toggle(id) {
		setItems(items.map((n) => n.id === id ? {
			...n,
			read: !n.read
		} : n));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Notification Center",
			subtitle: `${unread} unread · scans, vulnerabilities, threat intel and patch events.`,
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: markAll,
				className: "inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-foreground/5 px-3 text-sm font-medium hover:bg-foreground/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" }), " Mark all read"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-4 w-4 text-muted-foreground" }), [
				"All",
				"Vulnerability",
				"Threat",
				"Scan",
				"Asset",
				"Patch"
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setFilter(c),
				className: `rounded-lg border border-border px-2.5 py-1 text-xs ${filter === c ? "bg-primary/15 text-primary border-primary/40" : "hover:bg-foreground/10"}`,
				children: c
			}, c))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "overflow-hidden p-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "grid place-items-center gap-2 py-16 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellRing, { className: "h-8 w-8 opacity-50" }), " No notifications in this category"]
			}), filtered.map((n) => {
				const Icon = ICONS[n.category];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					onClick: () => toggle(n.id),
					className: `flex cursor-pointer items-start gap-3 border-b border-border px-4 py-3 transition hover:bg-foreground/5 ${!n.read ? "bg-primary/[0.04]" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `grid h-10 w-10 place-items-center rounded-xl bg-${n.severity}/15 text-${n.severity}`,
							style: {
								background: `color-mix(in oklab, var(--color-${n.severity}) 15%, transparent)`,
								color: `var(--color-${n.severity})`
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: n.title
								}), !n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: n.detail
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: n.severity === "danger" ? "danger" : n.severity === "warning" ? "warning" : n.severity === "success" ? "success" : "info",
								children: n.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: n.ts
							})]
						})
					]
				}, n.id);
			})] })
		})
	] });
}
//#endregion
export { NotificationsPage as component };
