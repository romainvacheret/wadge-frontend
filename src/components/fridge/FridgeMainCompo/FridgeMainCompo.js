import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core'; 
import './FridgeMainCompo.css';

import Card from "@material-ui/core/Card";

import ModifiableFood from '../ModifiableFood/ModifiableFood';


const DisplayFridge = () => {
    const [fridgeList, setFridgeList] = useState({});

    useEffect(() => fetch("http://localhost:8080/alerts", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .catch(err => console.log('Error: ', err))
            .then(response => response.json())
            .then(response => { console.log(response); setFridgeList({...response}); }),
        []);
    const textFromKey = {
        'TWO_DAYS': 'deux jours',
        'FIVE_DAYS': 'cinq jours',
        'SEVEN_DAYS': 'sept jours',
        'FORTEEN_DAYS': 'quatorze jours',
        'EXPIRED': 'Produits prérimés',
        'OTHER': 'plus de quatorze jours'
    };

    return (
        <>
            {//<img className='Image' src="logo.png" style={{ width: 225, height: 100 }}/>
            }
            <Typography className='Title'> Frigo de l'utilisateur </Typography>
            <Grid>{
                Object.keys(fridgeList).map(key => {
                    return (
                        <>
                        <Typography>{ key === 'EXPIRED' ? textFromKey[key] : `Produits à manger au plus tard dans ${textFromKey[key]}`}</Typography>
                        <Grid>
                            {fridgeList[key].map(product => {
                            <ModifiableFood
                            
                            />

                            })}
                        </Grid>
                        </>
                    );
                })
            }</Grid>
            <ul> {
                Object.keys(fridgeList).map(({nom,produits}, idx) => {console.log(produits); return(
                        <div className="List"key={idx}> {
                            <>
                            <h4>Alerte</h4>
                                <Card className="frigofood">{ nom }
                                <ul> {produits.map(({ quantite, dateAjout, dateLimite}) => (
                                    <>
                                    <li>{ `Quantite : ${quantite}` }</li>
                                    <li>{ `Date d'ajout: ${dateAjout}` }</li>
                                    <li>{ `Date limite: ${dateLimite}` }</li>
                                    </>
                                    ) )}
                                </ul>
                                </Card>
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