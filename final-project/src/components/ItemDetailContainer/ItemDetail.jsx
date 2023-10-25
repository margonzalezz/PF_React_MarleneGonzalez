import PropTypes from "prop-types";
import ItemCount from "../ItemCounter/ItemCount";
import React, { useState } from "react";

const ItemDetail = ({ item, isLoading, addItem }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

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
          <ItemCount onAdd={(count) => setSelectedQuantity(count)} initial={selectedQuantity} />
          </div>

          <div>
            <img className="img-detail" src={`/img/${item.imageId}`} />
          </div>
        </div>
      )}
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;
