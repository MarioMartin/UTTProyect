import React, { Component } from 'react';

import UTMigaja from '../components/UTMigaja';

import '../App.css';


class ConsultaLicitacion extends Component {

  constructor() {
    super();
    this.state = {
      licitacion: {},
    };
  }

  componentDidMount() {

    const { licitacion } = this.props.location.state
    this.setState(licitacion)
    console.log();
  }

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
          formulario
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultaLicitacion;