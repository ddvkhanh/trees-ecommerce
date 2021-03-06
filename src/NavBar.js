import React, { Component } from "react";
import { PRODUCT_URL } from "./components/Products/Products";
import {Link} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="alazea-main-menu">
        <div className="classy-nav-container breakpoint-off">
          <div className="container">
            {/* <!-- Menu --> */}
            <nav
              className="classy-navbar justify-content-between"
              id="alazeaNav"
            >
              {/* <!-- Nav Brand --> */}
              <a href="index.html" className="nav-brand">
                <img id="header-logo" src="img/core-img/Logo03.png" alt="" />
              </a>
              {/* <!-- Navbar Toggler --> */}
              <div className="classy-navbar-toggler">
                <span className="navbarToggler">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              {/* <!-- Menu --> */}
              <div className="classy-menu"></div>
              {/* <!-- Close Button --> */}
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top"></span>
                  <span className="bottom"></span>
                </div>
              </div>
              {/* <!-- Navbar Start --> */}
              <div className="classynav">
                <div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to={PRODUCT_URL}>Shop</Link>
                    </li>
                    <li>
                      <Link to="/research">Research</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Navbar End --> */}
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
