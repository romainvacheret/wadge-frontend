import React, { useState, useEffect } from 'react';

import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';

import { fetchFromUrl } from 'utils';
import { Typography } from "@material-ui/core";

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    return (
        <>
            <Typography variant="h3" className='recipe__title'> Liste des recettes </Typography>
            <div className='recipe__container'> {
            recipeList.map((recipe, idx) => 
                <RecipeCard recipe={ recipe } key={ idx }/>
                )
            } </div>
        </>
    );
}

export default RecipeList;
