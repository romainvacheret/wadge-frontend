import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import data from './shops.json';

import './ShopMap.css';

const API_KEY = process.env.REACT_APP_GOOGLE_API;

const ShopMap = (props) => {
    const [currentPosition, setCurrentPosition] = useState({
        lat: 48.8566,
        lng: 2.3522,
        accurate: 0
    });

    const [zoom, setZoom] = useState(12);

    const [markers, setMarkers] = useState([{
        lat: 48.855050,
        lng: 2.306350,
        text: 'Naturalia'
    }]);

    const AnyReactComponent = ({ text }) => <div style={{ height: 15, width: 50 }}className="Marker"><div>{text}</div></div>

    useEffect(() => setMarkers([...data]), []);

    return (
        <>
            <h1 className="Title">Liste des magasins</h1>
            <div className="Map" style={{ height: 600, width: 800 }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={ currentPosition }
                    defaultZoom={ zoom }
                >

                {markers.map((marker, idx) => (
                    <AnyReactComponent
                    key={idx}
                    lat={marker.lat}
                    lng={marker.lng}
                    text={marker.name}/>
                ))}

                </GoogleMapReact>
            </div>
        </>
    );
}

export default ShopMap;