import React, { Component } from 'react'

export default class TreeDetails extends Component {
    static defaultProps= {
        productName: null,
        productImage: "https://www.microboss.com.au/media/catalog/product/placeholder/default/not-available.png",
        productPrice: null,
        sellerName: null,
        description: null
    }
    constructor (props){
        super(props)

    }
    
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="product_details_tab clearfix">
                        {/* <!-- Tabs --> */}
                        <ul className="nav nav-tabs" role="tablist" id="product-details-tab">
                            <li className="nav-item">
                                <a href="#description" className="nav-link active" data-toggle="tab" role="tab">Description</a>
                            </li>
                            <li className="nav-item">
                                <a href="#addi-info" className="nav-link" data-toggle="tab" role="tab">Additional Information</a>
                            </li>
                        </ul>
                        {/* <!-- Tab Content --> */}
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane fade show active" id="description">
                                <div className="description_area">
                                    <p>{this.props.description}</p>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade" id="addi-info">
                                <div className="additional_info_area">
                                    <p>What should I do if I receive a damaged parcel?
                                        <br/> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit impedit similique qui, itaque delectus labore.</span></p>
                                    <p>I have received my order but the wrong item was delivered to me.
                                        <br/> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quam voluptatum beatae harum tempore, ab?</span></p>
                                    <p>Product Receipt and Acceptance Confirmation Process
                                        <br/> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ducimus, temporibus soluta impedit minus rerum?</span></p>
                                    <p>How do I cancel my order?
                                        <br/> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius eum, minima!</span></p>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            
        )
    }
}
