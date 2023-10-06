import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";

const ItemCount = ({ item }) => {
  const { addItem, cartTotal } = useContext(CartContext);

  const [count, setCount] = useState(0); // Inicializa el estado con 0

  const aumentar = () => {
    setCount(count + 1);
  };

  const reducir = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const agregarAlCarrito = () => {
    if (count > 0) {
      addItem(item, count); // Agrega el producto con la cantidad actual
    }
  };

  return (
    <div className="mb-3">
      <div className="d-flex align-items-center mt-4 counter-container">
        <button onClick={reducir}>-</button>
        <p className="mx-2 mt-3 badge text-bg-light"> Cantidad: {count}</p>
        <button onClick={aumentar}>+</button>

        {cartTotal > 0 ? (
          <button className="agregar-carrito" onClick={agregarAlCarrito}> Agregar al Carrito </button>
        ) : (
          <button className="agregar-carrito" disabled> Agregar al Carrito </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
