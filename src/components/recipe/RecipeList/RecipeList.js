import React, { useState, useEffect } from 'react';

import { fetchFromUrl } from 'utils'; 

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => {
        fetchFromUrl('recipes', setRecipeList);
    }, []);
    
    return (
        <>
            <h3 className='Title'> Liste des recettes </h3>
            <ul> {
            recipeList.map(({ etapes, ingredients, nom, personnes, difficulte}, idx) => 
                <div className="List" key={ idx }> { 
                    <>
                        <ul>
                            <li>{ nom }</li>
                            <li>{ `Recette pour : ${ personnes } personnes` }</li>
                            <li>{ `Difficulte : ${ difficulte }/4` }</li>
                            <li>
                                <ul>
                                    <h4>Etapes</h4>
                                    {etapes.map((etape, idx_) => <li key={ idx_ }> { etape } </li>)}
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <h4>Ingredients</h4>
                                    { ingredients.map((ingredient, idx__) =>{
                                        let quantity = ingredient.quantite;
                                        return (<li key={ idx__ }> {ingredient.nom} { quantity !== -1 ? (' : ' + ingredient.quantite) : ''} </li>)
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
