import React from "react";
import resumeData from "../../resumeData";

export default function Resume() {
  return (
    <div className="card">
      <h1>Resume:</h1>
      <p>This is my resume</p>
    
      <div className="card-body">
        {resumeData.map((resumeData) => (
          <div className="card-title">
            <div>
              <p>
                <img src={`${resumeData.contact.image} `} alt={`${resumeData.contact.imageAlt} `}></img>
              </p>
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
            </div>
            <div className="card-body">
              <p> {`${resumeData.summary}`}</p>
            </div>

            <div className="card-body">
            
              <p>{`${resumeData.experience}`}</p>
            
            </div>
            <div className="card-body">
              <p>{`${resumeData.skills}`}</p>
            </div>
            <div className="card-body">
              <p> {`${resumeData.core}`}</p>
            </div>
            <div className="card-body">
              <p> {`${resumeData.education}`}</p>
            </div>
          </div>
          
      
    
  ))}
  </div>
  </div>)
}
  


