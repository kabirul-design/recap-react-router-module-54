import React, { useState, createContext} from 'react'; 
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

/**
 * context api
 * 1. call createContext with a default value
 * 2. set a variable of the context  with uppercase
 * 3. make sure you export the context to in others place 
 * 4. wrap you child content using RingContext.provider
 * 5. provide a value
 * 6.to consume the context from child component 
 * 7. useContent hook and will you need to pass the contextName 
 * 8. make sure you need to note
 * 
 * 
 * 
 */


export const RingContext = createContext('ring');
const Grandpa = () => {
    const [house, setHouse] = useState(0);

    const ornament = 'Golden ring'

    const handleBuyHouseCount = () =>{
        const houseCount = house + 1;
        setHouse(houseCount);
    }
        
    return (
        <RingContext.Provider value={[ornament, house]}> 
            <div className='grandpa'>
            <h2>Grandpa</h2>
            <button onClick={handleBuyHouseCount}>Buy A House</button>
            <p>House : {house}</p>
            <div style={{display: 'flex'}}>
            <Father house={house} ></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
            </div>
        </div>
        </RingContext.Provider>
    );
};

export default Grandpa;