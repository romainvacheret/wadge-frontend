import React from 'react';
import { AppBar, Toolbar, ListItem } from '@material-ui/core';

import './NavBar.css';

const NavBar = (props) => {
    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;

    return (
        <AppBar position="static" color="transparent" id="nav">
          <Toolbar  >
            <ListItemLink href="/" id="menu">
              <img src="logo.png" id="logo" width="180" height="80"/>
            </ListItemLink>
            <ListItemLink href="/filter" id="menu">
              Fruits et Légumes
            </ListItemLink>
            <ListItemLink href="/fridge" id="menu">
              Frigo
            </ListItemLink>
            <ListItemLink href="/fridge_addition" id="menu">
              Ajout au frigo
            </ListItemLink>
            <ListItemLink href="/map" id="menu">
              Carte des Magasins
            </ListItemLink>
            <ListItemLink href="/recipes" id="menu">
              Recettes
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

