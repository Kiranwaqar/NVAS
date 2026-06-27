import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTheme } from "./theme-BDeMCM7R.mjs";
import { $ as Bell, C as ScanLine, L as KeyRound, O as Palette, a as User, m as Shield } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { n as Card } from "./ui-wZjKdO0q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.settings-Kq_qrMCq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TABS = [
	{
		id: "profile",
		label: "Profile",
		icon: User
	},
	{
		id: "theme",
		label: "Theme",
		icon: Palette
	},
	{
		id: "notifications",
		label: "Notifications",
		icon: Bell
	},
	{
		id: "scan",
		label: "Scan Config",
		icon: ScanLine
	},
	{
		id: "api",
		label: "API",
		icon: KeyRound
	},
	{
		id: "security",
		label: "Security",
		icon: Shield
	}
];
function SettingsPage() {
	const [tab, setTab] = (0, import_react.useState)("profile");
	const { theme, setTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Settings",
		subtitle: "Configure your Scanvas workspace, scans and security preferences."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[240px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
			className: "h-fit p-2",
			children: TABS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setTab(t.id),
				className: `flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition ${tab === t.id ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:bg-foreground/5"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4" }),
					" ",
					t.label
				]
			}, t.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			tab === "profile" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Profile Settings",
				desc: "Personal details visible to your team.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							defaultValue: "Security Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							defaultValue: "admin@scanvas.io"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Department",
							defaultValue: "Security Operations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Role",
							defaultValue: "Administrator",
							disabled: true
						})
					]
				})
			}),
			tab === "theme" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Theme",
				desc: "Switch between dark (default) and light appearance.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: ["dark", "light"].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTheme(t),
						className: `rounded-2xl border p-4 text-left transition ${theme === t ? "border-primary ring-2 ring-primary/40" : "border-border"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `mb-3 h-20 rounded-xl ${t === "dark" ? "bg-[oklch(0.18_0.04_260)]" : "bg-[oklch(0.99_0.005_240)]"} border border-border` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold capitalize",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: t === "dark" ? "Recommended for SOC environments" : "Bright environments and presentations"
							})
						]
					}, t))
				})
			}),
			tab === "notifications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Notifications",
				desc: "Choose which events trigger alerts.",
				children: [
					"Critical vulnerability detected",
					"Scan completed",
					"New asset discovered",
					"Weekly summary digest"
				].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					label: n,
					defaultOn: n.includes("Critical") || n.includes("Weekly")
				}, n))
			}),
			tab === "scan" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Scan Configuration",
				desc: "Defaults applied to new scans.",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Default subnet",
							defaultValue: "10.0.0.0/16"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Workers",
							defaultValue: "64"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Port range",
							defaultValue: "1-65535"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Timeout (ms)",
							defaultValue: "1500"
						})
					]
				})
			}),
			tab === "api" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "API Configuration",
				desc: "Programmatic access to Scanvas.",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "API endpoint",
					defaultValue: "https://api.scanvas.io/v1"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "API key",
					defaultValue: "scanvas_sk_***********************"
				})]
			}),
			tab === "security" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Security Preferences",
				desc: "Hardening for your workspace.",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "Require MFA for all users",
						defaultOn: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
						label: "IP allowlist enforcement",
						defaultOn: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, { label: "Auto-logout after 30 minutes idle" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-xl border border-border bg-foreground/5 px-4 py-2 text-sm font-medium",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary",
					style: { background: "var(--gradient-cyber)" },
					children: "Save changes"
				})]
			})
		] })]
	})] });
}
function Section({ title, desc, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-1 text-lg font-semibold",
			children: title
		}),
		desc && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-5 text-sm text-muted-foreground",
			children: desc
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-3",
			children
		})
	] });
}
function Field({ label, defaultValue, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			defaultValue,
			disabled,
			className: "mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm outline-none focus:border-primary/60 disabled:opacity-60"
		})]
	});
}
function Toggle({ label, defaultOn }) {
	const [on, setOn] = (0, import_react.useState)(!!defaultOn);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => setOn(!on),
		className: "flex w-full items-center justify-between rounded-xl border border-border bg-foreground/5 px-4 py-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `relative h-6 w-11 rounded-full transition ${on ? "bg-primary" : "bg-muted"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${on ? "left-[22px]" : "left-0.5"}` })
		})]
	});
}
//#endregion
export { SettingsPage as component };
