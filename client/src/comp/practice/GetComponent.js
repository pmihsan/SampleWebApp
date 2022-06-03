import React,{Component} from "react";

class Greet extends Component{
    render(){
        return <p>The attribute name is {this.props.name} using class Component</p>
    }
}
export default Greet