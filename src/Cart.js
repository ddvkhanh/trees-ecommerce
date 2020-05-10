import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Product } from "./components/Product";
import { Category } from "./components/Category";
import axios from "axios";
import BreadCrumbNCover from "./BreadCrumbNCover";
import { addItem } from './actions/cartActions'
import Footer from "./Footer";
import Header from "./Header";

const pageName = "Your order";

export default function Cart(props) {
    return (
        <div>

            <h1>Thai Dang</h1>
        </div>
    );
}


