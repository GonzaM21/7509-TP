import React from "react";
import { Button, TextField } from "@material-ui/core";

class CrearHitos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
        <div className="crear-tarea">
            <div className="texto-informacion">
                Ingrese el nombre del hito
            </div>
            <TextField
                variant="outlined"
                // value={this.state.text}
                // onChange={event => this.setState({ text: event.target.value })}
                // error={text === ""}
                // helperText={text === "" ? 'Empty field!' : ' '}
            />
            <div className="texto-informacion">
                Ingrese fecha
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingese features
            </div>
            <TextField
                variant="outlined"
            />
            <div className="texto-informacion">
                Ingrese el estado
            </div>
            <TextField
                variant="outlined"
            />
            <div className="ui grid">
                <div className="two wide column">
                    <Button variant="contained" color="primary">
                        Aceptar
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary">
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
  }
}

export default CrearHitos;
