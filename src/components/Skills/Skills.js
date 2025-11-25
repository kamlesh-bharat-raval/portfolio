import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h1 data-aos="fade-up">
        My <span>Skills</span>
      </h1>

      <div className="skills-container">

        <div className="skill-box" data-aos="fade-right">
          <FaHtml5 className="skill-icon" style={{ color: "#ff5722" }} />
          <h2>HTML</h2>
          <div className="bar">
            {/* <div className="level html"></div> */}
          </div>
        </div>

        <div className="skill-box" data-aos="fade-left">
          <FaCss3Alt className="skill-icon" style={{ color: "#2196f3" }} />
          <h2>CSS</h2>
          <div className="bar">
            {/* <div className="level css"></div> */}
          </div>
        </div>

        <div className="skill-box" data-aos="fade-right">
          <FaJs className="skill-icon" style={{ color: "#ffd600" }} />
          <h2>JavaScript</h2>
          <div className="bar">
            {/* <div className="level js"></div> */}
          </div>
        </div>

        <div className="skill-box" data-aos="fade-left">
          <FaReact className="skill-icon" style={{ color: "#00eaff" }} />
          <h2>React</h2>
          <div className="bar">
            {/* <div className="level react"></div> */}
          </div>
        </div>

        <div className="skill-box" data-aos="fade-up">
          <FaGithub className="skill-icon" style={{ color: "#fff" }} />
          <h2>Git & GitHub</h2>
          <div className="bar">
            {/* <div className="level git"></div> */}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
