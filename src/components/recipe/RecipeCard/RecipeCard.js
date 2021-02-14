import React, {useEffect, useState} from 'react';

import './RecipeCard.css';

import {
    Grid,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Tooltip
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from "react-router-dom";
import axios from "axios";

const RecipeCard = ({ recipe }) => {
    const { steps, ingredients, name, servings, difficulty, rating } = recipe;
    const [liste, setListe] = useState(new Map());

    useEffect(() => {
        axios.post('http://localhost:8080/recipes/ingredient', recipe)
            .then((response) =>{
                const food = response.data;
                setListe(new Map(Object.entries(food)));
            })
    }, []);


   
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
                    <Typography variant="h5">{ `Note : ${ rating }/5` }</Typography>
                    <Tooltip title="Accéder à la recette">
                        <Link to={{
                            pathname: '/recipes/step',
                            state: { recipe: recipe }
                        }}>
                            <IconButton
                                aria-label="Accéder à la recette">
                                <MenuBookIcon/>
                            </IconButton>
                        </Link>
                    </Tooltip>
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
                                { liste.get(ingredient.name) === 'present' ?
                                    <Typography variant="h5" className="recipe__present__ingredient">{ ingredient.name } { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}</Typography>
                                    : <Typography variant="h5">{ ingredient.name } { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}</Typography>
                                }

                            </Grid> )
                        }
                    </ul>
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default RecipeCard;