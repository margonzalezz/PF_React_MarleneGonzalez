import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2>Estamos preparando tu plato...</h2>;
  }

  if (!item) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="d-flex">

      <div className="card-detail">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p className="price-detail">${item.price}</p>
        <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
      </div>

      <div> 
      <img className="img-detail" src={`/img/${item.imageId}`} />
      </div>

    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;