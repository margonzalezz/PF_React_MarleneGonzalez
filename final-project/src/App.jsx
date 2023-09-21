import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NuestraEspecialidad from "./pages/NuestraEspecialidad";
import Promociones from "./pages/Promociones";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/NuestraEspecialidad" element={<NuestraEspecialidad />} />
          <Route path="/Promociones" element={<Promociones />} />
        </Routes>
        <Navbar/>
      </div>
  )
}

export default App
