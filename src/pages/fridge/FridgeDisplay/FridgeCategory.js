import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import './FridgeDisplay.css';

import ModifiableFood from '../../food/ModifiableFood/ModifiableFood';
import colorList from '../../food/FoodList/color_list.json';

const FridgeCategory = ({ fridgeList, text, counters, setCounters}) => {
    const handlePlus = (idx) => {
        if(counters[idx].val < counters[idx].max) {
            const newCounters = {...counters};
            newCounters[idx].val += 1;
            setCounters(newCounters);
        }
    };

    const handleMinus = (idx) => {
        if(counters[idx].val !== 0) {
            const newCounters = {...counters};
            newCounters[idx].val -= 1;
            setCounters(newCounters);
        }
    };

    return fridgeList.length ? ( <>
        <Typography className='fridge-main-compo__label' variant='h4' style={{marginBottom:15, marginTop:5}}>
            { text }
        </Typography>
        <Grid container justify='center'
            alignItems='center'>
            {   // TODO -> improve those nested loops
                fridgeList.map(food => {
                    const { name, products } = food;
                    const restructuredFood = products.map(product => { return {name, ...product} });
                    return restructuredFood.flat();
                }).map((food_, idx_) => {
                    return food_.map(f => {
                        const { id, name, insertionDate, quantity } = f;
                        return (
                            <Grid key={ idx_ } item >
                                <ModifiableFood
                                    foodAttributes={{ word: name, color: colorList[name] }}
                                    data={{ "Date d'ajout": insertionDate, "Quantité": quantity }}
                                    counterProps = {{ handlePlus, handleMinus, counters, idx: id }}
                                />
                            </Grid>); 
                    })
                })
            }
        </Grid>
    </>) : <></>;

};

export default FridgeCategory;