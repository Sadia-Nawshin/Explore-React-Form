import React from 'react';
import useInputField from '../../hooks/useInputField';

const hookForm = () => {
    const [name, nameOnChange] = useInputField("");
    const [email, emailOnChange] = useInputField("");
    const [password, passwordOnChange] = useInputField("");

    const handleSubmit = e =>{
        e.defaultPrevent();
        console.log("submited",name, email, password);
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange}/>
                <br />
                <input type="text" defaultValue={email} onChange={emailOnChange}/>
                <br />
                <input type="text" defaultValue={password} onChange={passwordOnChange}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default hookForm;