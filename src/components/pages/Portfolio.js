import React from "react";
import projects from "../../projects";

export default function Portfolio() {
  return (
    <div className="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container"></div>
        <h1>Portfolio:</h1>
        <p>This is my Portfolio</p>
        
      </div>
      <div className="card-body">
        {projects.map((projects) => (
         
          <div class="card" style={{width: "18rem"}}>
            <img
              class="card-img-top"
              src={`${projects.picture.image}`}
              alt={`${projects.picture.alt}`}
            ></img>
            <div class="card-body">
              <h5 class="card-title">{`${projects.title}`}</h5>
              <p class="card-text"> {`${projects.discription}`}</p>
              <a href={`${projects.links.github}`} class="btn btn-primary">
                GitHub
              </a>
              <a href={`${projects.links.deployed}`} class="btn btn-primary">
                Deployed
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
