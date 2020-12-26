import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';

import colorList from './color_list.json';
import './FoodList.css';

import FoodCard from "../FoodCard/FoodCard";
import FruitsAndVegetables from '../FruitsAndVegetables/FruitsAndVegetables';
import Filter from './Filter';

const FoodList = () => {
    const [foodList, setFoodList] = useState([]);
    const [stateOnglet, setStateOnglet] = useState();

    const vegetables = [];
    const fruits = [];

    const sortFood = () => {
        foodList.forEach(({ name, type, days }, idx) => {
            const element = (
                <Grid item className='foodlist__food-card' key={ idx } >
                    <FoodCard foodAttributes={{ word: name, color: colorList[name] }} data= {{ 'Conservation': `${days} jours` }}/>
                </Grid>
            );
            type === 'fruit' ? fruits.push(element): vegetables.push(element);
        })
    };
    sortFood();

    return (
        <>
            <Typography variant="h3" gutterBottom className="foodlist__title">
                Liste des fruits et légumes
            </Typography>
            <Filter stateOnglet = { stateOnglet }setStateOnglet={ setStateOnglet } setFoodList={ setFoodList }/>
            <FruitsAndVegetables fruits={ fruits } vegetables={ vegetables }/>
        </>
    );}

    export default FoodList;