import React, { Component } from "react";
import Signin from "./Signin.jsx";
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      username:'',
      password:'',
      signedIn:false,
    }
  }
  showSingin(e){
    e.preventDefault();
    this.setState((prevState) => ({
      signedIn: !prevState.signedIn
    }));
  }
  render() {
    return (
      <div>
        <h3 id="intro">
          Welcome To BEAEAICB Here u can learn back-end from scratch . we
          provided you with an easy step by step tutorials for a bunch of
          courses including NodeJs - ExpressJs - MongoDb.to get started please
          create an account if u don t have one or simply login and start
          learning it's for free
        </h3>
        <div>
          <input type="text" />
          <input type="text" />
          <br></br>
          <button id="signin" onClick={this.showSingin.bind(this)}>sign in</button>
          <button id="login">login</button>
          {this.state.signedIn && <Signin />}
        </div>
      </div>
    );
  }
}

export default Login;
