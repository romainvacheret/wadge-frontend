import async from "../components/Async/Async";

// Errors components
const NotFoundPage = async(() =>
  import("../pages/ErrorsPage/NotFoundPage/NotFoundPage")
);
const InternalServerErrorPage = async(() =>
  import("../pages/ErrorsPage/InternalServerErrorPage/InternalServerErrorPage")
);


// NavBar components
const HomePage = async(() =>
  import("../pages/Home/Home")
);

const RecipeListPage = async(() =>
  import('../pages/recipe/RecipeTab/RecipeTab')
);

const FoodListPage  = async(() =>
  import("../pages/food/FoodList/FoodList")
  );

const FridgeAdditionPage  = async(() =>
  import('../pages/fridge/FridgeAddition/FridgeAddition')
  );

const FridgeDisplayPage = async(() =>
  import("../pages/fridge/FridgeDisplay/FridgeDisplay")
  );

const RecipeStepsPage  = async(() =>
  import("../pages/recipe/RecipeSteps/RecipeSteps")
  );

const ShoppingListPage  = async(() =>
  import('../pages/shopping/ShoppingList/ShoppingList')
  );

// Routes

const errorRoutes = {
  path: "/error",
  children: [
    {
      path: "/error/404",
      name: "Erreur 404",
      component: NotFoundPage,
    },
    {
      path: "/error/500",
      name: "Erreur 500",
      component: InternalServerErrorPage,
    },
  ],
  component: null,
};

const HomeRoute = {
  id: "Home",
  path: "/",
  containsHome: true,
  component: HomePage,
};

const FoodListRoute = {
  id: "FoodList",
  path: "/filter",
  component: FoodListPage,
};

const RecipeListRoute = {
  id: "RecipeList",
  path: "/recipes",
  component: RecipeListPage,
};
const RecipeStepsRoute = {
  path: "/recipes/step",
  id: "RecipeSteps",
  component: RecipeStepsPage,
}


const FridgeDisplayRoute = {
  id: "Display",
  path: "/fridge",
  component: FridgeDisplayPage,
};

const FridgeAdditionRoute = {
  path: "/fridge/addition",
  id: "FridgeAddition",
  component: FridgeAdditionPage,
}

const ShoppingListRoute = {
  id: "Shopping",
  path: "/shopping_list",
  component: ShoppingListPage,
};

// Routes using the Home layout
export const homeLayoutRoutes = [HomeRoute];
export const foodListLayout = [FoodListRoute];
export const recipeListLayout = [RecipeListRoute];
export const recipeStepsLayout = [RecipeStepsRoute]
export const fridgeDisplayLayout = [FridgeDisplayRoute];
export const fridgeAdditionLayout = [FridgeAdditionRoute];
export const shopingListLayout = [ShoppingListRoute];

// Routes using the Error layout
export const errorLayoutRoutes = [errorRoutes];

