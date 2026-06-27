import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as ThemeProvider } from "./theme-BDeMCM7R.mjs";
import { L as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, k as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route$18 } from "./app.dashboard-CWH6_kZ4.mjs";
import { t as Route$19 } from "./app.assets._id-DBQLUpdQ.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BXNzAERD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-dY0DVs-X.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold gradient-text",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-xl border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$17 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Scanvas — AI Powered Network Vulnerability Assessment System" },
			{
				name: "description",
				content: "Discover, monitor, and protect your network with intelligent vulnerability detection, asset discovery and AI-powered risk analysis."
			},
			{
				property: "og:title",
				content: "Scanvas — AI Powered Network Vulnerability Assessment System"
			},
			{
				property: "og:description",
				content: "Discover, monitor, and protect your network with intelligent vulnerability detection, asset discovery and AI-powered risk analysis."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Scanvas — AI Powered Network Vulnerability Assessment System"
			},
			{
				name: "twitter:description",
				content: "Discover, monitor, and protect your network with intelligent vulnerability detection, asset discovery and AI-powered risk analysis."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae964cdb-c915-44d5-abe8-72834c21c47b/id-preview-a33fcfc1--e1208421-078a-47a1-bde6-a20c529c3400.lovable.app-1782488925052.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ae964cdb-c915-44d5-abe8-72834c21c47b/id-preview-a33fcfc1--e1208421-078a-47a1-bde6-a20c529c3400.lovable.app-1782488925052.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$17.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$15 = () => import("./register-CgxOvHXB.mjs");
var Route$16 = createFileRoute("/register")({
	head: () => ({ meta: [{ title: "Register · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./login-mo4B8dei.mjs");
var Route$15 = createFileRoute("/login")({
	head: () => ({ meta: [{ title: "Login · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./app-Dc-hWncG.mjs");
var Route$14 = createFileRoute("/app")({ component: lazyRouteComponent($$splitComponentImporter$13, "component") });
var $$splitComponentImporter$12 = () => import("./routes-Bkf4BjWZ.mjs");
var Route$13 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Scanvas — AI Powered Network Vulnerability Assessment System" }, {
		name: "description",
		content: "Discover, monitor and protect your network with intelligent vulnerability detection and asset discovery."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var Route$12 = createFileRoute("/app/")({ beforeLoad: () => {
	throw redirect({ to: "/app/dashboard" });
} });
var $$splitComponentImporter$11 = () => import("./app.vulnerabilities-BhYdNGV5.mjs");
var Route$11 = createFileRoute("/app/vulnerabilities")({
	head: () => ({ meta: [{ title: "Vulnerabilities · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./app.threat-intel-CpXt8-Qn.mjs");
var Route$10 = createFileRoute("/app/threat-intel")({
	head: () => ({ meta: [{ title: "Threat Intelligence · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./app.settings-Kq_qrMCq.mjs");
var Route$9 = createFileRoute("/app/settings")({
	head: () => ({ meta: [{ title: "Settings · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./app.scan-D_L8yjff.mjs");
var Route$8 = createFileRoute("/app/scan")({
	head: () => ({ meta: [{ title: "Live Scan · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./app.risk-XMDWo-SW.mjs");
var Route$7 = createFileRoute("/app/risk")({
	head: () => ({ meta: [{ title: "AI Risk Analysis · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./app.reports-Bq-Fe-FG.mjs");
var Route$6 = createFileRoute("/app/reports")({
	head: () => ({ meta: [{ title: "Reports · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./app.remediation-wnPvFg0H.mjs");
var Route$5 = createFileRoute("/app/remediation")({
	head: () => ({ meta: [{ title: "Remediation Center · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./app.profile-DfC7Isg-.mjs");
var Route$4 = createFileRoute("/app/profile")({
	head: () => ({ meta: [{ title: "Profile · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./app.notifications-D-RSycJb.mjs");
var Route$3 = createFileRoute("/app/notifications")({
	head: () => ({ meta: [{ title: "Notifications · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./app.network-B0fxY-io.mjs");
var Route$2 = createFileRoute("/app/network")({
	head: () => ({ meta: [{ title: "Network Topology · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./app.assets-CuK9nQs2.mjs");
var Route$1 = createFileRoute("/app/assets")({
	head: () => ({ meta: [{ title: "Assets · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./app.analytics-D1z5yoch.mjs");
var Route = createFileRoute("/app/analytics")({
	head: () => ({ meta: [{ title: "Analytics · Scanvas" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RegisterRoute = Route$16.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$17
});
var LoginRoute = Route$15.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$17
});
var AppRoute = Route$14.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$17
});
var IndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$17
});
var AppIndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRoute
});
var AppVulnerabilitiesRoute = Route$11.update({
	id: "/vulnerabilities",
	path: "/vulnerabilities",
	getParentRoute: () => AppRoute
});
var AppThreatIntelRoute = Route$10.update({
	id: "/threat-intel",
	path: "/threat-intel",
	getParentRoute: () => AppRoute
});
var AppSettingsRoute = Route$9.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AppRoute
});
var AppScanRoute = Route$8.update({
	id: "/scan",
	path: "/scan",
	getParentRoute: () => AppRoute
});
var AppRiskRoute = Route$7.update({
	id: "/risk",
	path: "/risk",
	getParentRoute: () => AppRoute
});
var AppReportsRoute = Route$6.update({
	id: "/reports",
	path: "/reports",
	getParentRoute: () => AppRoute
});
var AppRemediationRoute = Route$5.update({
	id: "/remediation",
	path: "/remediation",
	getParentRoute: () => AppRoute
});
var AppProfileRoute = Route$4.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AppRoute
});
var AppNotificationsRoute = Route$3.update({
	id: "/notifications",
	path: "/notifications",
	getParentRoute: () => AppRoute
});
var AppNetworkRoute = Route$2.update({
	id: "/network",
	path: "/network",
	getParentRoute: () => AppRoute
});
var AppDashboardRoute = Route$18.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AppRoute
});
var AppAssetsRoute = Route$1.update({
	id: "/assets",
	path: "/assets",
	getParentRoute: () => AppRoute
});
var AppAnalyticsRoute = Route.update({
	id: "/analytics",
	path: "/analytics",
	getParentRoute: () => AppRoute
});
var AppAssetsRouteChildren = { AppAssetsIdRoute: Route$19.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => AppAssetsRoute
}) };
var AppRouteChildren = {
	AppAnalyticsRoute,
	AppAssetsRoute: AppAssetsRoute._addFileChildren(AppAssetsRouteChildren),
	AppDashboardRoute,
	AppNetworkRoute,
	AppNotificationsRoute,
	AppProfileRoute,
	AppRemediationRoute,
	AppReportsRoute,
	AppRiskRoute,
	AppScanRoute,
	AppSettingsRoute,
	AppThreatIntelRoute,
	AppVulnerabilitiesRoute,
	AppIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AppRoute: AppRoute._addFileChildren(AppRouteChildren),
	LoginRoute,
	RegisterRoute
};
var routeTree = Route$17._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
