import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import { Button as MuiButton, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Button = styled(MuiButton)(spacing);

const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px;
  text-align: center;
  background: transparent;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function InternalServerErrorPage() {
  return (
    <Wrapper>
      <Helmet title="500 Error" />
      <Typography component="h1" variant="h1" align="center" gutterBottom>
        500
      </Typography>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        Internal server error.
      </Typography>
      <Typography component="h2" variant="body1" align="center" gutterBottom>
        The server encountered something unexpected that didn&apos;t allow it to
        complete the request.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        color="secondary"
        mt={2}
      >
        Retour à l'acceuil
      </Button>
    </Wrapper>
  );
}

export default InternalServerErrorPage;
