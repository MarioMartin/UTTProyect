import React, { Component } from 'react';

import UTMigaja from '../components/UTMigaja';
import UTCandidato from '../components/UTCandidato';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import GrainIcon from '@material-ui/icons/Grain';
import UTSChip from '../components/UTShip';



import '../App.css';


class ConsultaLicitacion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      licitacion: this.props.location.state.data,
    };
  }

  /*componentDidMount() {

    const { licitacion } = this.props.location.state
    this.setState(licitacion)
    console.log();
  }*/

  

  render() {

    /*const licitaciones = this.state.licitaciones.map((data, i) => {
      return (
        <UTCandidato />
      )
    });*/

    return (
      <div className="container bgcolor-CLicitacion" >
        <div className="row ">
          <div className="col-md-12">
            <UTMigaja />
          </div>
        </div>
        <div className="row p-4" >
          <div className="col-md-12">

            <Box display="flex"  >
              <Box flexGrow={1} >
                <Typography gutterBottom variant="h5" >
                  {this.state.licitacion.SSA}
                </Typography>
              </Box>
              <Box >
                Creada el : 01-01-2019
              </Box>
            </Box>
            <Box display="flex"  >
              <Box flexGrow={1} >
                <Typography gutterBottom variant="h5" >
                <UTSChip  data={this.state.licitacion.skills} />
                </Typography>
              </Box>
              <Box >
              
              </Box>
            </Box>
            <Typography variant="button"  >
              <Box > {this.state.licitacion.nombre}</Box>
            </Typography>
            <Divider variant="middle" />

          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">

            <UTCandidato />

          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <Button size="medium" color="primary">
        
              <Link to={{
                pathname: '/consultaLicitacion',
                state: {
                  data: {}
                }
              }}>
                Finalizar
          </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultaLicitacion;