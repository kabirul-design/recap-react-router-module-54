import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ornament, house] = useContext(RingContext);
    return (
        <div>
            <p>Special</p>
            <p>Gift : {ornament} {house}</p>
        </div>
    );
};

export default Special;
