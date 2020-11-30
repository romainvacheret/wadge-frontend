import React, { useState, useEffect } from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import './FridgeMainCompo.css';

import ModifiableFood from '../../food/ModifiableFood/ModifiableFood';
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

    // const delteFromFridge = () => {
    //     const result = []
    //     counters.forEach((counter, idx) => {
    //         if(counter.val !== 0) {
    //             const { nom, }
    //             const info = {
    //                 nom: fridgeList[idx].nom,
    //                 dateAjout: 
    //             }
    //         }
    //     })
    // }


    return (
        <>
            <Typography variant="h2" className='label' > Frigo de l'utilisateur </Typography>
            <Container className="container">
                <Grid >{
                    Object.keys(fridgeList).map((key, idx) => {
                        return fridgeList[key].length ? (
                            <div key={ idx }>
                                <Typography className='label' variant="h4">{ key === 'EXPIRED' ? textFromKey[key] : `Produits à manger au plus tard dans ${textFromKey[key]}`}</Typography>
                                <Grid container justify="center"
                                    alignItems='center'>
                                    {fridgeList[key].map((product, idx_) => {
                                        const { nom, dateAjout, quantite } = product;
                                        return (
                                        <Grid
                                            item
                                            direction='row'
                                        >
                                            <ModifiableFood
                                                key={ idx_ }
                                                foodAttributes={{ word: nom, color: colorList[nom] }}
                                                data= {{ "Date d'ajout": dateAjout, "Quantité": quantite }}
                                                counterProps = {{ handlePlus, handleMinus, counters, idx: idx_ }}
                                            />
                                            </Grid>);

                                    })}
                                </Grid>
                            </div>
                        ) : '';
                    })
                }</Grid>
            </Container>
        </>
    );
}

export default DisplayFridge;