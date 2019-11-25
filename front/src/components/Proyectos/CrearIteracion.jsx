import React from "react";
import { Button, TextField, FormControl, Select, MenuItem } from "@material-ui/core";
import moment from "moment";

class CrearIteracion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombreIteracion: "",
        fechaInicio: "",
        fechaDeFinalizacion: "",
        capacidadEquipo: "",
        hitos: "",
        tareas: "",
        nombreIteracionVacio: false,
        fechaInicioInvalida: false,
        fechaFinalizacionInvalida: false,
        capacidadInvalida: false
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
    
    let fin = moment(this.state.fechaDeFinalizacion, "DD/MM/YYYY");
    let inicio = moment(this.state.fechaInicio, "DD/MM/YYYY");

    if (this.state.nombreIteracion === "") {
        this.state.nombreIteracionVacio = true;
        this.setState({
            nombreIteracionVacio: true
        });
    } else {
        this.state.nombreIteracionVacio = false;
        this.setState({
            nombreIteracionVacio: false
        });
    } if (! fin.isValid() || !(this.state.fechaDeFinalizacion.split("/").length === 3)) {
        this.state.fechaFinalizacionInvalida = true;
    } else {
        this.state.fechaFinalizacionInvalida = false;
    } if (! inicio.isValid() || !(this.state.fechaInicio.split("/").length === 3)) {
        this.state.fechaInicioInvalida = true;
    } else {
        this.state.fechaInicioInvalida = false;
    } 
    if (isNaN(Number(this.state.capacidadEquipo)) || isNaN(parseInt(this.state.capacidadEquipo))) {
        this.state.capacidadInvalida = true;
        this.setState({
            capacidadInvalida: true
        });
    } else {
        this.state.capacidadInvalida = false;
        this.setState({
            capacidadInvalida: false
        });
    } if (! this.state.nombreIteracionVacio && ! this.state.fechaInicioInvalida && ! this.state.fechaFinalizacionInvalida
        && ! this.state.capacidadInvalida) {
        this.props.agregarIteracion(iteracion);
        this.props.intercambiarEntreTablaYCrear();
    }
}
  render() {
    
    return (
      <div className="crear-iteracion" hidden={!this.props.mostrarCrearIteraciones}>
        <div className="texto-informacion">
            Ingrese el nombre de la iteracion
        </div>
        <TextField
            id="nombre-iteracion"
            variant="outlined"
            value={this.state.nombreIteracion}
            aria-required="true"
            aria-invalid={this.state.nombreIteracionVacio}
            onChange={event => this.setState({ nombreIteracion: event.target.value })}
            error={this.state.nombreIteracionVacio}
            helperText={this.state.nombreIteracionVacio? 'Campo vacio' : ' '}
            />
        <div className="texto-informacion">
            Ingrese fecha de inicio
        </div>
        <TextField
            id="fecha-inicio-iteracion"
            variant="outlined"
            value={this.state.fechaInicio}
            aria-required="true"
            aria-invalid={this.state.fechaInicioInvalida}
            onChange={event => this.setState({ fechaInicio: event.target.value })}
            error={this.state.fechaInicioInvalida}
            helperText={this.state.fechaInicioInvalida? 'Fecha inválida' : ' '}
        />
        <div className="texto-informacion">
            Ingrese fecha de finalizacion
        </div>
        <TextField
            id="fecha-fin-iteracion"
            variant="outlined"
            value={this.state.fechaDeFinalizacion}
            aria-required="true"
            aria-invalid={this.state.fechaFinalizacionInvalida}
            onChange={event => this.setState({ fechaDeFinalizacion: event.target.value })}
            error={this.state.fechaFinalizacionInvalida}
            helperText={this.state.fechaFinalizacionInvalida? 'Fecha inválida' : ' '}
        />
        <div className="texto-informacion">
            Ingrese capacidad del equipo
        </div>
        <TextField
            id="capacidad-iteracion"
            variant="outlined"
            value={this.state.capacidadEquipo}
            aria-required="true"
            aria-invalid={this.state.capacidadInvalida}
            onChange={event => this.setState({ capacidadEquipo: event.target.value })}
            error={this.state.capacidadInvalida}
            helperText={this.state.capacidadInvalida? 'La capacidad debe ser numérica': ' '}
        />
        <div className="texto-informacion">
            Ingrese hitos
        </div>
        <FormControl className="form-input">
            <Select
                labelId="label-tipo-tarea"
                id="seleccionar-tareas"
                value={this.state.hitos}
                onChange={event => this.setState({ hitos: event.target.value })}
                error={this.state.tipoInvalido}
                helpertext={this.state.tipoInvalido? 'Tarea inválida': ''}
            >
            {
                this.props.hitos.map(hito => (
                    <MenuItem value={hito.nombreHito}>{hito.nombreHito}</MenuItem>
                ))
            }
            </Select>
        </FormControl>

        <div className="texto-informacion">
            Ingrese tareas
        </div>
        <FormControl className="form-input">
            <Select
                labelId="label-tipo-tarea"
                id="seleccionar-tareas"
                value={this.state.tareas}
                onChange={event => this.setState({ tareas: event.target.value })}
                error={this.state.tipoInvalido}
                helpertext={this.state.tipoInvalido? 'Tarea inválida': ''}
            >
            {
                this.props.tareas.map(tarea => (
                    <MenuItem value={tarea.titulo}>{tarea.titulo}</MenuItem>
                ))
            }
            </Select>
        </FormControl>
        <div className="ui grid">
            <div className="two wide column">
                <Button id="boton-aceptar-iteracion" variant="contained" color="primary" onClick={this.crearIteracion}>
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
