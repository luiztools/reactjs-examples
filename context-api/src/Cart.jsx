import { useContext } from "react";
import CartContext from "./CartContext";

export default function Cart() {
    const { items, removeItem } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item} <button onClick={() => removeItem(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}