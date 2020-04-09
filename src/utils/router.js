import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/App';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;