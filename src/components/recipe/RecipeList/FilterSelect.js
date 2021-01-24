import React from 'react';
import { Container, Select, InputLabel, TextField, Button } from '@material-ui/core';
import { fetchFromUrl } from 'utils';

const FilterSelect = ({ setRecipeList }) => {

    const searchList = () => {
        let result = document.getElementById("food_list").value;
        result = result.split(",");
        console.log(result);
        fetch(`http://localhost:8080/recipes/listfood`, {
            method: "POST",
            body: JSON.stringify(result),
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             }
         })
         .then(response => response.json())
         .then(response => {console.log(response); setRecipeList([...response])})
    }

    const handleChange = (event) => fetchFromUrl(`recipes${event.target.value}`, setRecipeList);
    
    
    
    return (
        <Container>
            <InputLabel htmlFor="age-native-simple">Filtrage</InputLabel>
            <Select native onChange={ handleChange } style = {{ color:  "#f19300" }}>
                <option value="">Toutes les recettes</option>
                <option value="/fridge">Tri avec mon frigo</option>
            </Select>
            <form name="food_list" noValidate autoComplete="off">
                <TextField id="food_list" label="Liste d'ingrédients" variant="outlined" />
                <Button
                 variant="contained"
                 color="primary"
                 className="button_foodlist"
                 onClick={searchList}>enregistrer</Button>
            </form>
        </Container>
    );
};

export default FilterSelect;