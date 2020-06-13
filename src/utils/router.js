import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import App from '../pages/App';
import ServiceWorkerWrapper from './service-worker-wrapper';

import { addToken } from 'actions/app-data';

const Router = () => {
    const dispatch = useDispatch();
    dispatch(addToken(localStorage.getItem("Authorization")));

    return (
        <BrowserRouter>
            <ServiceWorkerWrapper />
            <Switch>
                <Route path="/" component={App} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;