import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ItemCount from "../ItemCounter/ItemCount";

const ItemDetail = ({ item, isLoading }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    if (quantity > 0) {
      addItem(item, quantity);
    }
  };

  return (
    <div>
      {isLoading ? (
        <h2>Estamos preparando tu plato...</h2>
      ) : !item ? (
        <h2>Producto no encontrado</h2>
      ) : (
        <div className="d-flex">
          <div className="card-detail">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p className="price-detail">${item.price}</p>
            <ItemCount onAdd={handleAddToCart} />
          </div>
          <div>
            <img className="img-detail" src={`/img/${item.imageId}`} alt={item.title} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
