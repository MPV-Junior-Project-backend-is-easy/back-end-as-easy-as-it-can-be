import React, { Component } from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="navbar">
                    <span className="navbar">NodeJs</span>
                    <span className="navbar">ExpressJs</span>
                    <span className="navbar">MongoDB</span>
                    <span className="navbar">Score</span>
                </div>
            </div>
        );
    }
}
