import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest}) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props =>(
            isAuthenticated ? <Component  {...props}/> : <Redirect to='/'/>
        )}/>
    )
}

export default PrivateRoute;