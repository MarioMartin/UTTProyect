import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavBar from './components/NavBar';

import ingresoLicitacion from './views/IngresoLicitacion';
import ConsultaLicitacion from './views/ConsultaLicitacion';
import ConsultaSkill from './views/ConsultaSkill';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ingresoLicitacion" component={ingresoLicitacion} />
            <Route path="/consultaLicitacion" component={ConsultaLicitacion} />
            <Route path="/consultaSkill" component={ConsultaSkill} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="Home">
    <h1>Home</h1>

  </div>
);

export default App;
