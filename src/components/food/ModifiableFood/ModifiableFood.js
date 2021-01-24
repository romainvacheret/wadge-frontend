import React from 'react';
import { Grid } from '@material-ui/core';
import FoodCard from '../FoodCard/FoodCard';
import Counter from '../../utils/Counter/Counter';

const ModifiableFood = ({ foodAttributes, data, counterProps }) => {
    const { handlePlus, handleMinus, counters, idx} = counterProps;
    console.log('cc props', counterProps);
    console.log('ID, counters', idx, counters);
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