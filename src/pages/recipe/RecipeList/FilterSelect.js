import React, { useEffect} from 'react';
import { Grid, Select, InputLabel} from '@material-ui/core';
import { postFromUrl, fetchFromUrl } from 'utils';
const FilterSelect = ({ setRecipeList }) => {

    const handleChange = (event) => {
        const value = event.target.value;
        switch(value) {
            case 'FAVORITE':
                fetchFromUrl('recipes/favorites', setRecipeList);
                break;
            case 'REALISE':
                fetchFromUrl('recipes/doneRecipes', setRecipeList);
                break;
            default:
                postFromUrl('recipes', { 'selection': event.target.value }, setRecipeList);
        }
        
    };

    useEffect(() => {
        postFromUrl('recipes', { 'selection': 'EVERYTHING' }, setRecipeList)
    }, [setRecipeList]);


    return (
        <Grid container direction='column' justifyContent='center' style={{marginLeft: 25}}>
            <Grid item>
                <InputLabel htmlFor="age-native-simple" style={{ fontSize: 15  }}>Filtrage</InputLabel>
            </Grid>
            <Grid item xs={4}>
                <Select native onChange={ handleChange } style = {{ color:  "#f19300", fontSize: 15 }}>
                    <option value="EVERYTHING">Toutes les recettes</option>
                    <option value="USING_FRIDGE">En fonction de mon frigo</option>
                    <option value="BY_DIFFICULTY">En fonction de la difficulté</option>
                    <option value="BY_RATING">En fonction de la note</option>
                    <option value="BY_INGREDIENTS">En fonction du nombre d'ingrédients</option>
                    <option value="BY_UNIT">En fonction du nombre d'unités d'ingrédients</option>
                    <option value="FAVORITE">Mes favories</option> 
                    <option value="REALISE">Recettes Realisées</option>
            </Select><br></br>
            </Grid>
            
        </Grid>
        
    );
};

export default FilterSelect;