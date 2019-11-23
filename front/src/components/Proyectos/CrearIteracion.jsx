import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearIteracion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    return (
      <div className="crear-proyecto">
        <div className="texto-informacion">
            Ingrese el nombre de la iteracion
        </div>
        <TextField
            variant="outlined"
            // value={this.state.text}
            // onChange={event => this.setState({ text: event.target.value })}
            // error={text === ""}
            // helperText={text === "" ? 'Empty field!' : ' '}
        />
        <div className="texto-informacion">
            Ingrese fecha de inicio
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese fecha de finalizacion
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese capacidad del equipo
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese hitos
        </div>
        <TextField
            variant="outlined"
        />
        <div className="texto-informacion">
            Ingrese tareas
        </div>
        <TextField
            variant="outlined"
        />
        <div class="ui grid">
            <div class="two wide column">
                <Button variant="contained" color="primary">
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

export default CrearIteracion;
