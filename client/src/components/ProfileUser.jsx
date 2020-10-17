import React, { Component } from "react";
import MongoDB from "./MongoDB.jsx";
import NodeJs from "./NodeJs.jsx";
import ExpressJs from "./ExpressJs.jsx";
export default class ProfileUser extends Component {
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
        <div>
          <div>
            <span onClick={this.renderNodeTut}>NodeJs</span>
            <span onClick={this.renderExpressTut}>ExpressJs</span>
            <span onClick={this.renderMongoTut}>MongoDB</span>
            <span>Score</span>
            <span onClick={this.backHome}>Home</span>
          </div>
          <h3>welcome {this.props.name}</h3>
          <p> Chooose from the courses above</p>
        </div>
      );
    } else if (this.state.check === "Node") {
      return (
        <div>
          <div>
            <span onClick={this.renderNodeTut}>NodeJs</span>
            <span onClick={this.renderExpressTut}>ExpressJs</span>
            <span onClick={this.renderMongoTut}>MongoDB</span>
            <span>Score</span>
            <span onClick={this.backHome}>Home</span>
          </div>
          <NodeJs name = {this.state.name}/>
        </div>
      );
    } else if (this.state.check === "Mongo") {
      return (
        <div>
          <div>
            <span onClick={this.renderNodeTut}>NodeJs</span>
            <span onClick={this.renderExpressTut}>ExpressJs</span>
            <span onClick={this.renderMongoTut}>MongoDB</span>
            <span>Score</span>
            <span onClick={this.backHome}>Home</span>
          </div>
          <MongoDB  name = {this.state.name}/>
        </div>
      );
    } else if (this.state.check === "Express") {
      return (
        <div>
          <div>
            <span onClick={this.renderNodeTut}>NodeJs</span>
            <span onClick={this.renderExpressTut}>ExpressJs</span>
            <span onClick={this.renderMongoTut}>MongoDB</span>
            <span>Score</span>
            <span onClick={this.backHome}>Home</span>
          </div>
          <ExpressJs  name = {this.state.name}/>
        </div>
      );
    }
  }
}
