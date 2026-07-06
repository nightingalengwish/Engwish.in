import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { AuthProvider } from "./context/AuthContext";
import { AuthCallback } from "./components/AuthCallback";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AIPractice from "./pages/AIPractice";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

function AppRouter() {
  const location = useLocation();
  // Handle Emergent Google Auth callback synchronously during render (before ProtectedRoute runs)
  if (location.hash?.includes("session_id=")) {
    return <AuthCallback />;
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:slug" element={<CourseDetail />} />
        <Route path="/ai-practice" element={<AIPractice />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return (
    <div className="App bg-white min-h-screen text-left">
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
          <Toaster position="top-center" richColors theme="light" />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
