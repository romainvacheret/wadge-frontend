import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';

import colorList from './color_list.json';
import './FoodList.css';

import FoodCard from "../FoodCard/FoodCard";
import FruitsAndVegetables from '../FruitsAndVegetables/FruitsAndVegetables';
import Filter from './Filter';
import SearchBar from '../../SearchBar/SearchBar';

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [tabNumber, setTabNumber] = useState(new Date().getMonth());
    const [searchFood, setSearchFood] = useState('');

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
    return (
        <>

            <Typography variant="h3" gutterBottom className="foodlist__title">
                Liste des fruits et légumes
            </Typography>
            <>
            <Grid container item xs={12} spacing={4}>
            <SearchBar searchFood={ searchFood } handleChange={ handleChange } />
             </Grid>
             </>
            
            <Filter tabNumber = { tabNumber }setTabNumber={ setTabNumber } setFoodList={ setFoodList }/>
             <FruitsAndVegetables fruits={ fruits } vegetables={ vegetables }/>
        </>
    );}

    export default FoodList;