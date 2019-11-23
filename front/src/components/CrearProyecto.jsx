import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearProyecto extends React.Component {
  constructor(props) {
    super(props);
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
        <div class="ui grid">
            <div class="two wide column">
                <Button variant="contained" color="primary" key={0}>
                    Aceptar
                </Button>
            </div>
            <div class="two wide column">
                <Button variant="contained" color="primary" key={0}>
                    Cancelar
                </Button>
            </div>
        </div>
      </div>
    );
  }
}

export default CrearProyecto;
