import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import bootstrap1 from "./img/bootstrap1.png";
import bootstrap2 from "./img/bootstrap2.png";
import bootstrap3 from "./img/bootstrap3.png";
import graph1 from "./img/graph.png";
import icon from "./img/i.png";

class Home extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Forge</title>
        </head>
        <body>
          <div id="home">
            <div class="landing-txt">
              <h1>FORGE</h1>
              <h3>Finance made easy.</h3>
              <Link to="/login">
                <a href="#" class="btn btn-default btn-lg">
                  Login
                </a>
              </Link>
              <Link to="/signup">
                <a href="#" class="btn btn-default btn-lg">
                  Sign Up!
                </a>
              </Link>
            </div>
          </div>

          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <img src={bootstrap1} />
                </div>
                <div class="col-sm-6 text-center">
                  <h2>
                    <b>Budget...</b>
                  </h2>
                  <p class="lead">
                    &copy;Forge is a free to use budgeting app which allows for
                    fast and quick budgeting to take place. Track your spending,
                    set up deadlines and goals on how much you want to spend.
                    Create budgets which will help you aid you for success
                    tomorrow. Recieve alerts if you are approaching your monthly
                    spending, and make quick account changes.
                  </p>
                  <p class="lead">
                    Want to give it a go? Set up your free account today to
                    start Forging yourself a successful future today!
                  </p>
                  <a href="#" class="btn btn-default btn-lg">
                    Sign Up Free
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="padding">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <h4>
                    <b>Built for your Budget.</b>
                  </h4>
                  <p>
                    Create simple and easy budgets, for easy organization and
                    tracking your records.
                  </p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <img src={graph1} class="img-responsive" />
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <h4>
                    <b>Simple n' Secure.</b>
                  </h4>
                  <p>
                    Easy as one, two, three. Set up a free acounts within
                    seconds, all while being stress free from security. We have
                    top of the line security and encryption to safegaurd your
                    sensitive data.
                  </p>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <img src={bootstrap2} class="img-responsive" />
                </div>
              </div>
            </div>
          </div>
          <div id="fixed">
            <div>
              <div class="padding">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6 text-center">
                      <h4>
                        <b>Easy to understand UI</b>
                      </h4>
                      <p>
                        UI is for the user and its main purpose is to be simple
                        as possible for optimal preformance. Our app is easy to
                        use and it is always bringing you one step closer to
                        your goals
                      </p>
                      <p>
                        Always on the Go? This app is handheld device
                        compatitble and you can check and manage your money from
                        wherever you are.
                      </p>
                      <p>
                        Multitasking at its finest, even with little to
                        knowledge to buget making, anyone can do it. Change your
                        life by one click at a time.{" "}
                      </p>
                    </div>

                    <div class="col-sm-6">
                      <img src={bootstrap3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default Home;
