import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import detail from './containers/Detail';
import home from './containers/Home';
import Layout from './hoc/Layouts/Layout';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={home} />
      <Route path="/detail" exact component={detail} />
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
