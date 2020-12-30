import React, { useState, useEffect } from 'react';

import './RecipeList.css';

import { fetchFromUrl } from 'utils';
import {Container, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionDetails from "@material-ui/core/AccordionDetails";


const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    return (
        <>
            <Typography variant="h3" className='recipe-liste__title'> Liste des recettes </Typography>
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
                                <Typography variant="h4" className="recipe_name">{name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid>
                                    <Typography variant="h5">{ `Recette pour : ${ servings } personnes` }</Typography>
                                    <Typography variant="h5">{ `Difficulté : ${ difficulty }/4` }</Typography>
                                </Grid>
                                <Grid>
                                        <ul>
                                            <h4 className="step-recipe">Etapes</h4>
                                            {steps.map((step, idx_) => <Grid key={ idx_ }> { step } </Grid>)}
                                        </ul>
                                    </Grid>
                                    <Grid>
                                        <ul>
                                            <h4 className="step-recipe">Ingredients</h4>
                                            { ingredients.map((ingredient, idx__) =>{
                                                let quantity = ingredient.quantity;
                                                return (<Grid key={ idx__ }> {ingredient.name} { quantity !== -1 ? (' : ' + ingredient.quantity) : ''} </Grid>)
                                            })}

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
