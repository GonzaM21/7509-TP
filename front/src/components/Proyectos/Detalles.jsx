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
                    <div className="column propiedad-detalle">
                        Nombre
                    </div>
                    <div className="column ">
                        {proyecto.nombre}
                    </div>
                </div>
                <div className="row">
                    <div className="column propiedad-detalle">
                        Prioridad
                    </div>
                    <div className="column ">
                        {proyecto.prioridad}
                    </div>
                </div>
                <div className="row">
                    <div className="column propiedad-detalle">
                        Version
                    </div>
                    <div className="column">
                        {proyecto.version}
                    </div>
                </div>
                <div className="row">
                    <div className="column propiedad-detalle">
                        Lider
                    </div>
                    <div className="column">
                        {proyecto.lider}
                    </div>
                </div>
                <div className="row">
                    <div className="column propiedad-detalle">
                        Tipo
                    </div>
                    <div className="column">
                        {proyecto.tipo}
                    </div>
                </div>
                <div className="row">
                    <div className="column propiedad-detalle">
                        Estado
                    </div>
                    <div className="column">
                        {proyecto.estado}
                    </div>
                </div>
                <div className="row">
                    <div className="column propiedad-detalle">
                        Limite de riesgo
                    </div>
                    <div className="column">
                        {proyecto.limiteDeRiesgo}
                    </div>
                </div>
                <div className="row">
                    <div className="column propiedad-detalle">
                        Fecha estimada de finalizacion
                    </div>
                    <div className="column">
                        {proyecto.fechaEstimadaDeFinalizacion}
                    </div>
                </div>
                <div className="row">
                    <div className="column" style={{display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="primary" onClick={this.props.intercambiarTabDetalles}>
                            Volver
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
    );
  }
}

export default Detalles;
