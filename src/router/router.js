import React from 'react';
import InternalServerError from '../components/Error/InternalServerError/InternalServerError';
import NotFound from '../components/Error/NotFound/NotFound';
import Detail from '../containers/Detail/Detail';
import Home from '../containers/Home/Home';

const pathRoute = {
  home: '/',
  detail: '/detail/:id',
  notFound: '/notfound',
  internalServerError: '/internalServerError',
};

const route = [
  {
    path: pathRoute.home,
    exact: true,
    main: () => <Home />,
  },
  {
    path: pathRoute.detail,
    exact: true,
    main: () => <Detail />,
  },
  {
    path: pathRoute.notFound,
    exact: true,
    main: () => <NotFound />,
  },
  {
    path: pathRoute.internalServerError,
    exact: true,
    main: () => <InternalServerError />,
  },
];

export { pathRoute, route };
