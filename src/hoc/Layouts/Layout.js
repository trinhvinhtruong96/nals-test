import React, { Fragment } from 'react';
import Header from '../../components/Navigation/Header/Header';

const Layout = (props) => (
  <>
    <Header />
    <main className="container">{props.children}</main>
  </>
);

export default Layout;
