import React from "react";
import { Button } from "@material-ui/core";

class Detalles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let proyecto = this.props.proyectos[this.props.proyectoSeleccionado];
    return (
        <div className="detalles-tab" hidden={!this.props.mostrarDetalles}>
            <div className="ui two column grid">
                <div className="row">
                    <div className="column">
                        Nombre
                    </div>
                    <div className="column">
                        {proyecto.nombre}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        Prioridad
                    </div>
                    <div className="column">
                        {proyecto.prioridad}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        Version
                    </div>
                    <div className="column">
                        {proyecto.version}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        Lider
                    </div>
                    <div className="column">
                        {proyecto.lider}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        Tipo
                    </div>
                    <div className="column">
                        {proyecto.tipo}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        Estado
                    </div>
                    <div className="column">
                        {proyecto.estado}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        Limite de riesgo
                    </div>
                    <div className="column">
                        {proyecto.limiteDeRiesgo}
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        Fecha estimada de finalizacion
                    </div>
                    <div className="column">
                        {proyecto.fechaEstimadaDeFinalizacion}
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={this.props.intercambiarTabDetalles}>
                    Volver
                </Button>
            </div>
        </div>
        
    );
  }
}

export default Detalles;
