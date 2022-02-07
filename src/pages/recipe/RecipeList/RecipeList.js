import React, { useState, useEffect } from 'react';

import './RecipeList.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import FilterSelect from './FilterSelect';
import { FormControl,OutlinedInput, Box, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";

const RecipeList = ({aRecipeList}) => {
    const [recipeList, setRecipeList] = useState([]);
    const [servings, setServings] = useState('');
    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        console.log(aRecipeList)
        setRecipeList(aRecipeList)
    }, [aRecipeList]);

    useEffect(() => setRecipes([...recipeList]), [recipeList]);

    let [page, setPage] = useState(1);
    const PER_PAGE = 24;
  
    const count = Math.ceil(recipes.length / PER_PAGE);
    const _DATA = usePagination(recipes, PER_PAGE);
  
    const handleChange = (e, p) => {
      setPage(p);
      _DATA.jump(p);
    };

    const handleChangeRecipe = (event) => {
        const value = event.target.value;
        setServings(value);
        if(value === '') {
            setRecipes([...recipeList]);
        } else if(value > 0) {
            setRecipes([...recipeList.filter(recipe => recipe.servings === value)]);
        }
        
    };
   
    return (
        <>
            <div className='recipe__search'>
                <FormControl className="recipe__search" name="search_person" noValidate autoComplete="off">
                    <OutlinedInput id="search_person"    placeholder="Nombre de personnes" variant="outlined" 
                    value={servings}
                    onChange={ handleChangeRecipe } 
                />
                </FormControl>
            </div>
            {/* <FilterSelect setRecipeList={ setRecipeList }/> */}
            <Box p="5">
                <Grid container direction="column" alignItems="center">
                    <Pagination className='recipe__pagination'
                        count={count}
                        size="large"
                        page={page}
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <div className='recipe__container'> {
                    _DATA.currentData().map((recipe, idx) => 
                    ( <RecipeCard recipe={ recipe } key={ idx }/>)
                    )
                    } </div>

                    <Pagination className='recipe__pagination'
                            count={count}
                            size="large"
                            page={page}
                            variant="outlined"
                            onChange={handleChange}
                        />
                </Grid>
            </Box>
        </>
    );
}

export default RecipeList;
