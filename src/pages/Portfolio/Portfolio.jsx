import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "../../components/Project/Project.jsx";
import "./Portfolio.css";
import weatherDashboardImg from "../../assets/images/weatherdashboard.png";
import newbieFit from "../../assets/images/NewbieFit.png";
import portfolioImg from "../../assets/images/portfolio.png";
import marketingImg from "../../assets/images/marketing.png";
import cssImg from "../../assets/images/css.png";
import catgptImg from "../../assets/images/catgpt.png";

const Portfolio = () => {
  // define the projects array
  const projects = [
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
    {
      title: "CSS Cheatsheet",
      image: cssImg,
      deployedLink: "https://souad-hb.github.io/csssnippet/",
      githubLink: "https://github.com/Souad-HB/csssnippet",
    },
  ];

  return (
    <div className="project-display">
      <Row xs={1} md={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <Project
              key={index}
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Portfolio;
