import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Courses } from "../components/Courses";
import { LogoShowcase } from "../components/LogoShowcase";
import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (id) {
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [location.state]);

  return (
    <main>
      <Hero />
      <Courses />
      <LogoShowcase />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
