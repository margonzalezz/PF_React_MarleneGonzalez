import { useContext, useState } from "react";
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
        name: "John",
        phone: "123456789",
        email: "john@gmail.com",
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
    // Llama a la función removeItem del contexto para eliminar un producto
    removeItem(itemId);
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
            
          </div>
              <div className="container-producto">
                {cart.map((item) => (
                  <div key={item.id} className="producto-card">
                    <div className="producto-info">
                    <img className="img-detail" src={`/img/${item.imageId}`} alt={item.title} />

                      <div>
                      <p className="item-title">{item.title}</p>
                      <p>Cantidad: {item.quantity}</p>
                      </div>

                      <div>
                      <p>Precio por unidad: ${item.price}</p>
                      <p>Subtotal: ${item.price * item.quantity}</p>
                      </div>
                    </div>
                    <button onClick={() => handleRemoveItem(item.id)}>Eliminar del carrito</button>
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
