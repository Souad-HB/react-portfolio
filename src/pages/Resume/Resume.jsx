import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <h2
        style={{
          color: "#418555",
          fontWeight: "bolder",
          paddingBottom: "2%",
          fontSize: "40px",
        }}
      >
        Resume
      </h2>
      <p>
        Check out my &nbsp;
        <a
          href="../assets/SouadHB-Resume.docx"
          download
          className="resume-link"
        >
          Resume
        </a>
      </p>
      <h4
        style={{
          display: "flex",
          justifyContent: "left",
          textDecoration: "underline",
          color: "#786b6c",
        }}
      >
        Front-end Proficiencies
      </h4>
      <p
        style={{
          display: "flex",
          justifyContent: "left",
          paddingRight: "100px",
        }}
      >
        - HTML
        <br></br>- CSS
        <br></br>- JavaScript
        <br></br>- Responsive Design
        <br></br>- React
        <br></br>- Bootstrap
      </p>
      <h4
        style={{
          display: "flex",
          justifyContent: "left",
          textDecoration: "underline",
          color: "#786b6c",
        }}
      >
        Back-end Proficiencies
      </h4>
      <p
        style={{
          display: "flex",
          justifyContent: "left",
          paddingRight: "80px",
        }}
      >
        - HTML
        <br></br>- API's
        <br></br>- Node
        <br></br>- Express
        <br></br>- SQL
        <br></br>- MongoDB
        <br></br>- REST
      </p>
    </div>
  );
};
export default Resume;
