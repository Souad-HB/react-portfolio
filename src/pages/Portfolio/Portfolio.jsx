import React from "react";
import Project from "../../components/Project/Project.jsx";
import "./Portfolio.css";
import weatherDashboardImg from "../../assets/images/weatherdashboard.png";
import newbieFit from "../../assets/images/NewbieFit.png";
import portfolioImg from "../../assets/images/portfolio.png";
import marketingImg from "../../assets/images/marketing.png";
import fwob from "../../assets/images/FWOB.png";
import catgptImg from "../../assets/images/catgpt.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Portfolio = () => {
  // define the projects array
  const projects = [
    {
      title: "Friends Without Benefits",
      image: fwob,
      deployedLink: "https://friends-without-benefits.onrender.com/",
      githubLink: "https://github.com/savevsgames/friends-without-benefits",
      about:
        "This is a multiplayer scavenger hunt game where you use your webcam to find objects, score points, and climb the leaderboard. We built a custom TensorFlow model to recognize objects in real-time. Play with friends, share video feeds, chat, and see who can spot items the fastest!",
    },
    {
      title: "CatGPT",
      image: catgptImg,
      deployedLink: "https://catgpt-1-il6e.onrender.com/",
      githubLink: "https://github.com/OccultParrot/Tomogatch.ai",
      about:
        " is a virtual pet app built with React, Node.js, and Express. It uses GPT-based AI for real-time interactions, evolving based on user behavior. A document database stores conversation summaries, while a SQL database manages user accounts and yarn currency, which can be spent on the pet. Designed to scale, CAT-GPT evolves with user feedback.",
    },
    {
      title: "NewbieFit",
      image: newbieFit,
      deployedLink: "https://souad-hb.github.io/NewbieFit/",
      githubLink: "https://github.com/Souad-HB/NewbieFit/",
      about:
        "This app helps people who feel intimidated or unsure about going to the gym by providing a variety of exercises for each workout. It prevents boredom by offering different routines, so beginners can confidently work out and stay motivated, knowing exactly what to do.",
    },
    {
      title: "Weather Dashboard",
      image: weatherDashboardImg,
      deployedLink: "https://weather-dashboard-2-zm1t.onrender.com/",
      githubLink: "https://github.com/Souad-HB/weather-dashboard",
      about: "about section goes here",
    },
    {
      title: "Marketing advertisement",
      image: marketingImg,
      deployedLink: "https://souad-hb.github.io/marketing-page-refactor/",
      githubLink: "https://github.com/Souad-HB/marketing-page-refactor",
      about: "about section goes here",
    },
    {
      title: "Front-End Portfolio",
      image: portfolioImg,
      deployedLink: "https://souad-hb.github.io/portfoliowebpage/",
      githubLink: "https://github.com/Souad-HB/portfoliowebpage?",
      about: "about section goes here",
    },
  ];

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        keyBoardControl={true}
        itemClass="carousel-item-padding-40-px"
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
            about={project.about}
          />
        ))}
      </Carousel>
      {/* <div>
        <div className="project-display">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
              about={project.about}
            />
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Portfolio;
