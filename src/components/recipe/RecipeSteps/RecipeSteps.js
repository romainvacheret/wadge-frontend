import React from 'react';

import './RecipeSteps.css';

import { Link } from "react-router-dom";

import {
    Button, Checkbox,
    Grid,
    List,
    ListItem, ListItemIcon,
    Paper,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const GreenCheckbox = withStyles({
    root: {
        color: 'limegreen',
        '&$checked': {
            color: 'limegreen',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const GreenButton = withStyles({
    root: {
        background: 'limegreen',
    '&:hover': {
        background: '#f19300'
    },
}
})(Button);

const DarkButton = withStyles({
    root: {
        color: 'limegreen',
        background: '#282c34',
    '&:hover': {
        background: '#282c34',
        color: '#f19300'
    },
}
})(Button);

const CustomStepper = withStyles({
    circle: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'limegreen',
        color: 'orange'
    }
})(Stepper);

const RecipeSteps = ( props ) => {
    const recipe = props.location.state.recipe;
    const {steps, ingredients, name, servings, difficulty} = recipe;
    const nbStep = steps.length;
    const [checked, setChecked] = React.useState(Array.from({length: ingredients.length}, (v, n) => false));
    let msg = "";

    const handleChange = (idx) => {
        let x = [...checked];
        x[idx] = !x[idx];
        setChecked(x);
    };

    const getSteps = ()=> {
        const s = [];
        for (let j = 0; j < nbStep; j++) {
            s.push("Etape " + (j + 1));
        }
        return s;
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const allSteps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleClick = () => {
        const toto = checked.map( ( v,idx ) => {
            if(v){
                const ingredient = ingredients[idx];
            return [ingredient.name, Math.ceil(ingredient.quantity)];
            }else{
                return null;
            }
        }).filter(c => c !== null);
        msg = `N'oubliez pas de retirer ces aliments du frigo : \n ${toto.map(t => `\n ${t[0]} ${t[1] !== -1 ? `= ${t[1]}` : ""} `)}`
        return msg;
    };

    return (

        <Grid>
            <Typography variant="h3" className="recipe__name">{ name }</Typography>
            <Grid container>
                <Grid item xs={2} >
                    <Typography variant="h4" style= {{ color: '#f19300' }}>{ `Recette pour : ${ servings } personnes` }</Typography>
                    <Typography variant="h4" style= {{ color: '#f19300' }}>{ `Difficulté : ${ difficulty }/4` }</Typography>
                    <Grid item xs={3}>
                        <Button
                            variant="contained"
                            disabled={ activeStep === 0 }
                            onClick={ handleBack }
                        >
                            Retour à l'étape précédente
                        </Button>
                    </Grid>
                    <Grid item xs={3} >
                        <GreenButton
                            variant="contained"
                            onClick={ handleNext }
                            disabled={ activeStep === allSteps.length }
                        >
                            { activeStep === allSteps.length - 1 ? 'Terminer la recette' : 'Etape suivante' }
                        </GreenButton>
                    </Grid>
                    <Grid item>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} >
                                <Typography variant="h4" style= {{ color: 'limegreen' }}>La recette est terminée</Typography>
                                <Link onClick={ handleClick }
                                to={{
                                    pathname: '/fridge',
                                    state: { msg1 : handleClick() }
                                }}>
                                    <DarkButton
                                        variant="contained"
                                        
                                        >
                                        Retourner vers le frigo
                                    </DarkButton>
                                </Link>
                            </Paper>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                <CustomStepper activeStep={activeStep} orientation="vertical">
                    {allSteps.map((label, index) => (
                        <Step key={ label }>
                            <StepLabel className="recipe__recipe-step__step"><Typography variant="h5" style= {{ color: '#f19300' }}>{ label } </Typography></StepLabel>
                            <StepContent>
                                <Grid container>
                                    <Grid item>
                                        <Typography variant="h5">{ steps[index] }</Typography>
                                    </Grid>
                                </Grid>
                            </StepContent>
                        </Step>
                    ))}
                </CustomStepper>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h4">Liste des ingrédients</Typography>
                    <Paper>
                        <List className="truc" name="truc">
                            { ingredients.map((ingredient, idx) =>
                                <ListItem key={ idx } name="ingredient" results={ Math.ceil(ingredient.quantity) }>
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
            </Grid>
        </Grid>
    );
}

export default RecipeSteps;