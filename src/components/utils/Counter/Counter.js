import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';
const Counter = ({counters, idx, handlePlus, handleMinus}) => {
    return (
        <Grid container>
                <Typography >
            <Button onClick={ () => handleMinus(idx) } color="secondary" >
                <IndeterminateCheckBoxIcon fontSize="large"/>
            </Button>
                {counters[idx].val}
            <Button onClick={ () => handlePlus(idx) } color="primary" >
                <AddBoxIcon fontSize="large"/>
            </Button>
                </Typography>
        </Grid>
    );
}

export default Counter;