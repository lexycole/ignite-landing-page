import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Remote Roofing</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Residential</a></li>
                    <li><a href="/AboutUs">Solar</a></li>
                    <li><a href="/ContactUs">Commercial</a></li>           
                    <li><a href="/ContactUs">FAQ</a></li>                
                    <li><a href="/ContactUs">Contact</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;