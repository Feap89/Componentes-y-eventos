import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Menu from "../pages/Menu";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;





