import React, { Component } from 'react';
import { colaboradores } from '../colaboradores.json';
import UTTarjeta from '../components/UTTarjeta';
import UTBuscador from '../components/UTBuscador.jsx';

class ConsultaSkill extends Component {

  constructor() {
    super();
    this.state = {
      colaboradoress: colaboradores,
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

    let colaboradores = this.state.colaboradoress;

    const seleccionados = colaboradores.filter((e, i) => {
      return e.skills.filter((b, y) => {
        return b.Skill.toUpperCase() == termino.toUpperCase();
      }).length;
    })

    this.setState({ colaboradoress: seleccionados });
  }

  resetBusqueda = () => {
    this.setState({ colaboradoress: colaboradores });
  }

  render() {
    return (
      <div className="container">
        <div className="row" style={{ height:150}}>
          <div className="col-md-12 mt-5 ">
            <UTBuscador getBusqueda={this.getBusqueda} getLimpiar={this.resetBusqueda} />
          </div>
        
        </div>

        <div className="row ">
          <div className="col-md-12 ">
            <div className="row">
              <UTTarjeta colaboradores={this.state.colaboradoress} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultaSkill;