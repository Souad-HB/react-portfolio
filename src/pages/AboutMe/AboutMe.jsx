import "./AboutMe.css";
import photo from "../../assets/images/photo.jpg";

const AboutMe = () => {
  return (
    <div style={{paddingTop: "20px"}}>
      <img src={photo} alt="Photo of Souad" />
      <div>
        <p>
          I am a passionate and driven 28-year-old software development
          professional with a background in Mechatronics Engineering. I earned
          my degree in Tunisia, where my academic journey laid the foundation
          for my strong interest in technology and robotics. During my time in
          France, I delved deeper into research on robotics, culminating in the
          publication of an article on ResearchGate.
          <br />
          A few years ago, I relocated to the United States, where I initially
          began my career as a Project Engineer. Over time, I advanced to roles
          of increasing responsibility, from Project Lead to my current position
          as Manager of Software Engineering. My experience here has been
          transformative, and I've been inspired by the rapid pace of
          technological innovation.
          <br />
          <p>
            Eager to further expand my expertise in the tech field, I recently
            completed the Web Development and Coding Bootcamp at the University
            of Central Florida (UCF), where I developed strong skills in modern
            web technologies. My journey in both engineering and software
            development continues to fuel my ambition to create impactful
            solutions in the ever-evolving world of technology.
          </p>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
