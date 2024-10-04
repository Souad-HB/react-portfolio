import "./AboutMe.css";
import photo from "../../assets/images/photo.jpg";

const AboutMe = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <h3>Full Stack Developer</h3>
      <img src={photo} alt="Photo of Souad" />
      <div>

        <p>
          A 28-year-old software development professional with a background
          in Mechatronics Engineering. After earning my degree in Tunisia and
          publishing robotics research in France, I moved to the U.S. to start
          as a Project Engineer. Over the years, I advanced to my current role
          as Manager of Software Engineering.
        </p>
        <p>
          Recently, I completed the Web Development and Coding Bootcamp at UCF
          to further develop my expertise in modern web technologies. My
          combined experience in engineering and software fuels my passion for
          creating impactful solutions in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
