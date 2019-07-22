import React, { Component } from 'react';
import UTTextFields from './UTTextFields';
import UTDatePicker from './UTDatePicker';
import UTMultiSelect from './UTMultiSelect';
import UTSelect from './UTSelect';





class Formulario extends Component {

    constructor() {
        super();
        this.state = {
            SSA: "ACC-24680",
            nombre: "Modularizacion canal NBL",
            descripcion: "Una brave descripcion para saber de que trata la Licitacion",
            fechaCreacion: new Date("01-01-2019"),
            fechaRespuesta: "29-01-2019",
            responsable: "Pablo cornejo",
            estado: "En Curso",
            skills: ["Mongo DB", "Express", "Angular", "Node.js"]
        };

        this.hadleInput = this.hadleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    hadleInput(e) {

        if (e.target) {
            const { value, name } = e.target;
            this.setState({
                [name]: value
            });
            

        } else {
            this.setState({
                fechaRespuesta: e
            });
        }
        console.log(e.target.value);

    }
    hadleInput2 = (event) => {
        this.setState({
            fechaRespuesta: event
        });
    }

    hadleInput3 = (event) => {
        this.setState({
            skills: event
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.state);
        this.props.onAddTodo(this.state);

    }

    render() {
        return (

            <div className="Formulario">
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <UTTextFields
                            label="Licitación SSA"
                            name="SSA"
                            onChange={this.hadleInput}
                            margin="normal"
                        />
                    </div>
                    <div className="form-group">
                        <UTTextFields
                            label="Nombre"
                            name="nombre"
                            onChange={this.hadleInput}
                            margin="normal"
                        />
                    </div>
                    <div className="form-group">
                        <UTTextFields
                            id="standard-name"
                            label="Descripcion"
                            name="descripcion"
                            onChange={this.hadleInput}
                            margin="normal"
                        />
                    </div>
                    <div className="form-group">
                        <UTTextFields
                            id="standard-name"
                            label="Responsable"
                            name="responsable"
                            onChange={this.hadleInput}
                            margin="normal"
                        />
                    </div>
                    <div className="form-group">
                        <UTSelect
                            name="estado"
                            onChange={this.hadleInput}
                        />
                    </div>
                    <div className="form-group">
                        <UTDatePicker
                            onGetData={this.hadleInput2}
                        />
                    </div>
                    <div className="form-group">
                        <UTMultiSelect
                            name="skill"
                            onChange={this.hadleInput3}
                        />
                    </div>
                    <div className="form-group">

                    </div>

                   
                    <button type="submit" className="btn btn-dark"> GUARDAR</button>

                </form>
            </div>
        );
    }
}
export default Formulario;