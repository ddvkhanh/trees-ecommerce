import React, { Component } from "react";

export default class BreadCrumbNCover extends Component {
    
  render() {
      // console.log(this.props)
    return (
      <div>
        {/* <!-- ##### Breadcrumb Area Start ##### --> */}
        <div className="breadcrumb-area">
          {/* <!-- Top Breadcrumb Area --> */}
          <div
            className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
            style={{backgroundImage: "url(img/bg-img/24.jpg)"}}
          >
            <h2>{this.props.pageName ?? "Hello world"}</h2>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#">
                        <i className="fa fa-home"></i> Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {this.props.pageName}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ##### Breadcrumb Area End ##### --> */}
      </div>
    );
  }
}
