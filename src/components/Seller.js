import React from 'react';

export function Seller(props) {
    let {seller, sellerProductCount } = props;

    return (
        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
            <input type="checkbox" className="custom-control-input"  />
            <label className="custom-control-label" htmlFor="customCheck2">{seller} <span className="text-muted">({sellerProductCount})</span></label>
        </div>
    );
}



