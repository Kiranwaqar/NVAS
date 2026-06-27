import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { N as Mail, X as Briefcase, g as ShieldCheck, q as Clock } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./app-shell-JbBaxSBa.mjs";
import { n as Card, t as Badge } from "./ui-wZjKdO0q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.profile-DfC7Isg-.js
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "My Profile",
		subtitle: "Manage your personal information and credentials."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-[320px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto h-28 w-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 rounded-full opacity-50 blur-xl",
						style: { background: "var(--gradient-cyber)" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid h-28 w-28 place-items-center rounded-full border border-border text-2xl font-bold text-white",
						style: { background: "var(--gradient-cyber)" },
						children: "SA"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-lg font-bold",
					children: "Security Admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-muted-foreground",
					children: "@admin"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "info",
					children: "Administrator"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-2 text-left text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: Mail,
							k: "Email",
							v: "admin@scanvas.io"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: Briefcase,
							k: "Department",
							v: "Security Operations"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: ShieldCheck,
							k: "Role",
							v: "Administrator"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							icon: Clock,
							k: "Last Login",
							v: "2 minutes ago"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-lg font-semibold",
				children: "Change password"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 text-sm text-muted-foreground",
				children: "Update your password to keep your account secure."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Current password",
						type: "password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "New password",
						type: "password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Confirm new password",
						type: "password"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary",
					style: { background: "var(--gradient-cyber)" },
					children: "Update password"
				})
			})
		] })]
	})] });
}
function Row({ icon: Icon, k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-xl border border-border bg-foreground/5 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex items-center gap-2 text-xs text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }),
				" ",
				k
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: v
		})]
	});
}
function Field({ label, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			className: "mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm outline-none focus:border-primary/60"
		})]
	});
}
//#endregion
export { ProfilePage as component };
