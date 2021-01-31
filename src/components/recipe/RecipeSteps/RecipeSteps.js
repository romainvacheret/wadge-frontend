import React from 'react';

import './RecipeSteps.css';

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
import axios from "axios";

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
    const [checked, setChecked] = React.useState([]);
    const [list, setList] = React.useState([]);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setList(list.concat(document.getElementById("ingredient").value));

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

    const handleFridge = () => {
        
    }

    return (

        <Grid>
            <Typography variant="h3" className="recipe__name">{ name }</Typography>
            <Grid container>
                <Grid item xs={2} >
                    <Typography variant="h4" style= {{ color: '#f19300' }}>{ `Recette pour : ${ servings } personnes` }</Typography>
                    <Typography variant="h4" style= {{ color: '#f19300' }}>{ `Difficulté : ${ difficulty }/5` }</Typography>
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
                                <DarkButton
                                    variant="contained"
                                    onClick={ handleFridge }
                                    >
                                    Retourner sur la page des recettes
                                </DarkButton>
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
                        <List className="truc" id="truc">
                            { ingredients.map((ingredient, idx) =>
                                <ListItem key={ idx } value={ ingredient.name } id="ingredient" results={ Math.ceil(ingredient.quantity) }>
                                    <ListItemIcon>
                                        <GreenCheckbox
                                            onChange={ handleChange }
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