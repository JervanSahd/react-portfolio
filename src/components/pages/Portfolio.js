import React from "react";
import projects from "../../projects";

export default function Portfolio() {
  return (
    <div className="container">
      <div class="jumbotron jumbotron-fluid">
        <div class="container"></div>
        <h1 className="display-4">Portfolio:</h1>
        <p>Download Resume</p>
        
      </div>
      <div className="card-body">
        {projects.map((projects) => (
         
          <div class="card" style={{width: "50rem", margin: "35px"} }>
            
            <div class="card-body">
              <h5 class="card-title">{`${projects.title}`}</h5>
              <p class="card-text"> {`${projects.discription}`}</p>
              <p style={{align:"center"}}><span style={{margin: "1px"} }><a href={`${projects.links.github}`} class="btn btn-primary">
                GitHub
              </a></span>
              <span style={{margin: "1px"} }><a href={`${projects.links.deployed}`} class="btn btn-primary">
                Deployed
              </a></span></p>
            </div>
            <img
              class="card-img-top"
              src={`${projects.picture.image}`}
              alt={`${projects.picture.alt}`}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
