import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // setting 3 state variables for name, email and message using `useState`
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // function to validate the name, it shouldnt be numbers nor undefined. If it is, set the error
  const validateName = (e) => {
    const value = e.target.value;
    const lettersPattern = /^[A-Za-z\s]+$/; // Regex to allow only letters and spaces

    if (!value || !lettersPattern.test(value)) {
      setName(""); // Reset name if invalid
      setError("Name is required and must contain only letters.");
    } else {
      setError(""); // Clear error if valid
    }
  };

  // function to validate the email, it should be valid. If it is not valid, set the error
  const validateEmail = (e) => {
    const value = e.target.value;
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Email regex pattern

    if (!value) {
      setError("Email address is required.");
    } else if (!emailPattern.test(value)) {
      setError("Please enter a valid email address.");
    } else {
      setEmail(value); // If valid, set the email
      setError(""); // Clear error if valid
    }
  };

  // function to validate the message field, it shouldnt be empty. If it is, set the error.
  const validateMessage = (e) => {
    console.log(e.target);
    const value = e.target.value;
    if (!value) {
      setError("Message field is required."); //show the error if the value is undefined
    } else {
      setError(""); // if valid don't show the error
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their message had been submitted and clear the inputs
    alert(`${name}, your message has been submitted`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="alignment">
      <h2 className="heading2">Contact</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <label className="input-label">Name: </label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)} // Keep updating the name state
          onBlur={validateName} // Validate when the input loses focus
          type="text"
          placeholder="name"
        />

        <label className="input-label">Email Address: </label>
        <input
          className="input-box"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)} // Keep updating the email state
          onBlur={validateEmail} // Validate when the input loses focus
          type="email"
          placeholder="email address"
        />

        <label className="input-label">Message: </label>
        <br />
        <textarea
          className="input-box textarea-height"
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)} // Keep updating the message state
          onBlur={validateMessage} // Validate when the input loses focus
          placeholder="message"
        />
        <p className="error">{error}</p>
        <button id="contact-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
