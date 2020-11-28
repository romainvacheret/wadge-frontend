import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core'; 
import './FridgeMainCompo.css';

import ModifiableFood from '../ModifiableFood/ModifiableFood';
import colorList from '../../food/FoodList/color_list.json';


const DisplayFridge = () => {
    const [fridgeList, setFridgeList] = useState({});
    const [counters, setCounters] = useState( Array.from({ length: Object.keys(colorList).length}, (v, n) => { return { val: 0 } }));

    const handlePlus = (idx) => {
		const newArray = [...counters];
		newArray[idx].val += 1;
		setCounters(newArray);
	};

    const handleMinus = (idx) => {
		if(counters[idx].val !== 0){
			const newArray = [...counters];
			newArray[idx].val -= 1;
			setCounters(newArray);
		}
	};

    const textFromKey = {
        'TWO_DAYS': 'deux jours',
        'FIVE_DAYS': 'cinq jours',
        'SEVEN_DAYS': 'sept jours',
        'FORTEEN_DAYS': 'quatorze jours',
        'EXPIRED': 'Produits prérimés',
        'OTHER': 'plus de quatorze jours'
    };

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


    console.log("Compteur 1", counters);

    return (
        <>
            <Typography variant="h2" className='Title'> Frigo de l'utilisateur </Typography>
            <Grid >{
                Object.keys(fridgeList).map((key, idx) => {
                    console.log("Coucou je suis la clef", key);
                    return fridgeList[key].length ? (
                        <div key={ idx }> 
                            <Typography variant="h4">{ key === 'EXPIRED' ? textFromKey[key] : `Produits à manger au plus tard dans ${textFromKey[key]}`}</Typography>
                            <Grid container
                                item
                                direction='row'
                                alignItems='center'>
                                {fridgeList[key].map((product, idx_) => {
                                    console.log("iddd", idx_);
                                    const { nom, dateAjout, quantite } = product;
                                    return <ModifiableFood
                                        key={ idx_ }
                                        foodAttributes={{ word: nom, color: colorList[nom] }}
                                        data= {{ "Date d'ajout": dateAjout, "Quantité": quantite }}
                                        counterProps = {{ handlePlus, handleMinus, counters, idx: idx_ }}
                                    />

                                })}
                            </Grid>
                        </div>
                    ) : '';
                })
            }</Grid>
        </>
    );
}

export default DisplayFridge;