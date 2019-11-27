import React from "react";
import { Button, TextField, Input, FormControl, InputAdornment } from "@material-ui/core";

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

    let puedeCrearRequisito = true;
    if (this.state.nombreRequisito === "") {
        puedeCrearRequisito = false;
        this.setState({
            nombreRequisitoVacio: true
        });
    } else {
        this.setState({
            nombreRequisitoVacio: false
        });
    }  if (this.state.descripcion === "") {
        puedeCrearRequisito = false;
        this.setState({
            descripcionVacia: true
        });
    } else {
        this.setState({
            descripcionVacia: false
        });
    } if (isNaN(Number(this.state.prioridad)) || isNaN(parseInt(this.state.prioridad))) {
        puedeCrearRequisito = false;
        this.setState({
            prioridadInvalida: true
        });
    } else {
        this.setState({
            prioridadInvalida: false
        });
    } if (isNaN(Number(this.state.tiempoEstimado)) || isNaN(parseFloat(this.state.tiempoEstimado))) {
        puedeCrearRequisito = false;
        this.setState({
            tiempoEstimadoInvalido: true
        });
    } else {
        this.setState({
            tiempoEstimadoInvalido: false
        });
    } if (puedeCrearRequisito) {
        this.props.agregarRequisito(requisito);
        this.props.intercambiarEntreTablaYCrear();
    }   
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

        <FormControl className="form-tiempo">
                <Input
                id="tiempo-estimado-requisito"
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
        
        <div className="ui grid">
            <div className="two wide column">
                <Button id="boton-aceptar-requisito" variant="contained" color="primary" onClick={this.crearRequisito}>
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
