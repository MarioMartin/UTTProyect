import React, { Component } from 'react';
import { todos } from '../colaboradores.json';
import UTTarjeta from '../components/UTTarjeta';


class ConsultaSkill extends Component {

  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTarea = this.handleAddTarea.bind(this);
  }

  handleAddTarea(todos) {
    this.setState({
      todos: [...this.state.todos, todos]
    });
  }

  handlerRemoveTarea(id) {

    if (window.confirm("Esta Seguro de Eliminar")) {

      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== id;
        })
      })
    }
  }

  render() {

    const tarjetas = this.state.todos.map((data, i) => {
      return (

        <div className="col-md-4" key={i}>
          <UTTarjeta
            nombre={data.nombre}
            contrato={data.contrato}
            descripcion={data.descripcion}
            skills={data.skills}
          />

        </div>
      )
    });

    return (
      <div className="App" >


        <div className="container">
          <div className="row mt-4">
            <div className="col-2 text-center">

            </div>

            <div className="col-10 ">
              <div className="row ">
                {tarjetas}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsultaSkill;