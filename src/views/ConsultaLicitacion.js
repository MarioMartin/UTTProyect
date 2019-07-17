import React, { Component } from 'react';
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

  handleFinalizar = (candidatos) => {

    const licitacion = this.state.licitacion
    licitacion.candidatos = candidatos
    this.setState(licitacion)
  }

  render() {

    return (
      <>
        <div className="container bgcolor-Cabecera mt-2 " >
          <div className="row ">
            <div className="col-md-9 sm-12">
              <h2>{this.state.licitacion.SSA}</h2>
            </div>
            <div className="col-md-3 sm-12 ">
              <Typography variant="h6" gutterBottom>
                {this.state.licitacion.estado}
              </Typography>
            </div>
          </div>

          <div className="row p-1">
            <div className="col-md-12">
            <h4 style={{color:'#7e57c2'}}>{this.state.licitacion.nombre}</h4>
             
            </div>
          </div>
          <Divider />
          <div className="row p-1">
            <div className="col-md-12">
              <Typography variant="button"  >
                {this.state.licitacion.descripcion}
              </Typography>
            </div>
          </div>

          <div className="row p-1">
            <div className="col-md-6 sm-12">
              Respuesta : 30-01-2019
            </div>
            <div className="col-md-6 sm-12">
              Creada el  : 01-01-2019
          </div>
          </div>
          <Divider />
          <div className="row mt-2 mb-2 pb-4">
            <div className="col-md-12">
              <UTSChip data={this.state.licitacion.skills} />
            </div>
          </div>
        </div >



        <div className="container bgcolor-Cabecera" >
          <Divider variant="middle" />
          <div className="row ">
            <div className="col-md-12">
              <div className="row ">
                <div className="col-md-12">
                  <UTCandidato data={this.state.licitacion.skills} metodo={this.handleFinalizar} />
                </div>
              </div>
              <div className="row p-4 ">
                <div className="col-md-12">
                  <Box display="flex"  >
                    <Box flexGrow={1} ></Box>
                    <Box >
                      <Link to={{ pathname: '/final', state: { data: this.state } }}>
                        <button type="button" className="btn btn-dark"> FINALIZAR</button>
                      </Link>
                    </Box>
                  </Box>
                </div>
              </div>
            </div >
          </div>
        </div>
      </>
    );
  }
}

export default ConsultaLicitacion;