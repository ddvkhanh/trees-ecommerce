import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header-area">
        {/* <!-- ***** Top Header Area ***** --> */}
        <div className="top-header-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="top-header-content d-flex align-items-center justify-content-between">
                  {/* <!-- Top Header Content --> */}
                  <div className="top-header-meta">
                  </div>
                  {/* <!-- Top Header Content --> */}
                  <div className="top-header-meta d-flex">
                    {/* <!-- Login --> */}
                    <div className="login">
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true"></i>{" "}
                        <span>Login</span>
                      </a>
                    </div>
                    {/* <!-- Cart --> */}
                    <div className="cart">
                      <Link to="/cart">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        <span>
                          Cart
                          <span className="cart-quantity">
                            ({this.props.items.length})
                          </span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.carts.items,
  };
};

export default connect(mapStateToProps)(Header);
