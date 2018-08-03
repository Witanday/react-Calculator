import React, { Component } from 'react';

class Key extends Component{

    constructor(){
        super();
        this.state={expression:0};
        this.onKeyPressed =this.state.onKeyPressed;
    }
    
    onKeyPressed(){
            this.props.onKeyPressed(this.props.text)
    }
    
    render(){
        return (
            <button onClick ={this.setState.onKeyPressed}>{this.props.text}</button>
        )
    }
  
}
export default Key;