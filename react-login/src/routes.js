import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Login from './Login';
import App from './App';

function Routes() {

    const isAuthenticated = localStorage.getItem("token");

    function PrivateRoute({ children, ...rest }) {
        return (
            <Route {...rest} render={() => {
                return isAuthenticated
                    ? children
                    : <Redirect to='/' />
            }} />
        )
    }

    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Login />
            </Route>
            <PrivateRoute path="/app">
                <App />
            </PrivateRoute>
        </BrowserRouter>
    )
}

export default Routes;