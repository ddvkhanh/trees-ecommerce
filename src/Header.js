import React, { Component } from "react";
import NavBar from './NavBar';
import { connect } from "react-redux";
const email=window.$email;
const phone=window.$phone;

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
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="infodeercreative@gmail.com">
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                      <span>Email: </span>
                    </a>
                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="+1 234 122 122">
                      <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span>Call Us:  </span>
                    </a>
                  </div>
                  {/* <!-- Top Header Content --> */}
                  <div className="top-header-meta d-flex">
                    {/* <!-- Language Dropdown --> */}
                    <div className="language-dropdown">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle mr-30"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Language
                          </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            USA
                            </a>
                          <a className="dropdown-item" href="#">
                            UK
                            </a>
                          <a className="dropdown-item" href="#">
                            Bangla
                            </a>
                          <a className="dropdown-item" href="#">
                            Hindi
                            </a>
                          <a className="dropdown-item" href="#">
                            Spanish
                            </a>
                          <a className="dropdown-item" href="#">
                            Latin
                            </a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Login --> */}
                    <div className="login">
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true"></i>{" "}
                        <span>Login</span>
                      </a>
                    </div>
                    {/* <!-- Cart --> */}
                    <div className="cart">
                      <a href="./cart">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>{" "}
                        <span>
                          Cart <span className="cart-quantity">({this.props.items.length})</span>
                        </span>
                      </a>
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

const mapStateToProps = state => {
  return {
    items: state.carts.items
  };
};

export default connect(mapStateToProps)(Header);
