import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IntegrationReactSelect from './Multiselect';
import MaterialUIPickers from './DatePicker';




class Formulario extends Component {

    constructor() {
        super();
        this.state = {
            nombre: "",
            descripcion: "",
            fechaCreacion: new Date(),
            fechaRespuesta: "",
            responsable: "",
            estado: ""
        };

        this.hadleInput = this.hadleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    hadleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        //console.log("Enviando data...");
        //console.log(this.state);
    }

    render() {
        return (
            <div className="Formulario">
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="Ingrese Licitación SSA"
                            onChange={this.hadleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Descripcion"
                            onChange={this.hadleInput}
                        />
                    </div>
                    <div className="form-group">
                        <TextField
                            type="date"
                            name="fechaRespuesta"
                            className="form-control"
                            defaultValue="Fecha Respuesta"
                            onChange={this.hadleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            name="responsable"
                            className="form-control"
                            placeholder="Estado SSA"
                            onChange={this.hadleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="estado"
                            className="form-control"
                            //value={this.state.prioridad}
                            onChange={this.hadleInput}
                        >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <IntegrationReactSelect />
                    </div>
                    <div className="form-group">
                        <MaterialUIPickers />
                    </div>
                    <Button type="submit" variant="contained" color="primary">
                        Guardar
                    </Button>

                </form>
            </div>
        );
    }
}
export default Formulario;