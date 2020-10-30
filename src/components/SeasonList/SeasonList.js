import React, { useState, useEffect } from 'react';
import './SeasonList.css';

const SeasonList = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => fetch("http://localhost:8080/food_list", {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => setFoodList([...response])), 
    []);
    
    return (
        <>
            <h3 className='Title'> Liste des fruits et légumes </h3>
            <ul> {
            foodList.map(({ consommation, nom, type,}, idx) => {
                consommation = JSON.parse(consommation).join(', ');
                return ( 
                    <div className="List"key={idx}> { 
                        <>
                            <ul>
                                <li>{ nom }</li>
                                <li>{ `Type : ${ type }` }</li>
                                <li>{ `Mois de consommation: ${ consommation }` }</li>
                            </ul>
                            <br></br>
                        </>
                    } </div> 
                )
                })
            } </ul>
        </>
    );
}

export default SeasonList;
