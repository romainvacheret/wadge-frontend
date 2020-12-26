import React from 'react';
// Router components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Style
import './App.css';

// Custom components
import RecipeList from './components/recipe/RecipeList/RecipeList';
import FoodList from "./components/food/FoodList/FoodList";
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
            render={ () => <FoodList data-testid="filter"></FoodList> }
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
              path='/fridge/addition'
              render={ () => <FridgeAddition data-testid="fridge/addition"></FridgeAddition>}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
