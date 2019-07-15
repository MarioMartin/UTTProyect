import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './resource/styles.css';

export default class UTBuscador extends Component {

    busquedaRef = React.createRef();

    handlerDatos = (e) => {
        e.preventDefault();

        const valor = this.busquedaRef.current.value;
         this.props.getBusqueda(valor);

    }

    render() {
        return (
            <form onSubmit={this.handlerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input type="text" ref={this.busquedaRef} className="form-control form-control-lg" placeholder="Buscar Persona" />
                    </div>
                    <div className="form-group col-md-4">
                        <Button type="submit" variant="contained" color="primary" size="large" >
                            Buscar 
                        </Button>
                    </div>

                </div>
            </form>

        );
    }
}