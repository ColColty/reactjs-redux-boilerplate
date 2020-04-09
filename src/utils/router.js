import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/App';
import { useDispatch } from 'react-redux';
import { addToken } from 'actions/app-data';

const Router = () => {
    const dispatch = useDispatch();
    dispatch(addToken(localStorage.getItem("Authorization")));

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;