import React from 'react';
import ProductForm from "./productForm";
import ProductTable from './productTable';

const productManagement = () => {
    return (
        <div>
            <ProductForm></ProductForm>
            <ProductTable></ProductTable>            
        </div>
    );
};

export default productManagement;