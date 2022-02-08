import React, {useEffect,useRef, useState} from 'react';
import './RecipeCard.css';
import {Grid, Typography,Button,Accordion,AccordionSummary,AccordionDetails,IconButton,Tooltip} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from "react-router-dom";
import axios from "axios";


const RecipeCard = ({ recipe }) => {
    const { steps, ingredients, name, servings, difficulty, rating, preparation } = recipe;
    const [liste, setListe] = useState(new Map());
    const [favorites,setFavorites]=useState([]);
    const [favoriIcon,setFavoriIcon]=useState(false); 
    
    useEffect(() => {
        axios.post('http://localhost:8080/recipes/ingredient', recipe)
            .then((response) =>{
                const food = response.data;
                setListe(new Map(Object.entries(food)));
            })
    }, [recipe]);
    let isRendered = useRef(false);

    useEffect(() => {
        isRendered = true;
        axios.get('http://localhost:8080/recipes/tagged/FAVORITE')
        .then((response) =>{
            if (isRendered) {
                const favoritesList = response.data;
            let is=false;
            setFavorites([...favoritesList]);
           favorites.forEach(f=>{
               if(f.link===recipe.link)
                  is=true;
           });
           setFavoriIcon(is);
            }           
        })
         .catch(err => console.log(err));
           return () => {
                isRendered = false;
          };
        });
      // TODO -> ALED les favorites
      const handleAddFavorite=()=>{   
      if(favoriIcon) {
          axios.delete(`http://localhost:8080/recipes/${recipe.id}/tagged/FAVORITE`)
              .then((response) =>{
                  const favoritesList = response.data;
                  setFavorites([...favoritesList]);
              });
      }
      else {
          axios.post(`http://localhost:8080/recipes/${recipe.id}/tagged/FAVORITE`);
      }
        setFavoriIcon(!favoriIcon);
  }
    const colorTypo = (param, ingredient ) => {
        switch(param){
            case "present":
                return <Typography variant="h5" className="recipe__present__ingredient">{ ingredient.name } { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}</Typography>
            case "partiellement":
                return <Typography variant="h5" className="recipe__partiellement__ingredient">{ ingredient.name } { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}</Typography>
            case "absent":
                return <Typography variant="h5" className="recipe__absent__ingredient">{ ingredient.name } { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}</Typography>
            default:
                return <Typography variant="h5">{ ingredient.name } { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}</Typography>
        }
    }

    return (
      
        <Accordion data-testid='recipe-card__accordion'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon fontSize="large"/>}
                aria-controls="panel1a-content"
                id="panel1a-header" >
                    {favoriIcon === true?<FavoriteIcon className='recipe__recipe-card__favorite' style={{ color: "#f19300" }} fontSize="large"/>:<FavoriteBorderIcon className='recipe__recipe-card__favorite' style={{ color: "limegreen" }} fontSize="large"/>}
                &nbsp;&nbsp;
                    <Typography variant="h4" className="recipe__name" >{ name }</Typography>

            </AccordionSummary>
            <AccordionDetails>
                <Grid container>
                <Grid xs="3">
                    <Typography variant="h5">{ `Recette pour : ${ servings } personnes` }</Typography>
                    <Typography variant="h5">{ `Difficulté : ${ difficulty }/4` }</Typography>
                    <Typography variant="h5">{ `Note : ${ rating }/5` }</Typography>
                    <Typography variant="h5">{ `Préparation : ${ preparation } mins` }</Typography>
                    <Tooltip title="Accéder à la recette">
                        <Link to={{
                            pathname: '/recipes/step',
                            state: { recipe: recipe }
                        }}>
                            <IconButton
                                aria-label="recipe-access">
                                <MenuBookIcon fontSize="large"/>
                            </IconButton>
                        </Link>
                    </Tooltip>
                    <Tooltip title="Ajouter aux favoris" onClick={handleAddFavorite}>
                        <IconButton className="recipe__recipe-card__favorite" color="primary" aria-label="add-to-favorite" >
                            {favoriIcon === true?<FavoriteIcon style={{ color: "#f19300" }} fontSize="large"/>:<FavoriteBorderIcon style={{ color: "limegreen" }} fontSize="large"/>}
                        </IconButton >
                    </Tooltip>
                </Grid>
                <Grid xs="7">
                    <ul>
                        <Typography variant="h4" className="recipe__recipe-card__step">Etapes</Typography>
                        <Typography variant="h5">{ steps.map((step, idx) => <Grid key={ idx }> { step } </Grid>) }</Typography> 
                    </ul>
                </Grid>
                <Grid xs="2">
                    <ul>
                        <Typography variant="h4" className="recipe__recipe-card__ingredient">Ingredients</Typography>
                        { ingredients.map((ingredient, idx) =>
                            <Grid key={ idx }>
                                { colorTypo(liste.get(ingredient.name), ingredient) }
                                <Button
                                    onClick={ () => { console.log(ingredient); axios.post('http://localhost:8080/shopping_list', [{...ingredient}])} }>
                                    Shop
                                </Button>
                            </Grid> )
                        }
                    </ul>
                </Grid>
                </Grid>
            </AccordionDetails>           
        </Accordion>               
    );
};

export default RecipeCard;