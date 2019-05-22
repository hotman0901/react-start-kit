import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Todo from '../containers/todo';
import Page2 from '../containers/page2';
import Page3 from '../containers/page3';
import Header from '../components/header';

export default function createRoutes() {
    return (
        <Header>
            <Switch>
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/page2" component={Page2} />
                <Route exact path="/page3" component={Page3} />
                <Route path="/" component={Todo} />
            </Switch>
        </Header>
    );
}
