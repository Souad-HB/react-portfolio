import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa"; // github Icon from React

const Project = (props) => {
  return (
    <div>
      <Card
        style={{
          padding: "25px",
          backgroundColor: "transparent",
          border: "2px solid #041323",
          transition: "transform 0.2s",
          opacity: "0.8",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.opacity = "0.8";
        }}
      >
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
                fontSize: "20px",
                color: "white",
                textDecoration: "none",
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
              <FaGithub
                style={{
                  fontSize: "30px",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Project;
