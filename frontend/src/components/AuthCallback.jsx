import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const API = process.env.REACT_APP_BACKEND_URL;

// REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH

export const AuthCallback = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const hasProcessed = useRef(false);

  useEffect(() => {
    if (hasProcessed.current) return;
    hasProcessed.current = true;

    const processSession = async () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1));
      const sessionId = params.get("session_id");
      if (!sessionId) {
        navigate("/auth", { replace: true });
        return;
      }
      try {
        const { data } = await axios.post(
          `${API}/api/auth/session`,
          { session_id: sessionId },
          { withCredentials: true }
        );
        setUser(data);
        window.history.replaceState(null, "", window.location.pathname);
        navigate("/dashboard", { replace: true, state: { user: data } });
      } catch {
        navigate("/auth", { replace: true });
      }
    };
    processSession();
  }, [navigate, setUser]);

  return (
    <div data-testid="auth-callback-loading" className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-12 h-12 rounded-full border-4 border-[#FF0033]/20 border-t-[#FF0033] animate-spin" />
      <p className="mt-5 text-neutral-500 text-sm">Signing you in…</p>
    </div>
  );
};
