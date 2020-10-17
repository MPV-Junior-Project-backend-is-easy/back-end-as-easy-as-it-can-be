import React, { Component } from "react";
import MongoDB from "./MongoDB.jsx";
import NodeJs from "./NodeJs.jsx";
import ExpressJs from "./ExpressJs.jsx";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: "",
      name : this.props.name
    };
    this.renderExpressTut = this.renderExpressTut.bind(this);
    this.renderMongoTut = this.renderMongoTut.bind(this);
    this.renderNodeTut = this.renderNodeTut.bind(this);
    this.backHome = this.backHome.bind(this);
  }
  renderNodeTut(event) {
    event.preventDefault();
    this.setState({ check: "Node" });
  }
  renderMongoTut(event) {
    event.preventDefault();
    this.setState({ check: "Mongo" });
  }
  renderExpressTut(event) {
    event.preventDefault();
    this.setState({ check: "Express" });
  }
  backHome(event) {
    event.preventDefault();
    this.setState({ check: "" });
  }

  render() {
    if (this.state.check === "") {
      return (
        <div className="themain">
          <div className="navbar">
            <span  onClick={this.renderNodeTut}>NodeJs</span>
            <span  onClick={this.renderExpressTut}>ExpressJs</span>
            <span  onClick={this.renderMongoTut}>MongoDB</span>
            <span  className='score'>Score</span>
            <span onClick={this.backHome} className="home">Home</span>
          </div>
          <center> <h3 className='introt'>welcome {this.props.name}</h3></center>
          <center><p className='intro' > Welcome to the free back-end learning space,here you ll have the choice to learn NodeJs , ExpressJs and the famous MongoDB to get started choose your course from the options above and begin your hacking adventure</p></center>
        </div>
      );
    } else if (this.state.check === "Node") {
      return (
        <div>
          <div className="navbar">
            <span onClick={this.renderNodeTut}>NodeJs</span>
            <span onClick={this.renderExpressTut}>ExpressJs</span>
            <span onClick={this.renderMongoTut}>MongoDB</span>
            <span className='score'>Score</span>
            <span onClick={this.backHome} className="home">Home</span>
          </div>
          <NodeJs name = {this.state.name}/>
        </div>
      );
    } else if (this.state.check === "Mongo") {
      return (
        <div>
          <div className="navbar">
            <span onClick={this.renderNodeTut}>NodeJs</span>
            <span onClick={this.renderExpressTut}>ExpressJs</span>
            <span onClick={this.renderMongoTut}>MongoDB</span>
            <span className='score'>Score</span>
            <span onClick={this.backHome} className="home">Home</span>
          </div>
          <MongoDB  name = {this.state.name}/>
        </div>
      );
    } else if (this.state.check === "Express") {
      return (
        <div>
          <div className="navbar">
            <span onClick={this.renderNodeTut}>NodeJs</span>
            <span onClick={this.renderExpressTut}>ExpressJs</span>
            <span onClick={this.renderMongoTut}>MongoDB</span>
            <span className="score">Score</span>
            <span onClick={this.backHome} className="home">Home</span>
          </div>
          <ExpressJs  name = {this.state.name}/>
        </div>
      );
    }
  }
}
