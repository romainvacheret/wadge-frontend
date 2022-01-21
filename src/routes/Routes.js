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


import NotFoundPage from "../pages/ErrorsPage/NotFoundPage/NotFoundPage";
import ErrorLayout from "../layouts/ErrorLayout";
import NavBarLayout from "layouts/NavBarLayout";

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
            <Layout >
              <Guard>
                <Component {...props} />
              </Guard>
            </Layout>
          </React.Fragment>
        )}
      />
    ) : null;
  });

const Routes = () => (
  <Router>
    <Switch>
      {childRoutes(NavBarLayout, homeLayoutRoutes)}
      {childRoutes(ErrorLayout, errorLayoutRoutes)}
      {childRoutes(NavBarLayout, recipeListLayout)}
      {childRoutes(NavBarLayout, recipeStepsLayout)}
      {childRoutes(NavBarLayout, fridgeDisplayLayout)}
      {childRoutes(NavBarLayout, fridgeAdditionLayout)}
      {childRoutes(NavBarLayout, foodListLayout)}
      {childRoutes(NavBarLayout, shopingListLayout)}

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
