import React, { useState, useEffect } from 'react';

import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';

const FridgeDeletion = () => {
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

        const useStyles = makeStyles((theme2) => ({
            margin: {
              margin: theme2.spacing(1),
            },
          }));

          const theme = createMuiTheme({
            palette: {
              primary: red,
            },
          });

          const classes = useStyles();

          return ( 
            <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.margin}>
                Supprimer
                </Button>
            </ThemeProvider>
          );
}
export default FridgeDeletion;