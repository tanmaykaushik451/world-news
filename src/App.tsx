import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './layouts/Navigation';
import Home from './pages/Home';
import NewsState from "./context/NewsState"

function App() {
  return (
    <NewsState>
    <Router>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
    </NewsState>
  );
}

export default App;
