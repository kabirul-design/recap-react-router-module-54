import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h4>My Self </h4>
            <p>House : {house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;