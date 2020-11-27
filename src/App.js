import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import SeasonList from './components/SeasonList/SeasonList';
import RecipeList from './components/RecipeList/RecipeList';
import Home from './components/Home/Home';
//import MonthFilter from "./components/MonthFilter/MonthFilter";
import MonthFilter from "./components/food/FoodList/MonthFilter";
import ShopMap from './components/ShopMap/ShopMap';

import GetFoods from './components/FoodsFridge/FoodsFridge';

import ExpirationAlerts from './components/ExpirationAlerts/ExpirationAlerts';
import DisplayFridge from "./components/FoodsFridge/DisplayFridge";

import ListItem from '@material-ui/core/ListItem';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


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
            <ListItemLink href="/filter" id="menu">
              Fruits et Légumes
            </ListItemLink>
            <ListItemLink href="/display-fridge" id="menu">
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
