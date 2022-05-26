import React from "react";

// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function Portfolio({ projects }) {
  
  return (
    <div className="card">
      <h1>Portfolio:</h1>
      <p>This is my Portfolio</p>
      <div className="card-body">
        {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
        {projects.map((projects) => (
          <div className="card-title">
            {`${projects.name.title}`}
            <div className="card-body">
              <p>
                <img
                  src={`${projects.picture.large}`}
                  alt={`${projects.picture.alt}`}
                ></img>
              </p>
            </div>
            <p>{`${projects.description}`}</p>
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
