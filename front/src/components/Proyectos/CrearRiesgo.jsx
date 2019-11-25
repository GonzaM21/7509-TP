import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearRiesgo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        probabilidadOcurrencia: "",
        impactoProyecto: "",
        exposicion: "",
        nombreRiesgoVacio: false,
        probabilidadInvalida: false,
        impactoInvalido: false
    }
    this.crearRiesgo = this.crearRiesgo.bind(this);
  }

  crearRiesgo() {
    var riesgo = {
        nombre: this.state.nombre,
        probabilidadOcurrencia: this.state.probabilidadOcurrencia,
        impactoProyecto: this.state.impactoProyecto,
        exposicion: this.state.exposicion
    };

    if (this.state.nombre === "") {
        this.state.nombreRiesgoVacio = true;
        this.setState({
            nombreRiesgoVacio: true
        });
    } else {
        this.state.nombreRiesgoVacio = false;
        this.setState({
            nombreRiesgoVacio: false
        });
    } if (isNaN(parseFloat(this.state.probabilidadOcurrencia)) || parseFloat(this.state.probabilidadOcurrencia)> 1) {
        this.state.probabilidadInvalida = true;
    } else {
        this.state.probabilidadInvalida = false;
    } if (isNaN(parseFloat(this.state.impactoProyecto)) || parseFloat(this.state.impactoProyecto)> 1) {
        this.state.impactoInvalido = true;
    } else {
        this.state.impactoInvalido = false;
    } if (! this.state.nombreRiesgoVacio && ! this.state.impactoInvalido && ! this.state.probabilidadInvalida) {
        this.props.agregarRiesgos(riesgo);
        this.props.intercambiarTablaCrearRiesgo();
    }
  }

  render() {
    return (
        <div className="crear-riesgo" hidden={!this.props.mostrarCrearRiesgo}>
            <div className="texto-informacion">
                Ingrese el nombre del riesgo
            </div>
            <TextField
                id="nombre-riesgo"
                variant="outlined"
                value={this.state.nombre}
                aria-required="true"
                aria-invalid={this.state.nombreRiesgoVacio}
                onChange={event => this.setState({ nombre: event.target.value })}
                error={this.state.nombreRiesgoVacio}
                helperText={this.state.nombreRiesgoVacio? 'Campo vacio' : ' '}
            />
            <div className="texto-informacion">
                Ingrese la probabilidad de ocurrencia
            </div>
            <TextField
                id="probabilidad-riesgo"
                variant="outlined"
                value={this.state.probabilidadOcurrencia}
                aria-required="true"
                aria-invalid={this.state.probabilidadInvalida}
                onChange={event => this.setState({ probabilidadOcurrencia: event.target.value })}
                error={this.state.probabilidadInvalida}
                helperText={this.state.probabilidadInvalida? 'Ingrese una probabilidad entre 0 y 1': ' '}
            />
            <div className="texto-informacion">
                Ingrese el impacto en el proyecto
            </div>
            <TextField
                id="impacto-riesgo"
                variant="outlined"
                value={this.state.impactoProyecto}
                aria-required="true"
                aria-invalid={this.state.impactoProyecto}
                onChange={event => this.setState({ impactoProyecto: event.target.value })}
                error={this.state.impactoInvalido}
                helperText={this.state.impactoInvalido? 'Ingrese un impacto entre 0 y 1': ' '}
            />
            <div className="ui grid">
                <div className="two wide column">
                    <Button id="boton-aceptar-riesgo" variant="contained" color="primary" onClick={this.crearRiesgo}>
                        Aceptar
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.props.intercambiarTablaCrearRiesgo}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
  }
}

export default CrearRiesgo;
