import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import SeasonList from './components/SeasonList/SeasonList';
import Home from './components/Home/Home';
import MonthFilter from "./components/MonthFilter/MonthFilter";
import ShopMap from './components/ShopMap/ShopMap';
<<<<<<< HEAD
import Myfoods from './components/ProductList/mesAliments';
=======
import ExpirationAlerts from './components/ExpirationAlerts/ExpirationAlerts';
>>>>>>> 0c5288b3490b2e06d2bbe0b91333d8e2eb67fa84

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
<<<<<<< HEAD
          />
          <Route
          exact
          path='/'
          render={ () => <GetFoods data-testid="food_list"></GetFoods> }
          />
=======
            />
            <Route
            exact
            path='/alerts'
            render={ (props) => <ExpirationAlerts {...props}/> }
            />
>>>>>>> 0c5288b3490b2e06d2bbe0b91333d8e2eb67fa84
          </Switch>
        </BrowserRouter>
    </>
    
  );
}

export default App;
