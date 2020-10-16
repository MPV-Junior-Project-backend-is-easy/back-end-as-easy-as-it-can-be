import React, { Component } from "react";
import Signin from "./Signin.jsx";
import Profile from "./Profile.jsx";
import axios from "axios";
export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      userName:'',
      password:'',
      check:''
    }
    this.check = this.check.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeName(event) {
    this.setState({userName:event.target.value})
  }
  changePassword(event) {
    this.setState({password:event.target.value})
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
          check:""
        });
      })
      .catch((err) => console.log(err,'errr'));
  }
 
  check(event){
    event.preventDefault();
    const listName = this.state.data.map((name)=>
    name.userName )
    const listPassword = this.state.data.map((pass)=>
    pass.password )
    if(listName.indexOf(this.state.userName) === -1){
      alert("don't have an account yet please create one")
      this.setState({check:"signin"})
    }else  if(listName.indexOf(this.state.userName) !== -1 && listPassword[listName.indexOf(this.state.userName)] !== this.state.password ){ 
      alert("wrong password try again")
    }else  if(listName.indexOf(this.state.userName) !== -1 && listPassword[listName.indexOf(this.state.userName)] === this.state.password ){
      alert("Hello " + this.state.userName)
      this.setState({check:"login"})
    } 
  }
  render() {
    if(this.state.check === ""){
      return (
        <div className="signIn">
          <div>
            <input
              type="text"
              placeholder="UserName"
              value={this.state.userName}
              onChange={this.changeName}
            /><br></br>
            <input
              type="password"
              name="password"
              placeholder="password "
              value={this.state.password}
              onChange={this.changePassword}
            /><br></br>
            <button onClick = {(event)=> this.check(event)}>Get Started</button>
            </div>
        </div>
      )
    }else if(this.state.check === "signin"){
      return (
        <div>
          <Signin/>
        </div>
      )
    }else if(this.state.check === "login"){
    return (
      <div>
          <Profile name={this.state.userName}/>
      </div>
    )
    }
  }
}

