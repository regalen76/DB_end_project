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
          c
          <div className="container">
            <div className="row align-items-center py-5">
              <div className="col-md-8 text-white">
                <h1>Kelompok 5</h1>
                <p></p>
                <p>Reonaldo Galen Maliode &emsp;2440027386</p>
                <p>Adhi Renaldy Arivianto &emsp;2440027524</p>
                <p>M.Faadhil Putra Wahana &emsp;2440046315</p>
              </div>
              <div className="col-md-4">
                <img src="static/img/about-hero.png" alt="About Hero" />
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <div className="row text-center pt-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Developer</h1>
              <p>Keken Empire Developer</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img
                  src="./static/img/adhi.jpg"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h5 className="text-center mt-3 mb-3">Adhi</h5>
              <p className="text-center"></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img
                  src="./static/img/galen.jpg"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Galen</h2>
              <p className="text-center"></p>
            </div>
            <div className="col-12 col-md-4 p-5 mt-3">
              <a href="#">
                <img
                  src="./static/img/fadil.jpg"
                  className="rounded-circle img-fluid border"
                />
              </a>
              <h2 className="h5 text-center mt-3 mb-3">Fadil</h2>
              <p className="text-center"></p>
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
              <div className="col-auto"></div>
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
