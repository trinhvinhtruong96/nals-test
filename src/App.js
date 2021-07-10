import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layouts/Layout';
import { route } from "./router/router"

const App = () => {
  const routes = (
    <Switch>
      {route.map((el, index) => (
        <Route
          key={index}
          path={el.path}
          exact={el.exact}
          component={el.main}
        />
      ))}
      <Redirect to="/" />
    </Switch>
  );
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        {routes}
      </Suspense>
    </Layout>
  );
};

export default App;
