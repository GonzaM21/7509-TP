import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearRiesgo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
        <div className="crear-riesgo">
            <div className="texto-informacion">
                Ingrese el nombre del riesgo
            </div>
            <TextField
                variant="outlined"
                // value={this.state.text}
                // onChange={event => this.setState({ text: event.target.value })}
                // error={text === ""}
                // helperText={text === "" ? 'Empty field!' : ' '}
            />
            <div className="texto-informacion">
                Ingrese la probabilidad de ocurrencia
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese el impacto en el proyecto
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese exposicion
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

export default CrearRiesgo;
