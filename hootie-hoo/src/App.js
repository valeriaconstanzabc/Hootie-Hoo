import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Background from './Components/Background';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Buttons from './Components/Buttons';
import Welcome from './Components/Welcome';

const App = () => {
  return (
    <Router>
      <Switch>

        <Route path="/" exact>
          <Header />
          <Buttons />
          <Welcome />
          <Footer/>
          {/* <Background /> */}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
