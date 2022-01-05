import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Navigate } from "react-router-dom";
import { Header } from "./components/header";
import AuthContext from "../utils/AuthContext";
import { motion } from "framer-motion";

const Itemsingle = () => {
  let [notes, setNotes] = useState([]);

  let [sizelOpen, setSizelOpen] = useState(false);
  let [sizelOpen2, setSizelOpen2] = useState(false);
  let [sizelOpen3, setSizelOpen3] = useState(false);
  let [sizelOpen4, setSizelOpen4] = useState(false);
  let [sizeNow, setSizeNow] = useState("null");

  let [quantity, setQuantity] = useState(1);

  let decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  let incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
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
                src={`assets/img/shop_0${user[0]}.jpg`}
                alt="Card image cap"
                id="product-detail"
              />
            </div>
            <div className="row">
              <div className="col-1 align-self-center">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i className="text-dark fas fa-chevron-left"></i>
                  <span className="sr-only">Previous</span>
                </a>
              </div>

              <div
                id="multi-item-example"
                className="col-10 carousel slide carousel-multi-item"
                data-bs-ride="carousel"
              >
                <div
                  className="carousel-inner product-links-wap"
                  role="listbox"
                >
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_01.jpg"
                            alt="Product Image 1"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_02.jpg"
                            alt="Product Image 2"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_03.jpg"
                            alt="Product Image 3"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_04.jpg"
                            alt="Product Image 4"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_05.jpg"
                            alt="Product Image 5"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_06.jpg"
                            alt="Product Image 6"
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_07.jpg"
                            alt="Product Image 7"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_08.jpg"
                            alt="Product Image 8"
                          />
                        </a>
                      </div>
                      <div className="col-4">
                        <a href="#">
                          <img
                            className="card-img img-fluid"
                            src="assets/img/product_single_09.jpg"
                            alt="Product Image 9"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1 align-self-center">
                <a
                  href="#multi-item-example"
                  role="button"
                  data-bs-slide="next"
                >
                  <i className="text-dark fas fa-chevron-right"></i>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body" key={user[0]}>
                <h1 className="h2">{user[1]}</h1>
                <p className="h3 py-2">Rp. {user[3]}</p>
                <p className="py-2">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <span className="list-inline-item text-dark">
                    Rating 4.8 | 36 Comments
                  </span>
                </p>

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
                          onClick={decrementQuantity}
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
                          onClick={incrementQuantity}
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
                        }
                      }}
                    >
                      Buy
                    </button>
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
            <div className="row">
              <div className="col-md-4 pt-5">
                <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                  Zay Shop
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    123 Consectetur at ligula 10660
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw"></i>
                    <a className="text-decoration-none" href="tel:010-020-0340">
                      010-020-0340
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw"></i>
                    <a
                      className="text-decoration-none"
                      href="mailto:info@company.com"
                    >
                      info@company.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  Products
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Luxury
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport Wear
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Men's Shoes
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Women's Shoes
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Popular Dress
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Gym Accessories
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Sport Shoes
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  Further Info
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <a className="text-decoration-none" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Shop Locations
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

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
              <div className="col-auto">
                <label className="sr-only" htmlFor="subscribeEmail">
                  Email address
                </label>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control bg-dark border-light"
                    id="subscribeEmail"
                    placeholder="Email address"
                  />
                  <div className="input-group-text btn-success text-light">
                    Subscribe
                  </div>
                </div>
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
          <script src="assets/js/jquery-1.11.0.min.js"></script>
          <script src="assets/js/jquery-migrate-1.2.1.min.js"></script>
          <script src="assets/js/bootstrap.bundle.min.js"></script>
          <script src="assets/js/templatemo.js"></script>
          <script src="assets/js/custom.js"></script>
          <script src="assets/js/slick.min.js"></script>
          <script src="assets/js/test.js"></script>
        </Helmet>
      </div>
    );
  }
}

export default Home;
