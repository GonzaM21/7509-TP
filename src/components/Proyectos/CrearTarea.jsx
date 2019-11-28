import React from "react";
import { Button, TextField, Select, MenuItem, FormControl, InputAdornment, Input } from "@material-ui/core";

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
        requisito: "",
        desarrolladorAsignado: "",
        tituloTareaVacio: false,
        descripcionTareaVacia: false,
        prioridadInvalida: false,
        estadoInvalido: false,
        requisitoInvalido: false,
        tiempoEstimadoInvalido: false
    }
    this.crearTarea = this.crearTarea.bind(this);
  }

  crearTarea() {
    const estados = ['Asignada', 'En tiempo', 'Atrasada', 'Pausada', 'Terminada'];
    var idx_estado = parseInt(this.state.estado)

    var tarea = {
        prioridad: this.state.prioridad,
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        tiempoReal: "0 Hs",
        tiempoEstimado: this.state.tiempoEstimado,
        estado: estados[idx_estado],
        requisito: this.state.requisito,
        desarrolladorAsignado: this.state.desarrolladorAsignado
    };

    let puedeCrearTarea = true;
    
    if (this.state.titulo === "") {
        puedeCrearTarea = false;
        this.setState({
            tituloTareaVacio: true
        });
    } else {
        this.setState({
            tituloTareaVacio: false
        });
    } 
    
    if (this.state.descripcion === "") {
        puedeCrearTarea = false;
        this.setState({
            descripcionTareaVacia: true
        });
    } else {
        this.setState({
            descripcionTareaVacia: false
        });
    } 
    
    if (isNaN(Number(this.state.prioridad)) || isNaN(parseInt(this.state.prioridad))) {
        puedeCrearTarea = false;
        this.setState({
            prioridadInvalida: true
        });
    } else {
        this.setState({
            prioridadInvalida: false
        });
    }
    
    if (this.state.estado === "") {
        puedeCrearTarea = false;
        this.setState({
            estadoInvalido: true
        });
    } else {
        this.setState({
            estadoInvalido: false
        });
    }
    
    if ((this.state.estado === "No asignada" && this.state.desarrolladorAsignado !== '') ||
        (this.state.estado in estados && this.state.desarrolladorAsignado === '')) {
        puedeCrearTarea = false;
        this.setState({
            desarrrolladorInvalido: true
        });
    } else {
        this.setState({
            desarrrolladorInvalido: false
        });
    }
    
    if (this.state.requisito === "") {
        puedeCrearTarea = false;
        this.setState({
            requisitoInvalido: true
        });
    } else {
        this.setState({
            requisitoInvalido: false
        });
    }

    if (isNaN(Number(this.state.tiempoEstimado)) || isNaN(parseFloat(this.state.tiempoEstimado))) {
        puedeCrearTarea = false;
        this.setState({
            tiempoEstimadoInvalido: true
        });
    } else {
        this.setState({
            tiempoEstimadoInvalido: false
        });
    } 
    if (puedeCrearTarea) {
        this.props.agregarTareas(tarea);
        this.props.intercambiarVisibilidadTablaCrear();
    }
     
  }

  render() {    
    return (

        <div className="crear-tarea" hidden={!this.props.mostrarCrearTareas}>
            <div className="texto-informacion">
                Ingrese el titulo de la tarea
            </div>
            <TextField
                id="nombre-tarea"
                variant="outlined"
                value={this.state.titulo}
                aria-required="true"
                aria-invalid={this.state.tituloTareaVacio}
                onChange={event => this.setState({ titulo: event.target.value })}
                error={this.state.tituloTareaVacio}
                helperText={this.state.tituloTareaVacio? 'Campo vacio' : ' '}
            />
            <div className="texto-informacion">
                Ingrese descripcion de la tarea
            </div>
            <TextField
                id="descripcion-tarea"
                variant="outlined"
                value={this.state.descripcion}
                aria-required="true"
                aria-invalid={this.state.descripcionTareaVacia}
                onChange={event => this.setState({ descripcion: event.target.value })}
                error={this.state.descripcionTareaVacia}
                helperText={this.state.descripcionTareaVacia? 'Campo vacio': ' '}
            />
            <div className="texto-informacion">
                Ingrese prioridad
            </div>
            <TextField
                id="prioridad-tarea"
                variant="outlined"
                value={this.state.prioridad}
                aria-required="true"
                aria-invalid={this.state.prioridadInvalida}
                onChange={event => this.setState({ prioridad: event.target.value })}
                error={this.state.prioridadInvalida}
                helperText={this.state.prioridadInvalida? 'Campo vacio': ' '}
            />

            <div className="texto-informacion">
                Ingrese el tiempo estimado de realizacion
            </div>

            <FormControl className="form-tiempo">
                <Input
                id="tiempo-tarea"
                variant="outlined"
                aria-required="true"
                aria-invalid={this.state.tiempoEstimadoInvalido}
                value={this.state.tiempoEstimado}
                onChange={event => this.setState({ tiempoEstimado: event.target.value })}
                endAdornment={<InputAdornment position="end">Hs</InputAdornment>}
                error={this.state.tiempoEstimadoInvalido}
                helpertext={this.state.tiempoEstimadoInvalido? 'Tiempo estimado inválido': ' '}
                />
            </FormControl>
            
            <div className="texto-informacion">
                Ingrese el estado inicial
            </div>
            <FormControl className="form-input">
            <Select
                labelId="label-tipo-tarea"
                id="tipo-tarea"
                value={this.state.estado}
                onChange={event => this.setState({ estado: event.target.value })}
                error={this.state.estadoInvalido}
                helpertext={this.state.estadoInvalido? 'Tipo inválido': ''}
            >
            <MenuItem value={5}>No asignada</MenuItem>
            <MenuItem value={0}>Asignada</MenuItem>
            <MenuItem value={1}>En tiempo</MenuItem>
            <MenuItem value={2}>Atrasada</MenuItem>
            <MenuItem value={3}>Pausada</MenuItem>
            <MenuItem value={4}>Terminada</MenuItem>
            </Select>
            </FormControl>

            <div className="texto-informacion">
                Ingrese requisito asociado
            </div>
            <FormControl className="form-input">
                <Select
                    labelId="label-requisito-tarea"
                    id="requisito-tareas"
                    value={this.state.requisito}
                    onChange={event => this.setState({ requisito: event.target.value })}
                    error={this.state.requisitoInvalido}
                    helpertext={this.state.requisitoInvalido? 'Requisito inválida': ''}
                >
                {
                    this.props.requisitos.map((requisito, i) => (
                        <MenuItem key={i} value={requisito.nombreRequisito}>{requisito.nombreRequisito}</MenuItem>
                    ))
                }
                </Select>
            </FormControl>
            <div className="texto-informacion">
                Ingrese desarrollador a tomar la tarea
            </div>
            <TextField
                id="desarrollador-tarea"
                variant="outlined"
                value={this.state.desarrolladorAsignado}
                onChange={event => this.setState({ desarrolladorAsignado: event.target.value })}
                error={this.state.desarrrolladorInvalido}
                helperText={this.state.desarrrolladorInvalido? 'El estado de la tarea es incoherente con el campo': ' '}
            />
            <div className="ui grid">
                <div className="two wide column">
                    <Button id="boton-aceptar-tarea" variant="contained" color="primary" onClick={this.crearTarea}>
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
