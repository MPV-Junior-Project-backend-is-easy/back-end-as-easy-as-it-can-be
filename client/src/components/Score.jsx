import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return (
            <div>
              <h2>Your score in NodeJs checkpoint is : /5</h2>
              <h2>Your score in ExpressJs checkpoint is : /5</h2>
              <h2>Your score in MongoDB checkpoint is : /5</h2>  
            </div>
        );
    }
}

export default Score;