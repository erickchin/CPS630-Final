import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends Component {

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/"><div className="navbar-brand" href="#">Forge</div></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <Link to="/"><div className="nav-item nav-link active">Home</div></Link>
            <Link to="/login"><div className="nav-item nav-link active">Login</div></Link>
            <Link to="/signup"><div className="nav-item nav-link active">Signup</div></Link>
            <Link to="/plan"><div className="nav-item nav-link active">Plan</div></Link>
            <Link to="/overview"><div className="nav-item nav-link active">Overview</div></Link>
            <Link to="/analytics"><div className="nav-item nav-link active">Analytics</div></Link>
        </div>
      </div>
    </nav>
    );
  }
}

export default Navigation;