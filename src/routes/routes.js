import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from '../containers/page1';
import Page2 from '../containers/page2';

export default function createRoutes() {
    return (
        <Switch>
            <Route exact path="/todo" component={Page1} />
            <Route exact path="/page2" component={Page2} />
        </Switch>
    );
}
