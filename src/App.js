import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
// import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // THEME LOGIC
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);


  // RESPONSIVE THEME BUTTON POSITION FIX
  useEffect(() => {
    const positionFix = () => {
      const btn = document.querySelector(".theme-toggle-wrapper");
      if (!btn) return;

      if (window.innerWidth <= 768) {
        btn.style.bottom = "25px";
        btn.style.top = "auto";
        btn.style.left = "20px";
        btn.style.right = "auto";
      } else {
        btn.style.top = "100px";
        btn.style.left = "30px";
        btn.style.bottom = "auto";
        btn.style.right = "auto";
      }
    };

    positionFix();
    window.addEventListener("resize", positionFix);

    return () => window.removeEventListener("resize", positionFix);
  }, []);


  return (
    <>
      {/* FIXED THEME BUTTON LEFT SIDE */}
   <div className="theme-toggle-wrapper">
  <button
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    className="theme-toggle"
  >
    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
  </button>
</div>


      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Testimonials /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
