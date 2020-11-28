import React from 'react';
import { Grid } from '@material-ui/core';
import FoodCard from '../FoodCard/FoodCard';
import Counter from '../Counter/Counter';


const ModifiableFood = ({ foodAttributes, data, counterProps }) => {
    const { handlePlus, handleMinus, counters, idx} = counterProps;
    console.log("Compteur 2", counters);
    console.log("Idx", idx);
    return (
        <Grid
            container
            item
            direction='row'
            alignItems='center'
        >
            <FoodCard foodAttributes={ foodAttributes} data={ data }/>
            <Counter handlePlus={ handlePlus } handleMinus={ handleMinus } counters={ counters } idx={ idx }/>
        </Grid>
    );
}

export default ModifiableFood;