import React, { Component } from 'react';
import signlogo from './img/avatar2.png'
import axios from 'axios';


class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            //Multiple accounts? Replace this part with your api calls
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLast = this.handleChangeLast.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event) {
        this.setState({firstName: event.target.value});
    }

    handleChangeLast(event) {
        this.setState({lastName: event.target.value});
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePass(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.firstName === "") {
            alert("One or more empty fields!");
            return;
        }
        event.preventDefault();
    }

    //REPLACE url type for node.js path
    postDataHandler(event) {
        console.log(this);
        const payload = {
            username: this.state.firstName,
            password: this.state.password
        }
        axios.post('auth/register/', payload)
            .then(response => {
                const { token, user } = response.data;

                // We set the returned token as the default authorization header
                axios.defaults.headers.common.Authorization = `Token ${token}`;
            }); //takes function as input
    }


    render(){
        return(
            <div class="modal-dialog text-center">
                <div class="col-sm-8 main-section">
                    <div class="modal-content">
                        <div class="col-12 user-img">
                            <img src={signlogo}/>
                        </div>
                        <form class="col-12" onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="First Name"
                                       name="firstName"
                                       value={this.state.firstName}
                                       onChange={this.handleChangeName}/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Last Name"
                                       name="lastName"
                                       value={this.state.lastName}
                                       onChange={this.handleChangeLast} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="E-mail"
                                       name="email"
                                       value={this.state.email}
                                       onChange={this.handleChangeEmail} />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Username"
                                       name="username"
                                       value={this.state.username}
                                       onChange={this.handleChangeUsername}/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" placeholder="Password"
                                       name="password"
                                       value={this.state.password}
                                       onChange={this.handleChangePass}/>
                            </div>
                            <button type="submit" class="btn-dark btn-lg"
                                    onClick={(event) => this.postDataHandler(event)}>Sign Up</button>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
