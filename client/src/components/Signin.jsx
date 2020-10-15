import Axios from "axios";
import React, { Component } from "react";
import axios from "axios";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      username: "",
      password: "",
      id: 0,
    };
    this.signIn = this.signIn.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }
  changeUserName(event) {
    this.setState({ username: event.target.value });
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
          username: "",
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
          username: this.state.username,
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
        <form>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeUserName}
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.changePassword}
          ></input>
          <button
            id="sign"
            onClick={(event) => this.Signin(event, this.state.id)}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Signin;
