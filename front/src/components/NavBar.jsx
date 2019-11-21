import React from "react";
import { hot } from "react-hot-loader";
import { AppBar, Button } from "@material-ui/core";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <AppBar>
            <div>
                <Button variant="contained" color="primary">
                    Inicio
                </Button>
                <Button variant="contained" color="primary">
                    Tareas
                </Button>
                <Button variant="contained" color="primary">
                    Proyectos
                </Button>
                <Button variant="contained" color="primary">
                    Notificaciones
                </Button>
            </div>
        </AppBar>
    /*
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">PSA-Lider</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tareas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Proyectos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Notificaciones</a>
                </li>
                </ul>
            </div>
        </nav>
        */
    );
  }
}

export default hot(module)(NavBar);