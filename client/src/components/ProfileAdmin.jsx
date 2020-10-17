import React, { Component } from "react";
import axios from "axios";
export default class ProfileAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      node: [],
      express: [],
      mongodb: [],
      title: "",
      url: "",
    };
    this.add = this.add.bind(this);
    this.DeleteNode = this.DeleteNode.bind(this);
    this.DeleteExpress = this.DeleteExpress.bind(this);
    this.Deletemongodb = this.Deletemongodb.bind(this);
    this.DeleteAll = this.DeleteAll.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeURL = this.changeURL.bind(this);
  }

  changeTitle(event) {
    this.setState({ title: event.target.value });
  }
  changeURL(event) {
    this.setState({ url: event.target.value });
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/videosNode")
      .then((res) => {
        this.setState({
          node: res.data,
          title: "",
          url: "",
        });
      })
      .catch((err) => console.log(err, "errr"));
    axios
      .get("http://localhost:3000/videosExpress")
      .then((res) => {
        this.setState({
          express: res.data,
        });
      })
      .catch((err) => console.log(err, "errr"));
    axios
      .get("http://localhost:3000/videosMongo")
      .then((res) => {
        this.setState({
          mongodb: res.data,
        });
      })
      .catch((err) => console.log(err, "errr"));
  }
  add(event, title) {
    event.preventDefault();
    if (title === "nodeJS") {
      axios
        .post("http://localhost:3000/videosNode", {
          title: this.state.title,
          url: this.state.url,
        })
        .then(() => this.componentDidMount())
        .catch((err) => console.log(err, "errr"));
    } else if (title === "mongo") {
      axios
        .post("http://localhost:3000/videosMongo", {
          title: this.state.title,
          url: this.state.url,
        })
        .then(() => this.componentDidMount())
        .catch((err) => console.log(err, "errr"));
    } else if (title === "ExpressJs") {
      axios
        .post("http://localhost:3000/videosExpress", {
          title: this.state.title,
          url: this.state.url,
        })
        .then(() => this.componentDidMount())
        .catch((err) => console.log(err, "errr"));
    }
  }

  DeleteNode(event, id) {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/videosNode/${id}`)
      .then(() => this.componentDidMount())
      .catch((err) => console.log(err, "errrrrr"));
  }

  DeleteExpress(event, id) {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/videosExpress/${id}`)
      .then(() => this.componentDidMount())
      .catch((err) => console.log(err, "errrrrr"));
  }

  Deletemongodb(event, id) {
    event.preventDefault();
    axios
      .delete(`http://localhost:3000/videosMongo/${id}`)
      .then(() => this.componentDidMount())
      .catch((err) => console.log(err, "errrrrr"));
  }

  DeleteAll(event) {
    event.preventDefault();
    axios
      .delete("http://localhost:3000/videosMongo", {
        mongodb: this.state.mongodb,
      })
      .then(() => this.componentDidMount())
      .catch((err) => console.log(err, "err"));
    axios
      .delete("http://localhost:3000/videosExpress", {
        express: this.state.express,
      })
      .then(() => this.componentDidMount())
      .catch((err) => console.log(err, "err"));
    axios
      .delete("http://localhost:3000/videosNode", { node: this.state.node })
      .then(() => this.componentDidMount())
      .catch((err) => console.log(err, "err"));
  }
  render() {
    const nodeList = this.state.node.map((video) => (
      <div key={video._id}>
        <center>
          <h3>{video.title}</h3>
          <iframe width="640" height="480" controls src={video.url}></iframe>
          <br></br>
          <center>
            <button onClick={(event) => this.DeleteNode(event, video._id)}>
              Delete
            </button>
          </center>
        </center>
      </div>
    ));
    const expressList = this.state.express.map((video) => (
      <div key={video._id}>
        <center>
          <h3>{video.title}</h3>
          <iframe width="640" height="480" controls src={video.url}></iframe>
          <br></br>
          <center>
            <button onClick={(event) => this.DeleteExpress(event, video._id)}>
              Delete
            </button>
          </center>
        </center>
      </div>
    ));
    const mongodbList = this.state.mongodb.map((video) => (
      <div key={video._id}>
        <center>
          <h3>{video.title}</h3>
          <iframe width="640" height="480" controls src={video.url}></iframe>
          <br></br>
          <center>
            <button onClick={(event) => this.Deletemongodb(event, video._id)}>
              Delete
            </button>
          </center>
        </center>
      </div>
    ));
    return (
      <div>
        <form onSubmit={(event) => this.add(event, this.state.title)}>
          <input type="text" placeholder="Title" onChange={this.changeTitle} />
          <input
            type="text"
            placeholder="Url Of Your New Video"
            onChange={this.changeURL}
          />
          <input type="submit" value="Add New Video" />
        </form>
        <h1>List Videos of NodeJS</h1>
        {nodeList}
        <h1>List Videos of ExpressJS</h1>
        {expressList}
        <h1>List Videos of MongoDB</h1>
        {mongodbList}
        <button onClick={(event) => this.DeleteAll(event)}>Delete All</button>
      </div>
    );
  }
}
