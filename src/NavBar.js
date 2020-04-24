import React, { Component } from 'react';
//import '../public/style.css';

//import './NavBar/css'

class NavBar extends Component {
    render() {
        return(

            <div className="alazea-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        <nav className="classy-navbar justify-content-between" id="alazeaNav">
                        <div className="classy-menu">
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>
                            <div className="classynav">
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Shop</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>
            </div>

        )
    }
}

export default NavBar;