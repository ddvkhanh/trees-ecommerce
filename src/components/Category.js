import React from 'react';

export function Category(props) {
    let {categoryName } = props;

    return (
        <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
            <input type="checkbox" className="custom-control-input" id="customCheck2" />
            <label className="custom-control-label" htmlFor="customCheck2">{categoryName} <span className="text-muted">(20)</span></label>
        </div>
    );
}



