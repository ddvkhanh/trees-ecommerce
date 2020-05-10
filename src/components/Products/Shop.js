import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Category } from "../Category";
import BreadCrumbNCover from "../../BreadCrumbNCover";
import ApiService from "../../service/Api";
import { Link } from "react-router-dom";
import { PRODUCT_URL } from "./Products";

const pageName = "Shop";
export default function Shop(props) {
  const [data, setData] = useState([]);

  const getData = async (query) => {
    var result = await ApiService.Products.search(query);
    //console.log(result.data);
    setData(result.data.items);
  };

  let query = "";

  const getSortData = (data) => {
    let sortValue = data.target.value;
    if (sortValue == "1") {
      query = "sortby=al-as";
    } else if (sortValue == "2") {
      query = "sortby=al-ds";
    } else if (sortValue == "3") {
      query = "sortby=pr-as";
    } else if (sortValue == "4") {
      query = "sortby=pr-ds";
    }
  };

  //get data from back end
  useEffect(() => {
    getData();
  }, [query]);

  //get category list
  var categories = data.map(function (item) {
    return item.category.title;
  });

  //remove duplicate category name to use at Category Component

  var categoryUnique = categories.filter(function (item, index) {
    return categories.indexOf(item) >= index;
  });

  console.log("Categories", categories, categoryUnique);
  //count will be represent how many selling item for each category
  var count = {};
  categories.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });

  //count total item to display at "All plants"
  const totalCount = categories.length;

  return (
    <div>
      <BreadCrumbNCover pageName={pageName} />
      {/* ##### Shop Area Start ##### */}
      <section className="shop-page section-padding-0-100">
        <div className="container">
          <div className="row">
            {/* Shop Sorting Data */}
            <div className="col-12">
              <div className="shop-sorting-data d-flex flex-wrap align-items-center justify-content-between">
                {/* Shop Page Count */}
                <div className="shop-page-count">
                  <p>
                    Showing 1–{totalCount} of {totalCount} results
                  </p>
                </div>
                {/* Search by Terms */}
                <div className="search_by_terms">
                  <form action="#" method="post" className="form-inline">
                    <select
                      className="custom-select widget-title"
                      onChange={getSortData}
                    >
                      <option selected>Short by Popularity</option>
                      <option value={1}>Short by A-Z</option>
                      <option value={2}>Short by Z-A</option>
                      <option value={3}>Short by price low to high</option>
                      <option value={4}>Short by price high to low</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Sidebar Area */}
            <div className="col-12 col-md-4 col-lg-3">
              <div className="shop-sidebar-area">
                {/* Shop Widget */}
                <div className="shop-widget catagory mb-50">
                  <h4 className="widget-title">Categories</h4>
                  <div className="widget-desc">
                    {/* Single Checkbox */}
                    <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        All plants{" "}
                        <span className="text-muted">({totalCount})</span>
                      </label>
                    </div>
                    {/* Single Checkbox */}
                    {categoryUnique.map((item) => (
                      <Category
                        key={item}
                        id={item.id}
                        categoryName={item}
                        categoryCount={count[item]}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* All Products Area */}
            <div className="col-12 col-md-8 col-lg-9">
              <div className="shop-products-area">
                <div className="row">
                  {/* Single Product Area */}
                  {data.map((item) => (
                    <Link to={`${PRODUCT_URL}/${item.id}`}>
                      <ProductCard
                        key={item.id}
                        id={item.id}
                        productName={item.title}
                        productImage={item.imageLargeUrl}
                        productPrice={item.sellingPrice}
                        sellerName={item.businessProfile.name}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Shop Area End ##### */}
    </div>
  );
}
