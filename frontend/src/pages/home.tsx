import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AuthContext from "../utils/AuthContext";
import { Header } from "./components/header";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div
          id="template-mo-zay-hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-bs-target="#template-mo-zay-hero-carousel"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li
              data-bs-target="#template-mo-zay-hero-carousel"
              data-bs-slide-to="1"
            ></li>
            <li
              data-bs-target="#template-mo-zay-hero-carousel"
              data-bs-slide-to="2"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img
                      className="img-fluid"
                      src="./static/img/banner_img_01.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left align-self-center">
                      <h1 className="h1 text-success">
                        <b>Keken</b> Empire
                      </h1>
                      <h3 className="h2">Clothing Company</h3>
                      <p>
                        Keken Empire is an eCommerce Website made by KekenFamily
                        in order to fulfill database system final project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img
                      className="img-fluid"
                      src="./static/img/banner_img_02.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left">
                      <h1 className="h1">Finest Quality</h1>
                      <h3 className="h2">100% Made In Indonesia</h3>
                      <p>Handcrafted and designed by Local Artist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row p-5">
                  <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                    <img
                      className="img-fluid"
                      src="./static/img/banner_img_03.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-lg-6 mb-0 d-flex align-items-center">
                    <div className="text-align-left">
                      <h1 className="h1">Worldwide Shipping</h1>
                      <h3 className="h2">100% free and worldwide shipping</h3>
                      <p>Online live Support directly with the developer.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev text-decoration-none w-auto ps-3"
            href="#template-mo-zay-hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <i className="fas fa-chevron-left"></i>
          </a>
          <a
            className="carousel-control-next text-decoration-none w-auto pe-3"
            href="#template-mo-zay-hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <section className="container py-5">
          <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Categories</h1>
              <p>Keken Empire Featured Categories</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img
                  src="./static/img/category_img_01.jpg"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h5 className="text-center mt-3 mb-3">T-Shirt</h5>
              <p className="text-center">
                <Link to="/shop-tshirt" className="btn btn-success">
                  Go Shop
                </Link>
              </p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img
                  src="./static/img/category_img_02.jpg"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Sweater</h2>
              <p className="text-center">
                <Link to="/shop-sweater" className="btn btn-success">
                  Go Shop
                </Link>
              </p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img
                  src="./static/img/category_img_03.jpg"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Shorts</h2>
              <p className="text-center">
                <Link to="/shop-shorts" className="btn btn-success">
                  Go Shop
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className="bg-light">
          <div className="container py-5">
            <div className="row text-center py-3">
              <div className="col-lg-6 m-auto">
                <h1 className="h1">Featured Product</h1>
                <p>Keken Empire Best Selling Items</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <Link
                    to="/shop-single"
                    onClick={() => {
                      sessionStorage.setItem("value2", "20");
                    }}
                  >
                    <img
                      src="./static/img/feature_prod_01.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-muted text-right">Rp. 350.000 </li>
                    </ul>
                    <Link
                      to="/shop-single"
                      className="h2 text-decoration-none text-dark"
                      onClick={() => {
                        sessionStorage.setItem("value2", "20");
                      }}
                    >
                      Chino
                    </Link>
                    <p className="card-text">
                      Made from strech of cotton, best to wear at summer
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <Link
                    to="/shop-single"
                    onClick={() => {
                      sessionStorage.setItem("value2", "10");
                    }}
                  >
                    <img
                      src="./static/img/feature_prod_02.jpg"
                      className="card-img-top prod2"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-muted text-right">Rp. 599.000</li>
                    </ul>
                    <Link
                      to="/shop-single"
                      className="h2 text-decoration-none text-dark"
                      onClick={() => {
                        sessionStorage.setItem("value2", "10");
                      }}
                    >
                      Chernobyl
                    </Link>
                    <p className="card-text">
                      Basen on real life event that occurred on 26 April 1986,
                      Pripyat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-4">
                <div className="card h-100">
                  <Link
                    to="/shop-single"
                    onClick={() => {
                      sessionStorage.setItem("value2", "5");
                    }}
                  >
                    <img
                      src="./static/img/feature_prod_03.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                  </Link>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li className="text-muted text-right">Rp. 399.000</li>
                    </ul>
                    <Link
                      to="/shop-single"
                      className="h2 text-decoration-none text-dark"
                      onClick={() => {
                        sessionStorage.setItem("value2", "5");
                      }}
                    >
                      Muse
                    </Link>
                    <p className="card-text">"For you my Muse"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        </Helmet>
      </div>
    );
  }
}

export default Home;
