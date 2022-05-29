import React from "react";
import resumeData from "../../resumeData";

export default function Resume() {
  return (
    <div>
    <div className="container">
      <div className="card-body container">
        {resumeData.map((resumeData) => (
          <div className="card-title">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">About</h1>
                <p class="lead"> {`${resumeData.summary.sum1}`}</p>
                <p class="lead"> {`${resumeData.summary.future}`}</p>
                </div>
              </div>
            </div>
        ))},
            </div>
            </div>
            </div>
  )}