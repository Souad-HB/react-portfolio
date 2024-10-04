import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa"; // github Icon from React
import "./Project.css"

const Project = (props) => {
  return (
    <div>
      <Card
        className="card-style h-100"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.opacity = "0.8";
        }}
      >
        <Card.Img className="image" variant="top" src={props.image} alt={props.title} />
        <Card.Body>
          <Card.Title className="card-title">
            {" "}
            <a
              href={props.deployedLink}
              target="_blank"
              className="deployed-link"
            >
              {props.title}
            </a>
          </Card.Title>
          <Card.Text className="card-title">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub
                className="github-link"
              />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Project;
