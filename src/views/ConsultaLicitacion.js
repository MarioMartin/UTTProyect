import React, { Component } from 'react';

import UTMigaja from '../components/UTMigaja';
import UTCandidato from '../components/UTCandidato';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import UTSChip from '../components/UTShip';

import '../App.css';


class ConsultaLicitacion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      licitacion: this.props.location.state.data,  
    };
  }


  render() {



    return (
      <div className="container bgcolor-Cabecera" >
        <div className="row ">
          <div className="col-md-12">
            <UTMigaja />
          </div>
        </div>
        <div className="row p-1">
          <div className="col-md-9">
            <h2>{this.state.licitacion.SSA}</h2>
          </div>
          <div className="col-md-3 text-right">
            <Box> Creada el : 01-01-2019</Box>
          </div>
        </div>

        <div className="row p-1">
          <div className="col-md-9">
            <Typography variant="button"  >
              {this.state.licitacion.nombre}
            </Typography>
          </div>
          <div className="col-md-3 text-right">

          </div>
        </div>

        <div className="row p-1">
          <div className="col-md-9">
            <Typography variant="button"  >
              <UTSChip data={this.state.licitacion.skills} />
            </Typography>
          </div>
          <div className="col-md-3 text-right">

          </div>
        </div>
        <Divider variant="middle" />
        <div className="row ">
          <div className="col-md-12">
            <UTCandidato data={this.state.licitacion.skills}/>
          </div>
        </div>
        <div className="row p-2 ">
          <div className="col-md-12">
            <Link to={{ pathname: '/consultaLicitacion', state: {} }}>
              <button type="button" className="btn btn-dark"> Buscar Candidato</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultaLicitacion;