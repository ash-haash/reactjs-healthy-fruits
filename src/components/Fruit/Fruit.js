import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Fruit.css';

const Fruit = (props) => {
    const { name, img, contains, origin, price } = props.fruit;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="fruit-card">
            <div className="fruit-image">
                <img src={img} alt="" />
            </div>
            <div className="fruit-details">
                <h3>Name:   {name}</h3>
                <h3>Contains:   {contains}</h3>
                <h3>Origin:   {origin}</h3>
                <h3>Price:   {price}</h3>
            </div>
            <button onClick={() => props.handleAddToCart(props.fruit)} className="btn-regular">{cartIcon} Add to Cart</button>

        </div>
    );
};

export default Fruit;