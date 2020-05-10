import React from "react";
import { Link } from "react-router-dom";

export function ProductCard(props) {
  let {
    productName,
    productImage,
    productUrl,
    productPrice,
    sellerName,
    onAddToCardClick
  } = props;

  productImage = productImage
    ? productImage
    : "https://www.microboss.com.au/media/catalog/product/placeholder/default/not-available.png";

  const onAddToCardClicked = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("adding to cart ", event, props);
    onAddToCardClick();
 
  };
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="single-product-area mb-50">
        {/* Product Image */}
        <div className="product-img">
          <img src={productImage} alt="" />

          <div className="product-meta d-flex">
            <button href="#" className="wishlist-btn">
              <i className="icon_heart_alt" />
            </button>
            <button className="add-to-cart-btn" onClick={onAddToCardClicked}>
              Add to cart
            </button>
            <button href="#" className="compare-btn">
              <i className="arrow_left-right_alt" />
            </button>
          </div>
        </div>
        {/* Product Info */}
        <div className="product-info mt-15 text-center">
          <p>{productName}</p>
          <h6>Seller: {sellerName}</h6>
          <h6>{productPrice} Aud</h6>
        </div>
      </div>
    </div>
  );
}
