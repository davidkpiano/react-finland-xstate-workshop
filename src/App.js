import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Timer as TimerComplete } from './complete/Timer';
import { Timer as Timer00 } from './00/Timer';
import { Timer as Timer01 } from './01/Timer';
import { Timer as Timer02 } from './02/Timer';
import { Timer as Timer03 } from './03/Timer';
import { Timer as Timer04 } from './04/Timer';
import { Timer as Timer05 } from './05/Timer';
import { Timer as Timer06 } from './06/Timer';
import { Timer as Timer07 } from './07/Timer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/00">
          <Timer00 />
        </Route>
        <Route path="/01">
          <Timer01 />
        </Route>
        <Route path="/02">
          <Timer02 />
        </Route>
        <Route path="/03">
          <Timer03 />
        </Route>
        <Route path="/04">
          <Timer04 />
        </Route>
        <Route path="/05">
          <Timer05 />
        </Route>
        <Route path="/06">
          <Timer06 />
        </Route>
        <Route path="/07">
          <Timer07 />
        </Route>
        <Route path="/complete">
          <TimerComplete />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
