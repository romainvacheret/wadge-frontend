import React from 'react';

import { Grid, Button, Typography, withStyles } from '@material-ui/core';

import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Counter = ({counters, idx, handlePlus, handleMinus}) => {
    const CustomButton = withStyles({
        root: {
            color: '#f19300',
        '&:hover': {
            color: '#282c34',
        },
    }
    })(Button);

    const CustomButton2 = withStyles({
        root: {
            color: 'limegreen',
        '&:hover': {
            color: '#282c34',
        },
    }
    })(Button);

    return (
        <Grid container className="fridge-addition__counter">
                <Typography >
            <CustomButton className="addition__counter__button" onClick={ () => handleMinus(idx) } > 
                <IndeterminateCheckBoxIcon fontSize="large"/>
            </CustomButton>
                {counters[idx].val}
            <CustomButton2 className="addition__counter__button" onClick={ () => handlePlus(idx) } >
                <AddBoxIcon fontSize="large"/>
            </CustomButton2>
                </Typography>
        </Grid>
    );
}

export default Counter;