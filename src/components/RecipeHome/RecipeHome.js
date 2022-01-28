import { Grid, Container, Typography } from "@material-ui/core";
import React from "react";
import './RecipeHome.css'

const RecipeHome = () => {

    return(
        <>
            <Typography variant="h2" className="home-recipe__title">
                Recettes Prédites
            </Typography>
            <Container className="home-recipe-compo__container">
                <Grid container direction='row' justifyContent='flex-start' spacing={1}>
                    <Grid item>
                        <Typography> Recette 1 </Typography>
                    </Grid>
                    <Grid item>
                        <Typography> Recette 2 </Typography>
                    </Grid>
                    <Grid item>
                        <Typography> Recette 3 </Typography>
                    </Grid>
                    <Grid item>
                        <Typography> Recette 4 </Typography>
                    </Grid>
                    <Grid item>
                        <Typography> Recette 5 </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default RecipeHome;