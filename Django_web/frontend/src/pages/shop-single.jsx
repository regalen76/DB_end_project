import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Header } from "./components/header";
import AuthContext from "../utils/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Modal3 } from "./components/modal";
import useModal from "./components/hooks/useModal";

const Itemsingle = () => {
  let [notes, setNotes] = useState([]);
  let [notes2, setNotes2] = useState([]);

  let [sizelOpen, setSizelOpen] = useState(false);
  let [sizelOpen2, setSizelOpen2] = useState(false);
  let [sizelOpen3, setSizelOpen3] = useState(false);
  let [sizelOpen4, setSizelOpen4] = useState(false);
  let [sizeNow, setSizeNow] = useState("null");

  let [quantity, setQuantity] = useState(1);

  let { modalOpen, close, open } = useModal();

  let decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  let incrementQuantity = () => {
    if (quantity < notes2[0][0]) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  let { value, setValue, logoutUser, authTokens } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    var value3 = sessionStorage.getItem("value2");
    let response = await fetch(`/api/items/${value3}/single/`, {
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

  let getNotes2 = async () => {
    let response = await fetch(`/api/stock/${notes[0][0]}/S/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      if (data[0][0] === 0) {
        setSizelOpen(false);
        setSizelOpen2(false);
        setSizelOpen3(false);
        setSizelOpen4(false);
        setSizeNow("null");
        alert("stock is 0");
      } else {
        setNotes2(data);
      }
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let getNotes3 = async () => {
    let response = await fetch(`/api/stock/${notes[0][0]}/M/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      if (data[0][0] === 0) {
        setSizelOpen(false);
        setSizelOpen2(false);
        setSizelOpen3(false);
        setSizelOpen4(false);
        setSizeNow("null");
        alert("stock is 0");
      } else {
        setNotes2(data);
      }
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };
  let getNotes4 = async () => {
    let response = await fetch(`/api/stock/${notes[0][0]}/L/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      if (data[0][0] === 0) {
        setSizelOpen(false);
        setSizelOpen2(false);
        setSizelOpen3(false);
        setSizelOpen4(false);
        setSizeNow("null");
        alert("stock is 0");
      } else {
        setNotes2(data);
      }
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };
  let getNotes5 = async () => {
    let response = await fetch(`/api/stock/${notes[0][0]}/XL/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      if (data[0][0] === 0) {
        setSizelOpen(false);
        setSizelOpen2(false);
        setSizelOpen3(false);
        setSizelOpen4(false);
        setSizeNow("null");
        alert("stock is 0");
      } else {
        setNotes2(data);
      }
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let addCartItem = async () => {
    let response = await fetch(
      `/api/carts/${quantity}/${notes[0][0]}/${sizeNow}/add/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    await response.json();

    if (response.status === 200) {
      alert("product added to cart");
      window.location.reload();
    } else {
      logoutUser();
    }
  };

  return (
    <div className="container pb-5">
      {notes.map((user) => (
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                className="card-img img-fluid"
                src={`${user[4]}`}
                alt="Card image cap"
                id="product-detail"
              />
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body" key={user[0]}>
                <h1 className="h2">{user[1]}</h1>
                <p className="h3 py-2">Rp. {user[3]}</p>
                <p className="py-2"></p>

                <h6>Description:</h6>
                <p>{user[2]}</p>

                <input type="hidden" name="product-title" value="Activewear" />
                <div className="row">
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item">Size :</li>
                      <li className="list-inline-item">
                        {sizelOpen ? (
                          <motion.button
                            whileInView={{ scale: 1.3 }}
                            onClick={() => {
                              setSizelOpen(false);
                              setSizeNow("null");
                              setNotes2(null);
                              setQuantity(1);
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            S
                          </motion.button>
                        ) : (
                          <motion.button
                            onClick={() => {
                              setSizelOpen2(false);
                              setSizelOpen3(false);
                              setSizelOpen4(false);
                              setSizelOpen(true);
                              setSizeNow("S");
                              setQuantity(1);
                              getNotes2();
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            S
                          </motion.button>
                        )}
                      </li>
                      <li className="list-inline-item">
                        {sizelOpen2 ? (
                          <motion.button
                            whileInView={{ scale: 1.3 }}
                            onClick={() => {
                              setSizelOpen2(false);
                              setSizeNow("null");
                              setNotes2(null);
                              setQuantity(1);
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            M
                          </motion.button>
                        ) : (
                          <motion.button
                            onClick={() => {
                              setSizelOpen(false);
                              setSizelOpen3(false);
                              setSizelOpen4(false);
                              setSizelOpen2(true);
                              setSizeNow("M");
                              setQuantity(1);
                              getNotes3();
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            M
                          </motion.button>
                        )}
                      </li>
                      <li className="list-inline-item">
                        {sizelOpen3 ? (
                          <motion.button
                            whileInView={{ scale: 1.3 }}
                            onClick={() => {
                              setSizelOpen3(false);
                              setSizeNow("null");
                              setNotes2(null);
                              setQuantity(1);
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            L
                          </motion.button>
                        ) : (
                          <motion.button
                            onClick={() => {
                              setSizelOpen(false);
                              setSizelOpen2(false);
                              setSizelOpen4(false);
                              setSizelOpen3(true);
                              setSizeNow("L");
                              setQuantity(1);
                              getNotes4();
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            L
                          </motion.button>
                        )}
                      </li>
                      <li className="list-inline-item">
                        {sizelOpen4 ? (
                          <motion.button
                            whileInView={{ scale: 1.3 }}
                            onClick={() => {
                              setSizelOpen4(false);
                              setSizeNow("null");
                              setNotes2(null);
                              setQuantity(1);
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            XL
                          </motion.button>
                        ) : (
                          <motion.button
                            onClick={() => {
                              setSizelOpen(false);
                              setSizelOpen2(false);
                              setSizelOpen3(false);
                              setSizelOpen4(true);
                              setSizeNow("XL");
                              setQuantity(1);
                              getNotes5();
                            }}
                            className="btn btn-success btn-size"
                            id="btn-shop"
                          >
                            XL
                          </motion.button>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="col-auto">
                    <ul className="list-inline pb-3">
                      <li className="list-inline-item text-right">Quantity</li>
                      <li className="list-inline-item">
                        <motion.button
                          className="btn btn-success"
                          whileTap={{ scale: 1.3 }}
                          id="btn-minus"
                          onClick={() => {
                            if (sizeNow === "null") {
                              alert("choose size first");
                            } else {
                              decrementQuantity();
                            }
                          }}
                        >
                          -
                        </motion.button>
                      </li>
                      <li className="list-inline-item">
                        <span className="badge bg-secondary" id="var-value">
                          {quantity}
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <motion.button
                          whileTap={{ scale: 1.3 }}
                          className="btn btn-success"
                          id="btn-plus"
                          onClick={() => {
                            if (sizeNow === "null") {
                              alert("choose size first");
                            } else {
                              incrementQuantity();
                            }
                          }}
                        >
                          +
                        </motion.button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col d-grid">
                    <button
                      className="btn btn-success btn-lg"
                      onClick={() => {
                        if (sizeNow === "null") {
                          alert("choose size first");
                        } else {
                          sessionStorage.setItem("valuex", quantity);
                          sessionStorage.setItem("valuez", sizeNow);
                          modalOpen ? close() : open();
                        }
                      }}
                    >
                      Buy
                    </button>

                    {user
                      ? modalOpen === true && <Modal3 handleClose={close} />
                      : modalOpen === true && <Modal3 handleClose={open} />}
                  </div>
                  <div className="col d-grid">
                    <button
                      className="btn btn-success btn-lg"
                      onClick={() => {
                        if (sizeNow === "null") {
                          alert("choose size first");
                        } else {
                          addCartItem();
                        }
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="bg-light"></section>
        <Itemsingle />

        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light"></div>
              </div>
              <div className="col-auto me-auto">
                <ul className="list-inline text-left footer-icons">
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="http://facebook.com/"
                    >
                      <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.instagram.com/"
                    >
                      <i className="fab fa-instagram fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://twitter.com/"
                    >
                      <i className="fab fa-twitter fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.linkedin.com/"
                    >
                      <i className="fab fa-linkedin fa-lg fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-100 bg-black py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left text-light">
                    Copyright &copy; 2021 Company Name | Designed by{" "}
                    <a
                      rel="sponsored"
                      href="https://templatemo.com"
                      target="_blank"
                    >
                      TemplateMo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Helmet>
          <script src="static/js/jquery-1.11.0.min.js"></script>
          <script src="static/js/jquery-migrate-1.2.1.min.js"></script>
          <script src="static/js/bootstrap.bundle.min.js"></script>
          <script src="static/js/templatemo.js"></script>
          <script src="static/js/custom.js"></script>
          <script src="static/js/slick.min.js"></script>
          <script src="static/js/test.js"></script>
        </Helmet>
      </div>
    );
  }
}

export default Home;
