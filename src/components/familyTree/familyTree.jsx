import React from 'react';
import Grandpa from './grandpa';
import "./familyTree.css"

const familyTree = () => {
    return (
        <div className='family-tree'>
            <h2>Family-Tree</h2> 
            <Grandpa></Grandpa>
             
        </div>
    );
};

export default familyTree;