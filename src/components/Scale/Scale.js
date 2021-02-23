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

const Scale = () => {
    const [foodList, setFoodList] = useState([]);
    const [food, setfood] = useState("");
    useEffect(() => { fetchFromUrl('foods', setFoodList);}, []);

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
                <Input
                    className="scale__converter__element"
                    type="number"
                    defaultValue="100"
                    helperText="grammes"
                    endAdornment={<InputAdornment position="end">g</InputAdornment>}
                />
                <DragHandleIcon fontSize="large"/>
                <Input
                    className="scale__converter__element"
                    type="number"
                    defaultValue=""
                    label="unités"
                    helperText="unités" />
            </form>
        </>
    );
}

export default Scale;