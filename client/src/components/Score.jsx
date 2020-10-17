import React, { Component } from 'react';

class Score extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div>
             <strong> <h1>Your got : {this.props.result}/5</h1></strong>
              
              
            </div>
        );
    }
}

export default Score;