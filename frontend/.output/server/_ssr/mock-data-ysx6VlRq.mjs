//#region node_modules/.nitro/vite/services/ssr/assets/mock-data-ysx6VlRq.js
var vendors = [
	"Cisco",
	"Dell",
	"HP",
	"Apple",
	"Lenovo",
	"Ubiquiti",
	"Fortinet",
	"Palo Alto",
	"Synology"
];
var oses = [
	"Ubuntu 22.04",
	"Windows Server 2022",
	"macOS 14",
	"Debian 12",
	"Cisco IOS 15.7",
	"FortiOS 7.2",
	"Windows 11"
];
var risks = [
	"Critical",
	"High",
	"Medium",
	"Low"
];
var types = [
	"Server",
	"Router",
	"Switch",
	"Client",
	"IoT",
	"Firewall"
];
var commonPorts = [
	{
		port: 22,
		protocol: "TCP",
		service: "SSH",
		version: "OpenSSH 9.0"
	},
	{
		port: 80,
		protocol: "TCP",
		service: "HTTP",
		version: "nginx 1.24"
	},
	{
		port: 443,
		protocol: "TCP",
		service: "HTTPS",
		version: "nginx 1.24"
	},
	{
		port: 3306,
		protocol: "TCP",
		service: "MySQL",
		version: "MySQL 8.0"
	},
	{
		port: 5432,
		protocol: "TCP",
		service: "PostgreSQL",
		version: "PG 16.1"
	},
	{
		port: 3389,
		protocol: "TCP",
		service: "RDP",
		version: "MS-RDP"
	},
	{
		port: 53,
		protocol: "UDP",
		service: "DNS",
		version: "BIND 9.18"
	},
	{
		port: 161,
		protocol: "UDP",
		service: "SNMP",
		version: "v2c"
	}
];
function rand(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
var ASSETS = Array.from({ length: 48 }, (_, i) => {
	const portCount = 2 + Math.floor(Math.random() * 5);
	return {
		id: `asset-${i + 1}`,
		ip: `10.0.${Math.floor(i / 16)}.${i % 254 + 1}`,
		hostname: `scanvas-host-${(i + 1).toString().padStart(3, "0")}`,
		mac: Array.from({ length: 6 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, "0")).join(":").toUpperCase(),
		vendor: rand(vendors),
		os: rand(oses),
		risk: rand(risks),
		status: Math.random() > .15 ? "Online" : "Offline",
		lastScan: `${Math.floor(Math.random() * 12) + 1}h ago`,
		type: rand(types),
		openPorts: commonPorts.slice(0, portCount).map((p) => ({
			...p,
			state: "open"
		}))
	};
});
var STATS = {
	totalAssets: 1284,
	onlineHosts: 1149,
	openPorts: 4321,
	criticalVulns: 27,
	runningScans: 3,
	completedScans: 142,
	avgRisk: 38,
	networkHealth: 92
};
var ASSETS_GROWTH = Array.from({ length: 12 }, (_, i) => ({
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
	assets: 400 + Math.round(Math.random() * 100) + i * 70,
	scans: 80 + Math.round(Math.random() * 40) + i * 12
}));
var TRAFFIC = Array.from({ length: 24 }, (_, i) => ({
	hour: `${i}:00`,
	inbound: Math.round(40 + Math.random() * 90 + Math.sin(i / 3) * 30),
	outbound: Math.round(30 + Math.random() * 80 + Math.cos(i / 3) * 25)
}));
var OS_DIST = [
	{
		name: "Linux",
		value: 48
	},
	{
		name: "Windows",
		value: 31
	},
	{
		name: "macOS",
		value: 12
	},
	{
		name: "Network OS",
		value: 6
	},
	{
		name: "Other",
		value: 3
	}
];
var RISK_DIST = [
	{
		name: "Critical",
		value: 27,
		color: "var(--color-danger)"
	},
	{
		name: "High",
		value: 64,
		color: "var(--color-warning)"
	},
	{
		name: "Medium",
		value: 142,
		color: "var(--color-secondary)"
	},
	{
		name: "Low",
		value: 320,
		color: "var(--color-success)"
	}
];
var TOP_PORTS = [
	{
		port: "443",
		count: 312
	},
	{
		port: "80",
		count: 264
	},
	{
		port: "22",
		count: 188
	},
	{
		port: "3389",
		count: 96
	},
	{
		port: "53",
		count: 84
	},
	{
		port: "445",
		count: 72
	},
	{
		port: "3306",
		count: 41
	}
];
var SECURITY_RADAR = [
	{
		area: "Patching",
		score: 82
	},
	{
		area: "Network",
		score: 74
	},
	{
		area: "Identity",
		score: 88
	},
	{
		area: "Endpoint",
		score: 70
	},
	{
		area: "Data",
		score: 65
	},
	{
		area: "Cloud",
		score: 78
	}
];
var REPORTS = [
	{
		id: "RPT-1042",
		name: "Weekly Vulnerability Summary",
		date: "2026-06-25",
		type: "PDF",
		size: "1.4 MB"
	},
	{
		id: "RPT-1041",
		name: "Asset Inventory Export",
		date: "2026-06-24",
		type: "CSV",
		size: "812 KB"
	},
	{
		id: "RPT-1040",
		name: "Critical Findings Snapshot",
		date: "2026-06-22",
		type: "JSON",
		size: "344 KB"
	},
	{
		id: "RPT-1039",
		name: "Compliance Audit Q2",
		date: "2026-06-18",
		type: "PDF",
		size: "3.1 MB"
	}
];
//#endregion
export { RISK_DIST as a, TOP_PORTS as c, REPORTS as i, TRAFFIC as l, ASSETS_GROWTH as n, SECURITY_RADAR as o, OS_DIST as r, STATS as s, ASSETS as t };
