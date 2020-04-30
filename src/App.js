import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ContactPage from './ContactPage';
import Products from './Products';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
