import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import UTCandidatoFin from '../components/UTCandidatoFin';
import Typography from '@material-ui/core/Typography';
import UTSChip from '../components/UTShip';



export default function UTFinal(props) {
  const [licitacion, setLicitacion] = React.useState(props.location.state.data);



  return (
    <div className="container bgcolor-Cabecera mt-2 " >
      <div className="row ">
        <div className="col-md-9 sm-12">
          <h2>{licitacion.SSA}</h2>
        </div>
        <div className="col-md-3 sm-12 ">
          <Typography variant="h6" gutterBottom>
            {licitacion.estado}
          </Typography>
        </div>
      </div>

      <div className="row p-1">
        <div className="col-md-12">
          <h4 style={{ color: '#7e57c2' }}>{licitacion.nombre}</h4>

        </div>
      </div>
      <Divider />
      <div className="row p-1">
        <div className="col-md-12">
          <Typography variant="button"  >
            {licitacion.descripcion}
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
          <UTSChip data={licitacion.skills} />
        </div>
      </div>

      <div className="row ">
        <div className="col-md-12">
          <UTCandidatoFin data={licitacion.candidatos} />
        </div>
      </div>
    </div>

  );
}