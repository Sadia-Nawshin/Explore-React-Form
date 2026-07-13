import React from "react";

const FormAction = () => {
    const handleFormAction = (formData)=>{
        console.log(formData);
    }
    return (
        <div>

            <form action={handleFormAction}>
            <input type="text" placeholder="your name" name="name" />
            <br />
            <input type="email" name="email" placeholder="your email" id="" />
            <br />
            <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default FormAction;