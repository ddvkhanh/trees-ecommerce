import React, { Component } from 'react'
import AboutBackground from './AboutBackground'
import BreadCrumbNCover from './BreadCrumbNCover'
import AboutServices from './AboutServices'

const pageName = "About us";
console.log(window.$email)
console.log(window.$phone)
export default class About extends Component {
    render() {
        return (
            <div>
                <BreadCrumbNCover pageName={pageName}/>
                <AboutBackground/>
                <AboutServices/>
            </div>
        )
    }
}
