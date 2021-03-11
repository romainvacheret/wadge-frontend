import React from 'react';
// Router components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Style
import './App.css';

// Custom components
import RecipeList from './components/recipe/RecipeList/RecipeList';
import FoodList from "./components/food/FoodList/FoodList";
import FridgeAddition from './components/fridge/FridgeAddition/FridgeAddition';
import FridgeDisplay from "./components/fridge/FridgeDisplay/FridgeDisplay";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import RecipeSteps from "./components/recipe/RecipeSteps/RecipeSteps";
import ShoppingList from 'components/shopping/ShoppingList/ShoppingList';

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
            render={ () => <RecipeList data-testid="recipes"/> }
          />
          <Route
              exact
              path='/recipes/step'
              render={ (props) => <RecipeSteps {...props}/> }
          />
          <Route
            exact
            path='/filter'
            render={ () => <FoodList data-testid="filter"/> }
          />
          <Route
              exact
              path='/fridge'
              render={ (props) => <FridgeDisplay {...props} data-testid="fridge"/> } 
              />
          <Route
              exact
              path='/fridge/addition'
              render={ () => <FridgeAddition data-testid="fridge/addition"/> }
          />
          <Route
              exact
              path='/shopping_list'
              render={ () => <ShoppingList/> }
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
