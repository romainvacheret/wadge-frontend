import React, { useState, useEffect } from 'react';
import AlertTile from './AlertTile';

const ExpirationAlerts = () => {
    const [twoDaysAlerts, setTwoDaysAlerts] = useState([]);
    const [fiveDaysAlerts, setFiveDaysAlerts] = useState([]);
    const [sevenDaysAlerts, setSevenDaysAlerts] = useState([]);
    const [forteenDaysAlerts, setForteenDaysAlerts] = useState([]);
    const [expiredAlerts, setExpiredAlerts] = useState([]);

    useEffect(() => fetch("http://localhost:8080/alerts", {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => {
            console.log(response);
            setTwoDaysAlerts([...response['TWO_DAYS']])
            setFiveDaysAlerts([...response['FIVE_DAYS']])
            setSevenDaysAlerts([...response['SEVEN_DAYS']])
            setForteenDaysAlerts([...response['FORTEEN_DAYS']])
            setExpiredAlerts([...response['EXPIRED']])
        }), 
    []);
    
    return (
        <>
            <h1 className='Title'> Liste des alertes de péremption </h1>
            <ul> 
                {
                    expiredAlerts.length ? (
                        <li>
                            <h1>Aliments expirés</h1>
                            <AlertTile data={expiredAlerts}/>
                        </li>
                    ) : <></>
                }
                {
                    twoDaysAlerts.length ? (
                        <li>
                            <h1>Aliments à manger dans les deux jours à venir</h1>
                            <AlertTile data={twoDaysAlerts}/>
                        </li>
                    ) : <></>
                }
                {
                    fiveDaysAlerts.length ? (
                        <li>
                            <h1>Aliments à manger dans les cinq jours à venir</h1>
                            <AlertTile data={fiveDaysAlerts}/>
                        </li>
                    ) : <></>
                }
                {
                    sevenDaysAlerts.length ? (
                        <li>
                            <h1>Aliments à manger dans les sept jours à venir</h1>
                            <AlertTile data={sevenDaysAlerts}/>
                        </li>
                    ) : <></>
                }
                {
                    forteenDaysAlerts.length ? (
                        <li>
                            <h1>Aliments à manger dans les quatorze jours à venir</h1>
                            <AlertTile data={forteenDaysAlerts}/>
                        </li>
                    ) : <></>
                }
            </ul>
        </>
    );
}

export default ExpirationAlerts;
