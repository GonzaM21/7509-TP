import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearRiesgo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        probabilidadOcurrencia: "",
        impactoProyecto: "",
        exposicion: ""
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
    this.props.agregarRiesgos(riesgo);
    this.props.intercambiarTablaCrearRiesgo();
  }


  render() {
    return (
        <div className="crear-riesgo" hidden={!this.props.mostrarCrearRiesgo}>
            <div className="texto-informacion">
                Ingrese el nombre del riesgo
            </div>
            <TextField
                variant="outlined"
                value={this.state.nombre}
                onChange={event => this.setState({ nombre: event.target.value })}
                // error={text === ""}
                // helperText={text === "" ? 'Empty field!' : ' '}
            />
            <div className="texto-informacion">
                Ingrese la probabilidad de ocurrencia
            </div>
            <TextField
                variant="outlined"
                value={this.state.probabilidadOcurrencia}
                onChange={event => this.setState({ probabilidadOcurrencia: event.target.value })}
            />
            <div className="texto-informacion">
                Ingrese el impacto en el proyecto
            </div>
            <TextField
                variant="outlined"
                value={this.state.impactoProyecto}
                onChange={event => this.setState({ impactoProyecto: event.target.value })}
            />
            <div className="texto-informacion">
                Ingrese exposicion
            </div>
            <TextField
                variant="outlined"
                value={this.state.exposicion}
                onChange={event => this.setState({ exposicion: event.target.value })}
            />
            <div className="ui grid">
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.crearRiesgo}>
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
