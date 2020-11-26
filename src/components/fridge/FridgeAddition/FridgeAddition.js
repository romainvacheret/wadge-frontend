import React, { useState, useEffect } from 'react';
import './FridgeAddition.css';

const FridgeAddition = () => {
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
            <h3 className='Title'> Liste des fruits et légumes à ajouter </h3>
            <ul> {
            foodList.map(({ consommation, nom, type,}, idx) => ( 
                    <div className="ListAddition"key={idx}> 
                        <h4>Carré d'ajout</h4>
                            { 
                                <>
                                    <ul>
                                        <li>{ nom }</li>
                                        <li>{ `Type : ${ type }` }</li>
                                        <li>{ `Mois de consommation: ${ consommation }` }</li>
                                    </ul>
                                    <br></br>
                                </>
                            } 
                    </div> 
                )
                )
            } </ul>
        </>
    );
}
export default FridgeAddition;
