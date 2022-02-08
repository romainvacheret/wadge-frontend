import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Typography, Grid } from "@material-ui/core";
import { GreenButton } from "components/Buttons/WadgeButtons";

import './NotFoundPage.css'

function NotFoundPage() {
  return (
  <div>
    <Helmet title="404 Error" />
    <Grid container direction='column' alignItems="center" justifyContent="center" spacing={3}>
      <Grid item>
        <img alt=" " className="logo_404" src="/logo2.png"/>
      </Grid>
      <Grid item className='404__error__text'>
        <Typography component="h3" variant="h3" align="center" gutterBottom>
        404
        </Typography>
        <Typography component="h3" variant="h3" align="center" gutterBottom>
        Page not found.
        </Typography>
        <Typography component="h3" variant="h3" align="center" gutterBottom>
        La page que vous recherchez a peut-être été supprimée.
        </Typography>
      </Grid>
      <Grid item className='error__to-home__button'>
        <GreenButton
        component={Link}
        to="/"
        variant="contained"
        mt={2}
        className='button__to-home'
        >
        Retour à l'accueil
        </GreenButton>
      </Grid>
     
    </Grid>
    
  </div>
  );
}

export default NotFoundPage;
