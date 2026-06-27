import { a as __toESM } from "../_runtime.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTheme } from "./theme-BDeMCM7R.mjs";
import { t as logo_default } from "./logo-BrNkwB4c.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Network, E as Radar, I as LayoutDashboard, M as Menu, P as LogOut, Q as BellRing, Z as Brain, _ as ShieldAlert, a as User, b as ServerCog, ct as Earth, d as Sun, dt as ChartLine, j as Moon, ot as FileChartColumn, r as Wrench, v as Settings, x as Search } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-shell-JbBaxSBa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var NAV = [
	{
		to: "/app/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/app/scan",
		label: "Live Scan",
		icon: Radar
	},
	{
		to: "/app/assets",
		label: "Assets",
		icon: ServerCog
	},
	{
		to: "/app/vulnerabilities",
		label: "Vulnerabilities",
		icon: ShieldAlert
	},
	{
		to: "/app/risk",
		label: "AI Risk",
		icon: Brain
	},
	{
		to: "/app/remediation",
		label: "Remediation",
		icon: Wrench
	},
	{
		to: "/app/threat-intel",
		label: "Threat Intel",
		icon: Earth
	},
	{
		to: "/app/network",
		label: "Network",
		icon: Network
	},
	{
		to: "/app/reports",
		label: "Reports",
		icon: FileChartColumn
	},
	{
		to: "/app/analytics",
		label: "Analytics",
		icon: ChartLine
	},
	{
		to: "/app/notifications",
		label: "Notifications",
		icon: BellRing
	},
	{
		to: "/app/settings",
		label: "Settings",
		icon: Settings
	},
	{
		to: "/app/profile",
		label: "Profile",
		icon: User
	}
];
function AppShell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none fixed inset-0 cyber-grid opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none fixed -top-40 left-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]",
				style: { background: "var(--color-primary)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
				open,
				onClose: () => setOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topbar, { onMenu: () => setOpen(true) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "relative px-4 py-6 sm:px-6 lg:px-8",
					children
				})]
			})
		]
	});
}
function Sidebar({ open, onClose }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-40 bg-black/50 lg:hidden",
		onClick: onClose
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("fixed inset-y-0 left-0 z-50 w-64 transform border-r border-border bg-sidebar transition-transform duration-200 lg:translate-x-0", open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-16 items-center gap-3 border-b border-sidebar-border px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: logo_default,
					alt: "Scanvas",
					className: "h-9 w-9"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm font-bold tracking-tight",
					children: ["Scan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-accent",
						children: "vas"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
					children: "Vulnerability Suite"
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "px-3 py-4",
				children: NAV.map((item) => {
					const active = pathname === item.to;
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: item.to,
						onClick: onClose,
						className: cn("group relative mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors", active ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"),
						children: [
							active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								layoutId: "nav-active",
								className: "absolute inset-0 rounded-xl",
								style: {
									background: "color-mix(in oklab, var(--color-primary) 18%, transparent)",
									boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--color-primary) 40%, transparent)"
								},
								transition: {
									type: "spring",
									stiffness: 400,
									damping: 32
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: cn("relative h-4 w-4", active && "text-primary") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: item.label
							})
						]
					}, item.to);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/login",
					className: "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-sidebar-accent",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Logout"]
				})
			})
		]
	})] });
}
function Topbar({ onMenu }) {
	const { theme, toggle } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border glass px-4 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "lg:hidden",
				onClick: onMenu,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-md flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					placeholder: "Search assets, vulnerabilities, reports...",
					className: "h-10 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none transition focus:border-primary/60 focus:bg-muted/60"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: toggle,
					children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-2 flex items-center gap-2 rounded-xl border border-border bg-muted/40 px-2 py-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-7 w-7 place-items-center rounded-lg text-xs font-semibold text-white",
						style: { background: "var(--gradient-cyber)" },
						children: "SA"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden text-left sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold leading-tight",
							children: "Security Admin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted-foreground",
							children: "admin@scanvas.io"
						})]
					})]
				})]
			})
		]
	});
}
function PageHeader({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-wrap items-end justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold sm:text-3xl",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: subtitle
		})] }), action]
	});
}
//#endregion
export { PageHeader as n, cn as r, AppShell as t };
