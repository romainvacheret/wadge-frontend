import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

import './FruitsAndVegetables.css';

const FruitsAndVegetables = ({ fruits, vegetables }) => {
    return (
        <Container className="fruits-vegetables"> 
            <Container className="fruits-vegetables__container">
                <Grid container spacing={2} className="fruits-vegetables__list"> {
                     fruits.length ? (
                        <>
                        <Typography variant="h4" gutterBottom className="fruits-vegetables__list__label">
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
                        <Typography variant="h4" gutterBottom className="fruits-vegetables__list__label">
                            Légumes
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