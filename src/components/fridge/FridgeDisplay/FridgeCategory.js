import React from 'react';

import { Typography, Grid } from '@material-ui/core';

import './FridgeDisplay.css';

import FoodCard from '../../food/FoodCard/FoodCard';

import colorList from '../../food/FoodList/color_list.json';

const FridgeCategory = ({ fridgeList, text}) => {
    return fridgeList.length ? ( <>
        <Typography className='fridge-main-compo__label' variant='h4'>
            { text }
        </Typography>
        <Grid container justify='center'
            alignItems='center'>
            {
                fridgeList.map(food => {
                    const { name, products } = food;
                    const restructuredFood = products.map(product => { return {name, ...product} })
                    return restructuredFood.flat();
                }).map((food_, idx_) => {
                    const { name, insertionDate, quantity } = food_[0];
                    return (
                        <Grid key={ idx_ } item >
                            <FoodCard foodAttributes={{ word: name, color: colorList[name] }} data={{ "Date d'ajout": insertionDate, "Quantité": quantity }}/>
                        </Grid>); 
                })
            }
        </Grid>
    </>) : <></>;
};

export default FridgeCategory;