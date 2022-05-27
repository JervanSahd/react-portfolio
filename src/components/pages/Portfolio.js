import React from "react";
import projects from "../../projects";
// This List component accepts projects from App.js
// We pluck off the "users" property of the projects object using destructuring assignment
// This prevents us from having to type `projects.users` each time we want to refer to the users object
// export default function Portfolio(projects) {
//   const projects = projects.projects;
export default function Portfolio() {
  return (
    <div className="card">
      <h1>Portfolio:</h1>
      <p>This is my Portfolio</p>
      <div className="card-body">
        {projects.map((projects) => (
          <div className="card-title">
            {`${projects.title}`}
            <div className="card-body">
              <p>
                <img
                  src={`${projects.picture.large}`}
                  alt={`${projects.picture.alt}`}
                ></img>
              </p>
            </div>
            <p>{`${projects.discription}`}</p>
            <div className="card-body">
              <p className="card-link">
                GitHub Repository {`${projects.links.github}`}
              </p>
              <p className="card-link">
                Deployed Site {`${projects.links.deployed}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
