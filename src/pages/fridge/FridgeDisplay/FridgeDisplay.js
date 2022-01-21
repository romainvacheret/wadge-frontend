import React, { useState, useEffect } from 'react';
import { Typography, Grid, Container } from '@material-ui/core';
import './FridgeDisplay.css';

import FridgeCategory from './FridgeCategory';

import { fetchFromUrl } from 'utils'; 
import axios from "axios";
import { GreenButton } from 'components/Buttons/WadgeButtons';

const FridgeDisplay = (props) => {
    const [fridgeList, setFridgeList] = useState({});
    const [counters, setCounters] = useState({});

    let msg1 = "";
    if(props.location.state !== undefined){
        msg1 = props.location.state.msg1;
    }

    useEffect(() =>  fetchFromUrl('alerts', initializeCounters), []);

    const initializeCounters = (list) => {
        const tmp = {}
        console.log(list);
        Object.keys(list).forEach(key => {
            const fList = list[key];
            fList.forEach(food => {
                    food.products = Object.values(food.products);
                    food.products.forEach(product => tmp[product.id] = { 
                        val: product.quantity, 
                        max: product.quantity, 
                        fridgeFood: food.id 
                    })
                }
            );
        })

        setCounters(tmp);
        setFridgeList(list);
    }

    const updateFridge = () => {
        const body = Object.keys(counters).map(id => { return {id, ...counters[id]}})
            .filter(counter => counter.max !== counter.val)
            .map(dict => { return {id: dict.id, quantity: dict.val, fridgeFood: dict.fridgeFood} });
        if(body.length) {
            axios.put('http://localhost:8080/fridge', body);
        }
    } 

    const emptyFridge = () => {
        // let result = [];
        // Object.keys(fridgeList).forEach(key => {
        //     const fList = fridgeList[key];
        //     fList.forEach(food => {
        //         const ll = food.products.map(product => product.id);
        //         result = [...ll.map(p => { return {fridgeFood: food.name, id: p}}), ...result];
        //     });
        // });

        // if(result.length) {
        //     // axios.post('http://localhost:8080/fridge/delete', result);
        // }
        axios.get('http://localhost:8080/fridge/empty')
    }

    const emptyPassedFood = () => {
        // TODO -> assert is working
        let result = [];
            const fList = fridgeList['EXPIRED'];
            fList.forEach(food => {
                const ll = food.products.map(product => product.id);
                result = [...ll.map(p => { return {fridgeFood: food.name, id: p, quantity: 0}}), ...result];
            });

        if(result.length) {
            axios.put('http://localhost:8080/fridge', result);
        }
    }

    return (
        <>
            <Typography variant='h2' className='fridge-main-compo__title' > Contenu de votre frigo </Typography>
                <Container className='fridge-main-compo__container'>
                        <Grid container alignItems='center' direction='column' justifyContent='center'>{
                            Object.keys(fridgeList).length ?( <>
                                <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['TWO_DAYS'] } text={ 'Péremption dans 2 jours' }/>
                                <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['FIVE_DAYS'] } text={ 'Péremption dans 5 jours' }/>
                                <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['SEVEN_DAYS'] } text={ 'Péremption dans 7 jours' }/>
                                <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['FOURTEEN_DAYS'] } text={ 'Péremption dans 14 jours' }/>
                                <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['OTHER'] } text={ 'Péremption dans plus de 14 jours' }/>
                                <FridgeCategory counters={ counters } setCounters={ setCounters } fridgeList={ fridgeList['EXPIRED'] } text={ 'Périmés' }/>
                            </> ): <></>
                        }
                        </Grid>
                </Container>
                <Grid container direction='row' justifyContent='center' spacing={2}>
                    <Grid item>
                        <GreenButton 
                            onClick={ updateFridge }
                            variant='contained'
                            href="/fridge"
                            id="update-fridge"
                        >
                            Prendre les aliments
                        </GreenButton>
                    </Grid>
                    <Grid item>
                        <GreenButton 
                            onClick={ emptyFridge }
                            variant='contained'
                            href="/fridge"
                            id="clear-fridge"
                        >
                            Tout prendre
                        </GreenButton>
                    </Grid>
                    <Grid item>
                        <GreenButton 
                            onClick={ emptyPassedFood }
                            variant='contained'
                            href="/fridge"
                            id="clean-fridge"
                        >
                            Jeter les aliments périmés
                        </GreenButton>
                    </Grid>
                </Grid>
            
                <Container>
                    <Grid>
                        <Typography variant="h4" style= {{ color: 'black' }}>{ msg1 }</Typography>
                    </Grid>
                </Container>
        </>
    );
}

export default FridgeDisplay;