import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "./components/header";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section className="bg-success py-5">
          <div className="container">
            <div className="row align-items-center py-5">
              <div className="col-md-8 text-white">
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="col-md-4">
                <img src="static/img/about-hero.svg" alt="About Hero" />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5">
          <div className="row text-center pt-5 pb-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Our Services</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 pb-5">
              <div className="h-100 py-5 services-icon-wap shadow">
                <div className="h1 text-success text-center">
                  <i className="fa fa-truck fa-lg"></i>
                </div>
                <h2 className="h5 mt-4 text-center">Delivery Services</h2>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="h-100 py-5 services-icon-wap shadow">
                <div className="h1 text-success text-center">
                  <i className="fas fa-exchange-alt"></i>
                </div>
                <h2 className="h5 mt-4 text-center">Shipping & Return</h2>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="h-100 py-5 services-icon-wap shadow">
                <div className="h1 text-success text-center">
                  <i className="fa fa-percent"></i>
                </div>
                <h2 className="h5 mt-4 text-center">Promotion</h2>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 pb-5">
              <div className="h-100 py-5 services-icon-wap shadow">
                <div className="h1 text-success text-center">
                  <i className="fa fa-user"></i>
                </div>
                <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
              </div>
            </div>
          </div>
        </section>

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
                      href="#templatemo-slide-brand"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <i className="text-light fas fa-chevron-left"></i>
                    </a>
                  </div>

                  <div className="col">
                    <div
                      className="carousel slide carousel-multi-item pt-2 pt-md-0"
                      id="templatemo-slide-brand"
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
                                  src="static/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_04.png"
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
                                  src="static/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_04.png"
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
                                  src="static/img/brand_01.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_02.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_03.png"
                                  alt="Brand Logo"
                                />
                              </a>
                            </div>
                            <div className="col-3 p-md-5">
                              <a href="#">
                                <img
                                  className="img-fluid brand-img"
                                  src="static/img/brand_04.png"
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
                      href="#templatemo-slide-brand"
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
          <script src="static/js/jquery-1.11.0.min.js"></script>
          <script src="static/js/jquery-migrate-1.2.1.min.js"></script>
          <script src="static/js/bootstrap.bundle.min.js"></script>
          <script src="static/js/templatemo.js"></script>
          <script src="static/js/custom.js"></script>
        </Helmet>
      </div>
    );
  }
}

export default Home;
