import React, { Component } from "react";
import { PRODUCT_URL } from "./components/Products/Products";

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="footer-area bg-img"
        style={{ backgroundImage: "url(img/bg-img/3.jpg)" }}
      >
        {/* <!-- Main Footer Area --> */}
        <div className="main-footer-area">
          <div className="container">
            <div className="row">
              {/* <!-- Single Footer Widget --> */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="footer-logo mb-30">
                    <a href="#">
                      <img src="img/core-img/Logo03.png" alt="" />
                    </a>
                  </div>
                  <p>
                    Want to keep up with our activities? Subscribe to our social media channels below and stay in touch!
                    </p>
                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Single Footer Widget --> */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>QUICK LINK</h5>
                  </div>
                  <nav className="widget-nav">
                    <ul>
                      <li>
                        <a href="#">Purchase</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Payment</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Return</a>
                      </li>
                      <li>
                        <a href="#">Advertise</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <a href="#">Policies</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* <!-- Single Footer Widget --> */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>BEST SELLER</h5>
                  </div>

                  {/* <!-- Single Best Seller Products --> */}
                  <div className="single-best-seller-product d-flex align-items-center">
                    <div className="product-thumbnail">
                      <a href="shop-details.html">
                        <img src="img/bg-img/4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="shop-details.html">Cactus Flower</a>
                      <p>$10.99</p>
                    </div>
                  </div>

                  {/* <!-- Single Best Seller Products --> */}
                  <div className="single-best-seller-product d-flex align-items-center">
                    <div className="product-thumbnail">
                      <a href="shop-details.html">
                        <img src="img/bg-img/5.jpg" alt="" />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="shop-details.html">Tulip Flower</a>
                      <p>$11.99</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Single Footer Widget --> */}
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>CONTACT</h5>
                  </div>

                  <div className="contact-information">
                    <p>
                      <span>Address:</span> 505 Silk Rd, New York
                      </p>
                    <p>
                      <span>Phone:</span> +1 234 122 122
                      </p>
                    <p>
                      <span>Email:</span> info.deercreative@gmail.com
                      </p>
                    <p>
                      <span>Open hours:</span> Mon - Sun: 8 AM to 9 PM
                      </p>
                    <p>
                      <span>Happy hours:</span> Sat: 2 PM to 4 PM
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom Area --> */}
        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="border-line"></div>
              </div>
              {/* <!-- Copywrite Text --> */}
              <div className="col-12 col-md-6">
                <div className="copywrite-text">
                  <div>
                    &copy;
                      {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                      Copyright &copy;
                      <script>document.write(new Date().getFullYear());</script>{" "}
                      All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                      </a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    <div id="icon-attribute">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

                  </div>
                </div>
              </div>
              {/* <!-- Footer Nav --> */}
              <div className="col-12 col-md-6">
                <div className="footer-nav">
                  <nav>
                    <ul>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href={PRODUCT_URL}>Shop</a>
                      </li>
                      <li>
                        <a href="/portfolio">Portfolio</a>
                      </li>
                      <li>
                        <a href="/contact">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
