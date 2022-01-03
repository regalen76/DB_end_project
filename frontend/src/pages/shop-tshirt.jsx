import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import AuthContext from "../utils/AuthContext";
import useCategory from "./components/hooks/useCategory";

const Items = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/shops/tshirt/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  // let deleteCartItem = async (e) => {
  //   let id = e.currentTarget.parentNode.parentNode.getAttribute("data-index");
  //   let response = await fetch(`/api/carts/${id}/delete/`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + String(authTokens.access),
  //     },
  //   });
  //   await response.json();

  //   if (response.status === 200) {
  //     window.location.reload();
  //   } else {
  //     logoutUser();
  //   }
  // };

  // let UpdateQuantityItem = async (e) => {
  //   let id = e.currentTarget.parentNode.parentNode.getAttribute("data-index");
  //   let response = await fetch(`/api/carts/${id}/${quantity.text}/update/`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + String(authTokens.access),
  //     },
  //   });
  //   await response.json();

  //   if (response.status === 200) {
  //     window.location.reload();
  //   } else {
  //     logoutUser();
  //   }
  // };

  // let [quantity, setQuantity] = useState([]);
  // let [showButton, setShowButton] = useState(false);

  return (
    <div className="row">
      <div className="col-lg-3">
        <h1 className="h2 pb-4">Categories</h1>
        <ul className="list-unstyled templatemo-accordion">
          <li>
            <Link to="/shop" className="text-decoration-none">
              All
            </Link>
          </li>
          <li>
            <Link to="/shop-tshirt" className="text-decoration-none">
              T-shirt
            </Link>
          </li>
          <li>
            <Link to="/shop-sweater" className="text-decoration-none">
              Sweater
            </Link>
          </li>
          <li>
            <Link to="/shop-jeans" className="text-decoration-none">
              Jeans
            </Link>
          </li>
          <li>
            <Link to="/shop-shorts" className="text-decoration-none">
              Shorts
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-9">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline shop-top-menu pb-3 pt-1">
              <li className="list-inline-item">
                <h3 className="h3 text-dark text-decoration-none">T-shirt</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {notes.map((user) => (
            <div className="col-md-4" key={user[0]}>
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`assets/img/shop_0${user[0]}.jpg`}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          to="/shop-single"
                          className="btn btn-success text-white"
                        >
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shop-single"
                          className="btn btn-success text-white mt-2"
                        >
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                      <Link
                        to="/shop-single"
                        className="btn btn-success text-white mt-2"
                      >
                        <i className="fas fa-cart-plus"></i>
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <Link to="/shop-single" className="h3 text-decoration-none">
                    {user[2]}
                  </Link>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
                    <li className="pt-2">
                      <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                      <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                    </li>
                  </ul>
                  <ul className="list-unstyled d-flex justify-content-center mb-1">
                    <li>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-warning fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                      <i className="text-muted fa fa-star"></i>
                    </li>
                  </ul>
                  <p className="text-center mb-0">Rp. {user[4]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container py-5">
          <Items />
        </div>

        <section className="bg-light py-5">
          <div className="container my-4">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Our Brands</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className="col-lg-9 m-auto tempaltemo-carousel">
                <div className="row d-flex flex-row">
                  <div className="col-1 align-self-center">
                    <a
                      className="h1"
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-light fas fa-chevron-left"></i>
                    </a>
                  </div>

                  <div className="col">
                    <div
                      className="carousel slide carousel-multi-item pt-2 pt-md-0"
                      id="multi-item-example"
                      data-bs-ride="carousel"
                    >
                      <div
                        className="carousel-inner product-links-wap"
                        role="listbox"
                      >
                        <div className="carousel-item active">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo/"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo/"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo/"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo/"
                                />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="carousel-item">
                          <div className="row">
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="assets/img/brand_04.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-1 align-self-center">
                    <a
                      className="h1"
                      href="#multi-item-example"
                      role="button"
                      data-bs-slide="next"
                    >
                      <i className="text-light fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        </Helmet>
      </div>
    );
  }
}

export default Home;
