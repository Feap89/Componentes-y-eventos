import banner from "../assets/banner-pizzeria.jpg";
import NavBar from "../components/NavBar";
import Menu from "./Menu";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <div className="banner">
        <img src={banner} alt="Banner Pizzería Mamma Mía" className="banner-img" />
        <h1>Bienvenido a Pizzería Mamma Mía</h1>
        <p>Las mejores pizzas artesanales, hechas con amor y tradición.</p>
      </div>
      <Menu />
      <LoginPage />
      <RegisterPage />
      <Footer />
    </>
  );
}

export default Home;




