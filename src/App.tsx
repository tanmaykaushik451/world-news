import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navigation from './layouts/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
