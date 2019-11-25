import React from "react";
import { Button, TextField, Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
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
        limiteExposicion: "",
        fechaDeFinalizacion: "",
        nombreProyectoVacio: false,
        fechaInvalida: false,
        prioridadInvalida: false,
        nombreLiderProyectoVacio: false,
        versionInvalida: false,
        tipoInvalido: false,
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
        tareas: [],
        riesgos: [],
        iteraciones: [],
        hitos: [],
        limiteExposicion: this.state.limiteExposicion,
        fechaEstimadaDeFinalizacion: this.state.fechaDeFinalizacion,
        mostrarBotones: true
    };
    
    let date = moment(this.state.fechaDeFinalizacion, "DD/MM/YYYY");
    if (this.state.nombre === "") {
        this.state.nombreProyectoVacio = true;
    } else {
        this.state.nombreProyectoVacio = false;
    }    
    if (!date.isValid() || !(this.state.fechaDeFinalizacion.split("/").length === 3)) {
        this.state.fechaInvalida = true;
    } else {
        this.state.fechaInvalida = false;
    } if (isNaN(Number(this.state.prioridad)) || isNaN(parseInt(this.state.prioridad))) {
        this.state.prioridadInvalida = true;
        this.setState({
            prioridadInvalida: true
        });
    } else {
        this.state.prioridadInvalida = false;
        this.setState({
            prioridadInvalida: false
        });
    } if (this.state.lider === "") {
        this.state.nombreLiderProyectoVacio = true;
    } else {
        this.state.nombreLiderProyectoVacio = false;
    } if (isNaN(parseInt(this.state.version))) {
        this.state.versionInvalida = true
    } else {
        this.state.versionInvalida = false
    } if (isNaN(parseFloat(this.state.limiteExposicion))) {
        this.state.limiteExposicionInvalido = true;
    } else {
        this.state.limiteExposicionInvalido = false;
    } if (this.state.tipo == "") {
        this.state.tipoInvalido = true;
        this.setState({
            tipoInvalido: true
        })
    } else {
        this.state.tipoInvalido = false;
        this.setState({
            tipoInvalido: false
        })
    } 
    if (this.state.nombreProyectoVacio == false && this.state.fechaInvalida == false && this.state.prioridadInvalida == false &&
        this.state.nombreLiderProyectoVacio == false && this.state.versionInvalida == false && this.state.limiteExposicionInvalido == false &&
        this.state.tipoInvalido == false) {
        this.props.agregarNuevoProyecto(proyecto);
    } 
  }

  render() {
    
    return (
      <div className="crear-proyecto" hidden={!this.props.mostrarCrearProyectos}>
          <div className="wrapper">
            <div className="texto-informacion">
                Ingrese el nombre del proycto
            </div>
            <TextField
                id="nombre-proyecto"
                variant="outlined"
                value={this.state.nombre}
                aria-required="true"
                aria-invalid={this.state.nombreProyectoVacio}
                onChange={event => this.setState({ nombre: event.target.value })}
                error={this.state.nombreProyectoVacio}
                helperText={this.state.nombreProyectoVacio? 'Campo vacio' : ' '}
            />
            <div className="texto-informacion">
                Ingrese prioridad del proyecto
            </div>
            <TextField
                id="prioridad-proyecto"
                variant="outlined"
                aria-required="true"
                aria-invalid={this.state.prioridadInvalida}
                value={this.state.prioridad}
                onChange={event => this.setState({ prioridad: event.target.value })}  
                error={this.state.prioridadInvalida}
                helperText={this.state.prioridadInvalida? 'Prioridad inválida': ' '}
            />
            <div className="texto-informacion">
                Ingrese el tipo de proyecto
            </div>

            <FormControl className="form-input">
            <Select
                labelId="label-tipo-proyecto"
                id="tipo-proyecto"
                value={this.state.tipo}
                onChange={event => this.setState({ tipo: event.target.value })}
                error={this.state.tipoInvalido}
                helperText={this.state.tipoInvalido? 'Tipo inválido': ''}
            >
            <MenuItem value={"Customizacion"}>Customizacion</MenuItem>
            <MenuItem value={"Desarrollo"}>Desarrollo</MenuItem>
            <MenuItem value={"Implementacion"}>Implementacion</MenuItem>
            </Select>
            </FormControl>

            <div className="texto-informacion">
                Ingrese el lider del proyecto
            </div>
            <TextField
                id="lider-proyecto"
                variant="outlined"
                aria-required="true"
                aria-invalid={this.state.nombreLiderProyectoVacio}
                value={this.state.lider}
                onChange={event => this.setState({ lider: event.target.value })}
                error={this.state.nombreLiderProyectoVacio}
                helperText={this.state.nombreLiderProyectoVacio? 'Campo vacío': ' '}
            />
            <div className="texto-informacion">
                Ingrese version del proyecto
            </div>
            <TextField
                id="version-proyecto"
                variant="outlined"
                aria-required="true"
                aria-invalid={this.state.versionInvalida}
                value={this.state.version}
                onChange={event => this.setState({ version: event.target.value })}
                error={this.state.versionInvalida}
                helperText={this.state.versionInvalida? 'Versión inválida': ' '}
            />
            <div className="texto-informacion">
                Ingrese limite de exposición del proyecto
            </div>
            <TextField
                id="riesgo-proyecto"
                variant="outlined"
                aria-required="true"
                aria-invalid={this.state.limiteExposicionInvalido}
                value={this.state.limiteExposicion}
                onChange={event => this.setState({ limiteExposicion: event.target.value })}
                error={this.state.limiteExposicionInvalido}
                helperText={this.state.limiteExposicionInvalido? 'Límite de exposición inválido': ' '}
            />
            <div className="texto-informacion">
                Ingrese fecha estimada de finalizacion
            </div>
            <TextField
                id="fecha-proyecto"
                variant="outlined"
                aria-required="true"
                aria-invalid={this.state.fechaInvalida}
                value={this.state.fechaDeFinalizacion}
                onChange={event => this.setState({ fechaDeFinalizacion: event.target.value })}
                error={this.state.fechaInvalida}
                helperText={this.state.fechaInvalida? 'Fecha inválida' : ' '}
            />
            <div className="ui grid botones-aceptar-cancelar">
                <div className="two wide column">
                    <Button id="boton-aceptar" variant="contained" color="primary" onClick={this.crearProyecto}>
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
