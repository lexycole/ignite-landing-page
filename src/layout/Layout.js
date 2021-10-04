import React from 'react'
import MenuBar from '../components/navigations/MenuBar'

import './Layout.css'

const Layout = (props) => {
    return(
        <React.Fragment>
            <MenuBar />

            <main className="main-content">
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default Layout;