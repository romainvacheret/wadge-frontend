import React, { useState, useEffect } from 'react';
import {Typography, Grid, Container} from '@material-ui/core';
import './FridgeMainCompo.css';

import FridgeCategory from './FridgeCategory';

import { fetchFromUrl } from 'utils'; 

const DisplayFridge = () => {
    const [fridgeList, setFridgeList] = useState({});

    useEffect(() => {
        fetchFromUrl('alerts', setFridgeList);
    }, []);

    console.log('fridge', fridgeList);
    return (
        <>
            <Typography variant='h2' className='fridge-main-compo__label' > Contenu de votre frigo </Typography>
            <Container className='fridge-main-compo__container'>
                <Grid >{
                    Object.keys(fridgeList).length ?( <>
                        <FridgeCategory fridgeList={ fridgeList['TWO_DAYS'] } text={ 'Préremption dans 2 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['FIVE_DAYS'] } text={ 'Préremption dans 5 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['SEVEN_DAYS'] } text={ 'Préremption dans 7 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['FORTEEN_DAYS'] } text={ 'Préremption dans 14 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['OTHER'] } text={ 'Préremption dans plus de 14 jours' }/>
                        <FridgeCategory fridgeList={ fridgeList['EXPIRED'] } text={ 'Périmés' }/>
                    </> ): <></>
                }</Grid>
            </Container>
        </>
    );
}

export default DisplayFridge;