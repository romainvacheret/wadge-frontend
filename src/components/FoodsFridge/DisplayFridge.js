import React, { useState, useEffect } from 'react';
import './DisplayFridge.css';

const DisplayFridge = () => {
    const [fridgeList, setFridgeList] = useState([]);

    useEffect(() => fetch("http://localhost:8080/display-fridge", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .catch(err => console.log('Error: ', err))
            .then(response => response.json())
            .then(response => setFridgeList([...response])),
        []);

    return (
        <>
            <img className='Image' src="logo.png" style={{ width: 225, height: 100 }}/>
            <h3 className='Title'> Frigo de l'utilisateur </h3>
            <ul> {
                fridgeList.map(({nom,produits}, idx) => {console.log(produits); return(
                        <div className="List"key={idx}> {
                            <>
                                <li>{ nom }</li>
                                <ul> {produits.map(({ quantite, dateAjout, dateLimite}) => (
                                    <>
                                    <li>{ `Quantite : ${quantite}` }</li>
                                    <li>{ `Date d'ajout: ${dateAjout}` }</li>
                                    <li>{ `Date limite: ${dateLimite}` }</li>
                                    </>
                                    ) )}

                                </ul>
                                <br></br>
                            </>
                        } </div>
                    );}
                )
            } </ul>
        </>
    );
}

export default DisplayFridge;
