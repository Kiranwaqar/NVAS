import { a as __toESM } from "../_runtime.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as logo_default } from "./logo-BrNkwB4c.mjs";
import { I as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { tt as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as setAuthToken, n as authAPI } from "./api-CIz8wyN8.mjs";
import { n as CyberBackground } from "./cyber-background-C8tE6YLU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-CgxOvHXB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function strengthOf(pw) {
	let s = 0;
	if (pw.length >= 8) s++;
	if (/[A-Z]/.test(pw)) s++;
	if (/[0-9]/.test(pw)) s++;
	if (/[^A-Za-z0-9]/.test(pw)) s++;
	return s;
}
function RegisterPage() {
	const nav = useNavigate();
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [username, setUsername] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [pw, setPw] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const score = (0, import_react.useMemo)(() => strengthOf(pw), [pw]);
	const labels = [
		"Weak",
		"Fair",
		"Good",
		"Strong",
		"Excellent"
	];
	const colors = [
		"bg-danger",
		"bg-warning",
		"bg-secondary",
		"bg-accent",
		"bg-success"
	];
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		if (!fullName || !username || !email || !pw || !confirm) {
			setError("Please fill in all fields.");
			return;
		}
		if (pw !== confirm) {
			setError("Passwords do not match.");
			return;
		}
		setLoading(true);
		try {
			await authAPI.register(username, email, pw);
			setAuthToken((await authAPI.login(username, pw)).access_token);
			localStorage.setItem("scanvas-user", JSON.stringify({
				username,
				email,
				fullName
			}));
			nav({ to: "/app/dashboard" });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Registration failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto flex min-h-screen max-w-3xl items-center justify-center p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				animate: {
					opacity: 1,
					y: 0
				},
				className: "w-full rounded-3xl border border-border glass p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "mb-6 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Scanvas",
							className: "h-9 w-9"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm font-bold",
							children: ["Scan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "vas"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "Create account"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-bold",
						children: "Create your Scanvas workspace"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Provision your security operations console in seconds."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2",
						onSubmit: handleSubmit,
						children: [
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-span-full rounded-xl border border-danger/20 bg-danger/10 p-3 text-sm text-danger",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Full Name",
								placeholder: "Jane Doe",
								value: fullName,
								onChange: setFullName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Username",
								placeholder: "j.doe",
								value: username,
								onChange: setUsername
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								type: "email",
								placeholder: "jane@company.io",
								value: email,
								onChange: setEmail
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Password",
								type: "password",
								placeholder: "••••••••",
								value: pw,
								onChange: setPw
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Confirm Password",
								type: "password",
								placeholder: "••••••••",
								value: confirm,
								onChange: setConfirm
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Password strength" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pw ? labels[Math.max(0, score - 1)] : "—" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 grid grid-cols-4 gap-1.5",
										children: [
											0,
											1,
											2,
											3
										].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1.5 rounded-full ${i < score ? colors[score - 1] : "bg-muted"}` }, i))
									}),
									confirm && pw !== confirm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2 text-xs text-danger",
										children: "Passwords do not match"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: loading,
								className: "group sm:col-span-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-primary-foreground glow-primary transition disabled:opacity-70",
								style: { background: "var(--gradient-cyber)" },
								children: [loading ? "Creating account..." : "Create account", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-center text-xs text-muted-foreground",
						children: ["Already have an account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/login",
							className: "text-accent hover:underline",
							children: "Sign in"
						})]
					})
				]
			})
		})]
	});
}
function Field({ label, type = "text", placeholder, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			placeholder,
			value,
			onChange: onChange ? (e) => onChange(e.target.value) : void 0,
			className: "mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm outline-none focus:border-primary/60"
		})]
	});
}
//#endregion
export { RegisterPage as component };
