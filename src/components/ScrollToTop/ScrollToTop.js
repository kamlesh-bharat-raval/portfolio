import { useState, useEffect } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setShow(true);
      else setShow(false);
    });
  }, []);

  return (
    show && (
      <button className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
        ↑
      </button>
    )
  );
}
