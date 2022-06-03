import React, { Component } from "react";

class WelcomeVisitor extends Component{
    render(){
        return <h1>{this.props.str}</h1>
    }
}

export default WelcomeVisitor