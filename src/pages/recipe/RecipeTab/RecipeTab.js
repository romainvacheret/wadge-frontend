import React, { useEffect, useState } from 'react';
import { Typography, Tabs, Tab, Grid, AppBar } from '@material-ui/core';
import RecipeList from '../RecipeList/RecipeList';
import axios from 'axios';
import {TabPanel, a11yProps} from '../../../components/TabPanel/TabPanel';

const RecipeTab = () => {
    const[favorite, setFavorite] = useState([]);
    const[all, setAll] = useState([]);


    useEffect(() => {

      axios.get('http://localhost:8080/recipes')
        .then((response) =>{
          setAll(response.data);
      })

      axios.get('http://localhost:8080/recipes/tagged/FAVORITE')
        .then((response)=> {
          setFavorite(response.data);
      })
    }, [setAll, setFavorite]);

    

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
            <Typography variant="h2" className='recipe__title'> Liste des recettes </Typography><br></br>
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
                    <Tab className='recipes__all__title' label={"Toutes les Recettes"}  {...a11yProps(0)} style={{ fontSize: 16 } && makeBold("a")}/>
                    <Tab className='recipes__favorite__title' label={"Recettes Favorites"} style={{ fontSize: 16 } && makeBold("b")}  {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <Typography component='div' style={{ backgroundColor: 'white', minHeight: '80vh' }} >
                <TabPanel className='recipes__all__title' value={value} index={0} >
                    <RecipeList aRecipeList={ all }></RecipeList>
                </TabPanel>
                <TabPanel className='recipes__favorite__title' value={value} index={1}>
                    <RecipeList aRecipeList={ favorite }></RecipeList>
                </TabPanel>
            </Typography>
        </Grid>
    );

}


export default RecipeTab;