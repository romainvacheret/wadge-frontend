import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import SeasonList from './components/SeasonList/SeasonList';
import Home from './components/Home/Home';
import MonthFilter from "./components/MonthFilter/MonthFilter";
import ShopMap from './components/ShopMap/ShopMap';
import ExpirationAlerts from './components/ExpirationAlerts/ExpirationAlerts';

function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <ul className="navbar" >
            <li className="nav"><a href='/'>Accueil</a></li>
            <li className="nav"><a href='/food_list'>Fruits et légumes</a></li>
            <li className="nav"><a href='/filter'>Filtre par mois</a></li>
            <li className="nav"><a href='/map'>Magasins</a></li>
            <li className="nav"><a href='/alerts'>Alertes</a></li>
            <li className="nav"><a href='/recipes'>Recettes</a></li>
            <li className="nav"><a href='/foods'>Ajouter au Frigo</a></li>
            <li className="nav"><a href='/display-fridge'>Le Frigo</a></li>
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
          </Switch>
        </BrowserRouter>
    </>
    
  );
}

export default App;
