import React, {useEffect, useState} from 'react';

import {Typography, Grid, Button} from '@material-ui/core';

import './FridgeDisplay.css';

import FoodCard from '../../food/FoodCard/FoodCard';
import ModifiableFood from '../../food/ModifiableFood/ModifiableFood';

import colorList from '../../food/FoodList/color_list.json';
import {fetchFromUrl} from "../../../utils";
import axios from "axios";

const FridgeCategory = ({ fridgeList, text, counters, setCounters}) => {

    // const [foodList, setFoodList] = useState([]);
    // const [counters, setCounters] = useState({});

    // useEffect(() => {
    //     fetchFromUrl('fridge', initializeCounters);
    // }, []);

    // useEffect(() => {initializeCounters()}, [foodList]);

    // const initializeCounters = (fList) => {
    //     const tmp = {}
    //     // console.log('Y', foodList);
    //     fList.forEach(food => {
    //         food.products.forEach(product => {
    //             tmp[product.id] = { val: product.quantity };
    //             console.log(product);
    //         })
    //     });
    //     console('TOTOTOTOT');
    //     console.log('t', tmp);
    //     setCounters(tmp);
    //     setFoodList(fList);
    //     // console.log(counters);
    // }

    const handlePlus = (idx) => {
        if(counters[idx].val < counters[idx].max) {
            const newCounters = {...counters};
            newCounters[idx].val += 1;
            setCounters(newCounters);
        }
    };

    const handleMinus = (idx) => {
        // if(counters[idx].val !== 0){
        //     const newArray = [...counters];
        //     newArray[idx].val -= 1;
        //     setCounters(newArray);
        // }
        if(counters[idx].val !== 0) {
            const newCounters = {...counters};
            newCounters[idx].val -= 1;
            setCounters(newCounters);
        }
    };

    const updateFridge = () => {
        const body = Object.keys(counters).map(id => { return {id, ...counters[id]}})
            .filter(counter => counter.max !== counter.val)
            .map(dict => { return {id: dict.id, quantity: dict.val, fridgeFood: dict.fridgeFood} })
        console.log(body);
        if(body.length) {
            axios.post('http://localhost:8080/fridge/update', body);
        }
    } 

    console.log("frdigeList", fridgeList);
    console.log("cc", counters);
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
                        const { id, name, insertionDate, quantity } = f;
                        console.log("COUMP", counters);
                        console.log('ED', id);
                        return (
                            <Grid key={ idx_ } item >
                                {/* <FoodCard foodAttributes={{ word: name, color: colorList[name] }} data={{ "Date d'ajout": insertionDate, "Quantité": quantity }}/> */}
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
        <Button 
            onClick={ updateFridge }
            variant='contained' 
            color='primary'
            // className="fridge-addition__button"
            href="/fridge"
        >
            Fermer le frigo
        </Button>
    </>) : <></>;

};

export default FridgeCategory;