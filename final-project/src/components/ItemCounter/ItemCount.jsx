import React, { useState } from "react";

const ItemCount = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count + 1);
  };

  const reducir = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="mb-3">
      <div className="d-flex align-items-center mt-4 counter-container">
        <button onClick={reducir}>-</button>
        <p className="mx-2 mt-3 badge text-bg-light">Cantidad: {count}</p>
        <button onClick={aumentar}>+</button>
        <button className="agregar-carrito text-white" onClick={() => onAdd(count)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;