import React from 'react'
import './Pricing.css'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <ul className="price">
                    <li className="col-header" style={{backgroundColor:'#37387a'}}>Site Inspection</li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header" style={{backgroundColor:'#37387a'}}>Fine a Claim</li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header"style={{backgroundColor:'#37387a'}}>Replace or Repair a Roof</li>
                </ul>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home;