import React from 'react';
import { AppBar, Toolbar, ListItem } from '@material-ui/core';

import './NavBar.css';

const NavBar = (props) => {
    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;

    return (
        <AppBar className="navbar" id="navbar">
          <Toolbar  >
            <ListItemLink href="/" className='navbar__links' id="nav-logo">
              <img alt=" " src="/logo.png" id="logo-nav" width="180" height="80"/>
            </ListItemLink>
            <ListItemLink href="/filter" className='navbar__links' id="nav-filter">
              Fruits et Légumes
            </ListItemLink>
            <ListItemLink href="/fridge" className='navbar__links' id="nav-fridge">
              Frigo
            </ListItemLink>
            <ListItemLink href="/fridge/addition" className='navbar__links' id="nav-fridge-addition">
              Ajout au frigo
            </ListItemLink>
            <ListItemLink href="/map" className='navbar__links' id="nav-map">
              Carte des Magasins
            </ListItemLink>
            <ListItemLink href="/recipes" className='navbar__links' id="nav-recipes">
              Recettes
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

