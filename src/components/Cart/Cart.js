import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const fruit of cart) {
        total = total + fruit.price;
    }

    return (
        <div className="cart">
            <h3>Selected Summery</h3>
            <h5>Item Selected: {props.cart.length}</h5>
            <p>Total: {total}</p>
            <button className="btn-regular">Buy Now</button>
        </div >
    );
};

export default Cart;