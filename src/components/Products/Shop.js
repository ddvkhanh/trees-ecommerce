import React, { useState, useEffect, useCallback } from "react";
import { ProductCard } from "./ProductCard";
import { Category } from "../Category";
import BreadCrumbNCover from "../../BreadCrumbNCover";
import ApiService from "../../service/Api";
import { addItem } from "../../actions/cartActions";
import { connect } from "react-redux";
import { Seller } from "../Seller";

const pageName = "Shop";
var uniqueCategories = [];
var uniqueSellers = [];

function Shop(props) {
  const [data, setData] = useState({ original: [], filtered: [] });
  const [plantCheckBoxes, setPlantBoxes] = useState([]);
  const [sellerCheckBoxes, setsellerBoxes] = useState([]);

  const getData = async (query) => {
    var result = await ApiService.Products.search(query);
    console.log(result.data);
    setData({
      original: result.data.items,
      filtered: result.data.items
    });
  };

  const handleCategoryClick = (event, category) => {
    const originalData = data.original;
    let tmpData = [];
    originalData.map((val, index) => {
      const tmp = val.category.title;
      if (tmp != null && tmp == category) {
        tmpData.push(val);
      }
    });
    setData({
      original: originalData,
      filtered: tmpData
    });
  }

  const showAllItems = () => {
    setData({
      original: data.original,
      filtered: data.original
    });
  }

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
  const totalCount = data.original.length;
  var count = [];
  var categories = data.original.map(function (item) {
    return item.category.title;
  });

  //count will be represent how many selling item for each category
  categories.forEach(function (item) {
    count[item] = (count[item] || 0) + 1;
    if (!uniqueCategories.includes(item)) {
      uniqueCategories.push(item);
      setPlantBoxes(oldArray => [...oldArray, {item: false}]);
      console.log('asdad: ' + plantCheckBoxes);
    }
  });

  const handleSellerClick = (e, seller) => {
    const originalData = data.original;
    let tmpData = [];
    originalData.map((val, index) => {
      const tmp = val.businessProfile.name;
      if (tmp != null && tmp == seller) {
        tmpData.push(val);
      }
    });
    setData({
      original: originalData,
      filtered: tmpData
    });
  }

  //get seller list
  var sellers = data.original.map(function (item) {
    return item.businessProfile.name;
  });


  var countSellerItem = [];
  sellers.forEach(function (item) {
    countSellerItem[item] = (countSellerItem[item] || 0) + 1;
    if (!uniqueSellers.includes(item)) {
      uniqueSellers.push(item);
    }
  });

  const handleAddItem = (item) => {
    // console.log("item", item, props)

    props.addItem(item);
  };
  //count total item to display at "All plants"
  const sortOptions = [
    {
      value: 0,
      description: "Sort by Popularity"
    },
    {
      value: 1,
      description: "Sort by A-Z"
    },
    {
      value: 2,
      description: "Sort by Z-A"
    },
    {
      value: 3,
      description: "Sort by price low to high"
    },
    {
      value: 4,
      description: "Sort by price high to low"
    }
  ]

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
                      {sortOptions.map((option) =>
                        <option key={option.value}
                          value={option.value}>
                          {option.description}
                        </option>
                      )}

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
                    <div className="custom-control custom-checkbox d-flex align-items-center mb-2"
                      onClick={showAllItems}>
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
                    {uniqueCategories.map((item, index) => (
                      <Category
                        key={index}
                        id={item}
                        categoryName={item}
                        categoryCount={count[item]}
                        onClick={(e) => handleCategoryClick(e, item)}
                      />
                    ))}
                  </div>
                </div>
                {/* Shop Widget - Search by Seller*/}
                <div className="shop-widget catagory mb-50">
                  <h4 className="widget-title">Sellers</h4>
                  <div className="widget-desc">
                  <div className="custom-control custom-checkbox d-flex align-items-center mb-2"
                      onClick={showAllItems}>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck2"
                      >
                        All sellers{" "}
                        <span className="text-muted">({totalCount})</span>
                      </label>
                    </div>
                    {uniqueSellers.map((item, index) => (
                      <Seller
                        key={index}
                        seller={item}
                        sellerProductCount={countSellerItem[item]}
                        onClick={(e) => handleSellerClick(e, item)}
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

                  {data.filtered.map((item) => (
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      productName={item.title}
                      productImage={item.imageLargeUrl}
                      productPrice={item.sellingPrice}
                      sellerName={item.businessProfile.name}
                      onAddToCardClick={() => handleAddItem(item)}
                    />
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
export default connect(null, { addItem })(Shop); //connect co 2 bien, 1: lay data ve tu store. 2. trigger action

//store ->reducer -> action -> shop ->product
