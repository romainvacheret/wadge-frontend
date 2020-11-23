import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import SeasonList from './components/SeasonList/SeasonList';
import Home from './components/Home/Home';
import MonthFilter from "./components/MonthFilter/MonthFilter";
import ShopMap from './components/ShopMap/ShopMap';
import ExpirationAlerts from './components/ExpirationAlerts/ExpirationAlerts';
import DisplayFridge from "./components/FoodsFridge/DisplayFridge";

function App() {
  return (
    <>
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
