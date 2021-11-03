import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import home from '../pages/home/home';

import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Router>
                    <Switch>
                        <Route exact path='/' component={home} />
                    </Switch>
                </Router>
            </BrowserRouter>
        </div>
    )
}

export default App;