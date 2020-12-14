import React from 'react';
import { AppBar, Toolbar, ListItem } from '@material-ui/core';

import './NavBar.css';

const NavBar = (props) => {
    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;

    return (
        <AppBar position="static" color="transparent" id="navbar">
          <Toolbar  >
            <ListItemLink href="/" id="nav-logo">
              <img src="logo.png" id="logo-nav" width="180" height="80"/>
            </ListItemLink>
            <ListItemLink href="/filter" id="nav-filter">
              Fruits et Légumes
            </ListItemLink>
            <ListItemLink href="/fridge" id="nav-fridge">
              Frigo
            </ListItemLink>
            <ListItemLink href="/fridge_addition" id="nav-fridge-addition">
              Ajout au frigo
            </ListItemLink>
            <ListItemLink href="/map" id="nav-map">
              Carte des Magasins
            </ListItemLink>
            <ListItemLink href="/recipes" id="nav-recipes">
              Recettes
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

