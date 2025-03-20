import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa"; // github Icon from React
import "./Project.css";
import { Tooltip } from "react-tooltip";


const Project = (props) => {

  return (
    <div>
      {/* the card element includes an img element, and a body*/}
      <Card
        data-tooltip-id="card-tooltip"
        data-tooltip-Content="this is my about"
        className="card-style h-100"
        
      >
        <Card.Body className="body">
          {/* the body element includes the title of the project within an anchor and the  github repo link within the react icon*/}
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
          <Card.Img
            className="image"
            variant="top"
            src={props.image}
            alt={props.title}
          />

          <Card.Text className="links">
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <span
                style={{
                  fontSize: "20px",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Github Link:
              </span>{" "}
              <FaGithub className="github-link" />
            </a>
          </Card.Text>
          <Card.Text className="links">
            <div style={{ align: "left" }}>
              <span
                style={{
                  fontSize: "20px",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Deployed Link:
              </span>{" "}
              {props.deployedLink}
            </div>
          </Card.Text>
          <Card.Text className="links">
            <div style={{ alignContent: "left" }}>
              {" "}
              <span
                style={{
                  fontSize: "20px",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                About:
              </span>{" "}
              {props.about}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Tooltip id="card-tooltip" />
    </div>
  );
};
export default Project;
