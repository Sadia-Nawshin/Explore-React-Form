import React from "react";
import { useState } from "react";



const ControlledField = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleNameOnChange = e => {
        setName = e.target.value;
    }
    const handleEmailOnChange = e =>{
        setEmail = e.target.value;
    }

    const handlePasswordOnChange = e =>{
        setPassword(e.target.value);
        if (password.length < 6){
            setError("The password must be at least 6 or longer");
        }
        else{
            setError("");
        }
    }

    return (
        <div>
            <h2>hello welcome to the form in Controlled Field way</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameOnChange} type="text" placeholder="your name" name="name" defaultValue={name}/>
                <br />
                <input onChange={handleEmailOnChange} type="email" placeholder="your email" name="email" defaultValue={email}/>
                <br />
                <input onChange={handlePasswordOnChange} type="password" name="password" defaultValue={password} placeholder="your password"/>
                <br />
                <input type="submit" value="Submit" />
            </form>

            <p style={{color: "red"}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;