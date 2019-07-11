import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Licitacion extends Component {

    constructor() {
        super();
        this.state = {
            licitacion: {}
        };
    }

    handlerRemove(id) {
        const confirma = window.confirm("Estas seguro?")
        if (confirma) {
            this.props.removeLicit(id);
        }

    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header text-left">
                    <h5 className="text-left"> {this.props.data.nombre}</h5>
                </div>
                <div className="card-body">
                    <h6 className="card-title">Special title treatment</h6>
                    <p className="card-text">{this.props.data.descripcion}</p>
                    <p className="card-text">{this.props.data.fechaCreacion}</p>
                </div>
                <div className="card-footer">
                    {/*<a href="#" className="btn btn-primary" onClick={() => this.handlerRemove(this.props.data.id)} >eliminar</a>*/}

                    <Link to={{
                        pathname: '/consultaLicitacion',
                        state: {
                            licitacion: this.props.data
                        }
                    }}>Buscar Candidatos</Link>
                </div>
            </div>
        );
    }
}
export default Licitacion;