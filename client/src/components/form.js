import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Form = () => {

    const [uname,setUname] = useState('');
    const [passwd,setPasswd] = useState(''); 

    const handleUser = (event) => {
        setUname(event.target.value);
    }
    const handlePasswd = (event) => {
        setPasswd(event.target.value);
    }
    const handleSubmit = async (event) =>  {
        event.preventDefault();
        const userFields = {
            UserName : uname,
            Password: passwd,
        };
        console.log(userFields);
        // console.log("Form Submitted");
        try{
            let res = await fetch("http://localhost:5000/client/form", {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userFields)
            });
            let response = await res.json();
            console.log(response.msg);
        }
        catch(err){
            console.log("Internal Error: ", err);
        }   
    }
    return(
        <>
        <div>
                <form onSubmit={handleSubmit}><label>User Form</label><br/><br/>
                    <label htmlFor="uname">Username</label><br/><input type="text" value={uname} onChange={handleUser} placeholder="Enter your username" id="uname" required/> <br/>
                    <label htmlFor="passd">Password</label><br/><input type="password" value={passwd} onChange={handlePasswd} placeholder="Enter your password" id="passd" required/> <br/>
                    <button type="submit">Submit</button>
                </form>
                <h1>Go back to home Page</h1>
                <label htmlFor="form"><Link to="/"><input id="form" type="button" value="Home Page"/></Link></label>
                
        </div>
        </>
    )
}

export default Form;