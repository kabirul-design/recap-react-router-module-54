import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="OrderReview">OrderReview</Link>
                <Link to="Grandpa"> Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;