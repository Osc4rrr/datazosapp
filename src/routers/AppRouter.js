import React from 'react'; 

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import DatazosScreen from '../components/datazos/DatazosScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth" 
                        component={AuthRouter}
                    />

                    <Route 
                        path="/" 
                        component={DatazosScreen}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter
