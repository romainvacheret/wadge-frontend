import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import './FruitsAndVegetables.css';

const FruitsAndVegetables = ({ fruits, vegetables }) => {
    return (
        <Container className="container"> {
            fruits.length || vegetables.length ? ( 
                <Container className="firstlist">
                    <Grid container spacing={2} className="liste">
                       
                      <Typography variant="h4" gutterBottom className="label">
                            Fruits
                        </Typography>
                        <Grid container spacing={4}>
                            {fruits}
                        </Grid> 
                      <Typography variant="h4" gutterBottom className="label">
                           Vegetables
                        </Typography>
                        <Grid container spacing={4}>
                            {vegetables}
                        </Grid>
                    </Grid>
                </Container>)
            : (<></>)}
        </Container>
    );
}

export default FruitsAndVegetables;