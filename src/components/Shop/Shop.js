import React from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import {useState} from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);

    }
    
    return (
        <div className ="shop-container">
            <div className="product-container">

                    {
                        products.map(pd => <Product
                            handleAddProduct = {handleAddProduct}
                             product ={pd}
                             ></Product>
                              )
                    }
         
            </div>
            <div className="cart-container">

                <h3>This is Cart</h3>
                <h6>Order Summery : {cart.length} </h6>
            </div>
            
            
            
        </div>
    );
};
export default Shop;
