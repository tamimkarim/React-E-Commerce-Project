import React from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import {useState} from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products, setProducts] = useState(first10);
    
    return (
        <div className ="shop-container">
            <div className="product-container">

                    {
                        products.map(pd => <Product product ={pd}></Product> )
                    }
         
            </div>
            <div className="cart-container">

                <h3>This is Cart</h3>
            </div>
            
            
            
        </div>
    );
};
export default Shop;