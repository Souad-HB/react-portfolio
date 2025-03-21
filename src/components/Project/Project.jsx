import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa"; // github Icon from React
import "./Project.css";
import deployedlink from "../../assets/images/external-link.svg";
import abouticon from "../../assets/images/about.svg";
// import { Tooltip } from "react-tooltip";

const Project = (props) => {
  return (
    <div>
      {/* the card element includes an img element, and a body*/}
      <Card className="card-style h-100">
        <Card.Body className="body">
          {/* the body element includes the title of the project within an anchor and the  github repo link within the react icon*/}

          {/* title section*/}
          <Card.Title className="card-title">
            {" "}
            <a href={props.deployedLink} target="_blank">
              {props.title}
            </a>
          </Card.Title>

          {/* image section*/}
          <Card.Img
            className="project-image"
            variant="top"
            src={props.image}
            alt={props.title}
          />
          {/* github link section*/}
          <Card.Text className="links">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" />
              <span className="link-text">Github Link</span>
            </a>
          </Card.Text>

          {/* deployed link section*/}
          <Card.Text className="links">
            <a
              href={props.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="deployed-link"
            >
              <img
                className="deployed-icon"
                src={deployedlink}
                alt="external link"
              />
              Deployed Project
            </a>
          </Card.Text>

          {/* about section*/}
          <Card.Text className="about-text">
            <span className="link-title">
              <img className="about-icon" src={abouticon} />
              About:
            </span>
            <p className="about-content">{props.about}</p>
          </Card.Text>
        </Card.Body>
      </Card>
      {/* <Tooltip id="card-tooltip" /> */}
    </div>
  );
};
export default Project;
