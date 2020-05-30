import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Research from "./Research";
import ContactPage from "./ContactPage";
import About from "./About";
import Products, {PRODUCT_URL}  from "./components/Products/Products"
import { Provider } from "react-redux";
import store from "./store";
import Cart from './Cart';
import ThankYou from './ThankYou';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      
        <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/contact" component={ContactPage} />
            <Route path={PRODUCT_URL} component={Products} />    
            <Route path="/about" component={About} />
            <Route path="/research" component={Research} />
            <Route exact path="/" component={Home} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/cart" component={Cart} />


            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
   
      </Provider>
    );
  }
}


