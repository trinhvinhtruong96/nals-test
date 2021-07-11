import React, { Fragment } from 'react';
import Header from '../../components/Navigation/Header/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
  </>
);

export default Layout;
