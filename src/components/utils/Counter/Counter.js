import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
const Counter = ({counters, idx, handlePlus, handleMinus}) => {
    return (
        <Grid
            container
            item
            direction='row'
            alignItems='center'
        >
            <Button onClick={ () => handlePlus(idx) } color="primary" >
                Plus
            </Button>
            <Button onClick={ () => handleMinus(idx) } color="secondary" >
                Moins
            </Button>
            <Typography >
                {counters[idx].val} 
            </Typography>
        </Grid>
    );
}

export default Counter;