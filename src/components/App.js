import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Page from './Page';

class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Landing} />
                    <Route path='/page' component={Page} />
                </Switch>
            </div>
        );
    }
}

export default App;