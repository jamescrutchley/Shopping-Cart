import CartContext from "./CartContext";
import { useEffect, useState } from "react";
import mockData from '../mocks/mockdata.json'

function CartProvider({children}) {
    const [data, setData] = useState(mockData);
    let value = Array.from(mockData)

    useEffect(() => {
        console.log(value);
    }, [data]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider;