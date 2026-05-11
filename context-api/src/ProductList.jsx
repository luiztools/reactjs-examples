import { useContext } from "react";
import CartContext from "./CartContext";

export default function ProductList() {

    const { addItem } = useContext(CartContext);

    return (
        <div>
            <h2>Product List</h2>
            {["Apple", "Banana", "Orange"].map((product) => (
                <div key={product}>
                    {product} <button onClick={() => addItem(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}