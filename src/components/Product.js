import React from 'react';

export function Product (props){
    let {productName, productImage, productUrl, productPrice, sellerName, onClick } = props;
    


    if(productImage ==null){

        productImage= "https://www.microboss.com.au/media/catalog/product/placeholder/default/not-available.png"};
    
    return (

        <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-product-area mb-50">
                {/* Product Image */}
                <div className="product-img">
                    <a href={productUrl}><img src={productImage} alt="" /></a>
                    <div className="product-meta d-flex">
                        <a href="#" className="wishlist-btn"><i className="icon_heart_alt" /></a>
                        <a className="add-to-cart-btn" onClick = {()=>onClick({productName, productImage, productUrl, productPrice, sellerName})}>Add to cart</a>
                        <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                    </div>
                </div>
                {/* Product Info */}
                <div className="product-info mt-15 text-center">
                    <a href="shop-details.html">
                        <p>{productName}</p>
                    </a>
                    <h6>Seller: {sellerName}</h6>
                    <h6>{productPrice} Aud</h6>
                </div>
            </div>
        </div>


    );

}



