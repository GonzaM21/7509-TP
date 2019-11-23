import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearProyecto extends React.Component {
  constructor(props) {
    super(props);
    this.crearProyecto = this.crearProyecto.bind(this);
  }

  crearProyecto() {
    var proyecto = {
        prioridad: 1,
        nombre: "el mejor tablero",
        version: "alpha",
        lider: "ceo",
        tipo: "Desarrollo",
        estado: "Desarrollando",
        acciones: [<Button variant="contained" color="primary" key={0}>
                    Tareas
                  </Button>, <Button variant="contained" color="primary" key={1}>
                    Riesgos
                  </Button>, <Button variant="contained" color="primary" key={2}>
                    Detalles
                  </Button>, <Button variant="contained" color="primary" key={3}>
                    Iteracion
                  </Button>, <Button variant="contained" color="primary" key={4}>
                    Hitos
                  </Button>, <Button variant="contained" color="primary" key={5}>
                    Cancelar
                  </Button>, <Button variant="contained" color="primary" key={6}>
                    Finalizar
                  </Button>]
    };
    this.props.agregarNuevoProyecto(proyecto);
  }

  render() {
    
    return (
      <div className="crear-proyecto">
        <div className="texto-informacion">
            Ingrese el nombre del proyecto
        </div>
        <TextField
            variant="outlined"
            // value={this.state.text}
            // onChange={event => this.setState({ text: event.target.value })}
            // error={text === ""}
            // helperText={text === "" ? 'Empty field!' : ' '}
        />
        <div className="texto-informacion">
            Ingrese prioridad
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese el tipo de proyecto
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese el lider
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese version
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese limite de riesgo
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese fecha estimada de finalizacion
        </div>
        <TextField
            variant="outlined"
        />
        <div class="ui grid">
            <div class="two wide column">
                <Button variant="contained" color="primary" onClick={this.crearProyecto}>
                    Aceptar
                </Button>
            </div>
            <div class="two wide column">
                <Button variant="contained" color="primary">
                    Cancelar
                </Button>
            </div>
        </div>
      </div>
    );
  }
}

export default CrearProyecto;
