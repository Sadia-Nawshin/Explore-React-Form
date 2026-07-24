import React from 'react';
import Myself from './myself';
import Brother from "./brother";
import Sister from "./sister";

const dad = () => {
    return (
        <div>
            <h2>DAD</h2>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default dad;