//importing the icons from React
import {

  FaDownload,
} from "react-icons/fa";

import "./Resume.css";
import js from "../../assets/images/java-script.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/csslogo.png";
import bootstrap from "../../assets/images/bootstrap.png";
import react from "../../assets/images/react.png";
import resDesign from "../../assets/images/responsive-design.png";
import sqlserver from "../../assets/images/sql-server.png";
import mongo from "../../assets/images/mongo.png";
import node from "../../assets/images/nodejs.png";
import postgres from "../../assets/images/postgresql.svg";
import express from "../../assets/images/express-original.svg";
import graphql from "../../assets/images/graphql.svg";
const pdfResume = "/SouadHB-Resume.pdf";

const Resume = () => {
  return (
    <div>
      <p
        style={{
          paddingTop: "25px",
          textAlign: "center",
          paddingBottom: "90px",
          letterSpacing: "3px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        Check out my&nbsp;
        <a
          href={pdfResume}
          download="Souad Hassen Resume"
          className="resume-link"
        >
          <i>
            Resume <FaDownload />
          </i>
        </a>
      </p>
      <div className="proficiencies-container">
        <div>
          <p className="proficiency-title">Front-end Proficiencies</p>
          <div className="proficiency-logos">
            <img className="img" src={html} title="HTML5" />
            <img className="img" src={css} title="CSS3" />
            <img className="img" src={js} title="JavaScript" />
            <img className="img" src={resDesign} title="Responsive Design" />
            <img className="img" src={react} title="React" />
            <img className="img" src={bootstrap} title="Bootstrap" />
          </div>
        </div>
        <div>
          <p className="proficiency-title">Back-end Proficiencies</p>
          <div className="proficiency-logos">
            <img className="img" src={node} title="Node.js" />
            <img className="img" src={express} title="Express.js" />
            <img className="img" src={sqlserver} title="SQL" />
            <img className="img" src={mongo} title="MongoDB" />
            <img className="img" src={postgres} title="Postgres" />
            <img className="img" src={graphql} title="GraphQL" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
