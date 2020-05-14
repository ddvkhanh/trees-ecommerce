import React, { useState, useEffect } from "react";
import BreadCrumbNCover from './BreadCrumbNCover'


const pageName = "Your order";

export default function Cart(props) {
    return (
        <div>
            <BreadCrumbNCover pageName={pageName}/>
        </div>
    );
}


