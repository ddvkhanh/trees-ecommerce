import React, { Component } from 'react'
import AboutBackground from './AboutBackground'
import BreadCrumbNCover from './BreadCrumbNCover'
import AboutServices from './AboutServices'

const pageName = "";
export default class About extends Component {
    render() {
        return (
            <div>
                <BreadCrumbNCover pageName={pageName}/>
                <div>THANK YOU</div>
            </div>
        )
    }
}