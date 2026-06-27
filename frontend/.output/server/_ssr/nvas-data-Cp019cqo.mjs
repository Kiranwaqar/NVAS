import { t as ASSETS } from "./mock-data-ysx6VlRq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nvas-data-Cp019cqo.js
var VENDOR_PRODUCT = [
	{
		vendor: "Microsoft",
		product: "Exchange Server",
		versions: ["15.2.1118.7", "15.2.1118.40"]
	},
	{
		vendor: "OpenSSL",
		product: "OpenSSL",
		versions: ["3.0.7", "3.0.13"]
	},
	{
		vendor: "Apache",
		product: "HTTP Server",
		versions: ["2.4.49", "2.4.58"]
	},
	{
		vendor: "Cisco",
		product: "IOS XE",
		versions: ["17.9.1", "17.9.5"]
	},
	{
		vendor: "VMware",
		product: "vCenter Server",
		versions: ["8.0.1", "8.0.2"]
	},
	{
		vendor: "Fortinet",
		product: "FortiOS",
		versions: ["7.2.4", "7.2.7"]
	},
	{
		vendor: "Atlassian",
		product: "Confluence",
		versions: ["8.5.0", "8.5.5"]
	},
	{
		vendor: "Linux",
		product: "Kernel",
		versions: ["6.1.0", "6.1.74"]
	},
	{
		vendor: "Google",
		product: "Chrome",
		versions: ["121.0.6167.85", "121.0.6167.184"]
	},
	{
		vendor: "MOVEit",
		product: "Transfer",
		versions: ["15.0.1", "15.0.4"]
	}
];
var CVE_DETAILS = [
	{
		title: "Remote Code Execution via crafted HTTP request",
		plain: "An attacker can run their own commands on the server just by sending a specially crafted web request — no login required.",
		danger: "Allows full takeover of the host with the privileges of the web service. Often chained for lateral movement.",
		impact: "Full system compromise, data exfiltration, ransomware deployment, regulatory non-compliance.",
		cwe: "CWE-78",
		vector: "Network"
	},
	{
		title: "Authentication bypass in management interface",
		plain: "The admin login can be skipped entirely by manipulating a session parameter, giving full admin rights.",
		danger: "Grants administrative access without credentials. Mass-exploited in the wild.",
		impact: "Loss of confidentiality, integrity and availability across the affected service.",
		cwe: "CWE-287",
		vector: "Network"
	},
	{
		title: "Server-Side Request Forgery (SSRF)",
		plain: "The server can be tricked into making requests to internal systems on behalf of the attacker.",
		danger: "Used to pivot into internal cloud metadata services and exfiltrate credentials.",
		impact: "Exposure of internal infrastructure and cloud IAM credentials.",
		cwe: "CWE-918",
		vector: "Network"
	},
	{
		title: "Heap buffer overflow in TLS handshake",
		plain: "Malformed TLS data overwrites memory, which can crash the service or run attacker code.",
		danger: "Pre-authentication memory corruption with PoC exploit available.",
		impact: "Service outage or remote code execution on encrypted endpoints.",
		cwe: "CWE-122",
		vector: "Network"
	},
	{
		title: "Privilege escalation via kernel race condition",
		plain: "A local user can become root by racing two operations on the same memory page.",
		danger: "Turns any low-privilege foothold into a full system compromise.",
		impact: "Persistence, defense evasion, full host control.",
		cwe: "CWE-362",
		vector: "Local"
	}
];
function rand(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function clamp(n, lo, hi) {
	return Math.min(hi, Math.max(lo, n));
}
function severityFromCvss(c) {
	if (c >= 9) return "Critical";
	if (c >= 7) return "High";
	if (c >= 4) return "Medium";
	return "Low";
}
var VULNS = Array.from({ length: 42 }, (_, i) => {
	const vp = rand(VENDOR_PRODUCT);
	const det = rand(CVE_DETAILS);
	const cvss = +(3 + Math.random() * 7).toFixed(1);
	const epss = +Math.random().toFixed(3);
	const exploit = Math.random() > .55;
	const ai = clamp(Math.round(cvss * 8 + epss * 25 + (exploit ? 8 : 0) + (Math.random() * 8 - 4)), 5, 100);
	const sev = severityFromCvss(cvss);
	const asset = rand(ASSETS);
	const year = 2023 + Math.floor(Math.random() * 3);
	return {
		id: `vuln-${i + 1}`,
		cve: `CVE-${year}-${1e4 + Math.floor(Math.random() * 6e4)}`,
		cvss,
		epss,
		aiRisk: ai,
		severity: sev,
		exploitAvailable: exploit,
		exploitStatus: exploit ? rand(["Weaponized", "PoC"]) : rand(["Theoretical", "None"]),
		assetId: asset.id,
		vendor: vp.vendor,
		product: vp.product,
		installedVersion: vp.versions[0],
		fixedVersion: vp.versions[1],
		published: `${year}-${String(1 + Math.floor(Math.random() * 12)).padStart(2, "0")}-${String(1 + Math.floor(Math.random() * 27)).padStart(2, "0")}`,
		lastDetected: `${Math.floor(Math.random() * 14) + 1}d ago`,
		status: rand([
			"Open",
			"Open",
			"Open",
			"In Progress",
			"Fixed",
			"Verified"
		]),
		cwe: det.cwe,
		attackVector: det.vector,
		description: det.title,
		plainEnglish: det.plain,
		whyDangerous: det.danger,
		businessImpact: det.impact,
		references: [
			{
				label: "NVD",
				url: `https://nvd.nist.gov/vuln/detail/CVE-${year}-XXXX`
			},
			{
				label: "ExploitDB",
				url: "https://www.exploit-db.com/"
			},
			{
				label: "MITRE",
				url: "https://cve.mitre.org/"
			}
		],
		patchUrl: `https://${vp.vendor.toLowerCase()}.com/security/advisory`,
		vendorAdvisory: `${vp.vendor} Security Advisory ${year}-${100 + i}`
	};
});
function vulnsByAsset(assetId) {
	return VULNS.filter((v) => v.assetId === assetId);
}
var VULN_SUMMARY = {
	total: VULNS.length,
	critical: VULNS.filter((v) => v.severity === "Critical").length,
	high: VULNS.filter((v) => v.severity === "High").length,
	medium: VULNS.filter((v) => v.severity === "Medium").length,
	low: VULNS.filter((v) => v.severity === "Low").length,
	avgCvss: +(VULNS.reduce((s, v) => s + v.cvss, 0) / VULNS.length).toFixed(1),
	avgEpss: +(VULNS.reduce((s, v) => s + v.epss, 0) / VULNS.length).toFixed(3),
	avgAiRisk: Math.round(VULNS.reduce((s, v) => s + v.aiRisk, 0) / VULNS.length),
	assetsAtRisk: new Set(VULNS.map((v) => v.assetId)).size
};
var ENGINEERS = [
	"S. Khan",
	"J. Patel",
	"R. Silva",
	"M. Lee",
	"Admin"
];
var REMEDIATIONS = VULNS.slice(0, 24).map((v, i) => ({
	id: `rem-${i + 1}`,
	vulnId: v.id,
	cve: v.cve,
	asset: ASSETS.find((a) => a.id === v.assetId).hostname,
	patch: `${v.vendor} ${v.product} ${v.fixedVersion}`,
	priority: v.severity,
	estimatedTime: rand([
		"15 min",
		"30 min",
		"1 h",
		"2 h",
		"4 h"
	]),
	riskReduction: Math.round(40 + Math.random() * 55),
	patchStatus: rand([
		"Pending",
		"Pending",
		"Scheduled",
		"Applied",
		"Verified",
		"Failed"
	]),
	assigned: rand(ENGINEERS),
	compliance: Math.round(Math.random() * 100)
}));
var PATCH_PROGRESS = Array.from({ length: 12 }, (_, i) => ({
	month: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	][i],
	applied: 20 + Math.round(Math.random() * 40) + i * 4,
	verified: 12 + Math.round(Math.random() * 30) + i * 3
}));
var NOTIFICATIONS = [
	{
		id: "n-1",
		title: "Critical vulnerability detected",
		detail: "CVE-2024-21413 found on mail-edge-01 (Exchange Server)",
		ts: "2 min ago",
		severity: "danger",
		read: false,
		category: "Vulnerability"
	},
	{
		id: "n-2",
		title: "Verification scan completed",
		detail: "Patch verified for scanvas-host-019 — risk reduced 78%",
		ts: "14 min ago",
		severity: "success",
		read: false,
		category: "Patch"
	},
	{
		id: "n-3",
		title: "New asset discovered",
		detail: "10.0.2.47 (Ubiquiti AP) joined network segment DMZ",
		ts: "1 h ago",
		severity: "info",
		read: false,
		category: "Asset"
	},
	{
		id: "n-4",
		title: "Threat intelligence updated",
		detail: "EPSS scores recalculated for 312 CVEs",
		ts: "2 h ago",
		severity: "info",
		read: true,
		category: "Threat"
	},
	{
		id: "n-5",
		title: "Scan completed",
		detail: "Subnet 10.0.0.0/24 — 48 hosts, 27 findings",
		ts: "3 h ago",
		severity: "success",
		read: true,
		category: "Scan"
	},
	{
		id: "n-6",
		title: "Newly exploited in the wild",
		detail: "CVE-2024-3094 now marked Weaponized by intel feed",
		ts: "6 h ago",
		severity: "warning",
		read: true,
		category: "Threat"
	},
	{
		id: "n-7",
		title: "High-risk device flagged",
		detail: "fw-core-02 AI risk score rose to 91 (+12)",
		ts: "11 h ago",
		severity: "danger",
		read: true,
		category: "Asset"
	},
	{
		id: "n-8",
		title: "Scan started",
		detail: "Authenticated scan launched on production VLAN",
		ts: "1 d ago",
		severity: "info",
		read: true,
		category: "Scan"
	}
];
var THREAT_INTEL = [
	{
		cve: "CVE-2024-21413",
		vendor: "Microsoft",
		epss: .974,
		status: "Weaponized",
		updated: "1 h ago",
		note: "Mass scanning observed across EU region"
	},
	{
		cve: "CVE-2024-3094",
		vendor: "xz/Linux",
		epss: .961,
		status: "Weaponized",
		updated: "3 h ago",
		note: "Backdoor confirmed in upstream tarballs"
	},
	{
		cve: "CVE-2024-1086",
		vendor: "Linux",
		epss: .842,
		status: "PoC",
		updated: "6 h ago",
		note: "Kernel UAF — public exploit on GitHub"
	},
	{
		cve: "CVE-2023-50164",
		vendor: "Apache",
		epss: .795,
		status: "Weaponized",
		updated: "9 h ago",
		note: "Struts2 file upload RCE — actively exploited"
	},
	{
		cve: "CVE-2024-23897",
		vendor: "Jenkins",
		epss: .733,
		status: "Weaponized",
		updated: "12 h ago",
		note: "Arbitrary file read; ransomware uplift"
	},
	{
		cve: "CVE-2023-4863",
		vendor: "Google",
		epss: .682,
		status: "PoC",
		updated: "1 d ago",
		note: "libwebp heap overflow — patch widely available"
	}
];
var AI_RISK_TREND = Array.from({ length: 12 }, (_, i) => ({
	month: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	][i],
	composite: Math.round(70 - i * 1.8 + Math.sin(i) * 5),
	health: Math.round(60 + i * 2 + Math.cos(i) * 4)
}));
//#endregion
export { THREAT_INTEL as a, vulnsByAsset as c, REMEDIATIONS as i, NOTIFICATIONS as n, VULNS as o, PATCH_PROGRESS as r, VULN_SUMMARY as s, AI_RISK_TREND as t };
