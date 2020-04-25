import React, { Component } from "react";

export default class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {customerName:"", email:"", subject:"",message:""};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  //Update state when user types
  handleChange(evt) {
    this.setState({
      [evt.target.name]:[evt.target.value]
    });
  }

  //Send data when user submits
  handleSubmit(evt){
    evt.preventDefault(); //prevent the page from reloading

    //codes to send data to database
  }

  render() {
    return (
      <div>
        {/* <!-- ##### Contact Area Start ##### --> */}
        {/* <section className="contact-area section-padding-100-0">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-lg-5">
                {/* <!-- Section Heading --> */}
                {/* <div className="section-heading">
                  <h2>GET IN TOUCH</h2>
                  <p>Send us a message, we will call back later</p>
                </div> */} 
                {/* <!-- Contact Form Area --> */}
                <div className="contact-form-area mb-100">
                  <form onSubmit={this.handleSubmit} method="post">
                    <div className="row">
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="customerName"
                            className="form-control"
                            id="contact-name"
                            placeholder="Your Name"
                            value={this.state.customerName}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="contact-email"
                            placeholder="Your Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            id="contact-subject"
                            placeholder="Subject"
                            value={this.state.subject}
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            value={this.state.message}
                            onChange={this.handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn alazea-btn mt-15">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              {/* </div> */}
              {/* <div className="col-12 col-lg-6"> */}
                {/* <!-- Google Maps --> */}
                {/* <div className="map-area mb-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137"
                    allowFullScreen
                  ></iframe>
                </div> */}
              </div>
            // </div>
          // </div>
      //   </section>
      // </div>
    );
  }
}
