import React, { useState, useEffect } from 'react';

const RecipeList = () => {
    const [recipeList, setRecipeList] = useState([]);

    useEffect(() => fetch("http://localhost:8080/recipes", {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => setRecipeList([...response])), 
    []);
    
    return (
        <>
            <h3 className='Title'> Liste des recettes </h3>
            <ul> {
            recipeList.map(({ etapes, ingredients, nom, personnes, difficulte}, idx) => 
                
                    <div className="List"key={idx}> { 
                        <>
                            <ul>
                                <li>{ nom }</li>
                                <li>{ `Recette pour : ${ personnes } personnes` }</li>
                                <li>{ `Difficulte : ${ difficulte }/4` }</li>
                                <li>
                                    <ul>
                                        <h4>Etapes</h4>
                                        {etapes.map(etape => <li> { etape } </li>)}
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <h4>Ingredients</h4>
                                        { ingredients.map(ingredient =>{
                                            let quantity = ingredient.quantite;
                                            return (<li> {ingredient.nom} { quantity != -1 ? (' : ' + ingredient.quantite) : ''} </li>)
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
