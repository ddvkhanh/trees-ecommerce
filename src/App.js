import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ContactPage from './ContactPage';
import Shop from './Shop';
import About from './About';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './Cart';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/about" component={About} />
              <Route exact path="/cart" component={Cart} />

            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </Provider>
    )
  }
}
