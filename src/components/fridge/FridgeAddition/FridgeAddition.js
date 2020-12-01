import React, { useState, useEffect } from 'react';
import { Grid, Container, Button, Typography } from '@material-ui/core';
import ModifiableFood from '../../food/ModifiableFood/ModifiableFood';
import colorList from '../../food/FoodList/color_list.json';
import FruitsAndVegetables from '../../food/FruitsAndVegetables/FruitsAndVegetables';

import './FridgeAddition.css';

import axios from 'axios'
import { fetchFromUrl } from 'utils'; 

const FridgeAddition = () => {
    const [searchfood,setSearchFood]=useState('an');
    const handlechange=(e)=>{
        setSearchFood(e.target.value);
    }
    const [foodList, setFoodList] = useState([]);
    const [counters, setCounters] = useState( Array.from({ length: Object.keys(colorList).length}, (v, n) => { return { val: 0 } }));

    

    useEffect(() => {
        fetchFromUrl('food_list', setFoodList);
    }, []);

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
                const { nom, vie } = foodList[idx];
                date.setDate(date.getDate() + parseInt(vie));
                const quantity = counters[idx].val;
                const info = { 
                    nom, 
                    produits: {
                        dateAjout: currentDate,
                        dateLimite: date.toLocaleDateString(), 
                        quantite: quantity
                    }
                };
                result.push(info);
            }
        });
        axios.post('http://localhost:8080/food',result);
    }

    const vegetables = [];
    const fruits = [];
    
    const sortFood = () => {
        foodList.forEach(({ nom, type, vie }, idx) => {
           
            if((nom.indexOf(searchfood)===-1)){
                return
            }
            const element = (
                <Grid item className='food' key={ idx }>
                    <ModifiableFood
                        foodAttributes={{ word: nom, color: colorList[nom] }}
                        data = {{vie}}
                        counterProps = {{ handlePlus, handleMinus, counters, idx }}
                    />
                </Grid>
            );
            type === 'fruit' ? fruits.push(element) : vegetables.push(element);
        })
    };
    sortFood();

    return (
        <>
      
      <div className='col-xs-4'>
        <div className='form-group has-success"' >
        <div className="input-group">
         <input type='text' value={searchfood} className='form-control' onChange={handlechange} placeholder='Recherche par nom' aria-describedby="inputSuccess2Status"/>
         </div>
         </div>
         </div>
   
        <Typography variant="h3" className="label">
            Liste des fruits et légumes à ajouter
        </Typography> 
        <FruitsAndVegetables fruits={ fruits } vegetables={ vegetables }/>
        <Button 
            onClick={ addFoodToFridge }
            variant='contained' 
            color='primary'
            className="bouton"
            href="/fridge"
        >
            Enregistrer
        </Button>
        </>
    );
}

export default FridgeAddition;