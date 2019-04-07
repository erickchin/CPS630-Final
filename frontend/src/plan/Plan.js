import React, { Component } from "react";
import PlanForm from "./PlanForm.js";
import "./plan.css";

class Plan extends Component {
  state = {
    fields: {}
  };

  //accepts the form information from PlanForm.js
  //fields is a JSON object containing all the data
  onSubmit = fields => {
    this.setState({ fields });
    console.log("Monthly Plan received: ", fields);
  };

  render() {
    return (
      <div className="plan">
        <body id="planBody">
          <div class="jumbotron" id="planInstructions">
            <div class="container">
              <h1 class="display-4">Financial Planning</h1>
              <p class="lead">
                Enter your monthly budget for each of the following categories
                below
              </p>
            </div>
          </div>
          <div className="planObject">
            <PlanForm onSubmit={fields => this.onSubmit(fields)} />
          </div>
        </body>
      </div>
    );
  }
}

export default Plan;
