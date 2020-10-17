import React, { Component } from 'react';

import ProfileUser from "./ProfileUser.jsx";
import ProfileAdmin from "./ProfileAdmin.jsx";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:this.props.name
        }
    }
    render() {
        if (this.state.user === "admin"){
            return (
                <div>
                    <ProfileAdmin /> 
                </div>
            );
        }else {
            return (
                <div>
                    <ProfileUser name={this.state.user}/>
                </div>
            );
        }
      
    }
}

export default Profile;