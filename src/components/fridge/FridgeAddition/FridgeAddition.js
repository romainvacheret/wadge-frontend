import React, { useState, useEffect } from 'react';

import { Grid, Button, Typography, withStyles } from '@material-ui/core';

import axios from 'axios'

import ModifiableFood from '../../food/ModifiableFood/ModifiableFood';
import colorList from '../../food/FoodList/color_list.json';
import FruitsAndVegetables from '../../food/FruitsAndVegetables/FruitsAndVegetables';
import SearchBar from '../../SearchBar/SearchBar';

import { fetchFromUrl } from 'utils'; 

import './FridgeAddition.css';

const FridgeAddition = () => {
    const [searchFood, setSearchFood] = useState('');
    const [foodList, setFoodList] = useState([]);
    const [counters, setCounters] = useState( Array.from({ length: Object.keys(colorList).length}, (v, n) => { return { val: 0 } }));

    useEffect(() => {
        fetchFromUrl('foods', setFoodList);
    }, []);

    const handleChange = (event) => setSearchFood(event.target.value);

    const handlePlus = (idx) => {
		const newArray = [...counters];
		newArray[idx].val += 1;
		setCounters(newArray);
	};

    const handleMinus = (idx) => {
		if(counters[idx].val !== 0){
			const newArray = [...counters];
			newArray[idx].val -= 1;
			setCounters(newArray);
		}
	};

    const addFoodToFridge = () => {
        const result = []
        counters.forEach((counter, idx) => {
            if(counter.val !== 0) {
                const date = new Date()
                const currentDate = new Date().toLocaleDateString()
                const { name, days } = foodList[idx];
                date.setDate(date.getDate() + parseInt(days));
                const quantity = counters[idx].val;
                const info = { 
                    name, 
                    products: [{
                        insertionDate: currentDate,
                        peremptionDate: date.toLocaleDateString(), 
                        quantity
                    }]
                };
                result.push(info);
            }
        });

        axios.post('http://localhost:8080/fridge/addition', result);
    }

    const vegetables = [];
    const fruits = [];
    
    const sortFood = () => {
        foodList.forEach(({ name, type, days }, idx) => {
            if(searchFood.length > 0 && name.indexOf(searchFood) === -1) {
                return;
            }
        
            const element = (
                <Grid item className='fridge-addition__food-card' key={ idx }>
                    <ModifiableFood
                        foodAttributes={{ word: name, color: colorList[name] }}
                        data = {{ Consommation: `sous ${days} jours` }}
                        counterProps = {{ handlePlus, handleMinus, counters, idx }}
                    />
                </Grid>
            );
            type === 'fruit' ? fruits.push(element) : vegetables.push(element);
        })
    };
    sortFood();
    
    const CustomButton = withStyles({
        root: {
            background: 'limegreen',
        '&:hover': {
            background: '#f19300',
        },
    }
    })(Button);

    return (
        <Grid container direction='column'>
            <Typography variant="h3" className="fridge-addition__title">
                Liste des fruits et légumes à ajouter
            </Typography> 
            
            <SearchBar searchFood={ searchFood } handleChange={ handleChange }/>
          
            <FruitsAndVegetables fruits={ fruits } vegetables={ vegetables }/>
            <CustomButton 
                onClick={ addFoodToFridge }
                variant='contained' 
                className="fridge-addition__button"
                href="/fridge"
            >
                Enregistrer
            </CustomButton>
        </Grid>
    );
}

export default FridgeAddition;