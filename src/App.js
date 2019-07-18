import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ingresoLicitacion from './views/IngresoLicitacion';
import ConsultaLicitacion from './views/ConsultaLicitacion';
import ConsultaSkill from './views/ConsultaSkill';
import PantallaFinal from './views/Final';
import Home from './views/Home';
import UTMenuBarra from './components/UTMenuBarra';
import BuscadorLicitacion from './views/BuscadorLicitacion';



import './App.css';

/*const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',

  },
  titulo1: {
    fontSize: 50,
  },
}));*/

function App() {


  return (
    <Router>
      <div className="App">
        <UTMenuBarra />
        <div className="container-fluid">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ingresoLicitacion" component={ingresoLicitacion} />
            <Route path="/consultaLicitacion" component={ConsultaLicitacion} />
            <Route path="/consultaSkill" component={ConsultaSkill} />
            <Route path="/BuscadorLicitacion" component={BuscadorLicitacion} />
            <Route path="/final" component={PantallaFinal} />
            <Route path="/test" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const HomeTest = () => (
 <h1>-</h1>

);

export default App;
