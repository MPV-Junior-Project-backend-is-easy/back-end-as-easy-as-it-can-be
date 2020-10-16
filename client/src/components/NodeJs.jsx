import React, { Component } from "react";
import axios from "axios";
class NodeJs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/videosNode")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        throw err;
      });
  }
  render() {
    return (
      <div>
        <p>node</p>
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
                </center>
              </center>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NodeJs;
