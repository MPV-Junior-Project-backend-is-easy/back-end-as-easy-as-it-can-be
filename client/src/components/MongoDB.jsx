import React, { Component } from "react";
import axios from "axios";
import CheckMongo from './CheckMongo.jsx';
class MongoDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user : this.props.name,
      checkpoint:'hidden',
    };
    this.getCheckpoint=this.getCheckpoint.bind(this)
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
  }
  
  getCheckpoint(event){
    event.preventDefault();
    this.setState({checkpoint:'displayed'})
  }
  render() {
    if(this.state.checkpoint==='hidden'){
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
              </center>
            </div>
          ))}
        </ul>
        <div > <center><button id='bb' onClick={(event)=>this.getCheckpoint(event)}>finished</button></center></div>
      </div>
      
    );
  }
  else{return(<CheckMongo name={this.state.user}/>)}
       }
}

export default MongoDB;
