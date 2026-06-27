import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { CyberBackground } from "@/components/nvas/cyber-background";
import logo from "@/images/logo.svg";
import { authAPI, setAuthToken, setStoredUser } from "@/lib/api";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Register · Scanvas" }] }),
  component: RegisterPage,
});

function strengthOf(pw: string) {
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[A-Z]/.test(pw)) s++;
  if (/[0-9]/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw)) s++;
  return s;
}

function RegisterPage() {
  const nav = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("user");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const score = useMemo(() => strengthOf(pw), [pw]);
  const labels = ["Weak", "Fair", "Good", "Strong", "Excellent"];
  const colors = ["bg-danger", "bg-warning", "bg-secondary", "bg-accent", "bg-success"];

  const handleSubmit = async (e: FormEvent) => {
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
      await authAPI.register(username, email, pw, role, fullName);
      const response = await authAPI.login(username, pw);
      setAuthToken(response.access_token);
      const profile = await authAPI.me();
      setStoredUser({
        username: profile.username,
        email: profile.email,
        fullName,
        role: profile.role || role,
      });
      nav({ to: "/app/dashboard" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CyberBackground />
      <div className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="w-full rounded-3xl border border-border glass p-8">
          <Link to="/" className="mb-6 flex items-center gap-2">
            <img src={logo} alt="Scanvas" className="h-9 w-9" />
            <div>
              <div className="text-sm font-bold">Scan<span className="text-accent">vas</span></div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Create account</div>
            </div>
          </Link>

          <h1 className="text-2xl font-bold">Create your Scanvas workspace</h1>
          <p className="mt-1 text-sm text-muted-foreground">Provision your security operations console in seconds.</p>

          <form
            className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            {error && (
              <div className="col-span-full rounded-xl border border-danger/20 bg-danger/10 p-3 text-sm text-danger">
                {error}
              </div>
            )}
            <Field label="Full Name" placeholder="Jane Doe" value={fullName} onChange={setFullName} />
            <Field label="Username" placeholder="j.doe" value={username} onChange={setUsername} />
            <Field label="Email" type="email" placeholder="jane@company.io" value={email} onChange={setEmail} />
            <Field label="Password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={pw} onChange={setPw} showPassword={showPassword} onToggleShow={() => setShowPassword(!showPassword)} />
            <Field label="Confirm Password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={confirm} onChange={setConfirm} />
            <Select label="Role" options={["user", "admin"]} value={role} onChange={setRole} />

            <div className="sm:col-span-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Password strength</span>
                <span>{pw ? labels[Math.max(0, score - 1)] : "—"}</span>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`h-1.5 rounded-full ${i < score ? colors[score - 1] : "bg-muted"}`} />
                ))}
              </div>
              {confirm && pw !== confirm && <div className="mt-2 text-xs text-danger">Passwords do not match</div>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group sm:col-span-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-primary-foreground glow-primary transition disabled:opacity-70"
              style={{ background: "var(--gradient-cyber)" }}
            >
              {loading ? "Creating account..." : "Create account"}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-muted-foreground">
            Already have an account? <Link to="/login" className="text-accent hover:underline">Sign in</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Field({ label, type = "text", placeholder, value, onChange, showPassword, onToggleShow }: { label: string; type?: string; placeholder?: string; value?: string; onChange?: (v: string) => void; showPassword?: boolean; onToggleShow?: () => void }) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <div className="relative mt-1.5">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange ? (e) => onChange(e.target.value) : undefined}
          className="h-11 w-full rounded-xl border border-input bg-muted/40 px-4 pr-10 text-sm outline-none focus:border-primary/60"
        />
        {typeof showPassword === "boolean" && onToggleShow && (
          <button
            type="button"
            onClick={onToggleShow}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
      </div>
    </label>
  );
}

function Select({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-muted-foreground">{label}</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 h-11 w-full rounded-xl border border-input bg-muted/40 px-3 text-sm outline-none focus:border-primary/60"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o.charAt(0).toUpperCase() + o.slice(1)}
          </option>
        ))}
      </select>
    </label>
  );
}
