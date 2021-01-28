import React from 'react';


import {
    Button,
    Grid,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography
} from "@material-ui/core";

const RecipeSteps = ( props ) => {
    const recipe = props.location.state.recipe;
    const {steps, ingredients, name, servings, difficulty} = recipe;
    console.log(steps);
    const nbStep = steps.length;

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

    return (

        <div className="je_sais_pas">
            <Typography variant="h4" className="recipe__name">{ name }</Typography>
            <Grid>
                <Typography variant="h5">{ `Recette pour : ${ servings } personnes` }</Typography>
                <Typography variant="h5">{ `Difficulté : ${ difficulty }/4` }</Typography>
            </Grid>
            <Stepper activeStep={activeStep} orientation="vertical">
                {allSteps.map((label, index) => (
                    <Step key={ label }>
                        <StepLabel>{ label }</StepLabel>
                        <StepContent>
                            <Typography>{ steps[index] }</Typography>
                            <div className="faut_tester_pour_savoir">
                                <div>
                                    <Button
                                        disabled={ activeStep === 0 }
                                        onClick={ handleBack }
                                        className="button"
                                    >
                                        Retour à l'étape précédente
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={ handleNext }
                                        className="button"
                                    >
                                        { activeStep === allSteps.length - 1 ? 'Terminer la recette' : 'Etape suivante' }
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}

export default RecipeSteps;