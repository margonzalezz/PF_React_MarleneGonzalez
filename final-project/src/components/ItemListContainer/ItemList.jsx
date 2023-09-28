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
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <p>{item.categoryId}</p>
              <img src={`/img/${item.imageId}`} />
              {/* <img src={`/${items.imageId}`} /> */}
            {/* <img src={`/assets/img/${items.imageId}`} alt="" /> */}
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