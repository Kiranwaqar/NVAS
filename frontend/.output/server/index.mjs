globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/activity-YZnOiPM4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"de-cfdhTsdoHYW6mYoJxdUTFDWd2CE\"",
		"mtime": "2026-06-27T17:20:03.064Z",
		"size": 222,
		"path": "../public/assets/activity-YZnOiPM4.js"
	},
	"/assets/api-DVzHn0LG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71e-3b2/nFrJI2HtHV5B3w1Sxktx2a0\"",
		"mtime": "2026-06-27T17:20:03.064Z",
		"size": 1822,
		"path": "../public/assets/api-DVzHn0LG.js"
	},
	"/assets/app-DXlzrgdT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c5-0rLGSOvnF1+O6gu8JlH4xS4vnE8\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 197,
		"path": "../public/assets/app-DXlzrgdT.js"
	},
	"/assets/AnimatePresence-CDvR0aRX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11f5-hdWg3Kf44Gk8Begf3ZrrEz9R3DQ\"",
		"mtime": "2026-06-27T17:20:03.059Z",
		"size": 4597,
		"path": "../public/assets/AnimatePresence-CDvR0aRX.js"
	},
	"/assets/app.analytics-C0rzSFg2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a4d-Y99S0HBs3lVWIHhp8lqy5pbufcY\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 6733,
		"path": "../public/assets/app.analytics-C0rzSFg2.js"
	},
	"/assets/app-shell-QNBim9yn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9da5-FR6mnJD2KsextI8jnh1Csp6iPqs\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 40357,
		"path": "../public/assets/app-shell-QNBim9yn.js"
	},
	"/assets/app.assets-BMQAw-ok.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"136e-TNNM2lnCakQk2HUNiwh0R4jHU4c\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 4974,
		"path": "../public/assets/app.assets-BMQAw-ok.js"
	},
	"/assets/app.assets._id-DK0IXjMv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"224a-UAteXTfSTII3Nnu9s/lI7EwzGvA\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 8778,
		"path": "../public/assets/app.assets._id-DK0IXjMv.js"
	},
	"/assets/app.network-BajTX2me.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16bf-3LWbgmfpqWaCovbNI9LE91qAkjg\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 5823,
		"path": "../public/assets/app.network-BajTX2me.js"
	},
	"/assets/app.dashboard-3XErjeYc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"59f6-+3CdHnAWPUMvjadpiapuIsYuVu4\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 23030,
		"path": "../public/assets/app.dashboard-3XErjeYc.js"
	},
	"/assets/app.notifications-w8Wa8wWw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c00-Hsc2teOT+JpRHMt7t8rciZtt/ak\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 3072,
		"path": "../public/assets/app.notifications-w8Wa8wWw.js"
	},
	"/assets/app.profile-BiZV7nNa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bed-JoXWdWuXghc+0HaLGCIPKFRArpg\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 3053,
		"path": "../public/assets/app.profile-BiZV7nNa.js"
	},
	"/assets/app.remediation-Bya-KITm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"196d-tulHkAW6Xvzjzc0RADweOHrorEM\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 6509,
		"path": "../public/assets/app.remediation-Bya-KITm.js"
	},
	"/assets/app.reports-FUJHBt3l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23df-veoQkJJLqs65DVkW0hhZ4e4z2Cs\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 9183,
		"path": "../public/assets/app.reports-FUJHBt3l.js"
	},
	"/assets/app.scan-CBP3Iyvs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bff-jxUjyyTbuzUt0ArABJc9SZVegzc\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 7167,
		"path": "../public/assets/app.scan-CBP3Iyvs.js"
	},
	"/assets/app.risk-D2ZE1d_P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"443d-+sO6eI8AvBrfmEI5NNLNzvcgvZE\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 17469,
		"path": "../public/assets/app.risk-D2ZE1d_P.js"
	},
	"/assets/app.vulnerabilities-C2JrAjAC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3345-3cNVlxDJvMje0P3MIkP5LIsnRwg\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 13125,
		"path": "../public/assets/app.vulnerabilities-C2JrAjAC.js"
	},
	"/assets/app.threat-intel-TtthOa0L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"108b-AhsE9E4hcM/dQXFWMLJ7bj1TMhs\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 4235,
		"path": "../public/assets/app.threat-intel-TtthOa0L.js"
	},
	"/assets/app.settings-iuNEDxD3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1915-ZrEys/0w5qRR4Tyw5apoiYfLG0I\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 6421,
		"path": "../public/assets/app.settings-iuNEDxD3.js"
	},
	"/assets/AreaChart-DfW-NtrD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ac1-wCAXw244iYTgji32V7UnXXk+7/Q\"",
		"mtime": "2026-06-27T17:20:03.060Z",
		"size": 10945,
		"path": "../public/assets/AreaChart-DfW-NtrD.js"
	},
	"/assets/BarChart-BA4CF-k9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"138-oZdr8bixFNrLEOIh1zHgdNOiTCM\"",
		"mtime": "2026-06-27T17:20:03.061Z",
		"size": 312,
		"path": "../public/assets/BarChart-BA4CF-k9.js"
	},
	"/assets/arrow-right-BzkCraSy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"99-x0i4oHdp853xHPs4wGrkKyPwMgk\"",
		"mtime": "2026-06-27T17:20:03.066Z",
		"size": 153,
		"path": "../public/assets/arrow-right-BzkCraSy.js"
	},
	"/assets/clock-BlQDOjEN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d-IX+O5B8a+zF3IEUDzPuPX7SQ9hY\"",
		"mtime": "2026-06-27T17:20:03.079Z",
		"size": 157,
		"path": "../public/assets/clock-BlQDOjEN.js"
	},
	"/assets/circle-check-A0ZFQXsG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6-ZjSRAJ7Eqy7r9hO4z6wnleCT/AQ\"",
		"mtime": "2026-06-27T17:20:03.078Z",
		"size": 166,
		"path": "../public/assets/circle-check-A0ZFQXsG.js"
	},
	"/assets/counter-BRmtyiyw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23a7-MlO+KPRDjTzNCp0tS9wVQ6ArKBI\"",
		"mtime": "2026-06-27T17:20:03.080Z",
		"size": 9127,
		"path": "../public/assets/counter-BRmtyiyw.js"
	},
	"/assets/cyber-background-CDC0Xonv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cc9-mtRdNooiVBbrPZ7wBNGx6RTzrX8\"",
		"mtime": "2026-06-27T17:20:03.082Z",
		"size": 3273,
		"path": "../public/assets/cyber-background-CDC0Xonv.js"
	},
	"/assets/cpu-DeRApw6S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"276-SaXd20CwaZOvY4jwO1eSErk8XSA\"",
		"mtime": "2026-06-27T17:20:03.081Z",
		"size": 630,
		"path": "../public/assets/cpu-DeRApw6S.js"
	},
	"/assets/download-QSYIqJVY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dc-NeFplItEBBQxaGjuDIIYZWLy22M\"",
		"mtime": "2026-06-27T17:20:03.084Z",
		"size": 220,
		"path": "../public/assets/download-QSYIqJVY.js"
	},
	"/assets/dist-CfCcw4ce.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49d0-1/fclehGLsWrrUqlBGM2H2MtQqg\"",
		"mtime": "2026-06-27T17:20:03.083Z",
		"size": 18896,
		"path": "../public/assets/dist-CfCcw4ce.js"
	},
	"/assets/funnel-Ssqd5cqa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f4-UFJj3aSWAKEjvirR4yFlBCl06xw\"",
		"mtime": "2026-06-27T17:20:03.085Z",
		"size": 244,
		"path": "../public/assets/funnel-Ssqd5cqa.js"
	},
	"/assets/hard-drive-LLpfPUHh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"178-5I88QAA7FpiqoI4BgjG2T0Z7XsM\"",
		"mtime": "2026-06-27T17:20:03.086Z",
		"size": 376,
		"path": "../public/assets/hard-drive-LLpfPUHh.js"
	},
	"/assets/external-link-CJRb3e4W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ef-bYJ+DoAuY0g0CcreibWCYrkpVvc\"",
		"mtime": "2026-06-27T17:20:03.084Z",
		"size": 239,
		"path": "../public/assets/external-link-CJRb3e4W.js"
	},
	"/assets/LineChart-DCq8yOn_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2afa-7TgDPYHD9XKf3t3gUKa9gUInosk\"",
		"mtime": "2026-06-27T17:20:03.062Z",
		"size": 11002,
		"path": "../public/assets/LineChart-DCq8yOn_.js"
	},
	"/assets/link-f9JKqC-U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8a5c-WkG1F+C56jtB8vprOZLhoTVBD48\"",
		"mtime": "2026-06-27T17:20:03.087Z",
		"size": 35420,
		"path": "../public/assets/link-f9JKqC-U.js"
	},
	"/assets/lock-JhgH7Vu2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c2-bv65StPyFEM76xAB4ZbGwvJ8cMo\"",
		"mtime": "2026-06-27T17:20:03.087Z",
		"size": 194,
		"path": "../public/assets/lock-JhgH7Vu2.js"
	},
	"/assets/index-BQ72ilFL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d932-SkRE5qMgUXiSwAdIMA5fMNqNN30\"",
		"mtime": "2026-06-27T17:20:03.059Z",
		"size": 317746,
		"path": "../public/assets/index-BQ72ilFL.js"
	},
	"/assets/generateCategoricalChart-SSgTLW2f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a8c0-bFNfvDYkIn19GiwA7Kn4GN3eMBc\"",
		"mtime": "2026-06-27T17:20:03.086Z",
		"size": 370880,
		"path": "../public/assets/generateCategoricalChart-SSgTLW2f.js"
	},
	"/assets/mail-tLAu087f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c9-gEdPVl+YCui6WArqfrdTYa3dC68\"",
		"mtime": "2026-06-27T17:20:03.090Z",
		"size": 201,
		"path": "../public/assets/mail-tLAu087f.js"
	},
	"/assets/login-XNjRyj4Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1612-rHWKx1R950V7TELX0KTXbQgmwX8\"",
		"mtime": "2026-06-27T17:20:03.088Z",
		"size": 5650,
		"path": "../public/assets/login-XNjRyj4Q.js"
	},
	"/assets/nvas-data-vzzssani.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d10-+6l4TxYbnCxYH9GvXwkUoclz7Ug\"",
		"mtime": "2026-06-27T17:20:03.092Z",
		"size": 7440,
		"path": "../public/assets/nvas-data-vzzssani.js"
	},
	"/assets/mock-data-gv3angHg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b84-F0/8eKVQqqYt/Ho8QITNo5+P/+c\"",
		"mtime": "2026-06-27T17:20:03.091Z",
		"size": 2948,
		"path": "../public/assets/mock-data-gv3angHg.js"
	},
	"/assets/logo-DANru6lR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1de33-m7NoX6azUQPuKI76eBzG9Yb5tgY\"",
		"mtime": "2026-06-27T17:20:03.088Z",
		"size": 122419,
		"path": "../public/assets/logo-DANru6lR.js"
	},
	"/assets/PieChart-B_meZxA2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d7d-6+3FO5FuxrUu8DqxyCZDE3UXA1k\"",
		"mtime": "2026-06-27T17:20:03.063Z",
		"size": 11645,
		"path": "../public/assets/PieChart-B_meZxA2.js"
	},
	"/assets/PolarAngleAxis-syd_bQQf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3819-Bu2TVSe/jNbflB16zbUkDRXyD+Y\"",
		"mtime": "2026-06-27T17:20:03.064Z",
		"size": 14361,
		"path": "../public/assets/PolarAngleAxis-syd_bQQf.js"
	},
	"/assets/logo-CP8qvmJb.svg": {
		"type": "image/svg+xml",
		"etag": "\"2da41-OTLQo3Y3GGWm/fH66o32LV8mxQ8\"",
		"mtime": "2026-06-27T17:20:03.103Z",
		"size": 186945,
		"path": "../public/assets/logo-CP8qvmJb.svg"
	},
	"/assets/redirect-DnLf-3Zd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"284-OKGUrSof3kF11Yz1L80m8oAVyB4\"",
		"mtime": "2026-06-27T17:20:03.093Z",
		"size": 644,
		"path": "../public/assets/redirect-DnLf-3Zd.js"
	},
	"/assets/refresh-cw-DN-sdKQK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"135-4FbCICxJ5wIbNQkboXl+SjJNTas\"",
		"mtime": "2026-06-27T17:20:03.093Z",
		"size": 309,
		"path": "../public/assets/refresh-cw-DN-sdKQK.js"
	},
	"/assets/register-D-zW5ubV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"117a-PMfpBhaVSTarYFfrphFxX6cYopg\"",
		"mtime": "2026-06-27T17:20:03.094Z",
		"size": 4474,
		"path": "../public/assets/register-D-zW5ubV.js"
	},
	"/assets/server-cog-B5kdR05j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7d6-1f2WtPW/xPzYU6UZgE4Uhj6s1i4\"",
		"mtime": "2026-06-27T17:20:03.097Z",
		"size": 2006,
		"path": "../public/assets/server-cog-B5kdR05j.js"
	},
	"/assets/routes--eEnT4nr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f29-2EM5hjzo1LfeXHbz6dIQteNoeBo\"",
		"mtime": "2026-06-27T17:20:03.095Z",
		"size": 12073,
		"path": "../public/assets/routes--eEnT4nr.js"
	},
	"/assets/server-DX9l7U6i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"146-tE+R5hQGDYF8pSz32GQbt4+rQZA\"",
		"mtime": "2026-06-27T17:20:03.097Z",
		"size": 326,
		"path": "../public/assets/server-DX9l7U6i.js"
	},
	"/assets/shield-Cxr72KCz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"104-jO1fc8SWjcxiU4eGGTjuuTBDGn0\"",
		"mtime": "2026-06-27T17:20:03.098Z",
		"size": 260,
		"path": "../public/assets/shield-Cxr72KCz.js"
	},
	"/assets/shield-check-BW_a6EPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"134-IV7kppN2dF7JQrFCfqo832/sDdE\"",
		"mtime": "2026-06-27T17:20:03.099Z",
		"size": 308,
		"path": "../public/assets/shield-check-BW_a6EPT.js"
	},
	"/assets/ui-dzJhglry.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"655-yfbxr3alRkiTMX0d8bV205eBKnw\"",
		"mtime": "2026-06-27T17:20:03.100Z",
		"size": 1621,
		"path": "../public/assets/ui-dzJhglry.js"
	},
	"/assets/trash-2-PCxFsUE1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"207-jya035N4wPIkEdwm9iNUcrkI010\"",
		"mtime": "2026-06-27T17:20:03.100Z",
		"size": 519,
		"path": "../public/assets/trash-2-PCxFsUE1.js"
	},
	"/assets/styles-dY0DVs-X.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16828-IbycsFFIAGO6Omtl55+a6Nh8ODY\"",
		"mtime": "2026-06-27T17:20:03.104Z",
		"size": 92200,
		"path": "../public/assets/styles-dY0DVs-X.css"
	},
	"/assets/wifi-BJ2OMepZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10c-Iaef8dCV0JugDTrFvvcjkYiguo4\"",
		"mtime": "2026-06-27T17:20:03.102Z",
		"size": 268,
		"path": "../public/assets/wifi-BJ2OMepZ.js"
	},
	"/assets/zap-Bf-sOMkr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-Ot0NtNQ0lLugGiPLeT6PNckHzdU\"",
		"mtime": "2026-06-27T17:20:03.102Z",
		"size": 250,
		"path": "../public/assets/zap-Bf-sOMkr.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_9aelvb = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_9aelvb
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
