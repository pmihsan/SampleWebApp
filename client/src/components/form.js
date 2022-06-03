import React from "react";
import { useState } from "react";

const Main = () => {

    const [uname,setUname] = useState('');
    const [passwd,setPasswd] = useState(''); 

    const handleUser = (event) => {
        setUname(event.target.value);
    }
    const handlePasswd = (event) => {
        setPasswd(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const userFields = {
            UserName : uname,
            Password: passwd,
        };
        console.log(userFields);
        console.log("Form Submitted");
        // alert(userFields.Password);
    }

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}><label>User Form</label><br/><br/>
                    <label for="uname">Username</label><br/><input type="text" value={uname} onChange={handleUser} placeholder="Enter your username" id="uname"/> <br/>
                    <label for="passd">Password</label><br/><input type="password" value={passwd} onChange={handlePasswd} placeholder="Enter your password" id="passd"/> <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Main;