import React from 'react';

import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('Authorization') ?
        <Component {...props} /> :
        <Redirect to="/login" />
    )} />
);

export default PrivateRoutes;