import React from "react";
import { Button, TextField, FormControl, Select, MenuItem } from "@material-ui/core";
import moment from "moment";

class CrearRequisito extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombreRequisito: "",
        descripcion: "",
        prioridad: "",
        tiempoEstimado: "",
        nombreRequisitoVacio: false,
        descripcionVacia: false,
        prioridadInvalida: false,
        tiempoEstimadoInvalido: false
    };
    this.crearRequisito = this.crearRequisito.bind(this);
  }

  crearRequisito() {
    let requisito = {
        nombreRequisito: this.state.nombreRequisito,
        descripcion: this.state.descripcion,
        prioridad: this.state.prioridad,
        tiempoEstimado: this.state.tiempoEstimado,
        tiempoReal: "0 hs"
    };

    this.props.agregarRequisito(requisito);
    this.props.intercambiarEntreTablaYCrear();
  }

  render() {
    
    return (
      <div className="crear-requisito" hidden={!this.props.mostrarCrearRequisitos}>
        <div className="texto-informacion">
            Ingrese el nombre del requisito
        </div>
        <TextField
            id="nombre-requisito"
            variant="outlined"
            value={this.state.nombreRequisito}
            aria-required="true"
            aria-invalid={this.state.nombreRequisito}
            onChange={event => this.setState({ nombreRequisito: event.target.value })}
            error={this.state.nombreRequisitoVacio}
            helperText={this.state.nombreRequisitoVacio? 'Campo vacio' : ' '}
            />
        <div className="texto-informacion">
            Ingrese descripcion
        </div>
        <TextField
            id="descripcion-requisito"
            variant="outlined"
            value={this.state.descripcion}
            aria-required="true"
            aria-invalid={this.state.descripcionVacia}
            onChange={event => this.setState({ descripcion: event.target.value })}
            error={this.state.descripcionVacia}
            helperText={this.state.descripcionVacia? 'Campo vacio' : ' '}
        />
        <div className="texto-informacion">
            Ingrese prioridad
        </div>
        <TextField
            id="prioridad-requisito"
            variant="outlined"
            value={this.state.prioridad}
            aria-required="true"
            aria-invalid={this.state.prioridadInvalida}
            onChange={event => this.setState({ prioridad: event.target.value })}
            error={this.state.prioridadInvalida}
            helperText={this.state.prioridadInvalida? 'Prioridad invalida' : ' '}
        />
        <div className="texto-informacion">
            Ingrese Tiempo Estimado
        </div>
        <TextField
            id="tiempo-estimado-requisito"
            variant="outlined"
            value={this.state.tiempoEstimado}
            aria-required="true"
            aria-invalid={this.state.tiempoEstimadoInvalido}
            onChange={event => this.setState({ tiempoEstimado: event.target.value })}
            error={this.state.tiempoEstimadoInvalido}
            helperText={this.state.tiempoEstimadoInvalido? 'Campo invalido': ' '}
        />
        
        <div className="ui grid">
            <div className="two wide column">
                <Button id="boton-aceptar-iteracion" variant="contained" color="primary" onClick={this.crearRequisito}>
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

export default CrearRequisito;
