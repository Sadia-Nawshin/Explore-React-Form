import React from 'react';
import Cousin from "./cousin";

const uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name="Sadia"></Cousin>
                <Cousin name="Nawshin"></Cousin>

            </section>
        </div>
    );
};

export default uncle;