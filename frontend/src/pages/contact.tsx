import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export class Home extends React.Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
          id="templatemo_nav_top"
        >
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2"></i>
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="mailto:info@company.com"
                >
                  info@company.com
                </a>
                <i className="fa fa-phone mx-2"></i>
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="tel:010-020-0340"
                >
                  010-020-0340
                </a>
              </div>
              <div>
                <a
                  className="text-light"
                  href="https://fb.com/templatemo"
                  target="_blank"
                  rel="sponsored"
                >
                  <i className="fab fa-facebook-f fa-sm fa-fw me-2"></i>
                </a>
                <a
                  className="text-light"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <i className="fab fa-instagram fa-sm fa-fw me-2"></i>
                </a>
                <a
                  className="text-light"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="fab fa-twitter fa-sm fa-fw me-2"></i>
                </a>
                <a
                  className="text-light"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin fa-sm fa-fw"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>

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
                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputMobileSearch"
                      placeholder="Search ..."
                    />
                    <div className="input-group-text">
                      <i className="fa fa-fw fa-search"></i>
                    </div>
                  </div>
                </div>
                <a
                  className="nav-icon d-none d-lg-inline"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#templatemo_search"
                >
                  <i className="fa fa-fw fa-search text-dark mr-2"></i>
                </a>
                <a
                  className="nav-icon position-relative text-decoration-none"
                  href="#"
                >
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    7
                  </span>
                </a>
                <a
                  className="nav-icon position-relative text-decoration-none"
                  href="#"
                >
                  <i className="fa fa-fw fa-user text-dark mr-3"></i>
                  <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    +99
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div
          className="modal fade bg-white"
          id="templatemo_search"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              action=""
              method="get"
              className="modal-content modal-body border-0 p-0"
            >
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="inputModalSearch"
                  name="q"
                  placeholder="Search ..."
                />
                <button
                  type="submit"
                  className="input-group-text bg-success text-light"
                >
                  <i className="fa fa-fw fa-search text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container-fluid bg-light py-5">
          <div className="col-md-6 m-auto text-center">
            <h1 className="h1">Contact Us</h1>
            <p>
              Proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>

        <div id="mapid" style={{ width: "100%", height: "300px" }}></div>
        <Helmet>
          <script
            src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
            integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
            crossOrigin=""
          ></script>
          <script src="assets/js/tests.js"></script>
        </Helmet>

        <div className="container py-5">
          <div className="row py-5">
            <form className="col-md-9 m-auto" method="post" role="form">
              <div className="row">
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="inputname">Name</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label htmlFor="inputemail">Email</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputsubject">Subject</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputmessage">Message</label>
                <textarea
                  className="form-control mt-1"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={8}
                ></textarea>
              </div>
              <div className="row">
                <div className="col text-end mt-2">
                  <button type="submit" className="btn btn-success btn-lg px-3">
                    Let’s Talk
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

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
