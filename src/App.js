import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home'
import Purchase from "./components/Purchase"
import Graph from "./components/Graph"

function App() {
  
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/purchase" component={Purchase}></Route>
          <Route path="/graph" component={Graph}></Route>

      </Router>
    </div>
  );
}

export default App;
