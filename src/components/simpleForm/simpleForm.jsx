import React from "react";

const simpleForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("form submitted")
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }

    return (
        <div>
            <h2>hello welcome to the form through event handler</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="your name" name="name" />
                <br />
                <input type="email" placeholder="your email" name="email"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default simpleForm;