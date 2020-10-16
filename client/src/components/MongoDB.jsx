import React, { Component } from "react";
import axios from "axios";
class MongoDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataSteps : [],
      steps : ""
    };
    this.steps = this.steps.bind(this);
    this.saveSteps = this.saveSteps.bind(this);
  }
  steps(event){
    // let p = document.getElementById("target")
    // if(p.innerText.length === 0){
    //   return;
    // }
    this.setState({steps: event.target.value})
  }
 
  componentDidMount() {
    axios
      .get("http://localhost:3000/videosMongo")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
      axios
      .get("http://localhost:3000/steps")
      .then((res) => {
        this.setState({
          dataSteps: res.data,
          steps : ""
        });
      })
      .catch((err) => {
        throw err;
      });
  }
  saveSteps(event){
    event.preventDefault();
    axios.post("http://localhost:3000/steps",{steps : this.state.steps})
    .then(()=> this.componentDidMount())
    .catch((err) => console.log(err,'errr'))
  }
  render() {
    return (
      <div>
        <p>MongoDB</p>
        <ul>
          {this.state.data.map((video) => (
            <li key={video._id}>
              {" "}
              <center>
                <video
                  width="640"
                  height="480"
                  controls
                  src={video.url}
                ></video>
                <br></br>
                <center>
                  <input type="button" value="✓ check" />
          <p id ="target">{this.state.steps}</p>
                </center>
              </center>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MongoDB;
