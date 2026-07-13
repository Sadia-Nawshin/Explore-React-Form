import React from "react";
import { useState } from "react";

const [password, setPassword] = useState("")

const ControlledField = () => {
    const handleSubmit = () => {
        console.log();
    }

    const handlePasswordOnChange = e =>{
        console.log(e.target.value)
    }

    return (
        <div>
            <h2>hello welcome to the form in Controlled Field way</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="your name" name="name" required/>
                <br />
                <input type="email" placeholder="your email" name="email" required/>
                <br />
                <input type="password" name="password" id="" onChange={handlePasswordOnChange} defaultValue={password} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;