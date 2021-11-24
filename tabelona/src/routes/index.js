import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/home/home.jsx';

import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </BrowserRouter>
    </div>
  );
}

export default App;
