import React, { Component } from "react";
import { PRODUCT_URL } from "./components/Products/Products"
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
                                        <a href={PRODUCT_URL}>Shop</a>
                                    </li>
                                    <li>
                                        <a href="portfolio">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                    <li>
                                        <a href="http://firetree.azurewebsites.net/" target="_blank">Seller Portal</a>
                                    </li>
                                </ul>
                                {/* <!-- Search Icon --> */}
                                <div id="searchIcon">
                                    <a href={PRODUCT_URL}>
                                        <i className="fa fa-search text-white" aria-hidden="true"></i>
                                    </a>
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
