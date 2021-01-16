import React, { useState, useEffect } from 'react';

import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterSelect from './FilterSelect';

import { fetchFromUrl } from 'utils';
import { Typography, Button } from "@material-ui/core";

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    const getRecipesUsingFridge = () => fetchFromUrl('recipes/fridge', setRecipeList);
    

    return (
        <>
            <Typography variant="h3" className='recipe__title'> Liste des recettes </Typography>
            <FilterSelect setRecipeList={ setRecipeList }/>
            <div className='recipe__container'> {
            recipeList.map((recipe, idx) => 
                <RecipeCard recipe={ recipe } key={ idx }/>
                )
            } </div>
        </>
    );
}

export default RecipeList;
