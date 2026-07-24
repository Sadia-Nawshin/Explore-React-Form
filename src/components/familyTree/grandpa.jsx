import React from 'react';
import Dad from "./dad";
import Aunt from "./aunt";
import Uncle from "./uncle";

const grandpa = () => {
    return (
        <div>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            
            </section>  
        </div>
    );
};

export default grandpa;