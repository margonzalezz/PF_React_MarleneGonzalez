import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider  from "./context/CartProvider";
import Checkout from "./components/Checkout";

function App() {

  return (
      <CartProvider>
        <Navbar/>
        <Routes>
          {/* Muestra todos los productos */}
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
  )
}

export default App
