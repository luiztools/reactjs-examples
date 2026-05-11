import { createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
});

export default CartContext;