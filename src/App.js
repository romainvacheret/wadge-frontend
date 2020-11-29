import React from 'react';
// Router components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Style
import './App.css';

// Custom components
import RecipeList from './components/recipe/RecipeList/RecipeList';
import MonthFilter from "./components/food/FoodList/MonthFilter";
import FridgeAddition from './components/fridge/FridgeAddition/FridgeAddition';
import FridgeMainCompo from "./components/fridge/FridgeMainCompo/FridgeMainCompo";
import Home from './components/Home/Home';
import ShopMap from './components/map/ShopMap/ShopMap';
import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <>
      <NavBar/>

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
