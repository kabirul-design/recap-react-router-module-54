import { useEffect, useState } from "react"

const useTShirt = () =>{
    const [tShirt, setTShirt] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setTShirt(data))
    },[])
    return [tShirt, setTShirt];
}

export default useTShirt;