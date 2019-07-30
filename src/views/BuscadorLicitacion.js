import React, { Component } from 'react';
import UTBuscador from '../components/UTBuscador.jsx';
import UTCardLicitacion from '../components/UTCardLicitacion';

import firebase from 'firebase';
import { DB_CONFIG } from '../config/config';
import 'firebase/database';

class BusadorLicitacion extends Component {

  constructor() {
    super();
    this.state = {
        licitaciones: [],
        totalLicitaciones: [],
      termino: "",
    }
    this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
    this.db = this.app.database().ref().child('licitaciones');
  }

  componentDidMount() {
    const licitaciones = this.state.licitaciones
    this.db.on('child_added', snap => {
      licitaciones.push({
        id: snap.key,
        SSA: snap.val().SSA,
        nombre: snap.val().nombre,
        descripcion: snap.val().descripcion,
        fechaCreacion: snap.val().fechaCreacion,
        fechaRespuesta: snap.val().fechaRespuesta,
        responsable: snap.val().responsable,
        estado: snap.val().estado,
        skills:snap.val().skills,
      });
      this.setState({licitaciones:licitaciones})
      this.setState({totalLicitaciones:licitaciones})
    });

    this.db.on('child_removed', snap => {

        for (let i = 0; i < licitaciones.length; i++) {
          if (licitaciones[i] = snap.key) {
            licitaciones.splice(i, 1)
          }
        }
        this.setState({licitaciones:licitaciones})
      this.setState({totalLicitaciones:licitaciones})
      })
    }

  getBusqueda = (termino) => {

    let licitaciones = this.state.licitaciones;

    const seleccionados = licitaciones.filter((e, i) => {
        return e.SSA.toUpperCase() === termino.toUpperCase();
    })

    this.setState({ licitaciones: seleccionados });
  }

  resetBusqueda = () => {
    this.setState({ licitaciones: this.state.totalLicitaciones });
  }

  render() {

    const licitaciones = this.state.licitaciones.map((data, i) => {
        return (
          <UTCardLicitacion key={i} data={data} />
        )
      });
    return (
      <div className="container">
        <div className="row" style={{ height:150}}>
          <div className="col-md-12 mt-5 ">
            <UTBuscador getBusqueda={this.getBusqueda} getLimpiar={this.resetBusqueda} />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 ">
           
            {licitaciones}
            
          </div>
        </div>
      </div>
    );
  }
}

export default BusadorLicitacion;