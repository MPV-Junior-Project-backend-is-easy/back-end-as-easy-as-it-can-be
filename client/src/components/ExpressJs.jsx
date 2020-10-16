import React, { Component } from "react";
import axios from "axios";
class ExpressJs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.done=this.done.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/videosExpress")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        throw err;
      });
  }
  done(event,id) {
    event.preventDefault();
    axios.put(`http://localhost:3000/videosExpress/${id}`,{check:'done'})
    .then(()=>this.componentDidMount())
    .catch(err => console.log(err,'errrr'));
    
  }
  render() {
    return (
      <div>
        
        <ul>
          {this.state.data.map((video) => (
            <div key={video._id}>
              {" "}
              <center>
                <iframe
                  width="640"
                  height="480"
                  controls
                  src={video.url}
                ></iframe>
                <br></br>
                <center>
                <button onClick={(event) =>this.done(event,video._id)}>check ✓</button>
          <p>{video.check}</p>
                </center>
              </center>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default ExpressJs;
