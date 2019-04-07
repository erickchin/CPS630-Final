import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import signlogo from './img/avatar2.png'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Multiple accounts? Replace this part with your api calls
      username: "Login",
      password: "Password"
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)

  }

  //Change state value of docName
  handleChangeName(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePass(event) {
    this.setState({ password: event.target.value });
  }

  postDataHandler(event) {

      const loginUser = { username: this.state.username,
          password: this.state.password }
      axios
          .post(`auth/login/`, loginUser)
          .then(response => {
              const { token, user } = response.data;

              // We set the returned token as the default authorization header
              axios.defaults.headers.common.Authorization = `Token ${token}`;
              console.log(this);

          })
          .catch(error => console.log(error));
  }

    handleSubmit(event) {
        if (this.state.firstName === "") {
            alert("One or more empty fields!");
            return;
        }
        event.preventDefault();
    }

    render() {
    return (
      <div class="modal-dialog text-center">
      <div class="col-sm-8 main-section">
          <div class="modal-content">
              <div class="col-12 user-img">
                  <img src={signlogo}/>
              </div>
              <form id="myLogin" action="" method="post"class="col-12" onSubmit={this.handleSubmit} >
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="Username"
                             name="username"
                             id="username"
                             value={this.state.username}
                             onChange={this.handleChangeName}/>
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password"
                             name="password"
                             id="password"
                             value={this.state.password}
                             onChange={this.handleChangePass}/>
                  </div>
                  <button type="submit" class="btn-dark btn-lg"
                          onClick={(event) => this.postDataHandler(event)}>Login</button>
              </form>
              <br/>
          </div>
      </div>
  </div>
    );
  }
}

export default Login;
