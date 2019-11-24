import React from "react";
import { Button, TextField } from "@material-ui/core";
import moment from "moment";

class CrearProyecto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        prioridad: "",
        tipo: "",
        lider: "",
        version: "",
        estado: "",
        limiteDeRiesgo: "",
        fechaDeFinalizacion: "",
        nombreVacio: false,
        fechaInvalida: false
    }
    this.crearProyecto = this.crearProyecto.bind(this);
  }

  crearProyecto() {
    var proyecto = {
        prioridad: this.state.prioridad,
        nombre: this.state.nombre,
        version: this.state.version,
        lider: this.state.lider,
        tipo: this.state.tipo,
        estado: this.state.estado,
        tareas: [],
        riesgos: [],
        iteraciones: [],
        hitos: [],
        limiteDeRiesgo: this.state.limiteDeRiesgo,
        fechaEstimadaDeFinalizacion: this.state.fechaDeFinalizacion,
        mostrarBotones: true
    };
    
    let date = moment(this.state.fechaDeFinalizacion, "DD/MM/YYYY");

    if (this.state.nombre === "") {
        this.setState({
            nombreVacio: true
        });
    } else if (!date.isValid() || !(this.state.fechaDeFinalizacion.split("/").length === 3)) {
        this.setState({
            fechaInvalida: true
        });
    } else {
        this.setState({
            nombreVacio: false,
            fechaInvalida: false
        })
        this.props.agregarNuevoProyecto(proyecto);
    }
  }

  render() {
    
    return (
      <div className="crear-proyecto" hidden={!this.props.mostrarCrearProyectos}>
          <div className="wrapper">
            <div className="texto-informacion">
                Ingrese el nombre del proyecto
            </div>
            <TextField
                variant="outlined"
                value={this.state.nombre}
                onChange={event => this.setState({ nombre: event.target.value })}
                error={this.state.nombreVacio === true}
                helperText={this.state.nombreVacio? 'Campo vacio' : ' '}
            />
            <div className="texto-informacion">
                Ingrese prioridad del proyecto
            </div>
            <TextField
                variant="outlined"
                value={this.state.prioridad}
                onChange={event => this.setState({ prioridad: event.target.value })}
                
            />
            <div className="texto-informacion">
                Ingrese el tipo de proyecto
            </div>
            <TextField
                variant="outlined"
                value={this.state.tipo}
                onChange={event => this.setState({ tipo: event.target.value })}
                
            />
            <div className="texto-informacion">
                Ingrese el lider del proyecto
            </div>
            <TextField
                value={this.state.lider}
                onChange={event => this.setState({ lider: event.target.value })}
                
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese version del proyecto
            </div>
            <TextField
                value={this.state.version}
                onChange={event => this.setState({ version: event.target.value })}
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese estado del proyecto
            </div>
            <TextField
                value={this.state.estado}
                onChange={event => this.setState({ estado: event.target.value })}
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese limite de riesgo del proyecto
            </div>
            <TextField
                value={this.state.limiteDeRiesgo}
                onChange={event => this.setState({ limiteDeRiesgo: event.target.value })}
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese fecha estimada de finalizacion
            </div>
            <TextField
                value={this.state.fechaDeFinalizacion}
                onChange={event => this.setState({ fechaDeFinalizacion: event.target.value })}
                variant="outlined"
                error={this.state.fechaInvalida}
                helperText={this.state.fechaInvalida? 'Campo invalido' : ' '}
            />
            <div className="ui grid botones-aceptar-cancelar">
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.crearProyecto}>
                        Aceptar
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.props.volverDeProyectos}>
                        Cancelar
                    </Button>
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default CrearProyecto;
