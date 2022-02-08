import React, { useEffect, useState } from 'react';
import { Typography, Tabs, Tab, Grid, AppBar } from '@material-ui/core';
import RecipeList from '../RecipeList/RecipeList';
import axios from 'axios';
import {TabPanel, a11yProps} from '../../../components/TabPanel/TabPanel';


const RecipeUser = () => {
    const[recipesUser, setRecipesUser] = useState([]);
    const[recipesPredict, setRecipesPredict] = useState([]);
    const[recipesWoScore, setWoScore] = useState([]);
    const user = "1";
    useEffect(() => {

        axios.get(`http://localhost:8080/users/${user}`)
        .then((response) =>{
            setRecipesUser(response.data);          
        })


        axios.get('http://localhost:8080/users/knn')
        .then((response)=> {
         setRecipesPredict(response.data);
        })

      }, [setRecipesUser, setRecipesPredict]);
    

    useEffect(() => {
      makeRecipesWoScore()
    }, [setWoScore, recipesUser])

    const makeRecipesWoScore = () => {
      setWoScore(recipesUser.flatMap(recipe => recipe.recipe));
      console.log(recipesWoScore);
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const makeBold = (letter) => {
      switch (value) {
        case 0:
          switch (letter) {
            case "a":
              return { fontWeight: 'bold' }
            case "b":
              return {}
            default:
              return {}
          }

        case 1:
          switch (letter) {
            case "b":
              return { fontWeight: 'bold' }
            case "a":
              return {}
            default:
              return {}
          }
        default:
          return null
      }
  }


    return (
        <Grid className={'oui'}>
            <Typography variant="h2" className='recipe__title'> Mes recettes </Typography><br></br>
            <AppBar id='AppBar' position="static" elevation={0} color='transparent'>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="simple tabs example" 
                    centered 
                    TabIndicatorProps={{
                        style: {
                        backgroundColor: "#06c106"
                    }}}
                >
                    <Tab className='recipes__scored__title' label={"Recettes scorées"}  {...a11yProps(0)} style={{ fontSize: 16 } && makeBold("a")}/>
                    <Tab className='recipes__predict__title' label={"Recettes Proposées"} style={{ fontSize: 16 } && makeBold("b")}  {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <Typography component='div' style={{ backgroundColor: 'white', minHeight: '80vh' }} >
                <TabPanel className=''value={value} index={0} >
                    <RecipeList className='recipes__scored__title' aRecipeList={ recipesWoScore }></RecipeList>
                </TabPanel>
                <TabPanel className='recipes__predict__title' value={value} index={1}>
                    <RecipeList aRecipeList={ recipesPredict }></RecipeList>
                </TabPanel>
            </Typography>
        </Grid>
    );

}


export default RecipeUser;