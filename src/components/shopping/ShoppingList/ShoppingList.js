import React, { useEffect, useState } from 'react';

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
})((props) => <Checkbox color="default" {...props} />);

const ShoppingList = () => {
    const [ingredients, setIngredients] = useState([]);

    const handleChange = (idx) => {
        let x = [...ingredients];
        x[idx]['selected'] = !x[idx]['selected'];
        setIngredients(x);
        console.log("SE", ingredients);
    };

    const handleClick = () => {
        const result = ingredients.filter(element => element.selected).map(element => element.name);
        console.log('Res', result);
        axios.delete('http://localhost:8080/shopping_list', {data: result})
            .then(response => setIngredients([...response.data]));
        // console.log(ingredients.filter(element => element.selected).map(element => element.name))
    }

    useEffect(() => axios.get('http://localhost:8080/shopping_list')
        .then(response => setIngredients([...response.data.map(element => {return {...element, selected: false}})]))
    , []);

    return (
        <>
            <Grid item xs={2}>
                <Typography variant="h4">Liste des courses</Typography>
                <Paper>
                    <List className="truc" name="truc">
                        { ingredients.map((ingredient, idx) =>
                            <ListItem key={ idx } name="shopping-item" results={ Math.ceil(ingredient.quantity) }>
                                <ListItemIcon>
                                    <GreenCheckbox
                                        
                                        onChange={ () => handleChange(idx) }
                                    />
                                    {ingredient.name} { ingredient.quantity !== '-1' ? (' : ' + ingredient.quantity) : ''}
                                </ListItemIcon>
                            </ListItem> )
                        }
                    </List>
                </Paper>
            </Grid>
            <Button
                onClick={ handleClick }>
                Sauvegarder les modifications
            </Button>
        </>
    );
}

export default ShoppingList;