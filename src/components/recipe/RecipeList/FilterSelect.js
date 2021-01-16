import React from 'react';
import { Container, Select, InputLabel } from '@material-ui/core';
import { fetchFromUrl } from 'utils';


const FilterSelect = ({ setRecipeList }) => {
    const handleChange = (event) => fetchFromUrl(`recipes${event.target.value}`, setRecipeList);
    
    return (
        <Container>
            <InputLabel htmlFor="age-native-simple">Filtrage</InputLabel>
            <Select native onChange={ handleChange } style = {{ color:  "#f19300" }}>
                <option value="">Toutes les recettes</option>
                <option value="/fridge">Tri avec mon frigo</option>
            </Select>
        </Container>
    );
};

export default FilterSelect;