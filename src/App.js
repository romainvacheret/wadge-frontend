import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import SeasonList from './components/SeasonList/SeasonList';
import RecipeList from './components/RecipeList/RecipeList';
import Home from './components/Home/Home';
import MonthFilter from "./components/MonthFilter/MonthFilter";
import ShopMap from './components/ShopMap/ShopMap';

import GetFoods from './components/FoodsFridge/FoodsFridge';

import ExpirationAlerts from './components/ExpirationAlerts/ExpirationAlerts';
import DisplayFridge from "./components/FoodsFridge/DisplayFridge";

import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function App() {

  return (
    <>
      <nav>
        <AppBar position="static" color="transparent" id="nav">
          <Toolbar  >
            <ListItemLink href="/" id="menu">
              <img src="logo.png" id="logo" width="180" height="80"/>
            </ListItemLink>
            <ListItemLink href="/food_list" id="menu">
              Fruits et Légumes
            </ListItemLink>
            <ListItemLink href="/fridge_display" id="menu">
              Frigo
            </ListItemLink>
            <ListItemLink href="/map" id="menu">
              Carte des Magasins
            </ListItemLink>
          </Toolbar>
        </AppBar>
      </nav>

        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/'
              render={ (props) => <Home {...props}/> }
            />
            <Route
              exact
              path='/food_list'
              render={ () => <SeasonList data-testid="food_list"></SeasonList> }
            />
            <Route
              exact
              path='/recipes'
              render={ () => <RecipeList data-testid="recipes"></RecipeList> }
            />
            <Route
              exact
              path='/filter'
              render={ () => <MonthFilter data-testid="filter"></MonthFilter> }
            />
            <Route
              exact
              path='/map'
              render={ (props) => <ShopMap {...props}/> }

            />
            <Route
              exact
              path='/foods'
              render={ () => <GetFoods/>  }
            />
            <Route
            exact
            path='/alerts'
            render={ (props) => <ExpirationAlerts {...props}/> }
            />
            <Route
                exact
                path='/display-fridge'
                render={ () => <DisplayFridge data-testid="display-fridge"></DisplayFridge> }
            />

          </Switch>
        </BrowserRouter>
    </>
    
  );
}

export default App;
