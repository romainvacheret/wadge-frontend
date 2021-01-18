import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

import data from './shops.json';

import './ShopMap.css';
import { Typography } from '@material-ui/core';

const API_KEY = process.env.REACT_APP_GOOGLE_API;

const ShopMap = () => {

    const [markers, setMarkers] = useState([{
        lat: 48.855050,
        lng: 2.306350,
        text: 'Naturalia'
    }]);

    const [localStores, setLocalStores] = useState([]);


    const getShopList = () => {
        fetch(`http://localhost:8080/map`, {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(response => setLocalStores([...response['candidates']]))
        .catch(err => console.log('Error: ', err))
    }

    const AnyReactComponent = ({ text }) => <div style={{ height: 15, width: 50 }}className="shop-map__marker"><div>{text}</div></div>

    useEffect(() => setMarkers([...data]), []);

    useEffect(() => getShopList(), []);

    return (
        <>
            <Typography  variant="h3" className="shop-map__label">Liste des magasins Naturalia à Paris</Typography>
            <div className="shop-map__map" style={{ height: 600, width: 800 }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_KEY }}
                    defaultCenter={{ lat: 48.8566, lng: 2.3522, accurate: 0 }}
                    defaultZoom={ 12 }
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
            {!localStores.length ? <></> : (
                <>
                    <h3 className='shop-map__label'> Liste des magasins Naturalia proches</h3>
                    <ul> {
                    localStores.map(({ formatted_address, opening_hours }, idx) => {
                        return ( 
                            <div key={idx}> { 
                                <>
                                    <ul>
                                        <li>{ `Adresse : ${ formatted_address }` }</li>
                                        <li>{ `${ opening_hours['open_now'] ? 'Ouvert' : 'Fermé' }` }</li>
                                    </ul>
                                    <br></br>
                                </>
                            } </div> 
                        )
                        })
                    } </ul>
                </>
            )}
        </>
    );
}

export default ShopMap;