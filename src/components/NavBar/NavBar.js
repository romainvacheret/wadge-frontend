import React from 'react';
import { AppBar, Toolbar, ListItem, Tooltip, Popper } from '@material-ui/core';

import './NavBar.css';
import Scale from "../Scale/Scale";

const NavBar = () => {
    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = () => {
        setAnchorEl(anchorEl ? null : 1);
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

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
            <ListItemLink href="/shopping_list" className='navbar__links' id="nav-map">
              Liste des courses
            </ListItemLink>
            <ListItemLink href="/recipes" className='navbar__links' id="nav-recipes">
              Recettes
            </ListItemLink>
            <ListItemLink className='navbar__links' id="nav-scale">
                <Tooltip title="balance">
                    <img src="/scale.png" id="icon-scale" width="30" height="30" onClick={ handleClick }/>
                </Tooltip>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Scale/>
                </Popper>
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

