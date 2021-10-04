import React from 'react'
import './Header.css';
import { usePlacesWidget } from "react-google-autocomplete";
import { FaMapMarkerAlt } from 'react-icons/fa';

const Header = () => {
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: 'AIzaSyCKFbV0O7qdgt9PPSjvXJSSFmnmbjzjPVM',
        onPlaceSelected: (place) => {
          console.log(place);
        }
      });

    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="body-container"> 
                    <div className="header-container">
                        <h1>Roofing, reimagined</h1>
                        <h2 className="header-two">Find out how you can save time and money with Remote Roofing</h2>
                    </div>
                    <div className="form-group">
                        <div className="input-section">
                            <input ref={ref} {...autocompleteRef } type="text" placeholder="Enter your address" className="text-input" />
                        </div>
                        <div className="marker-section">
                            <span className="map-marker">
                                <FaMapMarkerAlt />
                            </span>
                        </div>
                        <div className="button-section">
                            <button type="button" className="btn-submit">
                                Get Inspection
                            </button> 
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;