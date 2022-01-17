import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { Button as MuiButton, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Button = styled(MuiButton)(spacing);

function NotFoundPage() {
  return (
    <div>
      <Helmet title="404 Error" />
      <Typography component="h1" variant="h1" align="center" gutterBottom>
        404
      </Typography>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        Page not found.
      </Typography>
      <Typography component="h2" variant="body1" align="center" gutterBottom>
        La page que vous recherchez a peut-être été supprimée.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        mt={2}
      >
        Retour à l'accueil
      </Button>
    </div>
  );
}

export default NotFoundPage;
