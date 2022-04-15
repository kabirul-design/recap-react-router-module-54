import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirt, setTShirt] = useTShirt();
    const [cart, setCart] = useState([]);

    const handlerAddToCart = (selectItem) =>{
        const exists = cart.find(tShirt => tShirt.id === selectItem.id);
        if(!exists){
            const newCart = [...cart,selectItem];
            setCart(newCart);
        }
        else{
            alert('item already added');
        }
       
        // console.log(selectItem);
    }

    const handleRemoveFromCart = (selectItem) =>{
        const rest = cart.filter(tShirt => tShirt.id !== selectItem.id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            
            <div className="t-shirt-container">
                
                {
                    tShirt.map(Tshirt => <TShirt 
                    key ={Tshirt.id}
                    Tshirt ={Tshirt}
                    handlerAddToCart ={handlerAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                handleRemoveFromCart = {handleRemoveFromCart}
                 cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;