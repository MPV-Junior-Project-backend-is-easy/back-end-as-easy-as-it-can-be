import React, { Component } from "react";
import axios from "axios";
import Login from "./Login.jsx"
export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userName: "",
      password: "",
      id: 0,
      check:""
    };
    this.signIn = this.signIn.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeuserName = this.changeuserName.bind(this);
  }
  changeuserName(event) {
    this.setState({ userName: event.target.value });
  }
  changePassword(event) {
    this.setState({ password: event.target.value });
  }
  

  signIn(event) {
    event.preventDefault();
      axios
        .post("http://localhost:3000/users", {
          userName: this.state.userName,
          password: this.state.password,
        })
        .then(() => this.setState({
          userName: "",
          password: "",
          id: 0,
          check:"login"
        }))
        .catch((err) => console.log(err,'errr'));
  }
  render() {
    if(this.state.check === ""){
      return (
        <div>
            <input
              type="text"
              placeholder="userName"
              value={this.state.userName}
              onChange={this.changeuserName}
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.changePassword}
            ></input>
            <button
              id="sign"
              onClick={(event) => this.signIn(event)}>createAnAccount</button>
        </div>
      );
    } else {
      return (
        <div>
          <Login/>
        </div>
      )
    }
  }
}

