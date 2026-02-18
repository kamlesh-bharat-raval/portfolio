import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import ecommerceImg from "../../images/ecm.jpg";
import travelImg from "../../images/travel.jpg";  

function Projects() {
  const data = [
    {
      title: "E-Commerce Website",
      desc: "Full responsive E-Commerce site with cart, filters and React Router.",
      img: ecommerceImg,
      live: "https://kamlesh-bharat-raval.github.io/kc/",
      github: "https://github.com/kamlesh-bharat-raval/kc",
    },
    {
      title: "My Travel Planner",
      desc: "Travel planning app to manage trips, dates, destinations and budgets with React.",
       img: travelImg,
      live: "https://kamlesh-bharat-raval.github.io/my-travel-planner/",
      github: "https://github.com/kamlesh-bharat-raval/my-travel-planner",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 data-aos="fade-up">
        My <span>Projects</span>
      </h1>

      <div className="projects-container">
        {data.map((project, index) => (
          <div className="project-card" data-aos="zoom-in" key={index}>
            <img src={project.img} alt={project.title} />

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live <FaExternalLinkAlt />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github"
                >
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
