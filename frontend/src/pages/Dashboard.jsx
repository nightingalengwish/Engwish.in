import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import {
  Mic, Clock, Timer, Activity, Flame, Award, MessageSquare, TrendingUp, Sparkles, LogOut, Lock,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { RECOMMENDED_SCENARIOS } from "../data/aiPractice";

const API = process.env.REACT_APP_BACKEND_URL;

const BADGES = [
  { label: "First Conversation", icon: MessageSquare },
  { label: "7-Day Streak", icon: Flame },
  { label: "100 Minutes Club", icon: Timer },
  { label: "Fluency 80+", icon: TrendingUp },
];

const StatCard = ({ icon: Icon, label, value, sub, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    data-testid={`dashboard-stat-${label.toLowerCase().replace(/[’'\s]+/g, "-")}`}
    className="rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/12 p-6 shadow-[0_8px_30px_rgba(255,0,51,0.06)]"
  >
    <div className="flex items-center justify-between">
      <span className="text-neutral-500 text-sm font-medium">{label}</span>
      <div className="w-9 h-9 rounded-xl bg-[#FF0033]/8 flex items-center justify-center text-[#E60023]">
        <Icon size={17} />
      </div>
    </div>
    <div className="font-heading text-3xl font-bold text-neutral-900 mt-3">{value}</div>
    <p className="text-xs text-neutral-400 mt-1">{sub}</p>
  </motion.div>
);

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (user === false) navigate("/auth", { replace: true });
  }, [user, navigate]);

  useEffect(() => {
    if (!user) return;
    axios
      .get(`${API}/api/dashboard/stats`, { withCredentials: true })
      .then((res) => setData(res.data))
      .catch(() => {
        toast.error("Could not load your practice stats. Showing defaults.");
        setData({
          user: {},
          stats: { today_minutes: 0, total_minutes: 0, fluency_score: null, streak_days: 0, conversations_completed: 0, badges: [], recent_conversations: [], feedback_history: [] },
        });
      });
  }, [user]);

  if (user === null || (user && !data)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-12 h-12 rounded-full border-4 border-[#FF0033]/20 border-t-[#FF0033] animate-spin" />
      </div>
    );
  }
  if (!user) return null;

  const stats = data.stats;
  const firstName = (user.name || "Learner").split(" ")[0];

  const startPractice = () =>
    toast.info("Your AI practice session is being prepared — the live AI Conversational Lab is launching here very soon!");

  return (
    <main data-testid="dashboard-page" className="min-h-screen pt-28 pb-20 px-6 bg-[#FFF7F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[#E60023] text-xs font-bold tracking-widest uppercase flex items-center gap-1.5">
              <Sparkles size={13} /> Engwish AI-Practice
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mt-1">
              Welcome, {firstName}!
            </h1>
          </div>
          <button
            data-testid="dashboard-logout-btn"
            onClick={async () => { navigate("/", { replace: true }); await logout(); }}
            className="inline-flex items-center gap-2 rounded-full border border-[#FF0033]/25 text-[#E60023] px-5 py-2.5 text-sm font-bold hover:bg-[#FF0033]/5 transition-all"
          >
            <LogOut size={15} /> Log Out
          </button>
        </div>

        {/* Continue practice hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-[2rem] bg-gradient-to-br from-[#7a0019] via-[#b30026] to-[#FF0033] p-8 sm:p-10 relative overflow-hidden shadow-[0_25px_70px_rgba(255,0,51,0.3)]"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-heading text-lg md:text-lg font-bold text-white sm:text-2xl">
                Ready for today's speaking session?
              </h2>
              <p className="text-white/80 text-sm mt-2 max-w-md">
                {stats.conversations_completed > 0
                  ? "Pick up where you left off and keep your streak alive."
                  : "Start your very first AI conversation — try an easy scenario like Shopping or Restaurant."}
              </p>
            </div>
            <button
              data-testid="dashboard-continue-practice-btn"
              onClick={startPractice}
              className="inline-flex items-center gap-2 bg-white text-[#E60023] rounded-full px-8 py-4 text-sm font-bold shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300"
            >
              <Mic size={16} /> {stats.conversations_completed > 0 ? "Continue Practice" : "Start First Practice"}
            </button>
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <StatCard icon={Clock} label="Today's Speaking Time" value={`${stats.today_minutes} min`} sub="Goal: 15 min/day" delay={0.05} />
          <StatCard icon={Timer} label="Total Minutes Practiced" value={`${stats.total_minutes}`} sub="Across all sessions" delay={0.1} />
          <StatCard icon={Activity} label="Fluency Score" value={stats.fluency_score ?? "—"} sub={stats.fluency_score ? "Out of 100" : "Complete a session to unlock"} delay={0.15} />
          <StatCard icon={Flame} label="Daily Practice Streak" value={`${stats.streak_days} 🔥`} sub={stats.streak_days > 0 ? "Keep it going!" : "Practice today to start a streak"} delay={0.2} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Recommended scenarios */}
          <div className="lg:col-span-2 rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/12 p-7 shadow-[0_8px_30px_rgba(255,0,51,0.06)]">
            <h3 className="font-heading font-bold text-neutral-900 text-lg">Recommended Scenarios</h3>
            <p className="text-neutral-400 text-xs mt-1">Handpicked for you based on your level</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {RECOMMENDED_SCENARIOS.map((s) => (
                <button
                  key={s.label}
                  data-testid={`dashboard-scenario-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={startPractice}
                  className="group flex items-center gap-3 rounded-2xl border border-[#FF0033]/12 bg-white px-4 py-3.5 text-left hover:border-[#FF0033]/40 hover:shadow-[0_10px_25px_rgba(255,0,51,0.12)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF0033]/8 flex items-center justify-center text-[#E60023] group-hover:bg-gradient-to-br group-hover:from-[#FF0033] group-hover:to-[#99001f] group-hover:text-white transition-all shrink-0">
                    <s.icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-800">{s.label}</p>
                    <p className="text-xs text-neutral-400">{s.category} · {s.level}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/12 p-7 shadow-[0_8px_30px_rgba(255,0,51,0.06)]">
            <h3 className="font-heading font-bold text-neutral-900 text-lg flex items-center gap-2">
              <Award size={18} className="text-[#E60023]" /> Achievement Badges
            </h3>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {BADGES.map((b) => {
                const earned = (stats.badges || []).includes(b.label);
                return (
                  <div
                    key={b.label}
                    data-testid={`dashboard-badge-${b.label.toLowerCase().replace(/[\s+]+/g, "-")}`}
                    className={`rounded-2xl border p-4 text-center transition-all ${
                      earned
                        ? "border-[#FF0033]/30 bg-[#FF0033]/5"
                        : "border-neutral-200 bg-neutral-50 opacity-60"
                    }`}
                  >
                    <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                      earned ? "bg-gradient-to-br from-[#FF0033] to-[#99001f] text-white" : "bg-neutral-200 text-neutral-400"
                    }`}>
                      {earned ? <b.icon size={18} /> : <Lock size={16} />}
                    </div>
                    <p className="text-xs font-semibold text-neutral-600 mt-2 leading-tight">{b.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent conversations + feedback */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/12 p-7 shadow-[0_8px_30px_rgba(255,0,51,0.06)]" data-testid="dashboard-recent-conversations">
            <h3 className="font-heading font-bold text-neutral-900 text-lg">Recent Conversations</h3>
            {(stats.recent_conversations || []).length === 0 ? (
              <div className="flex flex-col items-center py-10 text-center">
                <MessageSquare size={32} className="text-[#FF0033]/30" />
                <p className="text-neutral-400 text-sm mt-3 max-w-xs">
                  No conversations yet. Your completed AI sessions will appear here with scores and duration.
                </p>
              </div>
            ) : (
              <ul className="mt-4 space-y-3">
                {stats.recent_conversations.map((c, i) => (
                  <li key={i} className="flex justify-between text-sm border-b border-[#FF0033]/8 pb-3">
                    <span className="font-semibold text-neutral-700">{c.scenario}</span>
                    <span className="text-neutral-400">{c.minutes} min · {c.score}/100</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-[#FF0033]/12 p-7 shadow-[0_8px_30px_rgba(255,0,51,0.06)]" data-testid="dashboard-feedback-history">
            <h3 className="font-heading font-bold text-neutral-900 text-lg">AI Feedback History</h3>
            {(stats.feedback_history || []).length === 0 ? (
              <div className="flex flex-col items-center py-10 text-center">
                <TrendingUp size={32} className="text-[#FF0033]/30" />
                <p className="text-neutral-400 text-sm mt-3 max-w-xs">
                  After each session your AI coach's grammar corrections, vocabulary tips and pronunciation notes will be saved here.
                </p>
              </div>
            ) : (
              <ul className="mt-4 space-y-3">
                {stats.feedback_history.map((f, i) => (
                  <li key={i} className="text-sm text-neutral-600 border-b border-[#FF0033]/8 pb-3">{f}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-neutral-400 mt-10">
          Want to explore more? <Link to="/ai-practice" className="text-[#E60023] font-bold hover:underline" data-testid="dashboard-explore-link">See everything Engwish AI-Practice offers →</Link>
        </p>
      </div>
    </main>
  );
}
