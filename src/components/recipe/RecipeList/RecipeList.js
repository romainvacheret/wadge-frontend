import React, { useState, useEffect } from 'react';

import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterSelect from './FilterSelect';
import { postFromUrl } from 'utils';
import { FormControl, Typography,OutlinedInput } from "@material-ui/core";

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);
    const [servings, setServings] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        postFromUrl('recipes', {'selection': 'EVERYTHING'}, setRecipeList)
    }, []);

    useEffect(() => setRecipes([...recipeList]), [recipeList]);

    const handleChangeRecipe = (event) => {
        const value = event.target.value;
        setServings(value);
        if(value === '') {
            setRecipes([...recipeList]);
        } else if(value > 0) {
            setRecipes([...recipeList.filter(recipe => recipe.servings == value)]);
        }
        
    };
   
    return (
        <>
            <Typography variant="h3" className='recipe__title'> Liste des recettes </Typography><br></br>
            <div className='recipe__search'>
                <FormControl className="recipe__search" name="search_person" noValidate autoComplete="off">
                    <OutlinedInput id="search_person"    placeholder="Nombre de personnes" variant="outlined" 
                    value={servings}
                    onChange={ handleChangeRecipe } 
                />
                </FormControl>
            </div>
            <FilterSelect setRecipeList={ setRecipeList }/>
            <div className='recipe__container'> {
             recipes.map((recipe, idx) => 
              ( <RecipeCard recipe={ recipe } key={ idx }/>)
             )
            } </div>
        </>
    );
}

export default RecipeList;
