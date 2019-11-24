import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearHitos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombreHito: "",
        fecha: "",
        features: "",
        estado: ""
    };
    this.crearHito = this.crearHito.bind(this);
  }

  crearHito() {
    let hito = {
        nombreHito: this.state.nombreHito,
        fecha: this.state.fecha,
        features: this.state.features,
        estado: this.state.estado
    };
    this.props.agregarHito(hito);
    this.props.intercambiarTablaCrearHitos();
  }
  render() {
    return (
        <div className="crear-tarea" hidden={!this.props.mostrarCrearHitos}>
            <div className="texto-informacion">
                Ingrese el nombre del hito
            </div>
            <TextField
                variant="outlined"
                value={this.state.nombreHito}
                onChange={event => this.setState({ nombreHito: event.target.value })}
                // error={text === ""}
                // helperText={text === "" ? 'Empty field!' : ' '}
            />
            <div className="texto-informacion">
                Ingrese fecha
            </div>
            <TextField
                variant="outlined"
                value={this.state.fecha}
                onChange={event => this.setState({ fecha: event.target.value })}
            />
            <div className="texto-informacion">
                Ingese features
            </div>
            <TextField
                variant="outlined"
                value={this.state.features}
                onChange={event => this.setState({ features: event.target.value })}
            />
            <div className="texto-informacion">
                Ingrese el estado
            </div>
            <TextField
                variant="outlined"
                value={this.state.estado}
                onChange={event => this.setState({ estado: event.target.value })}
            />
            <div className="ui grid">
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.crearHito}>
                        Agregar Hito
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.props.intercambiarTablaCrearHitos}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
  }
}

export default CrearHitos;
