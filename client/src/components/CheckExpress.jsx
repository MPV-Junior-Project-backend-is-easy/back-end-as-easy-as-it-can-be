import React, { Component } from "react";
import dataExpress from '../../Quiz/quizExpress';
class CheckExpress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : this.props.name,
      countRightAnswers: 0,
      show:""
    };
    this.counter = this.counter.bind(this);
    this.results = this.results.bind(this);
  }
  counter(){
    let rightAnswer = document.getElementById('option1');
    if(rightAnswer) {
      this.setState({countRightAnswers : this.state.countRightAnswers + 1});
    }
  }
  results(event){
    event.preventDefault();
    this.setState({show: "show"})
  }
  render() {
    const expressData = dataExpress.map((item,key) => (
      <div key={key}>
        <form>
        <p>{item.question}</p>
          <input type="radio" id="option1" onClick={this.counter}/>
          <label>{item.option1}</label>
          <br />
          <input type="radio" id="option2" name="" value="f" />
          <label>{item.option2}</label>
          <br />
          <input type="radio" id="option3" name="" value="" />
          <label >{item.option3}</label>
        </form>
      </div>
    ))
    if(this.state.show === ""){
      return (
      <div>
        {expressData}
      <button onClick={this.results}>submit</button>
    
      </div>
    )
    }else {
      return (
        <div>
          {expressData}
        <button onClick={this.results}>submit</button>
        <p>{this.state.countRightAnswers}</p>
          {console.log(this.state.countRightAnswers,'count')}
        </div>
      )
    }
    
  }
}

export default CheckExpress;
