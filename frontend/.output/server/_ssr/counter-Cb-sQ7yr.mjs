import { a as __toESM } from "../_runtime.mjs";
import { a as motion, i as useMotionValue, n as useInView, r as useTransform, t as animate } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./app-shell-JbBaxSBa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/counter-Cb-sQ7yr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, suffix = "", duration = 1.6, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const mv = useMotionValue(0);
	const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString() + suffix);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		return animate(mv, to, {
			duration,
			ease: "easeOut"
		}).stop;
	}, [
		inView,
		to,
		duration,
		mv
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		ref,
		className: cn("tabular-nums", className),
		children: rounded
	});
}
//#endregion
export { Counter as t };
