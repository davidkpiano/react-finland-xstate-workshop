import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Timer as TimerComplete } from './complete/Timer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/final">
          <TimerComplete />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
