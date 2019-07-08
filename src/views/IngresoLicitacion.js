import React, { Component } from 'react';
import Formulario from '../components/Formulario';
import Licitacion from '../components/Licitacion';
//import { licitaciones } from '../licitaciones.json';
import firebase from 'firebase';
import { DB_CONFIG } from '../config/config';
import 'firebase/database';



class IngresoLicitacion extends Component {

  constructor() {
    super();
    this.state = {
      licitaciones: []
    }
    this.handleAddLicitacion = this.handleAddLicitacion.bind(this);
    this.removeLicitacion = this.removeLicitacion.bind(this);
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app.database().ref().child('licitaciones');

  }

  componentDidMount() {
    const licitaciones = this.state.licitaciones
    this.db.on('child_added', snap => {
      licitaciones.push({
        id: snap.key,
        nombre: snap.val().nombre,
        descripcion: snap.val().descripcion,
        fechaCreacion: snap.val().fechaCreacion,
        fechaRespuesta: snap.val().fechaRespuesta,
        responsable: snap.val().responsable,
        estado: snap.val().estado
      });
      this.setState(licitaciones)
      //console.log(this.state);
    });

    this.db.on('child_removed', snap => {

      for (let i = 0; i < licitaciones.length; i++) {
        if (licitaciones[i] = snap.key) {
          licitaciones.splice(i, 1)
        }
      }
      this.setState(licitaciones);
    })
  }

  handleAddLicitacion(licitacion) {

    this.db.push().set(licitacion)
    console.log(licitacion);
  }

  removeLicitacion(id) {

    this.db.child(id).remove();
  }

  render() {

    const licitaciones = this.state.licitaciones.map((data, i) => {
      return (
        <Licitacion key={i} data={data} removeLicit={this.removeLicitacion} />
      )
    });

    return (
      <div className="row mt-4">
        <div className="col-md-3 mt-4 p-4 bg-primary">
          <Formulario onAddTodo={this.handleAddLicitacion} />
        </div>
        <div className="col-md-9 ">
          {licitaciones}
        </div>
      </div>
    );
  }
}

export default IngresoLicitacion;