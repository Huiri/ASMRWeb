import React from 'react';
import {Route, useNavigate} from 'react-router-dom';
const AuthRoute = ({authenticated, component : Component, render, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => 
            authenticated ? (
                render ? (
                    render(props)
                ) : (
                    <Component {...props}/>
                )
            ) : (
                <Route path = "/" element={<navigate replace to="/login"/>}/>
            )
            }
        />
    );
};

export default AuthRoute;