import React from "react";
import InputComp from "./inputComp";
import "./simple.css"

const Main = () => {
    const buttonHandle = () => {
        console.log("Clicked!");
    }
    return(
        <div className="contain">
          <h1>Hello World</h1>
          <InputComp/>
          <button onClick={buttonHandle}>Click Me</button>
        </div>
      )
};

export default Main;