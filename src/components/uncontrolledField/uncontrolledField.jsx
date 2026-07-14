import React from 'react';
import {useRef} from "react"; 

const uncontrolledField = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='your name' name='name'/>
                <br />
                <input ref={emailRef} type="email" placeholder='your email' name='email' defaultValue={email}/>
                <br />
                <input ref={passwordRef} type="password" placeholder="your password" name='password' defaultValue={password}/>
                <br />
                <input type="submit" value="Submit" />
            </form> 
        </div>
    );
};

export default uncontrolledField;