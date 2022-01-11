import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Header } from "./components/header";
import AuthContext from "../utils/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Modal4 } from "./components/modal";
import useModal from "./components/hooks/useModal";

const Trueitems = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);
  var valuex2 = sessionStorage.getItem("valuex2");

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch(`/api/orderid/items/${valuex2}/`, {
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

  return (
    <div>
      <div>
        <div>
          <table className="table-atas">
            <tr>
              <th>Items</th>
            </tr>
          </table>
          <table className="table-atas">
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Quantity</th>
            </tr>
          </table>
        </div>
        {notes.map((user) => (
          <table id="table-bawah" key={user[0]}>
            <tr>
              <td>
                {user[0]} {user[1]}
              </td>
              <td>{user[2]}</td>
              <td>{user[3]}</td>
            </tr>
          </table>
        ))}
      </div>
    </div>
  );
};

const Items = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);
  var valuex2 = sessionStorage.getItem("valuex2");

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch(`/api/orderid/${valuex2}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    console.log(data);

    if (response.status === 200) {
      setNotes(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let [quantity, setQuantity] = useState([]);
  let [showButton, setShowButton] = useState(false);

  let { modalOpen, close, open } = useModal();

  return (
    <div>
      {notes.map((user) => (
        <section className="container py-5">
          <div className="row text-center pt-5 pb-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">ORDER ID #{user[0]} </h1>
            </div>
          </div>

          <div>
            <table className="table-atas">
              <tr>
                <th>Order Details</th>
              </tr>
            </table>
          </div>
          <table id="table-bawah" key={user[0]}>
            <tr>
              <td>Name : {user[1]}</td>
            </tr>
            <tr>
              <td>Phone : {user[2]}</td>
            </tr>
            <tr>
              <td>Address : {user[3]}</td>
            </tr>
            <tr>
              <td>Order Created At : {user[4]}</td>
            </tr>
            <tr>
              <td>Total Payment : {user[5]}</td>
            </tr>
            <tr>
              <td>Payment Method : {user[6]}</td>
            </tr>
            <tr>
              <td>VA Number : {user[7]}</td>
            </tr>
            <tr>
              <td>Payment Status : {user[8]}</td>
            </tr>
          </table>
          <Trueitems />
          <div id="box-bawah">
            <div id="total-box">Total : Rp. {user[5]}</div>
          </div>
        </section>
      ))}
    </div>
  );
};

const Totalprice = () => {
  let [notes, setNotes] = useState([]);
  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/orderid/", {
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

  return (
    <div>
      {notes.map((user) => (
        <div id="box-bawah">
          <div id="total-box">Total : Rp. {user[5]}</div>
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

        <Items />

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
