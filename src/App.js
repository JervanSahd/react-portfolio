import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

import projects from "./projects";


export default function App() {
  return (
    <div>
      <PortfolioContainer project={projects}/>
    </div>
  );
}
