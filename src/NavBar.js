import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <div className="alazea-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        {/* <!-- Menu --> */}
                        <nav className="classy-navbar justify-content-between" id="alazeaNav">
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
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li>
                                                <a href="/about">About</a>
                                            </li>
                                            <li>
                                                <a href="/shop">Shop</a>
                                                <ul className="dropdown">
                                                    <li>
                                                        <a href="/shop">Shop</a>
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
                                                        <a href="single-portfolio.html">Portfolio Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                      
                                            <li>
                                                <a href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/shop">Shop</a>
                                    </li>
                                    <li>
                                        <a href="portfolio.html">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
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
        );
    }
}
