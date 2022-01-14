import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  errorLayoutRoutes,
  homeLayoutRoutes,
  recipeListLayout,
  recipeStepsLayout,
  foodListLayout,
  fridgeDisplayLayout,
  fridgeAdditionLayout,
  shopingListLayout
} from "./index";


import NavBar from "../components/NavBar/NavBar"
import NotFoundPage from "../pages/ErrorsPage/NotFoundPage/NotFoundPage";
import ErrorLayout from "../layouts/ErrorLayout";

const childRoutes = (Layout, routes) =>

  routes.map(({ component: Component, guard, children, path, id }, index) => {
    const Guard = guard || React.Fragment;

    return children ? (
      children.map((element, index) => {
        const Guard = element.guard || React.Fragment;
        const ElementComponent = element.component || React.Fragment;

        return (
          <Route
            key={index}
            path={element.path}
            title={element.id}
            exact
            render={(props) => (
              <React.Fragment>
                <Layout ></Layout>
                  <Guard>
                    <ElementComponent props={props}/>
                  </Guard>
              </React.Fragment>
            )}
          />
        );
      })
    ) : Component ? (
      <Route
        key={index}
        path={path}
        title={id}
        exact
        render={(props) => (
          <React.Fragment>
            <Layout ></Layout>
            <Guard>
              <Component {...props} />
            </Guard>
          </React.Fragment>
        )}
      />
    ) : null;
  });

const Routes = () => (
  <Router>
    <Switch>
      {childRoutes(NavBar, homeLayoutRoutes)}
      {childRoutes(ErrorLayout, errorLayoutRoutes)}
      {childRoutes(NavBar, recipeListLayout)}
      {childRoutes(NavBar, recipeStepsLayout)}
      {childRoutes(NavBar, fridgeDisplayLayout)}
      {childRoutes(NavBar, fridgeAdditionLayout)}
      {childRoutes(NavBar, foodListLayout)}
      {childRoutes(NavBar, shopingListLayout)}

      <Route
        render={() => (
          <ErrorLayout>
            <NotFoundPage />
          </ErrorLayout>
        )}
      />
    </Switch>
  </Router>
);

export default Routes;
