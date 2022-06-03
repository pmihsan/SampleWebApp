import React from "react";
const Hello = () => {

    const buttonClicked = (e) => {
        e.preventDefault();
    };

    return (
        <div>
        <h3>From Function Component</h3>
        <p>Just a text message</p>
        <h4>Welcome</h4>
        <button onClick={buttonClicked}>Click Me!</button>
        </div>
    )
}

export default Hello