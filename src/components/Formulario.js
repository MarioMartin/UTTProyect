import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
import UTTextFields from './UTTextFields';
import UTDatePicker from './UTDatePicker';
import UTMultiSelect from './UTMultiSelect';
import UTSelect from './UTSelect';





class Formulario extends Component {

    constructor() {
        super();
        this.state = {
            nombre: "",
            descripcion: "",
            fechaCreacion: new Date(),
            fechaRespuesta: "",
            responsable: "",
            estado: "",
            skills: []
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
            console.log(this.state);

        } else {
            this.setState({
                fechaRespuesta: e
            });
            console.log(this.state);

        }

    }

    //date
    hadleInput2 = (event) => {
        //alert(event);
        this.setState({
            fechaRespuesta: event
        });
        //console.log(this.state);

    }

    //multiselect
    hadleInput3 = (event) => {
        // alert(event);
        this.setState({
            skills: event
        });
        //console.log(this.state);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);

    }

    render() {
        return (

            <div className="Formulario">
                <form className="" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <UTTextFields

                            label="Licitación SSA"
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

                    <Button type="submit" variant="contained" color="primary">
                        Guardar
                    </Button>

                </form>
            </div>
        );
    }
}
export default Formulario;