import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userName: "",
      password: "",
      id: 0,
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
  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        this.setState({
          data: res.data,
          userName: "",
          password: "",
          id: 0,
        });
      })
      .catch((err) => console.log(err));
  }

  signIn(event, id) {
    event.preventDefault();
    if (id === 0) {
      axios
        .post("http://localhost:3000/users", {
          userName: this.state.userName,
          password: this.state.password,
        })
        .then(() => this.componentDidMount())
        .catch((err) => console.log(err));
    } else {
      alert('user already exists please try another name')
    }
  }
  render() {
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
            onClick={(event) => this.signIn(event,this.state.id)}
          >
            Sign in
          </button>
      </div>
    );
  }
}

export default Signin;
