import { a as __toESM } from "../_runtime.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as logo_default } from "./logo-BrNkwB4c.mjs";
import { I as useNavigate, g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { F as Lock, N as Mail, tt as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as setAuthToken, n as authAPI } from "./api-CIz8wyN8.mjs";
import { n as CyberBackground } from "./cyber-background-C8tE6YLU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-mo4B8dei.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LoginPage() {
	const nav = useNavigate();
	const [username, setUsername] = (0, import_react.useState)("admin@scanvas.io");
	const [password, setPassword] = (0, import_react.useState)("password");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen overflow-hidden bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CyberBackground, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative grid min-h-screen lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden flex-col justify-between border-r border-border p-10 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5",
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
							children: "Cyber Intelligence"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative flex flex-1 items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									animate: {
										scale: [
											1,
											1.08,
											1
										],
										opacity: [
											.6,
											1,
											.6
										]
									},
									transition: {
										duration: 2.4,
										repeat: Infinity
									},
									className: "absolute inset-0 rounded-full",
									style: {
										background: "var(--gradient-cyber)",
										filter: "blur(40px)"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "relative grid h-40 w-40 place-items-center rounded-full border border-border glass",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-16 w-16 text-accent" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "absolute -inset-16",
									viewBox: "0 0 300 300",
									children: [
										60,
										90,
										120
									].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "150",
										cy: "150",
										r,
										fill: "none",
										stroke: "var(--color-primary)",
										strokeOpacity: .2,
										strokeDasharray: "2 6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateTransform", {
											attributeName: "transform",
											type: "rotate",
											from: `0 150 150`,
											to: `${i % 2 ? -360 : 360} 150 150`,
											dur: `${8 + i * 4}s`,
											repeatCount: "indefinite"
										})
									}, i))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "max-w-md text-sm text-muted-foreground",
						children: ["\"Scanvas turns weeks of vulnerability triage into hours. It's the SOC platform we wish we'd built ourselves.\"", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs",
							children: "— Head of Security Operations, Fortune 500"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center p-6 sm:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "w-full max-w-md rounded-3xl border border-border glass p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "mb-6 flex items-center gap-2 lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_default,
								alt: "Scanvas",
								className: "h-9 w-9"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm font-bold",
								children: ["Scan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "vas"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "text-2xl font-bold",
							children: "Welcome back"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Sign in to your Scanvas security console."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-6 space-y-4",
							onSubmit: async (e) => {
								e.preventDefault();
								setLoading(true);
								setError(null);
								try {
									setAuthToken((await authAPI.login(username, password)).access_token);
									localStorage.setItem("scanvas-user", JSON.stringify({ username }));
									nav({ to: "/app/dashboard" });
								} catch (err) {
									setError(err instanceof Error ? err.message : "Login failed");
								} finally {
									setLoading(false);
								}
							},
							children: [
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-xl border border-danger/20 bg-danger/10 p-3 text-sm text-danger",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Username or Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: username,
										onChange: (e) => setUsername(e.target.value),
										required: true,
										className: "h-11 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none focus:border-primary/60"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-medium text-muted-foreground",
										children: "Password"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#",
										className: "text-xs text-accent hover:underline",
										children: "Forgot password?"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative mt-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										required: true,
										className: "h-11 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none focus:border-primary/60"
									})]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										defaultChecked: true,
										className: "h-4 w-4 rounded border-input"
									}), " Remember me on this device"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									disabled: loading,
									className: "group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-primary-foreground glow-primary transition disabled:opacity-70",
									style: { background: "var(--gradient-cyber)" },
									children: [loading ? "Authenticating..." : "Login", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-center text-xs text-muted-foreground",
							children: ["No account? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/register",
								className: "text-accent hover:underline",
								children: "Create one"
							})]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { LoginPage as component };
