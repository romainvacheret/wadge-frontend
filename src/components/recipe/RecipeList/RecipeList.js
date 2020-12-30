import React, { useState, useEffect } from 'react';

import './RecipeList.css';

import { fetchFromUrl } from 'utils'; 

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);

    return (
        <>
            <h3 className='recipe-liste__title'> Liste des recettes </h3>
            <ul> {
            recipeList.map(({ steps, ingredients, name, servings, difficulty}, idx) => 
                <div key={ idx }> { 
                    <>
                        <ul>
                            <li>{ name }</li>
                            <li>{ `Recette pour : ${ servings } personnes` }</li>
                            <li>{ `Difficulte : ${ difficulty }/4` }</li>
                            <li>
                                <ul>
                                    <h4>Etapes</h4>
                                    {steps.map((step, idx_) => <li key={ idx_ }> { step } </li>)}
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <h4>Ingredients</h4>
                                    { ingredients.map((ingredient, idx__) =>{
                                        let quantity = ingredient.quantity;
                                        return (<li key={ idx__ }> {ingredient.name} { quantity !== -1 ? (' : ' + ingredient.quantity) : ''} </li>)
                                    })}
                                    
                                </ul>
                            </li>
                        </ul>
                        <br></br>
                    </>
                } </div> 
                )
            } </ul>
        </>
    );
}

export default RecipeList;
