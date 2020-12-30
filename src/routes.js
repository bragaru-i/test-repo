import React from 'react';
import { Route, Switch } from 'react-router-dom';

// MainPage

import HomePage from './pages/HomePage/HomePage';
import Search from './pages/Search/Search';

const ROUTES = [
  {
    path: '/',
    key: 'MAIN_ROUTE',
    exact: true,
    component: HomePage,
  },
  {
    path: '/search',
    key: 'SEARCH_ROUTE',
    component: RenderRoutes,
    routes: [
      {
        path: '/search',
        key: 'SEARCH_ROOT',
        exact: true,
        component: Search,
      },
      {
        path: '/search/:params',
        key: 'SEARCH_PARAMS',
        exact: true,
        component: () => <h1>search by params here </h1>,
      },
    ],
  },
];
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      // eslint-disable-next-line react/jsx-props-no-spreading
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Sorry. This path in unavailable!</h1>} />
    </Switch>
  );
}

export default ROUTES;
