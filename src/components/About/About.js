import "./About.css";
import profileImg from "../../images/kamlesh.jpg";
import { FaDownload } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <h1 data-aos="fade-up">
        About <span>Me</span>
      </h1>

      <div className="about-box" data-aos="fade-up" data-aos-delay="200">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src={profileImg} alt="profile" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <h2>Frontend Developer</h2>

          <p>
            I specialize in creating high-quality, responsive, and visually
            appealing web interfaces. With strong skills in React, JavaScript,
            CSS animations, and UI/UX principles, I build digital products that
            look modern and perform smoothly.
          </p>

          <p>
            I love turning creative ideas into real working projects with clean
            code and stunning UI. Currently working on multiple advanced React
            projects to level up even more.
          </p>

          {/* PREMIUM DOWNLOAD CV BUTTON */}
          <a href="/KAMLESH.CV.pdf" download className="about-btn">
            Download CV <FaDownload />
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;
