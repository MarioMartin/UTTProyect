import React, { Component } from 'react';

import UTMigaja from '../components/UTMigaja';
import UTCandidato from '../components/UTCandidato';
import UTTextFields from '../components/UTTextFields';



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
    return (
      <div className="container bgcolor-CLicitacion" >
        <div className="row ">
          <div className="col-md-12">
            <UTMigaja />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <div className="form-group">
              <UTTextFields
                label="Licitación SSA"
                margin="normal"
                value="ACC-58000"
              />
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12">
            <div className="form-group">
              <UTTextFields
                label="Descripcion"
                margin="normal"
                value="Una brave descripcion para saber de que trata la Licitacion"
              />
            </div>
          </div>
          <UTCandidato />
        </div>
      </div>
    );
  }
}

export default ConsultaLicitacion;