import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosAll from '../../other/axiosAll';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        try {
            axiosAll.get(`product/${productId}`)
                .then((response) => {
                    setProduct(response.data)
                })
        } catch (error) {
            console.log(error)
        }
    }, [])

    console.log(product)
    return (
        <div>
            {product.id}
            {product.image}
            {product.price}
            {product.quantity}
        </div>
    )
}

export default ProductDetail