import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../components/utils";
import { createOrder } from "../components/services";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear, removeItem } = useContext(CartContext);

  const total = getCartTotal(cart);

  const handleCheckout = () => {
    const order = {
      buyer: {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
      items: mapCartToOrderItems(cart),
      total,
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  // Estados para los campos del formulario
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (e) => {
    // Validación para que no se puedan ingresar números en el nombre
    if (!/\d/.test(e.target.value)) {
      setFirstName(e.target.value);
    }
  };

  const handleLastNameChange = (e) => {
    // Validación para que no se puedan ingresar números en el apellido
    if (!/\d/.test(e.target.value)) {
      setLastName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación para el campo de email (asegura que contenga '@')
    if (email.includes("@")) {
      // Realiza acciones con los datos, como enviarlos a un servidor
      console.log("Nombre:", firstName);
      console.log("Apellido:", lastName);
      console.log("Email:", email);
    } else {
      alert("El correo electrónico debe contener un símbolo '@'");
    }
  };

  return (
    <div>
      <h1 className="resumen">RESUMEN DE LA COMPRA</h1>

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
          <div className="checkout-container">
            <div>
              <h3>Ingresa tus datos para completar la compra</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Nombre"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Apellido"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Crear orden
                </button>
              </form>
            </div>
            <div className="container-producto">
              {cart.map((item) => (
                <div key={item.id} className="producto-card">
                  <div className="producto-info">
                    <img
                      className="img-detail"
                      src={`/img/${item.imageId}`}
                      alt={item.title}
                    />
                    <div>
                      <p className="item-title">{item.title}</p>
                      <p>Cantidad: {item.quantity}</p>
                    </div>
                    <div>
                      <p>Precio por unidad: ${item.price}</p>
                      <p>Subtotal: ${item.price * item.quantity}</p>
                    </div>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Eliminar del carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
          <p>Total de la compra: {total}</p>
          <button onClick={handleCheckout}>Finalizar compra</button>
          {isLoading && <p>Procesando compra...</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;
