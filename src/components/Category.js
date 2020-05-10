import React from 'react';

export function Category(props) {
    let {categoryName, categoryCount, value, onClick, checked } = props;

    const handleOnClick = e => {
        onClick(value);
    }
    

    return (
        <div className="custom-control custom-checkbox d-flex align-items-center mb-2" onClick={handleOnClick} >
            <input type="checkbox" className="custom-control-input"  checked={checked}  />
            <label className="custom-control-label" htmlFor="customCheck2">{categoryName} <span className="text-muted">({categoryCount})</span></label>
        </div>
    );
}



