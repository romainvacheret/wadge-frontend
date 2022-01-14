import React, { useEffect, useState } from 'react';
import './ShoppingList.css';

import {
    Button,
    Checkbox,
    Grid,
    List,
    ListItem, ListItemIcon,
    Paper,
    Typography
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios'

const GreenCheckbox = withStyles({
    root: {
        color: 'limegreen',
        '&$checked': {
            color: 'limegreen',
        },
    },
    checked: {},
})((props) => <Checkbox className="xD" color="default" {...props} />);

const ShoppingList = () => {
    const [ingredients, setIngredients] = useState([]);

    const handleChange = (idx) => {
        let x = [...ingredients];
        x[idx]['selected'] = !x[idx]['selected'];
        setIngredients(x);
    };

    const handleClick = () => {
        const result = ingredients.filter(element => element.selected).map(element => element.name);
        axios.delete('http://localhost:8080/shopping_list', {data: result})
            .then(response => setIngredients([...response.data.map(element => {return {...element, selected: false}})]));   
    }

    useEffect(() => axios.get('http://localhost:8080/shopping_list')
        .then(response => setIngredients([...response.data.map(element => {return {...element, selected: false}})]))
    , []);

    return (
        <>
        <Typography variant="h3" className='shopping-list__title' >Liste des courses</Typography>
            <Grid container direction={"column"}>
                
                <Paper className='shopping-list__paper'>
                    <List className="truc" name="truc">
                        { ingredients.map((ingredient, idx) =>
                            <ListItem key={ idx } name="shopping-item" results={ Math.ceil(ingredient.quantity) }>
                                <ListItemIcon>
                                    <GreenCheckbox
                                        checked={ingredient['selected']}
                                        onChange={ () => handleChange(idx) }
                                    />
                                    {ingredient.name} { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}
                                </ListItemIcon>
                            </ListItem> )
                        }
                    </List>
                </Paper>
                <Button
                    onClick={ handleClick }>
                    Sauvegarder les modifications
                </Button>
            </Grid>
        </>
    );
}

export default ShoppingList;