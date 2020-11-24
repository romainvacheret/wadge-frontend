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


function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <ul className="navbar-nav mr-auto">
            <li id='nav'><a href='/'>Accueil</a></li>
            <li id='nav'><a href='/food_list'>Fruits et légumes</a></li>
            <li id='nav'><a href='/filter'>Filtre par mois</a></li>
            <li id='nav'><a href='/map'>Magasins</a></li>
            <li id='nav'><a href='/alerts'>Alertes</a></li>
            <li id='nav'><a href='/recipes'>Recettes</a></li>
            <li id='nav'><a href='/foods'>Ajouter au Frigo</a></li>
            <li id='nav'><a href='/display-fridge'>Le Frigo</a></li>
          </ul>
        </nav>
        <hr/>
      </div>
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
