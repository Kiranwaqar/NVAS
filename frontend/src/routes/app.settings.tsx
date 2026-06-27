import { createFileRoute } from "@tanstack/react-router";
import { Bell, Palette, ScanLine, KeyRound, Shield, User } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card } from "@/components/nvas/ui";
import { useTheme } from "@/lib/theme";
import { getStoredUser, StoredUser } from "@/lib/api";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Settings · Scanvas" }] }),
  component: SettingsPage,
});

const TABS = [
  { id: "profile", label: "Profile", icon: User },
  { id: "theme", label: "Theme", icon: Palette },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "scan", label: "Scan Config", icon: ScanLine },
  { id: "api", label: "API", icon: KeyRound },
  { id: "security", label: "Security", icon: Shield },
];

function SettingsPage() {
  const [tab, setTab] = useState("profile");
  const { theme, setTheme } = useTheme();
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  const displayName = user?.fullName || user?.username || "Security Admin";
  const displayEmail = user?.email || user?.username || "nobody@scanvas.io";
  const displayRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "User";

  return (
    <div>
      <PageHeader title="Settings" subtitle="Configure your Scanvas workspace, scans and security preferences." />

      <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
        <Card className="h-fit p-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition ${tab === t.id ? "bg-primary/15 text-foreground" : "text-muted-foreground hover:bg-foreground/5"}`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </Card>

        <Card>
          {tab === "profile" && (
            <Section title="Profile Settings" desc="Personal details visible to your team.">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" defaultValue={displayName} />
                <Field label="Email" defaultValue={displayEmail} />
                <Field label="Department" defaultValue="Security Operations" />
                <Field label="Role" defaultValue={displayRole} disabled />
              </div>
            </Section>
          )}
          {tab === "theme" && (
            <Section title="Theme" desc="Switch between dark (default) and light appearance.">
              <div className="grid grid-cols-2 gap-3">
                {(["dark", "light"] as const).map((t) => (
                  <button key={t} onClick={() => setTheme(t)} className={`rounded-2xl border p-4 text-left transition ${theme === t ? "border-primary ring-2 ring-primary/40" : "border-border"}`}>
                    <div className={`mb-3 h-20 rounded-xl ${t === "dark" ? "bg-[oklch(0.18_0.04_260)]" : "bg-[oklch(0.99_0.005_240)]"} border border-border`} />
                    <div className="font-semibold capitalize">{t}</div>
                    <div className="text-xs text-muted-foreground">{t === "dark" ? "Recommended for SOC environments" : "Bright environments and presentations"}</div>
                  </button>
                ))}
              </div>
            </Section>
          )}
          {tab === "notifications" && (
            <Section title="Notifications" desc="Choose which events trigger alerts.">
              {["Critical vulnerability detected", "Scan completed", "New asset discovered", "Weekly summary digest"].map((n) => (
                <Toggle key={n} label={n} defaultOn={n.includes("Critical") || n.includes("Weekly")} />
              ))}
            </Section>
          )}
          {tab === "scan" && (
            <Section title="Scan Configuration" desc="Defaults applied to new scans.">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Default subnet" defaultValue="10.0.0.0/16" />
                <Field label="Workers" defaultValue="64" />
                <Field label="Port range" defaultValue="1-65535" />
                <Field label="Timeout (ms)" defaultValue="1500" />
              </div>
            </Section>
          )}
          {tab === "api" && (
            <Section title="API Configuration" desc="Programmatic access to Scanvas.">
              <Field label="API endpoint" defaultValue="https://api.scanvas.io/v1" />
              <Field label="API key" defaultValue="scanvas_sk_***********************" />
            </Section>
          )}
          {tab === "security" && (
            <Section title="Security Preferences" desc="Hardening for your workspace.">
              <Toggle label="Require MFA for all users" defaultOn />
              <Toggle label="IP allowlist enforcement" defaultOn />
              <Toggle label="Auto-logout after 30 minutes idle" />
            </Section>
          )}
          <div className="mt-6 flex justify-end gap-2">
            <button className="rounded-xl border border-border bg-foreground/5 px-4 py-2 text-sm font-medium">Cancel</button>
            <button className="rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary" style={{ background: "var(--gradient-cyber)" }}>Save changes</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 text-lg font-semibold">{title}</div>
      {desc && <div className="mb-5 text-sm text-muted-foreground">{desc}</div>}
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, defaultValue, disabled }: { label: string; defaultValue?: string; disabled?: boolean }) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <input defaultValue={defaultValue} disabled={disabled} className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm outline-none focus:border-primary/60 disabled:opacity-60" />
    </label>
  );
}

function Toggle({ label, defaultOn }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <button onClick={() => setOn(!on)} className="flex w-full items-center justify-between rounded-xl border border-border bg-foreground/5 px-4 py-3 text-left">
      <span className="text-sm">{label}</span>
      <span className={`relative h-6 w-11 rounded-full transition ${on ? "bg-primary" : "bg-muted"}`}>
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${on ? "left-[22px]" : "left-0.5"}`} />
      </span>
    </button>
  );
}
