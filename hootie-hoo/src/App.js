import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="App">
          <h1>Hootie-Hoo</h1>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
