import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Navigation/Header/Header';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Layout;
