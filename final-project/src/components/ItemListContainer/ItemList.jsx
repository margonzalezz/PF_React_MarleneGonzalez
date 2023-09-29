import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/components.css";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="card-container">
      <ul>
        {items.map((item) => (
          <li key={item.id} className="card">
            <Link to={`/item/${item.id}`}>
              <img src={`/img/${item.imageId}`} />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;