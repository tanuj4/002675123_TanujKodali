import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/LoginPage.css"

// User Login info


export default function LoginPage(props){

    props.handle(false);
    
    const [errorMessages, setErrorMessages] = useState({
        name:"",
        message:""
    });

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        
        event.preventDefault();

         await fetch(
            "http://localhost:8080/user/Login?"+ new URLSearchParams({email: credentials.username,password: credentials.password}),
                {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      "access-control-allow-origin": "*",}
                }
                    ).then((res) => res.json())
                        .then((json) => {
                            setErrorMessages({
                                name : json.name,
                                message : json.message
                            });
                        });
        
        if(errorMessages.message == "none")
        {
            navigate('/home');
            props.handle(true);
        }
        else
        {
            props.handle(false);
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return(
        <div className="login-page">
            <h1> Login Page</h1>
            { errorMessages.name=="form" && ( <div className="error">{errorMessages.message}</div>)}
            <form>
                <label>
                  UserEmail:   
                    <input type="text" name="username" className="login-input" onChange={onChange}/>
                    { errorMessages.name=="username" && ( <div className="error">{errorMessages.message}</div>)}
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" className="login-input" onChange={onChange} />
                    { errorMessages.name=="password" && ( <div className="error">{errorMessages.message}</div>)}
                </label>
                <br/>
                <button type="submit" className="login-button" onClick={handleSignIn}>Sign In</button>
            </form>
        </div>
    );
}