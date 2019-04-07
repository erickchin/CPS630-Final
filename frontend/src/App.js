import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';
import axios from "axios";


class App extends Component {

    componentWillMount() {
        axios.defaults.baseURL = 'http://localhost:8000/';
        axios.defaults.timeout = 1500;
    }

  render() {
    return (
      <div>
        <Navigation/>
        <Main/>
      </div>
    );
  }
}



export default App;
