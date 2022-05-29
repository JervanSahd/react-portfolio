import React from "react";
import resumeData from "../../resumeData";

export default function Resume() {
  return (
    <div className="container">
      <div className="card-body container">
        {resumeData.map((resumeData) => (
          <div className="card-title">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">Resume</h1>
                <p class="lead"> {`${resumeData.summary.sum1}`}</p>
                <p class="lead"> {`${resumeData.summary.future}`}</p>
                {/*     
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
              </p> */}
              </div>
            </div>
            <div className=" container">
              <div className="card-body">
                <h4 className="card-title">Skills</h4>
                <div className="container">
                  <h5 className="card-subtitle mb-2 text-muted">
                    <p>{`${resumeData.skills}`}</p>
                  </h5>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="card-body">
                <h4 className="card-title ">Experience</h4>
                <div className="card-body ">
                  <h5 className="card-subtitle mb-2 text-muted">
                    {`${resumeData.experience1.company}`} -
                    {`${resumeData.experience1.position}`}
                  </h5>
                  <p className="card-text">
                    <h6>
                      {`${resumeData.experience1.startDate}`} -
                      {`${resumeData.experience1.endDate}`}{" "}
                      {`${resumeData.experience1.length}`}
                    </h6>
                  </p>
                  <p className="card-text">
                    <ul>
                      <li>{`${resumeData.experience1.duty1}`}</li>
                      <li>{`${resumeData.experience1.duty2}`}</li>
                      <li>{`${resumeData.experience1.duty3}`} </li>
                    </ul>
                  </p>
                  <div>
                    <p className="card-text">
                      <h6> Skills:</h6>
                      {`${resumeData.experience1.skills}`}
                    </p>
                    <p className="card-text">
                      <h6> Compentencies:</h6>
                      {`${resumeData.experience1.compentencies}`}
                    </p>
                  </div>
                </div>
                <div className="card-body ">
                  <h5 className="card-subtitle mb-2 text-muted">
                    {`${resumeData.experience2.company}`} -{" "}
                    {`${resumeData.experience2.position}`}
                  </h5>
                  <p className="card-text">
                    <h6>
                      {" "}
                      {`${resumeData.experience2.startDate}`}
                      {`${resumeData.experience2.endDate}`}{" "}
                      {`${resumeData.experience2.length}`}
                    </h6>{" "}
                  </p>
                  <ul>
                    <li>{`${resumeData.experience2.duty1}`}</li>
                    <li>{`${resumeData.experience2.duty2}`}</li>
                    {/* <li>{`${resumeData.experience2.duty3}`} </li> */}
                  </ul>

                  <div>
                    <p className="card-text">
                      <h6> Skills:</h6>
                      {`${resumeData.experience2.skills}`}
                    </p>
                    <p className="card-text">
                      <h6> Compentencies:</h6>
                      {`${resumeData.experience2.compentencies}`}
                    </p>
                  </div>
                </div>
                <div className="card-body ">
                  <h5 className="card-subtitle mb-2 text-muted">
                    {`${resumeData.experience3.company}`} -{" "}
                    {`${resumeData.experience3.position}`}
                  </h5>
                  <p>
                    <h6>
                      {`${resumeData.experience3.startDate}`}
                      {`${resumeData.experience3.endDate}`}
                      {`${resumeData.experience3.length}`}
                    </h6>
                  </p>
                  <div>
                    <p className="card-text">
                      <ul>
                        <li>{`${resumeData.experience3.duty1}`}</li>
                        <li>{`${resumeData.experience3.duty2}`}</li>
                        <li>{`${resumeData.experience3.duty3}`} </li>
                      </ul>
                    </p>
                    <p className="card-text">
                      <h6> Skills:</h6> {`${resumeData.experience3.skills}`}
                    </p>
                    <p className="card-text">
                      <h6> Compentencies:</h6>
                      {`${resumeData.experience3.compentencies}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="card" style="width: 18rem;"> */}
            <div className="container">
              <div className="card-body">
                <h4 className="card-title">Core Compentencies</h4>
                <div className="container">
                  <p className="card-text">{`${resumeData.core.comp1}`}</p>
                  <p className="card-text">{`${resumeData.core.comp2}`}</p>
                  <p className="card-text">{`${resumeData.core.comp3}`}</p>
                  <p className="card-text">{`${resumeData.core.comp4}`}</p>
                  <p className="card-text">{`${resumeData.core.comp5}`}</p>
                  <p className="card-text">{`${resumeData.core.comp6}`}</p>
                </div>
              </div>
            </div>

            <div className=" container">
              <div className="card-body">
                <h4 className="card-title">Education</h4>
                <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.education.degree.school}`}</h5>
                <p className="card-text">
                  <h6>{`${resumeData.education.degree.type}`}</h6>
                </p>
                <p className="card-text">
                  Studies included: {`${resumeData.education.degree.studies}`}
                </p>

                <h5 className="card-subtitle mb-2 text-muted">{`${resumeData.education.certs.school}`}</h5>
                <p className="card-text">
                  <h6>{`${resumeData.education.certs.type}`}</h6>
                </p>
                <p>
                  <a href="#portfolio">Course Work</a>
                </p>
                <p className="card-text">
                  Studies included: {`${resumeData.education.certs.studies}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
