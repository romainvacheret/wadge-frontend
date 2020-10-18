import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
// import config from '../../key.json';
// import fs from 'fs';

import './ShopMap.css';
import { API_KEY } from '../../env';

const ShopMap = (props) => {
    const [currentPosition, setCurrentPosition] = useState({
        lat: 48.8566,
        lng: 2.3522,
        accurate: 0
    });

    const [zoom, setZoom] = useState(10);

    // fs.readFile('../../key.json', 'utf-8', (err, string) => console.log(string));

    // const initMap = () => {
    //     const map = new google.maps.Map(
    //         document.getElementById(`map`), 
    //         {zoom: 4, center: currentPosition}
    //     );
    //     const marker = new google.maps.Marker({ position: currentPosition, map})
    // }

    // initMap(); 


    return (
        <div style={{ height: 600, width: 800 }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:API_KEY }}
                defaultCenter={ currentPosition }
                defaultZoom={ zoom }
            />
        </div>
    );
}

export default ShopMap;