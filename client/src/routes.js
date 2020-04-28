import React from "react";
import {Router, Switch, Route, Redirect} from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./layouts/dashboard";
import AuthService from "./services/AuthService";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        AuthService.hasToken
            ? <Component {...props} />
            : <Redirect to='/'/>
    )}/>
);

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route component={Auth} path="/" exact/>
                <Route path="/dashboard/:path?" exact>
                    <Dashboard>
                        <Switch>
                            <PrivateRoute path="/dashboard" exact component={() => (<h1> Início </h1>)}/>
                            <PrivateRoute path="/dashboard/users" component={() => (<h1> Usuarios </h1>)}/>
                            <PrivateRoute path="/dashboard/horarios" component={() => (<h1> Horarios </h1>)}/>
                        </Switch>
                    </Dashboard>
                </Route>
                <Route path="*" exact component={() => <h1>Não existe</h1>}/>
            </Switch>
        </Router>
    )
}

export {history};
