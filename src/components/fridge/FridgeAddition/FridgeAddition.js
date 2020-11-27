import React, { useState, useEffect } from 'react';
import './FridgeAddition.css';

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green} from '@material-ui/core/colors';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';



const FridgeAddition = () => {
    const [foodList, setFoodList] = useState([]);

    useEffect(() => fetch("http://localhost:8080/food_list", {
        method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .catch(err => console.log('Error: ', err))
        .then(response => response.json())
        .then(response => setFoodList([...response])), 
    []);

    const fruit = (type) =>{
        return type === 'fruit';
    }

    const legume = (type) =>{
        return type === 'legume';
    }

    const useStyles = makeStyles((theme) => ({
        margin: {
          margin: theme.spacing(2),
        },
      }));

      const theme = createMuiTheme({
        palette: {
          primary: green,
        },
      });

      const classes = useStyles();

    return (
        <>
        <h3 className="Title">Liste des fruits et légumes a ajoueter</h3>
        <div className="container">
                {!foodList.length ? <></> :( <div className="firstlist">
                    <Grid container spacing={2} className="liste">
                    <Typography variant="h4" gutterBottom className="label">
                        Fruits
                    </Typography>
                    <Grid container spacing={4}>
                        { foodList.map(({ nom, type }, idx) => { 
                        if( fruit(type) )
                            return (
                                <>
                                <Grid item className="food">
                                    <div className="List1"key={idx}> {
                                        <>
                                            <Card className="nom">{ nom }</Card>
                                        </>
                                    } </div>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                        <TextField
                                        className="filled-number"
                                        label="Quantité"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        />
                                    </div>
                                    </form>
                                    </Grid>
                                </>
                            )
                        }
                        )
                        }
                    </Grid>
                        <Typography variant="h4" gutterBottom className="label">
                            Légumes
                        </Typography>
                        <Grid container spacing={4}>
                            { foodList.map(({ nom, type }, idx) => { 
                            if( legume(type) )
                                return (
                                    <>
                                    <Grid item className="food">
                                        <div className="List1"key={idx}> {
                                            <>
                                                <Card className="nom">{ nom }</Card>
                                            </>
                                        } </div>
                                        
                                    <form className={classes.root} noValidate autoComplete="off">
                                        <div>
                                            <TextField
                                            className="filled-number"
                                            label="Quantité"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            />
                                        </div>
                                        </form>
                                    </Grid>
                                    </>
                                    
                                )
                            })
                        }
                        </Grid>
                        
                    </Grid>
                       
                </div>)}
            </div>
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.margin}>
                Enregistrer
                </Button>
            </ThemeProvider>
        </>
    );}

export default FridgeAddition;