import React, { useEffect, useState } from 'react';
import './Fruits.css';
import Fruit from '../Fruit/Fruit';
import Cart from '../Cart/Cart';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fruites.json')
            .then(res => res.json())
            .then(data => setFruits(data))
    }, [])

    const handleAddToCart = (fruit) => {
        const newCart = [...cart, fruit];
        setCart(newCart);
    }

    return (
        <div className="fruits-container">
            <div className="fruit-container">
                {
                    fruits.map(fruit => <Fruit

                        key={fruit.name}
                        fruit={fruit}
                        handleAddToCart={handleAddToCart}>

                    </Fruit>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Fruits;