import React from "react";

class Detalles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
        <div class="ui two column grid">
            <div class="row">
                <div class="column">
                    Nombre
                </div>
                <div class="column">
                    algun nombre
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Prioridad
                </div>
                <div class="column">
                    121
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Version
                </div>
                <div class="column">
                    v1.0
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Lider
                </div>
                <div class="column">
                    CEO
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Tipo
                </div>
                <div class="column">
                    Desarrollo
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Estado
                </div>
                <div class="column">
                    Desarrollando
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Limite de riesgo
                </div>
                <div class="column">
                    0.4
                </div>
            </div>
            <div class="row">
                <div class="column">
                    Fecha estimada de finalizacion
                </div>
                <div class="column">
                    0.4
                </div>
            </div>
      </div>
    );
  }
}

export default Detalles;
