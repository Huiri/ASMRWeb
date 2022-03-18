import React from 'react';
import {Route, Navigate} from 'react-router-dom';

const AuthRoute = ({authenticated, component:Component, render, ...rest}) => {
    return (
        <Route
        {...rest}
        render = {(props) =>
        authenticated ?(
            render ? (
                render(props)
            ) : (
                <Component {...props}/>
            )
        ): (
            <Route path="/login" elemet={<Navigate replace to="/"/>}/>
        )}
        />
       
    );
};

export default AuthRoute;