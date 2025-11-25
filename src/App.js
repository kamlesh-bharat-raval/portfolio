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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Apply theme to BODY
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

  return (
    <>
   {/* THEME TOGGLE BUTTON FIXED RIGHT SIDE */}
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
