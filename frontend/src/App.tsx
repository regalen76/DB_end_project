import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shopsingle from "./pages/shop-single";
import Shop from "./pages/shop";
import Cart from "./pages/cart"
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from './utils/AuthContext'
import { useContext } from 'react'
import AuthContext from "./utils/AuthContext";
import Modal from "./pages/components/modal";
import useModal from "./pages/components/hooks/useModal";

function PrivateOutlet() {
  const { modalOpen, close, open } = useModal();

  let {user} = useContext(AuthContext)
  return user ? <Outlet /> : <Modal handleClose={close}/>;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shop-single"
            element={<PrivateOutlet/>}>
              <Route path="" element={<Shopsingle/>} />
            </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
