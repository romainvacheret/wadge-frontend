import React from 'react';
import ReactDom from 'react-dom';
import RecipeList from './RecipeList';

it('Renders without crashing', () => {
    const recipeList = document.createElement("RecipeList");
    ReactDom.render(<RecipeList/>, recipeList);
})