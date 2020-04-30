import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import Map from "./Map";

export default class ContactPage extends Component {
  render() {
    return (
        <div>
        <div className="breadcrumb-area">
          {/* Top Breadcrumb Area */}
          <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{backgroundImage: 'url(img/bg-img/24.jpg)'}}>
            <h2>Shop</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="fa fa-home" /> Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Breadcrumb Area End ##### */}
        {/* ##### Shop Area Start ##### */}
        <section className="shop-page section-padding-0-100">
          <div className="container">
            <div className="row">
              {/* Shop Sorting Data */}
              <div className="col-12">
                <div className="shop-sorting-data d-flex flex-wrap align-items-center justify-content-between">
                  {/* Shop Page Count */}
                  <div className="shop-page-count">
                    <p>Showing 1–9 of 72 results</p>
                  </div>
                  {/* Search by Terms */}
                  <div className="search_by_terms">
                    <form action="#" method="post" className="form-inline">
                      <select className="custom-select widget-title">
                        <option selected>Short by Popularity</option>
                        <option value={1}>Short by Newest</option>
                        <option value={2}>Short by Sales</option>
                        <option value={3}>Short by Ratings</option>
                      </select>
                      <select className="custom-select widget-title">
                        <option selected>Show: 9</option>
                        <option value={1}>12</option>
                        <option value={2}>18</option>
                        <option value={3}>24</option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Sidebar Area */}
              <div className="col-12 col-md-4 col-lg-3">
                <div className="shop-sidebar-area">
                  {/* Shop Widget */}
                  <div className="shop-widget price mb-50">
                    <h4 className="widget-title">Prices</h4>
                    <div className="widget-desc">
                      <div className="slider-range">
                        <div data-min={8} data-max={30} data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min={8} data-value-max={30} data-label-result="Price:">
                          <div className="ui-slider-range ui-widget-header ui-corner-all" />
                          <span className="ui-slider-handle ui-state-default ui-corner-all first-handle" tabIndex={0} />
                          <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                        </div>
                        <div className="range-price">Price: $8 - $30</div>
                      </div>
                    </div>
                  </div>
                  {/* Shop Widget */}
                  <div className="shop-widget catagory mb-50">
                    <h4 className="widget-title">Categories</h4>
                    <div className="widget-desc">
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">All plants <span className="text-muted">(72)</span></label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Outdoor plants <span className="text-muted">(20)</span></label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">Indoor plants <span className="text-muted">(15)</span></label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                        <label className="custom-control-label" htmlFor="customCheck4">Office Plants <span className="text-muted">(20)</span></label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck5" />
                        <label className="custom-control-label" htmlFor="customCheck5">Potted <span className="text-muted">(15)</span></label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck6" />
                        <label className="custom-control-label" htmlFor="customCheck6">Others <span className="text-muted">(2)</span></label>
                      </div>
                    </div>
                  </div>
                  {/* Shop Widget */}
                  <div className="shop-widget sort-by mb-50">
                    <h4 className="widget-title">Sort by</h4>
                    <div className="widget-desc">
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck7" />
                        <label className="custom-control-label" htmlFor="customCheck7">New arrivals</label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck8" />
                        <label className="custom-control-label" htmlFor="customCheck8">Alphabetically, A-Z</label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck9" />
                        <label className="custom-control-label" htmlFor="customCheck9">Alphabetically, Z-A</label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                        <input type="checkbox" className="custom-control-input" id="customCheck10" />
                        <label className="custom-control-label" htmlFor="customCheck10">Price: low to high</label>
                      </div>
                      {/* Single Checkbox */}
                      <div className="custom-control custom-checkbox d-flex align-items-center">
                        <input type="checkbox" className="custom-control-input" id="customCheck11" />
                        <label className="custom-control-label" htmlFor="customCheck11">Price: high to low</label>
                      </div>
                    </div>
                  </div>
                  {/* Shop Widget */}
                  <div className="shop-widget best-seller mb-50">
                    <h4 className="widget-title">Best Seller</h4>
                    <div className="widget-desc">
                      {/* Single Best Seller Products */}
                      <div className="single-best-seller-product d-flex align-items-center">
                        <div className="product-thumbnail">
                          <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt="" /></a>
                        </div>
                        <div className="product-info">
                          <a href="shop-details.html">Cactus Flower</a>
                          <p>$10.99</p>
                          <div className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                      {/* Single Best Seller Products */}
                      <div className="single-best-seller-product d-flex align-items-center">
                        <div className="product-thumbnail">
                          <a href="shop-details.html"><img src="img/bg-img/5.jpg" alt="" /></a>
                        </div>
                        <div className="product-info">
                          <a href="shop-details.html">Tulip Flower</a>
                          <p>$11.99</p>
                          <div className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                      {/* Single Best Seller Products */}
                      <div className="single-best-seller-product d-flex align-items-center">
                        <div className="product-thumbnail">
                          <a href="shop-details.html"><img src="img/bg-img/34.jpg" alt="" /></a>
                        </div>
                        <div className="product-info">
                          <a href="shop-details.html">Recuerdos Plant</a>
                          <p>$9.99</p>
                          <div className="ratings">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* All Products Area */}
              <div className="col-12 col-md-8 col-lg-9">
                <div className="shop-products-area">
                  <div className="row">
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/40.png" alt="" /></a>
                          {/* Product Tag */}
                          <div className="product-tag">
                            <a href="#">Hot</a>
                          </div>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/41.png" alt="" /></a>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/42.png" alt="" /></a>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/43.png" alt="" /></a>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/44.png" alt="" /></a>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/45.png" alt="" /></a>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/46.png" alt="" /></a>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/47.png" alt="" /></a>
                          {/* Product Tag */}
                          <div className="product-tag sale-tag">
                            <a href="#">Sale</a>
                          </div>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                    {/* Single Product Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                      <div className="single-product-area mb-50">
                        {/* Product Image */}
                        <div className="product-img">
                          <a href="shop-details.html"><img src="img/bg-img/48.png" alt="" /></a>
                          <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                            <a href="cart.html" className="add-to-cart-btn">Add to cart</a>
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                          </div>
                        </div>
                        {/* Product Info */}
                        <div className="product-info mt-15 text-center">
                          <a href="shop-details.html">
                            <p>Cactus Flower</p>
                          </a>
                          <h6>$10.99</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Pagination */}
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Shop Area End ##### */}
        {/* ##### Footer Area Start ##### */}
        <footer className="footer-area bg-img" style={{backgroundImage: 'url(img/bg-img/3.jpg)'}}>
          {/* Main Footer Area */}
          <div className="main-footer-area">
            <div className="container">
              <div className="row">
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="footer-logo mb-30">
                      <a href="#"><img src="img/core-img/logo.png" alt="" /></a>
                    </div>
                    <p>Lorem ipsum dolor sit samet, consectetur adipiscing elit. India situs atione mantor</p>
                    <div className="social-info">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                      <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="widget-title">
                      <h5>QUICK LINK</h5>
                    </div>
                    <nav className="widget-nav">
                      <ul>
                        <li><a href="#">Purchase</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Payment</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Return</a></li>
                        <li><a href="#">Advertise</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">Policities</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="widget-title">
                      <h5>BEST SELLER</h5>
                    </div>
                    {/* Single Best Seller Products */}
                    <div className="single-best-seller-product d-flex align-items-center">
                      <div className="product-thumbnail">
                        <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt="" /></a>
                      </div>
                      <div className="product-info">
                        <a href="shop-details.html">Cactus Flower</a>
                        <p>$10.99</p>
                      </div>
                    </div>
                    {/* Single Best Seller Products */}
                    <div className="single-best-seller-product d-flex align-items-center">
                      <div className="product-thumbnail">
                        <a href="shop-details.html"><img src="img/bg-img/5.jpg" alt="" /></a>
                      </div>
                      <div className="product-info">
                        <a href="shop-details.html">Tulip Flower</a>
                        <p>$11.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Single Footer Widget */}
                <div className="col-12 col-sm-6 col-lg-3">
                  <div className="single-footer-widget">
                    <div className="widget-title">
                      <h5>CONTACT</h5>
                    </div>
                    <div className="contact-information">
                      <p><span>Address:</span> 505 Silk Rd, New York</p>
                      <p><span>Phone:</span> +1 234 122 122</p>
                      <p><span>Email:</span> info.deercreative@gmail.com</p>
                      <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                      <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer></div>

    )
}
}