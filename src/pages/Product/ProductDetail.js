import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosAll from '../../other/axiosAll';
import './productDetail.css';
import Navbar2 from '../../components/Navbar/Navbar2'
import { useCart } from 'react-use-cart'

const ProductDetail = () => {
    const { productId } = useParams();
    const { addItem } = useCart();
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


    return (
        <section >
            <Navbar2 />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className='product-image'>
                            <img src={product.image} alt={product.productName} id="product-main-image" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="product">
                            <div className="product-title">
                                <h2>{product.productName}</h2>
                            </div>
                            <div className="product-price">
                                <span className="offer-price">$ {product.price}</span>
                                <span className="sale-price">$ 11</span>
                            </div>
                            <div className="product-details">
                                <h3>Description</h3>
                                <p>{product.content}</p>
                            </div>
                            <span className="divider"></span>
                            <div className="icons">
                                <a className="fas fa-shopping-cart" onClick={() => addItem(product)}></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ProductDetail