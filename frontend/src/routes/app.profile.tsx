import { createFileRoute } from "@tanstack/react-router";
import { Mail, Briefcase, ShieldCheck, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/nvas/app-shell";
import { Card, Badge } from "@/components/nvas/ui";
import { getStoredUser, StoredUser } from "@/lib/api";

export const Route = createFileRoute("/app/profile")({
  head: () => ({ meta: [{ title: "Profile · Scanvas" }] }),
  component: ProfilePage,
});

function ProfilePage() {
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  const displayName = user?.fullName || user?.username || "Security Admin";
  const displayHandle = user?.username ? `@${user.username}` : "@user";
  const displayRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "User";

  return (
    <div>
      <PageHeader title="My Profile" subtitle="Manage your personal information and credentials." />

      <div className="grid gap-4 lg:grid-cols-[320px_1fr]">
        <Card className="text-center">
          <div className="relative mx-auto h-28 w-28">
            <div className="absolute inset-0 rounded-full opacity-50 blur-xl" style={{ background: "var(--gradient-cyber)" }} />
            <div className="relative grid h-28 w-28 place-items-center rounded-full border border-border text-2xl font-bold text-white" style={{ background: "var(--gradient-cyber)" }}>
            {displayName
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </div>
          </div>
          <div className="mt-4 text-lg font-bold">{displayName}</div>
          <div className="text-sm text-muted-foreground">{displayHandle}</div>
          <Badge tone="info">{displayRole}</Badge>
          <div className="mt-4 grid gap-2 text-left text-sm">
            <Row icon={Mail} k="Email" v={user?.email || user?.username || "nobody@scanvas.io"} />
            <Row icon={Briefcase} k="Department" v="Security Operations" />
            <Row icon={ShieldCheck} k="Role" v={displayRole} />
            <Row icon={Clock} k="Last Login" v="2 minutes ago" />
          </div>
        </Card>

        <Card>
          <div className="mb-1 text-lg font-semibold">Change password</div>
          <div className="mb-5 text-sm text-muted-foreground">Update your password to keep your account secure.</div>
          <div className="grid gap-4">
            <Field label="Current password" type="password" />
            <Field label="New password" type="password" />
            <Field label="Confirm new password" type="password" />
          </div>
          <div className="mt-6 flex justify-end">
            <button className="rounded-xl px-4 py-2 text-sm font-semibold text-primary-foreground glow-primary" style={{ background: "var(--gradient-cyber)" }}>Update password</button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Row({ icon: Icon, k, v }: { icon: any; k: string; v: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-foreground/5 px-3 py-2">
      <span className="flex items-center gap-2 text-xs text-muted-foreground"><Icon className="h-3.5 w-3.5" /> {k}</span>
      <span className="font-medium">{v}</span>
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <input type={type} className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-4 text-sm outline-none focus:border-primary/60" />
    </label>
  );
}
