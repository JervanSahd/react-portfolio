import React from "react";
// import resumeData from "../../resumeData";
import "./style.css";

function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello `);
  };

  return (
    <div>
      {/* <div>
        <p> {`${resumeData.contact.location}`}</p>
        <p> {`${resumeData.contact.email}`}</p>
        <p>
          {`${resumeData.contact.linkedin.icon}`}
          {`${resumeData.contact.linkedin.link}`}
        </p>
        <p>
          {`${resumeData.contact.github.icon}`}
          {`${resumeData.contact.github.link}`}
        </p>
      </div> */}
      <div>
        <form className="form">
          <input
         
            name="name"
            type="text"
            placeholder=" Name"
          />
          <input
            name="email"
            type="text"
            placeholder="Email Address"
          />
          <input
            name="message"
            type="text"
            placeholder="What message would you like to add"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
