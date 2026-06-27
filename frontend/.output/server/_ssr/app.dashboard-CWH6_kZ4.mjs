import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.dashboard-CWH6_kZ4.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./app.dashboard-BLtZ5Rzn.mjs");
var Route = createFileRoute("/app/dashboard")({
	head: () => ({ meta: [{ title: "Dashboard · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function ChartHeader({ title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-4 flex items-start justify-between",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm font-semibold",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted-foreground",
			children: subtitle
		})] })
	});
}
var tooltipStyle = {
	background: "var(--color-popover)",
	border: "1px solid var(--color-border)",
	borderRadius: 12,
	fontSize: 12,
	color: "var(--color-foreground)"
};
//#endregion
export { Route as n, tooltipStyle as r, ChartHeader as t };
