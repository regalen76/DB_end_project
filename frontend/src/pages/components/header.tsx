import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./modal";
import { Modal2 } from "./modal";
import useModal from "./hooks/useModal";
import AuthContext from "../../utils/AuthContext";

const Items = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/items/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return <div>{notes[0]}</div>;
};

export const Header = () => {
  const { modalOpen, close, open } = useModal();
  let { user } = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container d-flex justify-content-between align-items-center">
          <Link
            to="/"
            className="navbar-brand text-success logo h1 align-self-center"
          >
            Zay
          </Link>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#templatemo_main_nav"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
            id="templatemo_main_nav"
          >
            <div className="flex-fill">
              <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="nav-link">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar align-self-center d-flex">
              <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3"></div>
              <p className="nav-icon position-relative text-decoration-none">
                {user && <p>Hello {user.first_name}</p>}
              </p>
              <motion.button
                className="nav-icon position-relative text-decoration-none save-button"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                  <Items />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className="save-button"
                onClick={() => (modalOpen ? close() : open())}
              >
                <i className="fa fa-fw fa-user text-dark mr-3"></i>
              </motion.button>
              <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => window.location.reload()}
              >
                {user
                  ? modalOpen === true && <Modal2 handleClose={close} />
                  : modalOpen === true && <Modal handleClose={close} />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
