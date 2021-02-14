import React, { useState, useEffect } from 'react';

import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterSelect from './FilterSelect';
import { fetchFromUrl } from 'utils';
import { FormControl, Typography,OutlinedInput } from "@material-ui/core";

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState();
    const handleChangeSearch = (event) => setSearchRecipe(event.target.value);
    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    const recipes=[];
    const handleChangeRecipe = () => {
        recipeList.forEach((recipe) => {
           if(searchRecipe>0 && recipe.servings!=searchRecipe)           
          {           return;
           }
           recipes.push(recipe);
        });
        
    };
    handleChangeRecipe();
   
    return (
        <>
            <Typography variant="h3" className='recipe__title'> Liste des recettes </Typography><br></br>
            
            <FormControl class="search" name="search_person" noValidate autoComplete="off">
                <OutlinedInput id="search_person"    placeholder="Nombre de personnes" variant="outlined" 
                value={searchRecipe}
                onChange={ handleChangeSearch } 
                
               />
                
            </FormControl>
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
