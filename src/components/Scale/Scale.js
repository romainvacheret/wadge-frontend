import React, {useEffect, useState} from 'react';

import './Scale.css';
import {
    FormControl,
    Grid,
    Icon,
    Input,
    InputAdornment,
    InputLabel, MenuItem,
    Select,
    TextField,
    Typography
} from "@material-ui/core";
import DragHandleIcon from '@material-ui/icons/DragHandle';
import {fetchFromUrl} from "../../utils";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios";

const Scale = () => {
    const [foodList, setFoodList] = useState([]);
    const [food, setfood] = useState("");
    const [unit, setUnit] = useState();
    const [gramme, setGramme] = useState();
    useEffect(() => { fetchFromUrl('foods', setFoodList);}, []);

    const Conversion = () => {
        let type;
        let quantity;
        const u = document.getElementById("u_to_g").value;
        const g = document.getElementById("g_to_u").value;
        console.log("champ droit:"+u)
        console.log("champ gauche:"+g)
        if(document.getElementById("g_to_u").value!=="0") {
            type = "G_TO_UNIT"
            quantity = document.getElementById("g_to_u").value
        } else {
            type = "UNIT_TO_G"
            quantity = document.getElementById("u_to_g").value
        }

        const obj = { quantity: quantity, type: type, food: food.name}
        console.log(obj)
        axios.post('http://localhost:8080/foods/scale', obj)
            .then((response) =>{
                if(type==="G_TO_UNIT") setUnit(response.data)
                else setGramme(response.data+" grammes")
                console.log(response.data)
            })
    }

    return(
        <>
            <Typography variant="h3" gutterBottom className="scale__title" font-family= "cursive">
                Conversion gramme/unité
            </Typography>
            <FormControl className="scale__converter">
                <Autocomplete
                    id="scale__selector"
                    options={foodList}
                    getOptionLabel={(food) => food.name}
                    onChange={(event, food) => {
                        setfood(food);
                    }}
                    renderInput={(params) => <TextField {...params} label="Fruit/Légume" variant="outlined" />}
                />
                {console.log(food.weight)}
            </FormControl>
            <form className="scale__converter" noValidate autoComplete="off">
                <Input id="g_to_u"
                    className="scale__converter__element"
                    type="number"
                    defaultValue="0"
                    helperText="grammes"
                    endAdornment={<InputAdornment position="end">g</InputAdornment>}
                />
                <DragHandleIcon fontSize="large"/> <Typography>{ unit }</Typography>
                <Input id="u_to_g"
                    className="scale__converter__element"
                    type="number"
                    defaultValue="0"
                    label="unités"
                    helperText="unités"
                    endAdornment={<InputAdornment position="end">unités</InputAdornment>}
                /> <DragHandleIcon fontSize="large"/> <Typography>{ gramme }</Typography>

            </form>
            <button onClick={ Conversion }>Convertir</button>
        </>
    );
}

export default Scale;