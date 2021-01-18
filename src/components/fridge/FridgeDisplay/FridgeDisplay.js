import React, { useState, useEffect } from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import './FridgeDisplay.css';

import FridgeCategory from './FridgeCategory';

import { fetchFromUrl } from 'utils'; 

const FridgeDisplay = () => {
    const [fridgeList, setFridgeList] = useState({});

    useEffect(() => {
        fetchFromUrl('alerts', setFridgeList);
    }, []);

    console.log('fridge', fridgeList);
    return (
        <>
            <Typography variant='h3' className='fridge-main-compo__title' > Contenu de votre frigo </Typography>
            <Container className='fridge-main-compo__container'>
                <Grid >{
                    Object.keys(fridgeList).length ?( <>
                        <FridgeCategory fridgeList={ fridgeList['TWO_DAYS'] } text={ 'Péremption dans 2 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['FIVE_DAYS'] } text={ 'Péremption dans 5 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['SEVEN_DAYS'] } text={ 'Péremption dans 7 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['FOURTEEN_DAYS'] } text={ 'Péremption dans 14 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['OTHER'] } text={ 'Péremption dans plus de 14 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['EXPIRED'] } text={ 'Périmés' }/>
                    </> ): <></>
                }</Grid>
                
            </Container>
        </>
    );
}

export default FridgeDisplay;