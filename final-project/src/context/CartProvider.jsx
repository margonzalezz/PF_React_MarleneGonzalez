import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    return !!itemInCart;
  };

  const addItem = (product, quantity) => {
    const itemInCart = isInCart(product.id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });

      setCart(newCart);

    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    const newTotal = newCart.reduce((total, item) => total + item.quantity, 0);
    setCartTotal(newTotal);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    const newTotal = newCart.reduce((total, item) => total + item.quantity, 0);
    setCartTotal(newTotal);
  };

  const clear = () => {
    setCart([]);
    setCartTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
