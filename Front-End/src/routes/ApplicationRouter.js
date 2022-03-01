import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';

function ApplicationRouter(props) {
    return (
        <>
            <Router>
                <Suspense
                fallback={
                    <>
                    <h1>Please wait...</h1>
                    </>
                }
                >
                <Switch>
                    {routes.map((item, i) => (
                    <Route
                        key={i}
                        path={item.path}
                        exact={item.exact}
                        component={item.component}
                    />
                    ))}
                </Switch>
                </Suspense>
            </Router>
        </>
    );
}

export default ApplicationRouter;