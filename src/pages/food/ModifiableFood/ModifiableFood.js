import React from 'react';
import { Grid } from '@material-ui/core';
import FoodCard from '../FoodCard/FoodCard';
import Counter from '../../../components/utils/Counter/Counter';

const ModifiableFood = ({ foodAttributes, data, counterProps }) => {
    const { handlePlus, handleMinus, counters, idx } = counterProps;
    return (
        <Grid
            container
            direction='row'
            alignItems='center'
            justify='flex-start'
        >
            <Grid item>
                <Grid container direction='column' alignItems='center' >
                    <Grid item>
                        <FoodCard foodAttributes={ foodAttributes} data={ data }/>
                    </Grid>
                    <Grid item>
                        <Counter handlePlus={ handlePlus } handleMinus={ handleMinus } counters={ counters } idx={ idx }/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ModifiableFood;