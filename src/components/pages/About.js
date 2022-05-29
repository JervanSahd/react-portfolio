import React from "react";
import resumeData from "../../resumeData";

export default function Resume() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="card-body container">
            {resumeData.map((resumeData) => (
              <div className="card-title">
                <div className="jumbotron jumbotron-fluid">
                  <div className="container">
                    <h1 className="display-4">About</h1>

                    <div className="row">
                      <div className="column.about left">
                        <img
                          src={`${resumeData.contact.image} `}
                          alt={`${resumeData.contact.imageAlt} `}
                        ></img>
                      </div>
                      <div className="column.about right">
                        <h2>👋 Hi, I’m Steve</h2>
                          <p></p>
                        <p className="lead">
                         
                          I'm a full stack developer and interested in web3 and
                          blockchain technologies.
                        </p>
                        <p className="lead">
                          {" "}
                          I’m looking to collaborate on any web or app
                          developement projects.
                        </p>
                        <p className="lead">
                          {" "}
                          I run a website called hodlresource.com
                        </p>
                        <p className="lead">
                          {" "}
                          My most current experience is web and application
                          developing using MERN stack technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
