import React from "react";
import { useState } from "react";


const CountInc=()=>{
    const [count, setCount] = useState(0);
    return(
        <div>
        <h1 style={{color:'red'}}>Hello World</h1>
        <input type='text' value={count}></input>
        <p>Hello wolrd      yufcb vb</p>
        <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
};
export default CountInc;