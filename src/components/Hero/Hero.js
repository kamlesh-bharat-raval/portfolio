import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import profileImg from "../../images/kamlesh.jpg";

function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">

      <div className="hero-left">
        <h1 data-aos="fade-right">
          Hi, I'm <span>Kamlesh Raval</span>
        </h1>

        <h2 data-aos="fade-right" data-aos-delay="200">
          Frontend Developer & Designer
        </h2>

        <p data-aos="fade-right" data-aos-delay="400">
          I build modern, responsive, high-performance websites using
          React, JavaScript, and advanced UI design principles.
        </p>

        {/* Button scrolls to Projects section */}
        <Link
          to="projects"
          smooth={true}
          duration={700}
          offset={-70}
          spy={true}
        >
          <button className="hero-btn" data-aos="zoom-in">
            View My Work <FaArrowRight />
          </button>
        </Link>
      </div>

      <div className="hero-right" data-aos="fade-left">
         <img src={profileImg} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;
