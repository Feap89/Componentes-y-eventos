import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/menu">Menú</Link></li>
        <li><Link to="/register">Registro</Link></li>   {/* ✅ nuevo enlace */}
        <li><Link to="/login">Login</Link></li>         {/* ✅ nuevo enlace */}
      </ul>
    </nav>
  );
}

export default Navbar;
