import React, { useState } from 'react';

import { Grid, Typography, FormControlLabel, Switch, GridList, GridListTile } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import colorList from './color_list.json';
import './FoodList.css';

import FoodCard from "../FoodCard/FoodCard";
import FruitsAndVegetables from '../FruitsAndVegetables/FruitsAndVegetables';
import Filter from './Filter';
import SearchBar from '../../SearchBar/SearchBar';

const CustomSwitch = withStyles({
  switchBase: {
    color: 'limegreen',
    '&$checked': {
      color: '#f19300',
    },
    '&$checked + $track': {
      backgroundColor: '#f19300',
    },
  },
  checked: {},
  track: {},
})(Switch);

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [tabNumber, setTabNumber] = useState(new Date().getMonth());
    const [searchFood, setSearchFood] = useState('');
    const [byDays, setByDays] = useState(false);

    const vegetables = [];
    const fruits = [];

    const sortFood = () => {
        foodList.forEach(({ name, type, days }, idx) => {
            if(searchFood.length > 0 && name.indexOf(searchFood) === -1) {
                return;
            }
            const element = (
                <Grid item className='foodlist__food-card' key={ idx } >
                    <FoodCard foodAttributes={{ word: name, color: colorList[name] }} data= {{ 'Conservation': `${days} jours` }}/>
                </Grid>
            );
            type === 'fruit' ? fruits.push(element): vegetables.push(element);
        })
    };
    sortFood();

    const handleChange = (event) => setSearchFood(event.target.value);
    const handleSwitch = () => setByDays(!byDays);

    return (
        <>
            <Typography variant="h3" gutterBottom className="foodlist__title">
                Liste des fruits et légumes
            </Typography>
                <Grid item className="foodlist__searchBar">
                    <SearchBar searchFood={ searchFood } handleChange={ handleChange } />
                </Grid>
                <Grid item className="foodlist__switch">
                    <FormControlLabel 
                        control={
                            <CustomSwitch 
                                checked={byDays}
                                onChange={handleSwitch}
                            />
                        }
                        label={ <Typography variant="h5" style= {{ color: 'limegreen' }}>Trier par jours </Typography>}
                    />
                </Grid>
            <Filter tabNumber = { tabNumber } byDays={ byDays } setTabNumber={ setTabNumber } setFoodList={ setFoodList }/>
            <FruitsAndVegetables fruits={ fruits } vegetables={ vegetables }/>
        </>
    );}

    export default FoodList;