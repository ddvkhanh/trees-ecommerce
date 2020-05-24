import React, {Component} from "react";

export default class ProductOverview extends Component {

  constructor(props) {
    super(props)
  }
  

  render() {
    console.log("inside product overview", this.props)
    console.log("product props", this.props.product)
    const product = this.props.product;
    return (
      <div>
        <section className="single_product_details_area mb-50">
          <div className="produts-details--content mb-50">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="single-product-area mb-50">
                    {/* Product Image */}
                    <div className="product-img">
                      <img src={product.imageLargeUrl} alt="" />
                      <div className="product-meta d-flex">
                        <a href="#" className="wishlist-btn">
                          <i className="icon_heart_alt" />
                        </a>
                        <a href="cart.html" className="add-to-cart-btn">
                          Add to cart
                        </a>
                        <a href="#" className="compare-btn">
                          <i className="arrow_left-right_alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Product Info --> */}
                <div className="col-12 col-md-6">
                  <div className="single_product_desc">
                    <h4 className="title">{product.title}</h4>
                    <h4 className="price">{product.sellingPrice} AUD</h4>
                    <div className="short_overview">
                      <p>{this.props.description}</p>
                    </div>

                    <div className="cart--area d-flex flex-wrap align-items-center">
                      {/* <!-- Add to Cart Form --> */}
                      <form
                        className="cart clearfix d-flex align-items-center"
                        method="post"
                      >
                        <button
                          type="submit"
                          name="addtocart"
                          value="5"
                          className="btn alazea-btn ml-15"
                        >
                          Add to cart
                        </button>
                      </form>
                    </div>
                    <div className="products--meta">
                      <p>
                        <span>Name:</span> <span>{product.title}</span>
                      </p>
                      <p>
                        <span>Price:</span> <span>{product.sellingPrice}</span>
                      </p>
                      <p>
                        <span>Seller:</span> <span>{product.businessProfile.name}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

