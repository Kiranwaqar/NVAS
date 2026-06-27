import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import { CyberBackground } from "@/components/nvas/cyber-background";
import logo from "@/images/logo.svg";
import { authAPI, getStoredUser, setAuthToken, setStoredUser } from "@/lib/api";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login · Scanvas" }] }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <CyberBackground />
      <div className="relative grid min-h-screen lg:grid-cols-2">
        {/* LEFT — illustration */}
        <div className="hidden flex-col justify-between border-r border-border p-10 lg:flex">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Scanvas" className="h-9 w-9" />
            <div>
              <div className="text-sm font-bold">
                Scan<span className="text-accent">vas</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Cyber Intelligence
              </div>
            </div>
          </Link>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
                style={{ background: "var(--gradient-cyber)", filter: "blur(40px)" }}
              />
              <div className="relative grid h-40 w-40 place-items-center rounded-full border border-border glass">
                <Lock className="h-16 w-16 text-accent" />
              </div>
              <svg className="absolute -inset-16" viewBox="0 0 300 300">
                {[60, 90, 120].map((r, i) => (
                  <circle
                    key={i}
                    cx="150"
                    cy="150"
                    r={r}
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeOpacity={0.2}
                    strokeDasharray="2 6"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 150 150`}
                      to={`${i % 2 ? -360 : 360} 150 150`}
                      dur={`${8 + i * 4}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                ))}
              </svg>
            </div>
          </div>

          <blockquote className="max-w-md text-sm text-muted-foreground">
            "Scanvas turns weeks of vulnerability triage into hours. It's the SOC platform we wish
            we'd built ourselves."
            <div className="mt-2 text-xs">— Head of Security Operations, Fortune 500</div>
          </blockquote>
        </div>

        {/* RIGHT — form */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md rounded-3xl border border-border glass p-8"
          >
            <Link to="/" className="mb-6 flex items-center gap-2 lg:hidden">
              <img src={logo} alt="Scanvas" className="h-9 w-9" />
              <div className="text-sm font-bold">
                Scan<span className="text-accent">vas</span>
              </div>
            </Link>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in to your Scanvas security console.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setError(null);
                try {
                  const response = await authAPI.login(username, password);
                  setAuthToken(response.access_token);
                  const profile = await authAPI.me();
                  setStoredUser({
                    username: profile.username,
                    email: profile.email,
                    role: profile.role,
                    fullName: profile.full_name || profile.username,
                  });
                  nav({ to: "/app/dashboard" });
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Login failed");
                } finally {
                  setLoading(false);
                }
              }}
            >
              {error && (
                <div className="rounded-xl border border-danger/20 bg-danger/10 p-3 text-sm text-danger">
                  {error}
                </div>
              )}
              <div>
                <label className="text-xs font-medium text-muted-foreground">
                  Username or Email
                </label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-4 text-sm outline-none focus:border-primary/60"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-muted-foreground">Password</label>
                  <a href="#" className="text-xs text-accent hover:underline">
                    Forgot password?
                  </a>
                </div>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-input bg-muted/40 pl-10 pr-10 text-sm outline-none focus:border-primary/60"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-input" />{" "}
                Remember me on this device
              </label>
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-primary-foreground glow-primary transition disabled:opacity-70"
                style={{ background: "var(--gradient-cyber)" }}
              >
                {loading ? "Authenticating..." : "Login"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </form>

            <div className="mt-6 text-center text-xs text-muted-foreground">
              No account?{" "}
              <Link to="/register" className="text-accent hover:underline">
                Create one
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
