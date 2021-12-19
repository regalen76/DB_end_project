import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shopsingle from "./pages/shop-single";
import Shop from "./pages/shop";
import "./App.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop-single" element={<Shopsingle />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
