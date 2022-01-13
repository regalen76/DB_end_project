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
  var valuex5 = sessionStorage.getItem("valuex5");

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

  let Cancelled = async () => {
    let response = await fetch(`/api/orderid/cancel/${valuex2}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    await response.json();

    if (response.status === 200) {
      window.location.reload();
    } else {
      logoutUser();
    }
  };

  let UpdateStock = async () => {
    for (var i = 0; i < notes.length; i++) {
      let response = await fetch(
        `/api/stock/update/${notes[i][5] + notes[i][3]}/${notes[i][4]}/${
          notes[i][1]
        }/`,
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
        window.location.reload();
      } else {
        logoutUser();
      }
    }
  };

  if (valuex5 === "true") {
    Cancelled();
    UpdateStock();
  }

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
  var times;

  useEffect(() => {
    getNotes();

    let interval = setInterval(() => {
      let target = new Date(times);
      let now = new Date();
      let difference = target.getTime() + 1 * 60 * 60 * 1000 - now.getTime();

      let d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      let h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      let s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setTimeout(true);
      }
    }, 1000);

    return () => clearInterval(interval);
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

    if (response.status === 200) {
      setNotes(data);
      times = data[0][4];
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let [timeout, setTimeout] = useState(false);
  let [days, setDays] = useState(0);
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {}, []);

  return (
    <div>
      {notes.map((user) => (
        <section className="container py-5">
          <div className="row text-center pt-5 pb-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">ORDER ID #{user[0]} </h1>
              {(() => {
                if (timeout === true && user[8] === "cancelled") {
                  return <h1 className="h1"> Cancelled </h1>;
                } else if (timeout === false && user[8] === "pending") {
                  return (
                    <h1 className="h1">
                      {minutes} Minutes - {seconds} Seconds
                    </h1>
                  );
                } else if (timeout === false && user[8] === "paid") {
                  return <h1 className="h1"> Paid </h1>;
                } else if (timeout === false && user[8] === "cancelled") {
                  return <h1 className="h1"> Cancelled </h1>;
                }
              })()}
              {(() => {
                if (timeout === true && user[8] === "pending") {
                  sessionStorage.setItem("valuex5", true);
                } else if (timeout === false) {
                  sessionStorage.setItem("valuex5", false);
                }
              })()}
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
