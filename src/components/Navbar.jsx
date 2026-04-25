import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/menu">Menú</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
    </nav>
  );
}

export default NavBar;
