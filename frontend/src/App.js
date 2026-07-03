import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <div className="App bg-white min-h-screen text-left">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:slug" element={<CourseDetail />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-center" richColors theme="light" />
      </BrowserRouter>
    </div>
  );
}

export default App;
