import React from "react";
import resumeData from "../../resumeData";

export default function Resume() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Resume:</h1>
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
            <div className=" container">
              <div className="card-body">
                <h4 className="card-title">Experience</h4>
                <div className="container">
                  <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.experience1.company}`}</h5>
                  <p className="card-text">
                    <h6>{`${resumeData.experience1.position}`}</h6>
                  </p>
                  <p className="card-text">
                    Skills:{`${resumeData.experience1.skills}`}
                  </p>
                  <p className="card-text">
                    Core Compentencies:
                    {`${resumeData.experience1.compentencies}`}
                  </p>
                  {`${resumeData.experience1.startDate}`} -
                  {`${resumeData.experience1.endDate}`}
                  <p className="card-text">
                    Length: {`${resumeData.experience1.length}`}
                  </p>
                  <p className="card-text">
                    Duties:
                    <ul>
                      <li>{`${resumeData.experience1.duty1}`}</li>
                      <li>{`${resumeData.experience1.duty2}`}</li>
                      <li>{`${resumeData.experience1.duty3}`} </li>
                    </ul>
                  </p>
                </div>
                <div className="container">
                  <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.experience2.company}`}</h5>
                  <p className="card-text">
                    <h6>{`${resumeData.experience2.position}`}</h6>
                  </p>
                  <p className="card-text">
                    Skills:{`${resumeData.experience2.skills}`}
                  </p>
                  <p className="card-text">
                    Core Compentencies:{" "}
                    {`${resumeData.experience2.compentencies}`}
                  </p>
                  <p className="card-text">
                    {`${resumeData.experience2.startDate}`}{" "}
                    {`${resumeData.experience2.endDate}`}
                  </p>
                  <p className="card-text">
                    Length: {`${resumeData.experience2.length}`}
                  </p>
                  <p className="card-text">
                    Duties:
                    <ul>
                      <li>{`${resumeData.experience2.duty1}`}</li>
                      <li>{`${resumeData.experience2.duty2}`}</li>
                      <li>{`${resumeData.experience2.duty3}`} </li>
                    </ul>
                  </p>
                </div>
                <div className="container">
                  {" "}
                  <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.experience3.company}`}</h5>
                  <p className="card-text">
                    <h6>{`${resumeData.experience3.position}`}</h6>
                  </p>
                  <p className="card-text">
                    experience3 Skills:{`${resumeData.experience3.skills}`}
                  </p>
                  <p className="card-text">
                    Core Compentencies:{" "}
                    {`${resumeData.experience3.compentencies}`}
                  </p>
                  {`${resumeData.experience3.startDate}`}{" "}
                  {`${resumeData.experience3.endDate}`}
                  <p className="card-text">
                    Length: {`${resumeData.experience3.length}`}
                  </p>
                  <p className="card-text">
                    Duties:
                    <ul>
                      <li>{`${resumeData.experience3.duty1}`}</li>
                      <li>{`${resumeData.experience3.duty2}`}</li>
                      <li>{`${resumeData.experience3.duty3}`} </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div className=" container">
              <div className="card-body">
                <h4 className="card-title">Skills</h4>
                <div>
                  <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.skills.future}`}</h5>
                </div>
                <div className="container">
                  <h5 className="card-subtitle mb-2 text-muted">
                    <p>
                      Present skills include {`${resumeData.skills.current}`}
                    </p>
                  </h5>
                </div>
              </div>
            </div>
            {/* <div className="card" style="width: 18rem;"> */}
            <div className="card">
              <h4>Core Compentencies</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  {" "}
                  {`${resumeData.core.comp1}`}
                </li>
                <li className="list-group-item">
                  {" "}
                  {`${resumeData.core.comp2}`}
                </li>
                <li className="list-group-item">
                  {" "}
                  {`${resumeData.core.comp3}`}
                </li>
                <li className="list-group-item">
                  {" "}
                  {`${resumeData.core.comp4}`}
                </li>
                <li className="list-group-item">
                  {" "}
                  {`${resumeData.core.comp5}`}
                </li>
                <li className="list-group-item">
                  {" "}
                  {`${resumeData.core.comp6}`}
                </li>
              </ul>
            </div>
            <div className=" container">
              <div className="card-body">
                <h4 className="card-title">Education</h4>
                <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.education.degree.school}`}</h5>
                <p className="card-text">
                  <h6>{`${resumeData.education.degree.type}`}</h6>
                </p>
                <p className="card-text">
                  {`${resumeData.education.degree.studies}`}
                </p>

                <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.education.certs.school}`}</h5>
                <p className="card-text">
                  <h6>{`${resumeData.education.certs.type}`}</h6>
                </p>
                <p className="card-text">
                  {`${resumeData.education.certs.studies}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
