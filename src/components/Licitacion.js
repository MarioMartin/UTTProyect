import React, { Component } from 'react';

class Licitacion extends Component {


    handlerRemove(id){
        const confirma = window.confirm("Estas seguro?")
        if(confirma){
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
                    <a href="#" className="btn btn-primary" onClick ={()=> this.handlerRemove(this.props.data.id)} >eliminar</a>
                </div>
            </div>
        );
    }
}
export default Licitacion;