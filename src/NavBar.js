import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="App">
        {/* <!-- ***** Navbar Area ***** --> */}
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
                  <img src="img/core-img/logo.png" alt="" />
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
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="shop.html">Shop</a>
                          <ul className="dropdown">
                            <li>
                              <a href="shop.html">Shop</a>
                            </li>
                            <li>
                              <a href="shop-details.html">Shop Details</a>
                            </li>
                            <li>
                              <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="portfolio.html">Portfolio</a>
                          <ul className="dropdown">
                            <li>
                              <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li>
                              <a href="single-portfolio.html">
                                Portfolio Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                          <ul className="dropdown">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="single-post.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  {/* <!-- Search Icon --> */}
                  <div id="searchIcon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
                {/* <!-- Navbar End --> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
