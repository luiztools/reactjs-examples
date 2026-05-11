import { useState } from 'react';
import CartContext from './CartContext';
import Cart from './Cart';
import ProductList from './ProductList';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  return (
    <CartContext.Provider value={{ items: cartItems, addItem, removeItem }}>
      <Cart />
      <hr />
      <ProductList />
    </CartContext.Provider>
  );
}

export default App
