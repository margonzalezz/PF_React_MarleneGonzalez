import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
                {/* BRAND */}
                        <Link to="/" className="navbar-brand border p-3 bg-warning">Coffee House</Link>
                {/* LINKS */}
                <ul className="navbar-nav me-4">
                    <li className="navbar-item">
                        <Link to="/Menu" className="nav-link active "> Desayunos y meriendas</Link>
                    </li>
                    <li>
                    <Link to="/NuestraEspecialidad" className="nav-link active ">Nuestro café de especialidad</Link>
                    </li>
                    <li>
                        <Link to="/Promociones" className="nav-link active ">Promociones</Link>
                        {/* <a className="nav-link active " href="#">Promociones</a> */}
                    </li>
                </ul>
                <CartWidget/>
        </div>
    </nav>
};

export default Navbar;


