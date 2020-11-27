import React, { useState, useEffect } from 'react';
import './FridgeMainCompo.css';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red} from '@material-ui/core/colors';

const DisplayFridge = () => {
    const [fridgeList, setFridgeList] = useState([]);

    useEffect(() => fetch("http://localhost:8080/display-fridge", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .catch(err => console.log('Error: ', err))
            .then(response => response.json())
            .then(response => {setFridgeList([...response]);}),
        []);
        const useStyles = makeStyles((theme) => ({
            margin: {
              margin: theme.spacing(1),
            },
          }));
          const theme = createMuiTheme({
            palette: {
              primary: red,
            },
          });
          const classes = useStyles();

    return (
        <>
            {//<img className='Image' src="logo.png" style={{ width: 225, height: 100 }}/>
            }
            <h3 className='Title'> Frigo de l'utilisateur </h3>
            <ul> {
                fridgeList.map(({nom,produits}, idx) => {console.log(produits); return(
                        <div className="List"key={idx}> {
                            <>
                            <h4>Carré d'info</h4>
                                <li>{ nom }</li>
                                <ul> {produits.map(({ quantite, dateAjout, dateLimite}) => (
                                    <>
                                    <li>{ `Quantite : ${quantite}` }</li>
                                    <li>{ `Date d'ajout: ${dateAjout}` }</li>
                                    <li>{ `Date limite: ${dateLimite}` }</li>
                                    </>
                                    ) )}

                                </ul>
                                <br></br>
                            </>
                        } </div>
                    );}
                )
            } </ul>
             <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Supprimer
        </Button>
      </ThemeProvider>
        </>
    );
}

export default DisplayFridge;