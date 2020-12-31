import React, { useState, useEffect } from 'react';

import './RecipeList.css';

import { fetchFromUrl } from 'utils';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    return (
        <>
            <Typography variant="h3" className='recipe__title'> Liste des recettes </Typography>
            <div> {
            recipeList.map(({ steps, ingredients, name, servings, difficulty}, idx) => 
                <div key={ idx }> { 
                    <>
                        <Accordion>
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
                                            <Typography variant="h4" className="step__recipe">Etapes</Typography>
                                            {steps.map((step, idx_) => <Grid key={ idx_ }> { step } </Grid>)}
                                        </ul>
                                    </Grid>
                                    <Grid>
                                        <ul>
                                            <Typography variant="h4" className="step__recipe">Ingredients</Typography>
                                            { ingredients.map((ingredient, idx__) => 
                                                <Grid key={ idx__ }> 
                                                    {ingredient.name} { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}
                                                </Grid>
                                            )}
                                        </ul>
                                    </Grid>
                            </AccordionDetails>
                        </Accordion>
                        <br></br>
                    </>
                } </div> 
                )
            } </div>
        </>
    );
}

export default RecipeList;
