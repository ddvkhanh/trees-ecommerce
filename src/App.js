import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ContactPage from './ContactPage';
import Shop from './Shop';
import About from './About';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/about" component={About} />

          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    )
  }
}
