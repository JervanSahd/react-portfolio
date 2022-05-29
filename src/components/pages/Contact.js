import React from "react";
import resumeData from "../../resumeData";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Hello `);
  };

  return (
    <div className="card-body container">
      {resumeData.map((resumeData) => (
        <div className="card-title">
          <div className="jumbotron jumbotron-fluid">
            <h1 className="display-4">Contact</h1>

            <div className="row">
              {/* <p> {`${resumeData.contact.location}`}</p> */}
              <p> {`${resumeData.contact.email}`}</p>
              {/* <p><a href= {`${resumeData.contact.linkedin.link}`}><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></p>
              <p><a href= {`${resumeData.contact.github.link}`}><FontAwesomeIcon icon="fa-brands fa-github" /></a></p>
              <p><a href= {`${resumeData.contact.stackoverflow.link}`}><FontAwesomeIcon icon="fa-brands fa-stack-overflow" /></a></p> */}
            </div>
          </div>
          <div>
            <form className="form">
              <input name="name" type="text" placeholder=" Name" />
              <input name="email" type="text" placeholder="Email address" />
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
      ))}
      ,
    </div>
  );
}
