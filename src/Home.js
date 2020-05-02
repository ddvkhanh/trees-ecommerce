import React, { Component } from 'react';
import NavBar from './NavBar';
import HomeHeroArea from './HomeHeroArea';
import Header from './Header';
import HomepageHeader from './HomepageHeader';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeHeroArea />
            </div>
        )
    }
}
