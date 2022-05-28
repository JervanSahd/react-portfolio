import React from "react";
import resumeData from "../../resumeData";


export default function Resume() {
  return (
    <div className="container">
      
      <div className="jumbotron"><h1>Resume:</h1>
      <p>This is my resume</p>
      </div>
      <div className="card-body container">
        {resumeData.map((resumeData) => (
          <div className="card-title">
            <div>
              <p>
                <img
                  src={`${resumeData.contact.image} `}
                  alt={`${resumeData.contact.imageAlt} `}
                ></img>
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
            <div className="card-body container">
              <p> {`${resumeData.summary}`}</p>
            </div>

            <div className="card-body container " >
              <h2>Experience</h2>
              <p>
                  Company:{`${resumeData.experience1.company}`}
                  Position:{`${resumeData.experience1.position}`}
                  Skills:{`${resumeData.experience1.skills}`}
                  Core Compentencies: {`${resumeData.experience1.compentencies}`}
                  Start Date: {`${resumeData.experience1.startDate}`}
                  End Date: {`${resumeData.experience1.endDate}`}
                  Length: {`${resumeData.experience1.length}`}
                  Dutie:<ul><li>{`${resumeData.experience1.duty1}`}</li>
                  <li>{`${resumeData.experience1.duty2}`}</li>
                  <li>{`${resumeData.experience1.duty3}`} </li>
                  </ul>
                </p>
                <p>
                  Company:{`${resumeData.experience2.company}`}
                  Position:{`${resumeData.experience2.position}`}
                  Skills:{`${resumeData.experience2.skills}`}
                  Core Compentencies: {`${resumeData.experience2.compentencies}`}
                  Start Date: {`${resumeData.experience2.startDate}`}
                  End Date: {`${resumeData.experience2.endDate}`}
                  Length: {`${resumeData.experience2.length}`}
                  Dutie:<ul><li>{`${resumeData.experience2.duty1}`}</li>
                  <li>{`${resumeData.experience2.duty2}`}</li>
                  <li>{`${resumeData.experience2.duty3}`} </li>
                  </ul>
                </p>
                <p>
                  Company:{`${resumeData.experience3.company}`}
                  Position:{`${resumeData.experience3.position}`}
                  Skills:{`${resumeData.experience3.skills}`}
                  Core Compentencies: {`${resumeData.experience3.compentencies}`}
                  Start Date: {`${resumeData.experience3.startDate}`}
                  End Date: {`${resumeData.experience3.endDate}`}
                  Length: {`${resumeData.experience3.length}`}
                  Dutie:<ul><li>{`${resumeData.experience3.duty1}`}</li>
                  <li>{`${resumeData.experience3.duty2}`}</li>
                  <li>{`${resumeData.experience3.duty3}`} </li>
                  </ul>
                </p>
            </div>
            <div className="card-body container">
              <h2>Skills</h2>
              <p>{`${resumeData.skills.current}`}
              {`${resumeData.skills.future}`}</p>
            </div>
            <div className="card-body container">
              <h2>Core Compentencies</h2>
              <p> {`${resumeData.core.comp1}`}</p>
              <p> {`${resumeData.core.comp2}`}</p>
              <p> {`${resumeData.core.comp3}`}</p>
              <p> {`${resumeData.core.comp4}`}</p>
              <p> {`${resumeData.core.comp5}`}</p>
              <p> {`${resumeData.core.comp6}`}</p>
              <p> {`${resumeData.core.comp7}`}</p>
              <p> {`${resumeData.core.comp8}`}</p>
            </div>
            <div className="card-body container">
            <h2>Education</h2>
            <p>
              <h3> {`${resumeData.education.degree.type}`}</h3>
              <p> {`${resumeData.education.degree.school}`}</p>
              <p> {`${resumeData.education.degree.studies}`}</p>
            </p>
            <p>
              <h3> {`${resumeData.education.certs.type}`}</h3>
              <p> {`${resumeData.education.certs.school}`}</p>
              <p> {`${resumeData.education.certs.studies}`}</p>
            </p>
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
