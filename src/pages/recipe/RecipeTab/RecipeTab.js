import React, { useEffect, useState } from 'react';
import { Typography, Tabs, Tab, Box, Grid, AppBar } from '@material-ui/core';
import PropTypes from 'prop-types';
import RecipeList from '../RecipeList/RecipeList';
import axios from 'axios';


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

    function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
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
          default:
            return {}
        }

      case 1:
        switch (letter) {
          case "b":
            return { fontWeight: 'bold' }
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
            <AppBar position="static" elevation={0} color='transparent'>
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
                    <Tab label={"Toutes les Recettes"}  {...a11yProps(0)} style={{ fontSize: 16 } && makeBold("a")}/>
                    <Tab label={"Recettes Favorites"} style={{ fontSize: 16 } && makeBold("b")}  {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <Typography component='div' style={{ backgroundColor: 'white', minHeight: '80vh' }} >
                <TabPanel value={value} index={0} >
                    <RecipeList aRecipeList={ all }></RecipeList>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RecipeList aRecipeList={ favorite }></RecipeList>
                </TabPanel>
            </Typography>
        </Grid>
    );

}


export default RecipeTab;