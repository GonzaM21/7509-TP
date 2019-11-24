import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearIteracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombreIteracion: "",
        fechaInicio: "",
        fechaDeFinalizacion: "",
        capacidadEquipo: "",
        hitos: "",
        tareas: ""
    };
    this.crearIteracion = this.crearIteracion.bind(this);
  }

  crearIteracion() {
    let iteracion = {
        nombreIteracion: this.state.nombreIteracion,
        fechaInicio: this.state.fechaInicio,
        fechaDeFinalizacion: this.state.fechaDeFinalizacion,
        capacidadEquipo: this.state.capacidadEquipo,
        hitos: this.state.hitos,
        tareas: this.state.tareas
    };
    
    this.props.agregarIteracion(iteracion);
    this.props.intercambiarEntreTablaYCrear();
  }
  render() {
    
    return (
      <div className="crear-iteracion" hidden={!this.props.mostrarCrearIteraciones}>
        <div className="texto-informacion">
            Ingrese el nombre de la iteracion
        </div>
        <TextField
            variant="outlined"
            value={this.state.nombreIteracion}
            onChange={event => this.setState({ nombreIteracion: event.target.value })}
            // error={text === ""}
            // helperText={text === "" ? 'Empty field!' : ' '}
        />
        <div className="texto-informacion">
            Ingrese fecha de inicio
        </div>
        <TextField
            variant="outlined"
            value={this.state.fechaInicio}
            onChange={event => this.setState({ fechaInicio: event.target.value })}
        />
        <div className="texto-informacion">
            Ingrese fecha de finalizacion
        </div>
        <TextField
            variant="outlined"
            value={this.state.fechaDeFinalizacion}
            onChange={event => this.setState({ fechaDeFinalizacion: event.target.value })}
        />
        <div className="texto-informacion">
            Ingrese capacidad del equipo
        </div>
        <TextField
            variant="outlined"
            value={this.state.capacidadEquipo}
            onChange={event => this.setState({ capacidadEquipo: event.target.value })}
        />
        <div className="texto-informacion">
            Ingrese hitos
        </div>
        <TextField
            variant="outlined"
            value={this.state.hitos}
            onChange={event => this.setState({ hitos: event.target.value })}
        />
        <div className="texto-informacion">
            Ingrese tareas
        </div>
        <TextField
            variant="outlined"
            value={this.state.tareas}
            onChange={event => this.setState({ tareas: event.target.value })}
        />
        <div className="ui grid">
            <div className="two wide column">
                <Button variant="contained" color="primary" onClick={this.crearIteracion}>
                    Aceptar
                </Button>
            </div>
            <div className="two wide column">
                <Button variant="contained" color="primary" onClick={this.props.intercambiarEntreTablaYCrear}>
                    Cancelar
                </Button>
            </div>
        </div>
      </div>
    );
  }
}

export default CrearIteracion;
