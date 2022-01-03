import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shopsingle from "./pages/shop-single";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Shop2 from "./pages/shop-tshirt";
import Shop3 from "./pages/shop-sweater";
import Shop4 from "./pages/shop-jeans";
import Shop5 from "./pages/shop-shorts";
import "./App.css";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import { useContext } from "react";
import AuthContext from "./utils/AuthContext";
import Modal from "./pages/components/modal";
import useModal from "./pages/components/hooks/useModal";

function PrivateOutlet() {
  const { modalOpen, close, open } = useModal();

  let { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Modal handleClose={close} />;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop-single" element={<PrivateOutlet />}>
            <Route path="" element={<Shopsingle />} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-tshirt" element={<Shop2 />} />
          <Route path="/shop-sweater" element={<Shop3 />} />
          <Route path="/shop-jeans" element={<Shop4 />} />
          <Route path="/shop-shorts" element={<Shop5 />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
