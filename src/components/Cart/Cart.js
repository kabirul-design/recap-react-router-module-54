import React from 'react';
import TShirt from '../TShirt/TShirt';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {

    // conditional rendering  options
    // 1. element variable
    // tarnery operator 
    let command;
    if(cart.length === 0){
        command = <p>please at least one  items !!!</p>
    }
    else if(cart.length === 1){
        command = <p>please add more</p>
    }
    else{
        command = <p><small>Thanks for add</small></p>
    }
    return (
        <div>
            <h3>Selected Item : {cart.length}</h3>
            
            {
               cart.map(TShirt => <p>
                   {TShirt.name}
                   <button onClick={ () =>handleRemoveFromCart(TShirt)}>X</button>
                   </p>) 
            }
            {cart.length === 0 || <p className='orange-p'>khabi naki gaja</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>kire hala asos kmn</h3>
                <p>tui to kipta</p>
                </div>}
            { command}
            {cart.length !== 4 ? <p>added item</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Button </button>}
        </div>
    );
};

export default Cart;