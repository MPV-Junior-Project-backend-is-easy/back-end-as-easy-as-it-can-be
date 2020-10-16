import React, { Component } from 'react';
import MongoDB from './MongoDB.jsx'
import NodeJs from './NodeJs.jsx'
import ExpressJs from './ExpressJs.jsx'
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check:''
        }
        this.renderExpressTut = this.renderExpressTut.bind(this);
        this.renderMongoTut = this.renderMongoTut.bind(this);
        this.renderNodeTut = this.renderNodeTut.bind(this);
    }
renderNodeTut(event){
event.preventDefault();
if(this.state.check===''||this.state.check==='Mongo'||this.state.check==='Express'){
this.setState({check:'Node'})}
}
renderMongoTut(event){
    event.preventDefault();
    if(this.state.check===''||this.state.check==='Node'||this.state.check==='Express'){
    this.setState({check:'Mongo'})
    }}
    renderExpressTut(event){
        event.preventDefault();
        if(this.state.check===''||this.state.check==='Mongo'||this.state.check==='Node'){
        this.setState({check:'Express'})
        }}

    render() {
        if(this.state.check === ''){
        return (
            <div>
                <div className="navbar">
                    <span className="navbar" onClick={this.renderNodeTut}>NodeJs</span>
                    <span className="navbar" onClick={this.renderExpressTut}>ExpressJs</span>
                    <span className="navbar" onClick={this.renderMongoTut}>MongoDB</span>
                    <span className="navbar" >Score</span>
                </div>
                <p> Chooose from the courses above</p>
                
            </div>
        ) } else if(this.state.check === 'Node'){
            return (
                <div>
                    <div className="navbar">
                        <span className="navbar" onClick={this.renderNodeTut}>NodeJs</span>
                        <span className="navbar" >ExpressJs</span>
                        <span className="navbar" >MongoDB</span>
                        <span className="navbar" >Score</span>
                    </div>
                    <NodeJs/>
                    
                </div>
             ) }else if(this.state.check === 'Mongo'){
                return (
                    <div>
                        <div className="navbar">
                            <span className="navbar" >NodeJs</span>
                            <span className="navbar" >ExpressJs</span>
                            <span className="navbar"onClick={this.renderMongoTut} >MongoDB</span>
                            <span className="navbar" >Score</span>
                        </div>
                        <MongoDB/>
                        
                    </div>
                 ) }else if(this.state.check === 'Express'){
                    return (
                        <div>
                            <div className="navbar">
                                <span className="navbar" >NodeJs</span>
                                <span className="navbar" onClick={this.renderExpressTut}>ExpressJs</span>
                                <span className="navbar" >MongoDB</span>
                                <span className="navbar" >Score</span>
                            </div>
                            <ExpressJs/>
                            
                        </div>
                     ) }
    }
}
