import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import CartContext from "../../context/CartContext";

const CartWidget = () => {
  const { count } = useContext(CartContext);

  return (
    <div className="cart-counter">
      <Link to="/Checkout"> {/* Agrega un enlace que redirija a la página del carrito */}
        <button type="button" className="btn position-relative button-cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="whitesmoke"
            className="bi bi-bag-fill"
            viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
          </svg>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            {count > 0 ? count : "0"}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
