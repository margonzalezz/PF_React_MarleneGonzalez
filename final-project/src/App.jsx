import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home";
// import Menu from "./pages/Menu";
// import NuestraEspecialidad from "./pages/NuestraEspecialidad";
// import Promociones from "./pages/Promociones";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {

  return (
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/NuestraEspecialidad" element={<NuestraEspecialidad />} />
          <Route path="/Promociones" element={<Promociones />} /> */}

          {/* Muestra todos los productos */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Muestra los productos de una categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Navbar/>
      </div>
  )
}

export default App
