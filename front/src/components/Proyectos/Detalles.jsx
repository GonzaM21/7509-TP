import React from "react";

class Detalles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
        <div className="ui two column grid">
            <div className="row">
                <div className="column">
                    Nombre
                </div>
                <div className="column">
                    algun nombre
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Prioridad
                </div>
                <div className="column">
                    121
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Version
                </div>
                <div className="column">
                    v1.0
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Lider
                </div>
                <div className="column">
                    CEO
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Tipo
                </div>
                <div className="column">
                    Desarrollo
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Estado
                </div>
                <div className="column">
                    Desarrollando
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Limite de riesgo
                </div>
                <div className="column">
                    0.4
                </div>
            </div>
            <div className="row">
                <div className="column">
                    Fecha estimada de finalizacion
                </div>
                <div className="column">
                    0.4
                </div>
            </div>
      </div>
    );
  }
}

export default Detalles;
