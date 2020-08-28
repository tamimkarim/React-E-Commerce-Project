import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, seller, price, stock } = (props.product);
    return (
        <div className="product">
            <div >
                <img src={img} alt="" />

            </div>
            <div className="name" >
                <h5 className="product-name" >{name}</h5>

                <p><small>by:{seller} </small></p>
                <p><small>$ {price} </small></p>
                <p><small>Only {stock} left in stock order soon</small></p>
                <button className="main-button"> Add to cart</button>
            </div>


        </div>
    );
};

export default Product;