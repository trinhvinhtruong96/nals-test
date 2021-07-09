import React, { Fragment } from 'react';

const Layout = (props) => {
    return (
        <Fragment>
            <main className="mt-5">{props.children}</main>
        </Fragment>

    );
};

export default Layout;
