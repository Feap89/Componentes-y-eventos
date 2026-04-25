import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import RegisterPage from "./pages/RegisterPage"; 
import LoginPage from "./pages/LoginPage";   // ✅ ruta corregida
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} /> {/* ✅ nueva ruta */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




