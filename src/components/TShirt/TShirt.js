import React from 'react';
import './TShirt.css';

const TShirt = ({handlerAddToCart, Tshirt}) => {
    
    const {name, img, price, brand} = Tshirt;
    return (
        <div className='t-shirt'>
            <img src={img} alt="" />
            <div>
                <h3>Name : {name}</h3>
                <p>Price : {price}</p>
                <p>Brand : {brand}</p>
                <button onClick={() =>handlerAddToCart(Tshirt)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default TShirt;