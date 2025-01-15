import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../../components/Project/Project.jsx";
import "./Portfolio.css";
import weatherDashboardImg from "../../assets/images/weatherdashboard.png";
import newbieFit from "../../assets/images/NewbieFit.png";
import portfolioImg from "../../assets/images/portfolio.png";
import marketingImg from "../../assets/images/marketing.png";
import fwob from "../../assets/images/FWOB.png";
import catgptImg from "../../assets/images/catgpt.png";

const Portfolio = () => {
  // define the projects array
  const projects = [
    {
      title: "Friends Without Benefits",
      image: fwob,
      deployedLink: "https://friends-without-benefits.onrender.com/",
      githubLink: "https://github.com/savevsgames/friends-without-benefits",
    },
    {
      title: "CatGPT",
      image: catgptImg,
      deployedLink: "https://tomogatch-ai.onrender.com/",
      githubLink: "https://github.com/OccultParrot/Tomogatch.ai",
    },
    {
      title: "NewbieFit",
      image: newbieFit,
      deployedLink: "https://souad-hb.github.io/NewbieFit/",
      githubLink: "https://github.com/Souad-HB/NewbieFit/",
    },
    {
      title: "Weather Dashboard",
      image: weatherDashboardImg,
      deployedLink: "https://weather-dashboard-2-zm1t.onrender.com/",
      githubLink: "https://github.com/Souad-HB/weather-dashboard",
    },
    {
      title: "Marketing advertisement",
      image: marketingImg,
      deployedLink: "https://souad-hb.github.io/marketing-page-refactor/",
      githubLink: "https://github.com/Souad-HB/marketing-page-refactor",
    },
    {
      title: "Front-End Portfolio",
      image: portfolioImg,
      deployedLink: "https://souad-hb.github.io/portfoliowebpage/",
      githubLink: "https://github.com/Souad-HB/portfoliowebpage?",
    },
  ];

  return (
    <div>
      <div>
        <div className="project-display">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
