import React from 'react';

const productForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.value;
        const price = e.target.value;
        const quantity = e.target.value;
    }

    return (
        <div>
            <input onSubmit={handleSubmit} type="text" name='name' placeholder='Product Name' />
            <br />

            <input type="text" name='price' placeholder='Product Price' />
            <br />

            <input type="text" name='quantity' placeholder='Product Quantity' />
            <br />

            <input type="submit" value="Submit" />

        </div>
    );
};

export default productForm;