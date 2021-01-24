import React, { useState, useEffect } from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import './FridgeDisplay.css';

import FridgeCategory from './FridgeCategory';

import { fetchFromUrl } from 'utils'; 

const FridgeDisplay = () => {
    const [fridgeList, setFridgeList] = useState({});
    const [counters, setCounters] = useState({});

    useEffect(() => {
        fetchFromUrl('alerts', initializeCounters);
    }, []);

    // useEffect(() => {
    //     console.log("xx", fridgeList);
    //     initializeCounters();
    // }, [fridgeList]);

    const initializeCounters = (list) => {
        const tmp = {}
        console.log('Y', list);
        // if(fridgeList.values().length) {
            Object.keys(list).forEach(key => {
                const fList = list[key];
                console.log(fList);
                fList.forEach(food => 
                    food.products.forEach(product => {
                            tmp[product.id] = { val: product.quantity, max: product.quantity, fridgeFood: food.name };
                            console.log('prd', product);
                        })
                );
            })

            console.log('TOTOTOTOT');
            console.log('t', tmp);
            setCounters(tmp);
            setFridgeList(list);
        // console.log(counters);
        // }
        
        
        
    }

    console.log('fridge', fridgeList);
    return (
        <>
            <Typography variant='h3' className='fridge-main-compo__title' > Contenu de votre frigo </Typography>
            <Container className='fridge-main-compo__container'>
                <Grid >{
                    Object.keys(fridgeList).length ?( <>
                        <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['TWO_DAYS'] } text={ 'Péremption dans 2 jours' }/>
                        <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['FIVE_DAYS'] } text={ 'Péremption dans 5 jours' }/>
                        <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['SEVEN_DAYS'] } text={ 'Péremption dans 7 jours' }/>
                        <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['FOURTEEN_DAYS'] } text={ 'Péremption dans 14 jours' }/>
                        <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['OTHER'] } text={ 'Péremption dans plus de 14 jours' }/>
                        <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['EXPIRED'] } text={ 'Périmés' }/>
                    </> ): <></>
                }</Grid>
                
            </Container>
        </>
    );
}

export default FridgeDisplay;