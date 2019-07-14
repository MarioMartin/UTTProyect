import React, { Component } from 'react';
import { colaboradores } from '../colaboradores.json';
import UTTarjeta from '../components/UTTarjeta';
import UTBuscador from '../components/UTBuscador';


class ConsultaSkill extends Component {

  constructor() {
    super();
    this.state = {
      colaboradores: colaboradores,
      termino: "",
    }
  }

  consultaAPI = () => {
    const url = "https://pixabay.com/api/?key=13030946-b853deac1446dc74d49b36437&q=yellow+flowers&image_type=photo";

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => console.log(resultado.hits))
  }

  getBusqueda = (termino) => {
    console.log("obtendra datos con :" + termino);

    this.setState({ termino }, () => {
      this.consultaAPI();
    });
  }



  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-12 bg-color-dark">
            <UTBuscador getBusqueda={this.getBusqueda} />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-12 ">
            <div className="row">
              <UTTarjeta colaboradores={colaboradores} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultaSkill;