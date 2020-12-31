import React from 'react';

import './RecipeCard.css';

import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const RecipeCard = ({ recipe }) => {
    const { steps, ingredients, name, servings, difficulty } = recipe;
    return (
        <Accordion data-testid='recipe-card__accordion'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize="large"/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h4" className="recipe__name">{ name }</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid>
                    <Typography variant="h5">{ `Recette pour : ${ servings } personnes` }</Typography>
                    <Typography variant="h5">{ `Difficulté : ${ difficulty }/4` }</Typography>
                </Grid>
                <Grid>
                    <ul>
                        <Typography variant="h4" className="recipe__recipe-card__step">Etapes</Typography>
                        { steps.map((step, idx) => <Grid key={ idx }> { step } </Grid>) }
                    </ul>
                </Grid>
                <Grid>
                    <ul>
                        <Typography variant="h4" className="recipe__recipe-card__step">Ingredients</Typography>
                        { ingredients.map((ingredient, idx) => 
                            <Grid key={ idx }> 
                                {ingredient.name} { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}
                            </Grid> )
                        }
                    </ul>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default RecipeCard;