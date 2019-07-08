import React from 'react';
import { Link } from 'react-router-dom';

import logo from '.././images/download.png';


function NavBar() {
  return (
    <div className="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand active"><img src={logo} width="45" height="30" className="d-inline-block align-top" alt="" />
          Assingnment Ultimate Team
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to='/ingresoLicitacion' className="nav-item nav-link" >LICITACIONES</Link>
            <Link to='/ConsultaSkill' className="nav-item nav-link " >CONSULTA SKILL</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;