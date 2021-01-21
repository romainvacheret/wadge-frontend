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
            {   // TODO -> improve those nested loops
                fridgeList.map(food => {
                    const { name, products } = food;
                    const restructuredFood = products.map(product => { return {name, ...product} });
                    const x = restructuredFood.flat();
                    return x;
                }).map((food_, idx_) => {
                    return food_.map(f => {
                        const { name, insertionDate, quantity } = f;
                    return (
                        <Grid key={ idx_ } item >
                            <FoodCard foodAttributes={{ word: name, color: colorList[name] }} data={{ "Date d'ajout": insertionDate, "Quantité": quantity }}/>
                        </Grid>); 
                    })
                    
                })
            }
        </Grid>
    </>) : <></>;
};

export default FridgeCategory;