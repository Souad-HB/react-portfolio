import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa"; // github Icon from React

const Project = (props) => {
  return (
    <div>
      <Card style={{ padding: "25px" }}>
        <Card.Img variant="top" src={props.image} alt={props.title} />
        <Card.Body>
          <Card.Title
            style={{
              textAlign: "center",
            }}
          >
            {" "}
            <a
              href={props.deployedLink}
              target="_blank"
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                color: "black",
              }}
            >
              {props.title}
            </a>
          </Card.Title>
          <Card.Text style={{ textAlign: "center" }}>
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaGithub style={{ fontSize: "25px", alignItems: "center" }} />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Project;
