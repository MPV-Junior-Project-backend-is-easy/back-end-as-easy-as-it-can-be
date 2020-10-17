import React, { Component } from "react";
import axios from "axios";
import CheckNode from './CheckNode.jsx';
class NodeJs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user : this.props.name,
      checkpoint:'hidden'
    };
    this.done = this.done.bind(this);
    this.getCheckpoint=this.getCheckpoint.bind(this);
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
  done(event,id) {
    event.preventDefault();
    axios.put(`http://localhost:3000/videosNode/${id}`,{check:'done'})
    .then(()=>this.componentDidMount())
    .catch(err => console.log(err,'errrr'));
    
  }
  getCheckpoint(event){
    event.preventDefault();
    this.setState({checkpoint:'displayed'})
  }
  render() {
    if(this.state.checkpoint === 'hidden'){
    return (
      <div>
        <ul>
          {this.state.data.map((video) => (
            <div key={video._id}>
              
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
        <div > <center><button onClick={(event)=>this.getCheckpoint(event)}>finished</button></center></div>
      </div>
    );}else{return<CheckNode name={this.state.user}/>}
  }
}

export default NodeJs;
