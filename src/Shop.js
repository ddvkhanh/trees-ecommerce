import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Product } from "./components/Product";
import { Category } from "./components/Category";
import { Seller } from "./components/Seller";
import axios from "axios";
import BreadCrumbNCover from "./BreadCrumbNCover";
import { addItem } from './actions/cartActions'

const pageName = "Shop";

function Shop(props) {
  const [data, setData] = useState([]);
  const [selectedCatList, setSelectedCatList] = useState([]);


  const getData = async (query) => {
    const result = await axios.get(
      // urlGetData,
      "https://firetree.azurewebsites.net/api/products/search?page=1&size=8&" + query
    );

    setData(result.data.items);
  }

  let query = '';

  const getSortData = (data) => {
    let sortValue = data.target.value;
    if (sortValue == '1') {
      query = 'sortby=al-as';
    } else if (sortValue == '2') {
      query = 'sortby=al-ds';
    } else if (sortValue == '3') {
      query = 'sortby=pr-as';
    } else if (sortValue == '4') {
      query = 'sortby=pr-ds';
    }
    getData(query);
  }

  //get data from back end
  useEffect(async () => {
    getData()
  }, []);

  //get category list
  var categories = data.map(function (item) {
    console.log(item);
    
    return item.category;
  });

  
  function getUniqueListBy(arr, key) {  return [...new Map(arr.map(item => [item[key], item])).values()]};

  //remove duplicate category name to use at Category Component
  var categoryUnique = [{
    title: "Deciduous Trees",
    id: 2
  }, {
    title: "Evergreen Trees",
    id: 1
  }, {
    title: "Ground Covers",
    id: 4
  } ];

  //countCatItem will be represent how many selling item for each category
  var countCatItem = {};
  categories.forEach(function (i) { countCatItem[i.title] = (countCatItem[i.title] || 0) + 1 });

  //check with the selectedCatList if its contain current Id return true, else return false
  const getCatChecked = (id) => {
    return selectedCatList.some(i => i==id)
  }
  

  //count total item to display at "All plants"
  const totalCount = categories.length;

  //get seller list
  var sellers = data.map(function (item){
    return item.businessProfile.name;
  });

  //remove duplicate seller's name to use at Seller Component
  var sellerUnique = sellers.filter(function (item, index) {
    return sellers.indexOf(item) >= index;
  });
  
  //countSellerItem will be represent how many selling item for each category
  var countSellerItem = {};
  sellers.forEach(function (i) { countSellerItem[i] = (countSellerItem[i] || 0) + 1 });



  const handleAddItem = (item) => {
    props.addItem(item);
  }

  const handleCategoryClick = (id) => {
    if(selectedCatList.includes(id)){
      setSelectedCatList(selectedCatList.filter(i => i!==id))
    } else {
      setSelectedCatList([...selectedCatList, id]);
    }

    query = query + "&categories=" + selectedCatList.join(",");
    console.log(query);
    

    getData(query)
  }


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
                  <p>Showing 1–{totalCount} of {totalCount} results</p>
                </div>
                {/* Search by Terms */}
                <div className="search_by_terms">
                  <form action="#" method="post" className="form-inline">
                    <select className="custom-select widget-title" onChange={getSortData}>
                      <option selected>Short by Popularity</option>
                      <option value={1}>Short by A-Z</option>
                      <option value={2}>Short by Z-A</option>
                      <option value={3}>Short by price low to high</option>
                      <option value={4}>Short by price high to low</option>
                    </select>
                    {/* 
                      <select className="custom-select widget-title">
                      <option selected>Show: 9</option>
                      <option value={1}>12</option>
                      <option value={2}>18</option>
                      <option value={3}>24</option>
                      </select>
                    */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Sidebar Area */}
            <div className="col-12 col-md-4 col-lg-3">
              <div className="shop-sidebar-area">
                {/* Shop Widget 
                  <div className="shop-widget price mb-50">
                  <h4 className="widget-title">Prices</h4>
                  <div className="widget-desc">
                  <div className="slider-range">
                  <div data-min={8} data-max={30} data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min={8} data-value-max={30} data-label-result="Price:">
                  <div className="ui-slider-range ui-widget-header ui-corner-all" />
                  <span className="ui-slider-handle ui-state-default ui-corner-all first-handle" tabIndex={0} />
                  <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex={0} />
                  </div>
                  <div className="range-price">Price: $8 - $30</div>
                  </div>
                  </div>
                  </div>
                */}
                {/* Shop Widget - Search by Category*/}
                <div className="shop-widget catagory mb-50">
                  <h4 className="widget-title">Categories</h4>
                  <div className="widget-desc">
                    {/* Single Checkbox */}
                    <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                      <input type="checkbox" className="custom-control-input" id="customCheck1" />
                      <label className="custom-control-label" htmlFor="customCheck1">All plants <span className="text-muted">({totalCount})</span></label>
                    </div>
                    {/* Single Checkbox */}
                    {categoryUnique.map(item => (
                      <Category categoryName={item.title} categoryCount={countCatItem[item.title]} checked={getCatChecked(item.id)} key={item.id} value={item.id} onClick = {handleCategoryClick} />
                    ))}
                  </div>
                </div>


                {/* Shop Widget - Search by Seller*/}
                <div className="shop-widget catagory mb-50">
                  <h4 className="widget-title">Sellers</h4>
                  <div className="widget-desc">
                    {/* Single Checkbox */}
                    
                    {/* Single Checkbox */}
                    {sellerUnique.map(item => (
                      <Seller seller={item} sellerProductCount={countSellerItem[item]} />
                    ))}
                  </div>
                </div>


                {/* Shop Widget */}
                {/*
                  <div className="shop-widget sort-by mb-50">
                  <h4 className="widget-title">Sort by</h4>
                  <div className="widget-desc">
                
                  <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck7" />
                  <label className="custom-control-label" htmlFor="customCheck7">New arrivals</label>
                  </div>
                  
                  <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck8" />
                  <label className="custom-control-label" htmlFor="customCheck8">Alphabetically, A-Z</label>
                  </div>
                  
                  <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck9" />
                  <label className="custom-control-label" htmlFor="customCheck9">Alphabetically, Z-A</label>
                  </div>
                  
                  <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
                  <input type="checkbox" className="custom-control-input" id="customCheck10" />
                  <label className="custom-control-label" htmlFor="customCheck10">Price: low to high</label>
                  </div>
                  
                  <div className="custom-control custom-checkbox d-flex align-items-center">
                  <input type="checkbox" className="custom-control-input" id="customCheck11" />
                  <label className="custom-control-label" htmlFor="customCheck11">Price: high to low</label>
                  </div>
                  </div>
                  </div>
                */}
                {/* Shop Widget 
                  <div className="shop-widget best-seller mb-50">
                  <h4 className="widget-title">Best Seller</h4>
                  <div className="widget-desc">
                  
                  <div className="single-best-seller-product d-flex align-items-center">
                  <div className="product-thumbnail">
                  <a href="shop-details.html"><img src="img/bg-img/4.jpg" alt="" /></a>
                  </div>
                  <div className="product-info">
                  <a href="shop-details.html">Cactus Flower</a>
                  <p>$10.99</p>
                  <div className="ratings">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  </div>
                  </div>
                  </div>
                  
                  <div className="single-best-seller-product d-flex align-items-center">
                  <div className="product-thumbnail">
                  <a href="shop-details.html"><img src="img/bg-img/5.jpg" alt="" /></a>
                  </div>
                  <div className="product-info">
                  <a href="shop-details.html">Tulip Flower</a>
                  <p>$11.99</p>
                  <div className="ratings">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  </div>
                  </div>
                  </div>
                  
                  <div className="single-best-seller-product d-flex align-items-center">
                  <div className="product-thumbnail">
                  <a href="shop-details.html"><img src="img/bg-img/34.jpg" alt="" /></a>
                  </div>
                  <div className="product-info">
                  <a href="shop-details.html">Recuerdos Plant</a>
                  <p>$9.99</p>
                  <div className="ratings">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                */}
              </div>
            </div>
            {/* All Products Area */}
            <div className="col-12 col-md-8 col-lg-9">
              <div className="shop-products-area">
                <div className="row">
                  {/* Single Product Area */}

                  {data.map(item => (
                    <Product productName={item.title} productImage={item.imageLargeUrl} productPrice={item.sellingPrice} sellerName={item.businessProfile.name} onClick={handleAddItem} />
                  ))}

                </div>
                {/* Pagination 
                  <nav aria-label="Page navigation">
                  <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a></li>
                  </ul>
                  </nav>
                */}
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