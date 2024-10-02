import "./AboutMe.css";
import photo from "../../assets/images/photo.jpg";

const AboutMe = () => {
  return (
    <div>
      <h2 className="heading2">About Me</h2>
      <img src={photo} alt="Photo of Souad" />
      <div>
        <p>
          A 28 year old ambitious woman, interested in the world of software
          development. Started out as a Mechatronics Engineer where I got my
          degree from Tunisia. I had a few years in France to do my research
          about robotics and ended up publishing an article about it on
          ResearchGate.
        </p>
        <p>
          Moved to the United States only a few years ago to start out as a
          Project Engineer and ended up moving up in ranks from a project
          engineer, to a project lead and now as a Manager of Software
          Engineering. I was impressed with how advanced technology is in this
          country. So I decided to enroll in the Web Development and Coding
          bootcamp at UCF.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
