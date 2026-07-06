import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth, formatApiErrorDetail } from "../context/AuthContext";

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
const googleSignIn = () => {
  const redirectUrl = window.location.origin + "/dashboard";
  window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
};

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18A10.97 10.97 0 0 0 1 12c0 1.77.42 3.45 1.18 4.94l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const inputCls =
  "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#FF0033]/40 focus:border-[#FF0033]/40 transition-all";

export default function Auth() {
  const navigate = useNavigate();
  const { user, login, register } = useAuth();
  const [mode, setMode] = useState("signup");
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (user && user !== false) navigate("/dashboard", { replace: true });
  }, [user, navigate]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        await register(form);
        toast.success("Welcome to Engwish AI-Practice!");
      } else {
        await login(form.email, form.password);
        toast.success("Welcome back!");
      }
      navigate("/dashboard");
    } catch (err) {
      toast.error(formatApiErrorDetail(err.response?.data?.detail) || err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-6 bg-[#FFF7F8] relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FF0033]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#FF0033]/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-md mx-auto bg-white/80 backdrop-blur-2xl rounded-3xl border border-[#FF0033]/15 shadow-[0_20px_60px_rgba(255,0,51,0.12)] p-8"
      >
        <div className="flex items-center gap-2 justify-center mb-2 text-[#FF0033]">
          <Sparkles size={18} />
          <span className="text-xs font-bold tracking-widest uppercase">Engwish AI-Practice</span>
        </div>
        <h1 className="font-heading text-2xl font-bold text-center text-neutral-900">
          {mode === "signup" ? "Create your free account" : "Welcome back"}
        </h1>
        <p className="text-center text-neutral-500 text-sm mt-2 mb-6">
          {mode === "signup"
            ? "Start practicing spoken English with AI today."
            : "Log in to continue your AI practice."}
        </p>

        <button
          data-testid="google-signin-btn"
          onClick={googleSignIn}
          className="w-full flex items-center justify-center gap-3 rounded-xl border border-neutral-200 bg-white py-3 text-sm font-semibold text-neutral-700 hover:border-[#FF0033]/40 hover:shadow-[0_4px_20px_rgba(255,0,51,0.1)] transition-all"
        >
          <GoogleIcon /> Continue with Google
        </button>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-xs text-neutral-400 uppercase tracking-wider">or</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <form onSubmit={submit} className="space-y-4">
          {mode === "signup" && (
            <>
              <input data-testid="auth-name-input" required value={form.name} onChange={set("name")} placeholder="Full Name" className={inputCls} />
              <input data-testid="auth-phone-input" required value={form.phone} onChange={set("phone")} placeholder="Mobile Number" type="tel" className={inputCls} />
            </>
          )}
          <input data-testid="auth-email-input" required value={form.email} onChange={set("email")} placeholder="Email Address" type="email" className={inputCls} />
          <input
            data-testid="auth-password-input"
            required
            value={form.password}
            onChange={set("password")}
            placeholder={mode === "signup" ? "Password (min 8 characters)" : "Password"}
            type="password"
            minLength={8}
            className={inputCls}
          />
          <button
            data-testid="auth-submit-btn"
            disabled={busy}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF0033] to-[#99001f] text-white rounded-xl py-3.5 text-sm font-bold shadow-[0_0_25px_rgba(255,0,51,0.35)] hover:shadow-[0_0_40px_rgba(255,0,51,0.55)] hover:scale-[1.02] transition-all disabled:opacity-60 disabled:hover:scale-100"
          >
            {busy && <Loader2 size={16} className="animate-spin" />}
            {mode === "signup" ? "Create Account" : "Log In"}
          </button>
        </form>

        <p className="text-center text-sm text-neutral-500 mt-6">
          {mode === "signup" ? "Already have an account?" : "New to Engwish?"}{" "}
          <button
            data-testid="auth-mode-toggle"
            onClick={() => setMode(mode === "signup" ? "login" : "signup")}
            className="text-[#E60023] font-bold hover:underline"
          >
            {mode === "signup" ? "Log In" : "Sign Up Free"}
          </button>
        </p>
        <p className="text-center text-xs text-neutral-400 mt-4">
          By continuing you agree to our{" "}
          <Link to="/terms" className="underline hover:text-[#E60023]">Terms</Link> and{" "}
          <Link to="/privacy" className="underline hover:text-[#E60023]">Privacy Policy</Link>.
        </p>
      </motion.div>
    </main>
  );
}
