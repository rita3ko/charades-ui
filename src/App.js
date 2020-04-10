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
        <div class="m-2 text-center font-bold text-seafoam text-5xl sm:text-3xl"> <h1>🍕 C H A R A D E S 🍕</h1>
        </div>
      <Switch>
          <Route exact path="/:id" component={Game}/> />
          <Route exact path="/" component={Game} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
