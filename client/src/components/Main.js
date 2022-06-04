import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div>
            <h1>Home Page</h1>
            {/* <h2><Link to="/form">Form Page</Link></h2> */}
            <label for="form"><Link to="/form"><input id="form" type="button" value="Form Page"/></Link></label>
        </div>
    )
};
export default Main;