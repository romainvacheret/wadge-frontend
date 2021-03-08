import React, {useEffect,useRef, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './RecipeCard.css';
import {Grid, Typography,Button,Accordion,AccordionSummary,AccordionDetails,IconButton,Tooltip,Snackbar} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import DoneIcon from '@material-ui/icons/Done';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from "react-router-dom";
import axios from "axios";
import MuiAlert from '@material-ui/lab/Alert';

const RecipeCard = ({ recipe }) => {
    const { steps, ingredients, name, servings, difficulty, rating } = recipe;
    const [liste, setListe] = useState(new Map());
    const [favorites,setFavorites]=useState([]);
    const [open, setOpen] = useState(false);
    const [favoriIcon,setFavoriIcon]=useState(false); 
    const [message,setMessage]=useState('');

    useEffect(() => {
        axios.post('http://localhost:8080/recipes/ingredient', recipe)
            .then((response) =>{
                const food = response.data;
                setListe(new Map(Object.entries(food)));
            })
    }, []);
    let isRendered = useRef(false);
    useEffect(() => {
        isRendered = true;
        axios.get('http://localhost:8080/recipes/favorites')
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
  
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
      }));
      const classes = useStyles();
      const handleAddDone=()=>{   
         axios.post('http://localhost:8080/recipes/addtoDoneRecipe', recipe);
         setMessage('recette ajoutée aux recettes realisées avec succes!');
         setOpen(true);
        }
 
      const handleAddFavorite=()=>{   
      if(favoriIcon===false) {
       axios.post('http://localhost:8080/recipes/addFavorite', recipe);
      }
      if(favoriIcon === true)   {
      axios.post('http://localhost:8080//recipes/removeFavorite', recipe)
      .then((response) =>{
        const favoritesList = response.data;
        setFavorites([...favoritesList]);

     });
    }     
        setFavoriIcon(!favoriIcon);
  }
     const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
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
                 <IconButton color="primary" onClick={handleAddDone}> <DoneIcon /></IconButton>            
                      <IconButton className={classes.root} color="primary" aria-label="ajouter au favories" onClick={handleAddFavorite}>
                      <Typography variant="h4" className="recipe__name"> { name }
                 </Typography> &nbsp;&nbsp;&nbsp;  {favoriIcon === true?<FavoriteIcon />:<FavoriteBorderIcon />}     
                    </IconButton >  
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                      <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success">
                         {message}
                      </MuiAlert>
                    </Snackbar>                  
            </AccordionSummary>
            <AccordionDetails>
                <Grid>
                    <Typography variant="h5">{ `Recette pour : ${ servings } personnes` }</Typography>
                    <Typography variant="h5">{ `Difficulté : ${ difficulty }/4` }</Typography>
                    <Typography variant="h5">{ `Note : ${ rating }/5` }</Typography>
                    <Tooltip title="Accéder à la recette">
                        <Link to={{
                            pathname: '/recipes/step',
                            state: { recipe: recipe }
                        }}>
                            <IconButton
                                aria-label="Accéder à la recette">
                                <MenuBookIcon/>
                            </IconButton>
                        </Link>
                    </Tooltip>
                </Grid>
                <Grid>
                    <ul>
                        <Typography variant="h4" className="recipe__recipe-card__step">Etapes</Typography>
                        { steps.map((step, idx) => <Grid key={ idx }> { step } </Grid>) }
                    </ul>
                </Grid>
                <Grid>
                    <ul>
                        <Typography variant="h4" className="recipe__recipe-card__step">Ingredients</Typography>
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
            </AccordionDetails>           
        </Accordion>               
    );
};

export default RecipeCard;