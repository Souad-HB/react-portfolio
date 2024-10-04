import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaDatabase,
  FaMobileAlt,
  FaBootstrap,
} from "react-icons/fa"; //importing the icons from React
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <p
        style={{
          paddingTop: "25px",
          textAlign: "center",
          paddingBottom: "50px",
          letterSpacing: "3px",
        }}
      >
        Check out my&nbsp;
        <a
          href="../assets/SouadHB-Resume.docx"
          download
          className="resume-link"
        >
          <i>Resume</i>
        </a>
      </p>
      <div className="proficiencies-container">
        <div>
          <p className="proficiency-title">Front-end Proficiencies</p>
          <div className="proficiency-logos">
            <FaHtml5 title="HTML5" />
            <FaCss3Alt title="CSS3" />
            <FaJsSquare title="JavaScript" />
            <FaMobileAlt title="Responsive Design" />
            <FaReact title="React" />
            <FaBootstrap title="Bootstrap" />
          </div>
        </div>
        <div>
          <p className="proficiency-title">Back-end Proficiencies</p>
          <div className="proficiency-logos">
            <FaNode title="Node.js" />
            <SiExpress title="Express.js" />
            <FaDatabase title="SQL" />
            <SiMongodb title="MongoDB" />
            <SiMysql title="MySQL" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
