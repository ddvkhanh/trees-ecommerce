import React, { Component } from "react";
import Header from './Header';
import NavBar from './NavBar';

export default class HomeHeroArea extends Component {
  render() {
    return (
      <div>
        {/* <!-- ##### Hero Area Start ##### --> */}
        <section className="hero-area">
          <div className="hero-post-slides owl-carousel">
            {/* <!-- Single Hero Post --> */}
            <div className="single-hero-post bg-overlay">
              {/* <!-- Post Image --> */}
              <div
                className="slide-img bg-img"
                style={{backgroundImage: "url(img/bg-img/1.jpg)"}}
              ></div>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    {/* <!-- Post Content --> */}
                    <div className="hero-slides-content text-center">
                      <h2>
                        Plants exist in the weather and light rays that surround
                        them
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque ante nec ipsum iaculis, ac
                        iaculis ipsum porttitor. Vivamus cursus nisl lectus, id
                        mattis nisl lobortis eu. Duis diam augue, dapibus ut
                        dolor at, mattis maximus dolor.
                      </p>
                      <div className="welcome-btn-group">
                        <a href="#" className="btn alazea-btn mr-30">
                          GET STARTED
                        </a>
                        <a href="#" className="btn alazea-btn active">
                          CONTACT US
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Single Hero Post --> */}
            <div className="single-hero-post bg-overlay">
              {/* <!-- Post Image --> */}
              <div
                className="slide-img bg-img"
                style={{backgroundImage: "url(img/bg-img/2.jpg)"}}
              ></div>
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    {/* <!-- Post Content --> */}
                    <div className="hero-slides-content text-center">
                      <h2>
                        Plants exist in the weather and light rays that surround
                        them
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque ante nec ipsum iaculis, ac
                        iaculis ipsum porttitor. Vivamus cursus nisl lectus, id
                        mattis nisl lobortis eu. Duis diam augue, dapibus ut
                        dolor at, mattis maximus dolor.
                      </p>
                      <div className="welcome-btn-group">
                        <a href="#" className="btn alazea-btn mr-30">
                          GET STARTED
                        </a>
                        <a href="#" className="btn alazea-btn active">
                          CONTACT US
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ##### Hero Area End ##### --> */}
        {/* <Header /> */}
      </div>
    );
  }
}
