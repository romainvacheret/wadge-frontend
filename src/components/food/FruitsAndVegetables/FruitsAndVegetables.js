import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import './FruitsAndVegetables.css';

const FruitsAndVegetables = ({ fruits, vegetables }) => {
    return (
        <Container className="container"> 
            <Container className="firstlist">
                <Grid container spacing={2} className="liste"> {
                     fruits.length ? (
                        <>
                        <Typography variant="h4" gutterBottom className="label">
                            Fruits
                        </Typography>
                        <Grid container spacing={4}>
                            {fruits}
                        </Grid> 
                    </>
                    ) : (<></>)
                } {
                    vegetables.length ? (
                        <>
                        <Typography variant="h4" gutterBottom className="label">
                        Legumes
                        </Typography>
                        <Grid container spacing={4}>
                            {vegetables}
                        </Grid>
                        </>
                    ) : (<></>)
                }
                    
            </Grid>
            </Container>
        </Container>
    );
}

export default FruitsAndVegetables;