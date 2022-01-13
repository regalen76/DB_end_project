import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import AuthContext from "../utils/AuthContext";
import useCategory from "./components/hooks/useCategory";

const Items = () => {
  let [notes, setNotes] = useState([]);
  let { value, setValue, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    sessionStorage.setItem("value2", null);
    let response = await fetch("/api/shops/shorts/", {
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

  let [notes2, setNotes2] = useState([]);

  useEffect(() => {
    getNotes2();
  }, []);

  let getNotes2 = async () => {
    let response = await fetch("/api/categoryx4/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setNotes2(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

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
                <h3 className="h3 text-dark text-decoration-none">
                  Shorts, {notes2[0]} Items
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          {notes.map((user) => (
            <div className="col-md-4" key={user[0]} data-index={user[0]}>
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={`${user[5]}`}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <Link
                        to="/shop-single"
                        className="btn btn-success text-white mt-2"
                        onClick={() => {
                          setValue(user[0]);
                          sessionStorage.setItem("value2", user[0]);
                        }}
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
                  <ul className="list-unstyled d-flex justify-content-center mb-1"></ul>
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
