import React from 'react';

// Router components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Material-ui components
import { AppBar, Toolbar, ListItem } from '@material-ui/core';

// Custom components
import RecipeList from './components/recipe/RecipeList/RecipeList';
import Home from './components/Home/Home';
import MonthFilter from "./components/food/FoodList/MonthFilter";
import ShopMap from './components/map/ShopMap/ShopMap';
import FridgeMainCompo from "./components/fridge/FridgeMainCompo/FridgeMainCompo";
import FridgeAddition from './components/fridge/FridgeAddition/FridgeAddition';

// Style
import './App.css';

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
                path='/fridge'
                render={ () => <FridgeMainCompo data-testid="fridge"></FridgeMainCompo> }
                />
            <Route
                exact
                path='/fridge_addition'
                render={ () => <FridgeAddition data-testid="fridge_addition"></FridgeAddition>}
            />
          </Switch>
        </BrowserRouter>
    </>
    
  );
}

export default App;
