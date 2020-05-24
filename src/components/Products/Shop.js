import React, { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Category } from "../Category";
import BreadCrumbNCover from "../../BreadCrumbNCover";
import ApiService from "../../service/Api";
import { addItem } from "../../actions/cartActions";
import { connect } from "react-redux";
import { Seller } from "../Seller";
import "./shop.css";
const pageName = "Shop";
function Shop(props) {
  const [state, setState] = useState({
    data: [],
    page: 1,
    totalPages: 1,
    loading: false,
  });

  const getData = async (query, queryingPage = 1, pageSize = 12) => {
    // prevent DDOS backend
    if (state.loading) return;

    setState({ ...state, loading: true })

    console.log("querying page", queryingPage, pageSize);
    var result = await ApiService.Products.search(
      query,
      queryingPage,
      pageSize
    );
    //console.log(result.data);
    const data = result.data.items;
    const { page, totalPages } = result.data;
    console.log("result", data, page, totalPages);
    setState({ ...state, data, page, totalPages, loading: false });

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
  }, []);

  const onPageChange = (delta) => {
    console.log("delta", delta);
    getData(query, state.page + delta);
  };

  //get category list
  var categories = state.data.map(function (item) {
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
  //get seller list
  var sellers = state.data.map(function (item) {
    return item.businessProfile.name;
  });

  //remove duplicate seller's name to use at Seller Component
  var sellerUnique = sellers.filter(function (item, index) {
    return sellers.indexOf(item) >= index;
  });

  //countSellerItem will be represent how many selling item for each category
  var countSellerItem = {};
  sellers.forEach(function (i) {
    countSellerItem[i] = (countSellerItem[i] || 0) + 1;
  });

  const handleAddItem = (item) => {
    console.log("item", item, props);

    props.addItem(item);
  };
  //count total item to display at "All plants"
  const totalCount = categories.length;
  const sortOptions = [
    {
      value: 0,
      description: "Sort by Popularity",
    },
    {
      value: 1,
      description: "Sort by A-Z",
    },
    {
      value: 2,
      description: "Sort by Z-A",
    },
    {
      value: 3,
      description: "Sort by price low to high",
    },
    {
      value: 4,
      description: "Sort by price high to low",
    },
  ];
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
                      defaultValue={sortOptions[0].value}
                      className="custom-select widget-title"
                      onChange={getSortData}
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.description}
                        </option>
                      ))}
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
                {/* Shop Widget - Search by Seller*/}
                <div className="shop-widget catagory mb-50">
                  <h4 className="widget-title">Sellers</h4>
                  <div className="widget-desc">
                    {sellerUnique.map((item) => (
                      <Seller
                        key={item}
                        seller={item}
                        sellerProductCount={countSellerItem[item]}
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
                  {state.data.map((item) => (
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      productName={item.title}
                      productImage={item.imageThumbUrl}
                      productPrice={item.sellingPrice}
                      sellerName={item.businessProfile.name}
                      onAddToCardClick={() => handleAddItem(item)}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="pagination pagination-text ">
                  Displaying page {state.page} out of {state.totalPages} pages
                </div>
                <div className="pagination pagination-buttons">
                  <button
                    className="btn alazea-btn"
                    disabled={state.page <= 1}
                    onClick={() => getData("", state.page - 1)}
                  >
                    Previous page
                   </button>

                  <button
                    className="btn alazea-btn"
                    disabled={state.page >= state.totalPages}
                    onClick={() => getData("", state.page + 1)}
                  >
                    Next page
                  </button>
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
export default connect(null, { addItem })(Shop); //connect co 2 bien, 1: lay data ve tu store. 2. trigger action

//store ->reducer -> action -> shop ->product
