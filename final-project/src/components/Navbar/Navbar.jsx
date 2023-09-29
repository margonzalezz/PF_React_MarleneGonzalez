import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid container-navbar justify-content-flex-start">
                {/* BRAND */}
                        <Link to="/" className="navbar-brand p-3 logo-nav">
                            <img className="logo-house" src="/img/logo-coffee-house.jpg" alt="logo de cafeteria Coffe House - Café de especialidad" />
                        </Link>
                {/* LINKS */}
                <ul className="navbar-nav me-4">
                    <li className="navbar-item">
                        <Link to="/category/Menu" className="nav-link item-nav"> Desayunos y meriendas</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/category/NuestraEspecialidad" className="nav-link  item-nav">Nuestro café de especialidad</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/category/Promociones" className="nav-link  item-nav">Promociones</Link>
                    </li>
                </ul>
                <CartWidget/>
        </div>
    </nav>
};

export default Navbar;




