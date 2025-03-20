import "./AboutMe.css";
import photo from "../../assets/images/photo.jpg";

const AboutMe = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <h3 style={{paddingBottom: "10px"}}>Full Stack Developer</h3>
      <img src={photo} alt="Photo of Souad" />
      <div>
        <p style={{ paddingTop: "15px", paddingBottom: "10px" }}>
          A 29-year-old software development professional with a background in
          Mechatronics Engineering and a proven track record in robotics and
          software engineering. After earning my degree in Tunisia and
          publishing a robotics research paper in France, I moved to the U.S. to
          advance my career, progressing from Project Engineer to Manager of
          Software Engineering.
        </p>
        <p className="paddingMobile">
          Recently certified as a Full-Stack Developer from the University of
          Central Florida, I am proficient in modern web technologies such as
          React, Node.js, SQL, and MongoDB. With expertise in building scalable
          applications, implementing CI/CD pipelines, and conducting end-to-end
          testing with Cypress, I combine engineering and software development
          skills to deliver innovative and robust solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
