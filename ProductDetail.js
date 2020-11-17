import React from 'react';
import {useParams} from 'react-router-dom';
import ProductData from './productsData';


function ProductDetail() {
    const { id } = useParams();
    const product = ProductData.find(product => product.id === Number(id));
    console.log(product);

    return (
        <>
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
        </>
    )
}

export default ProductDetail