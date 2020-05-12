import React, { Component } from 'react';
import { PopularProducts } from './components/Products/Popular';

export default class Home extends Component {
    constructor(props) {
        super(props);

        var slides = [
            {
                title: "Garden your way towards better bushfire safety",
                description: "Fire retardant trees will make sure your greenery is shielded and your safety prioritised. Having a garden containing fire retardant plants will alleviate the fire destruction to your house by slowing the fire and reducing radiant heat.",
                imageUrl: "img/bg-img/1.jpg"
            }
        ];

        this.slideHtml = slides.map(function (slide, i) {
            return <div className="single-hero-post bg-overlay" key={i}>
                <div className="slide-img bg-img" style={{ backgroundImage: "url(" + slide.imageUrl + ")" }}></div>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-slides-content text-center">
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });
    }

    render() {
        return (
            <div>
                <section className="hero-area">
                    <div className="hero-post-slides owl-carousel" style={{ display: "block" }}>
                        {this.slideHtml}
                    </div>
                </section>
                {/* <!-- ##### Hero Area End ##### --> */}

                {/* <!-- ##### Product Area Start ##### --> */}
                <section className="new-arrivals-products-area section-padding-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- Section Heading --> */}
                                <div className="section-heading text-center">
                                    <h2>POPULAR PRODUCTS</h2>
                                    <p>We have the latest products, it must be exciting for you</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-12 col-md-8 offset-md-2">
                                <PopularProducts />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ##### Product Area End ##### --> */}

                {/* <!-- ##### Service Area Start ##### --> */}
                <section className="our-services-area bg-gray section-padding-100-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- Section Heading --> */}
                                <div className="section-heading text-center">
                                    <h2>OUR SERVICES</h2>
                                    <p>We provide the perfect service for you.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                <div className="alazea-service-area mb-100">

                                    {/* <!-- Single Service Area --> */}
                                    <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">
                                        {/* <!-- Icon --> */}
                                        <div className="service-icon mr-30">
                                            <img src="img/core-img/s1.png" alt="" />
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="service-content">
                                            <h5>Plants Care</h5>
                                            <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                                        </div>
                                    </div>

                                    {/* <!-- Single Service Area --> */}
                                    <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="300ms">
                                        {/* <!-- Icon --> */}
                                        <div className="service-icon mr-30">
                                            <img src="img/core-img/s2.png" alt="" />
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="service-content">
                                            <h5>Pressure Washing</h5>
                                            <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                                        </div>
                                    </div>

                                    {/* <!-- Single Service Area --> */}
                                    <div className="single-service-area d-flex align-items-center wow fadeInUp" data-wow-delay="500ms">
                                        {/* <!-- Icon --> */}
                                        <div className="service-icon mr-30">
                                            <img src="img/core-img/s3.png" alt="" />
                                        </div>
                                        {/* <!-- Content --> */}
                                        <div className="service-content">
                                            <h5>Tree Service &amp; Trimming</h5>
                                            <p>In Aenean purus, pretium sito amet sapien denim moste consectet sedoni urna placerat sodales.service its.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="alazea-video-area bg-overlay mb-100">
                                    <img src="img/bg-img/23.jpg" alt="" />
                                    <a href="http://www.youtube.com/watch?v=7HKoqNJtMTQ" className="video-icon">
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ##### Service Area End ##### --> */}

                {/* <!-- ##### About Area Start ##### --> */}
                <section className="about-us-area section-padding-100-0">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-12 col-lg-5">
                                {/* <!-- Section Heading --> */}
                                <div className="section-heading">
                                    <h2>ABOUT US</h2>
                                    <p>We are leading in the plants service fields.</p>
                                </div>
                                <p>Quisque orci quam, vulputate non commodo finibus, molestie ac ante. Duis in sceleri quesem. Nulla sit amet varius nunc. Maecenas dui, tempeu ullam corper in.</p>

                                {/* <!-- Progress Bar Content Area --> */}
                                <div className="alazea-progress-bar mb-50">
                                    {/* <!-- Single Progress Bar --> */}
                                    <div className="single_progress_bar">
                                        <p>Office plants</p>
                                        <div id="bar1" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip"></span>
                                            </div>
                                            <span className="fill" data-percentage="80"></span>
                                        </div>
                                    </div>

                                    {/* <!-- Single Progress Bar --> */}
                                    <div className="single_progress_bar">
                                        <p>Field manager</p>
                                        <div id="bar2" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip"></span>
                                            </div>
                                            <span className="fill" data-percentage="70"></span>
                                        </div>
                                    </div>

                                    {/* <!-- Single Progress Bar --> */}
                                    <div className="single_progress_bar">
                                        <p>Landscape design</p>
                                        <div id="bar3" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip"></span>
                                            </div>
                                            <span className="fill" data-percentage="85"></span>
                                        </div>
                                    </div>

                                    {/* <!-- Single Progress Bar --> */}
                                    <div className="single_progress_bar">
                                        <p>Garden Care</p>
                                        <div id="bar4" className="barfiller">
                                            <div className="tipWrap">
                                                <span className="tip"></span>
                                            </div>
                                            <span className="fill" data-percentage="65"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="alazea-benefits-area">
                                    <div className="row">
                                        {/* <!-- Single Benefits Area --> */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b1.png" alt="" />
                                                <h5>Quality Products</h5>
                                                <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Single Benefits Area --> */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b2.png" alt="" />
                                                <h5>Perfect Service</h5>
                                                <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Single Benefits Area --> */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b3.png" alt="" />
                                                <h5>100% Natural</h5>
                                                <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                            </div>
                                        </div>

                                        {/* <!-- Single Benefits Area --> */}
                                        <div className="col-12 col-sm-6">
                                            <div className="single-benefits-area">
                                                <img src="img/core-img/b4.png" alt="" />
                                                <h5>Environmentally friendly</h5>
                                                <p>Intiam eu sagittis est, at commodo lacini libero. Praesent dignissim sed odio vel aliquam manta lagorn.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-line"></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ##### About Area End ##### --> */}
            </div>
        )
    }
}
