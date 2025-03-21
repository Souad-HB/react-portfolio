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

// custom arrows for the carousel
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />;
};

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
        "FRIENDS WITHOUT BENEFITS is a multiplayer scavenger hunt game where you use your webcam to find common objects, score points, and climb the leaderboard. We trained our own custom TensorFlow model to recognize objects in real‐time. Now you can play against friends, share video feeds, chat, and see who can spot items fastest!",
    },
    {
      title: "Cat-GPT",
      image: catgptImg,
      deployedLink: "https://catgpt-1-il6e.onrender.com/",
      githubLink: "https://github.com/OccultParrot/Tomogatch.ai",
      about:
        "Cat-GPT is a virtual pet app built with React, Node.js, and Express. It uses GPT-based AI for real-time interactions, evolving based on user behavior. A document database stores conversation summaries, while a SQL database manages user accounts and yarn currency, which can be spent on the pet. Designed to scale, CAT-GPT evolves with user feedback.",
    },
    {
      title: "NewbieFit",
      image: newbieFit,
      deployedLink: "https://souad-hb.github.io/NewbieFit/",
      githubLink: "https://github.com/Souad-HB/NewbieFit/",
      about:
        "Newbie Fit is an application that helps people who feel intimidated or unsure about going to the gym by providing a variety of exercises for each workout. It prevents boredom by offering different routines, so beginners can confidently work out and stay motivated, knowing exactly what to do.",
    },
    {
      title: "Weather Dashboard",
      image: weatherDashboardImg,
      deployedLink: "https://weather-dashboard-2-zm1t.onrender.com/",
      githubLink: "https://github.com/Souad-HB/weather-dashboard",
      about:
        "This Weather Dashboard displays a 7-day forecast for cities, utilizing a weather API to provide real-time temperature, precipitation, and other key weather data. Users can search for a city and view the current weather conditions, as well as the forecast for the next week.",
    },
    {
      title: "Marketing advertisement",
      image: marketingImg,
      deployedLink: "https://souad-hb.github.io/marketing-page-refactor/",
      githubLink: "https://github.com/Souad-HB/marketing-page-refactor",
      about:
        "Marketing adbertisement is a front-end project that uses HTML, and CSS to create a responsive webpage that showcases a marketing advertisement.",
    },
    {
      title: "Front-End Portfolio",
      image: portfolioImg,
      deployedLink: "https://souad-hb.github.io/portfoliowebpage/",
      githubLink: "https://github.com/Souad-HB/portfoliowebpage?",
      about:
        "This is my first front-end project that showcases my portfolio. It uses HTML, and custom CSS to create a responsive webpage that displays my projects, contact information, and resume.",
    },
  ];

  return (
    <div>
      <Carousel
        CustomRightArrow={<CustomRightArrow />}
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

    </div>
  );
};

export default Portfolio;
