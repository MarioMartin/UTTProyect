import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UTMenuBarra from './components/UTMenuBarra';

// Paginas --- 
import Home from './views/Home';
import ingresoLicitacion from './views/IngresoLicitacion';
import ConsultaLicitacion from './views/ConsultaLicitacion';
import ConsultaSkill from './views/ConsultaSkill';
import PantallaFinal from './views/Final';
import BuscadorLicitacion from './views/BuscadorLicitacion';
import BuscadorEmpresas from './views/BuscadorEmpresas';

import './App.css';

function App() {

  return (
    <Router>
        <UTMenuBarra />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ingresoLicitacion" component={ingresoLicitacion} />
            <Route path="/consultaLicitacion" component={ConsultaLicitacion} />
            <Route path="/consultaSkill" component={ConsultaSkill} />
            <Route path="/BuscadorLicitacion" component={BuscadorLicitacion} />
            <Route path="/bempresa" component={BuscadorEmpresas} />
            <Route path="/final" component={PantallaFinal} />
            <Route path="/test" component={Example} />

          </Switch>
        </div>
    </Router>
  );
}

const Example = () => (
 <h1>ejemplo</h1>

);

export default App;
