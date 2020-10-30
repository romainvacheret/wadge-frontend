import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import SeasonList from './components/SeasonList/SeasonList';
import Home from './components/Home/Home';
import FilterMonth from "./components/SeasonList/FilterMonth";

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
              render={ () => <FilterMonth data-testid="filter"></FilterMonth> }
              />
          </Switch>
        </BrowserRouter>
    </>
    
  );
}

export default App;
