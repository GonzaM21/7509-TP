import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearTarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        prioridad: "",
        titulo: "",
        descripcion: "",
        tiempoReal: "",
        tiempoEstimado: "",
        estado: "",
        desarrolladorAsignado: ""
    }
    this.crearTarea = this.crearTarea.bind(this);
  }

  crearTarea() {
    var tarea = {
        prioridad: this.state.prioridad,
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        tiempoReal: "0 Hs",
        tiempoEstimado: this.state.tiempoEstimado,
        estado: this.state.estado,
        desarrolladorAsignado: this.state.desarrolladorAsignado
    };
    this.props.agregarTareas(tarea);
    this.props.intercambiarVisibilidadTablaCrear();
  }

  render() {
    
    return (
        <div className="crear-tarea" hidden={!this.props.mostrarCrearTareas}>
            <div className="texto-informacion">
                Ingrese el titulo de la tarea
            </div>
            <TextField
                variant="outlined"
                value={this.state.titulo}
                onChange={event => this.setState({ titulo: event.target.value })}
                // error={text === ""}
                // helperText={text === "" ? 'Empty field!' : ' '}
            />
            <div className="texto-informacion">
                Ingrese descripcion de la tarea
            </div>
            <TextField
                variant="outlined"
                value={this.state.descripcion}
                onChange={event => this.setState({ descripcion: event.target.value })}
            />
            <div className="texto-informacion">
                Ingese prioridad
            </div>
            <TextField
                variant="outlined"
                value={this.state.prioridad}
                onChange={event => this.setState({ prioridad: event.target.value })}
            />
            <div className="texto-informacion">
                Ingrese el tiempo estimado de realizacion
            </div>
            <TextField
                variant="outlined"
                value={this.state.tiempoEstimado}
                onChange={event => this.setState({ tiempoEstimado: event.target.value })}
            />
            <div className="texto-informacion">
                Ingrese estado inicial
            </div>
            <TextField
                variant="outlined"
                value={this.state.estado}
                onChange={event => this.setState({ estado: event.target.value })}
            />
            <div className="texto-informacion">
                Ingrese desarrollador
            </div>
            <TextField
                variant="outlined"
                value={this.state.desarrolladorAsignado}
                onChange={event => this.setState({ desarrolladorAsignado: event.target.value })}
            />
            <div className="ui grid">
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.crearTarea}>
                        Aceptar
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.props.intercambiarVisibilidadTablaCrear}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
  }
}

export default CrearTarea;
