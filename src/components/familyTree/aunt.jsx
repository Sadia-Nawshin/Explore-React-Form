import React from 'react';
import Cousin from "./cousin"

const aunt = () => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin name="abc"></Cousin>
                <Cousin name="xyz"></Cousin>
            </section>
        </div>
    );
};

export default aunt;