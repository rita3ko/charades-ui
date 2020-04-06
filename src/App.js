import React from 'react';
import './App.css';
import Game from './Game.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <Switch>
          <Route exact path="/:id" component={Game}/> />
          <Route exact path="/" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
