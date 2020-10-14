import React, {useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, ...rest}) =>{
    const { currentUser } = useContext();
    return(
        <Route
        {...rest}
        render={routeProps =>
        !!currentUser ? (
            <RouteComponent {...routeProps} />
        ) : (
            <Redirect to ={"/login"} />
        
        )
    } 
    />
    );
};