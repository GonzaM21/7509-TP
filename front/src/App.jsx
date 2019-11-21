import React from "react";
import { hot } from "react-hot-loader";
import NavBar from "./components/NavBar";
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    
    return (
      <React.Fragment>
        <NavBar />
        <div className="jumbotron">
          <div className="row">
            <div className="col-sm">
              Ultimas notificaciones
            </div>
            <div className="col-sm">
              Imagen de calendario aqui
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <div className="text-wrapper">
                Proyectos de desarrollo: 6
              </div>
              <div className="text-wrapper">
              Proyectos de customizacion: 3
              </div>
              <div className="text-wrapper">
                Proyectos de implemetacion: 3
              </div>
            </div>
            <div className="col-sm"> </div>
          </div>
          Meto el grafico de avance de los proyectos aca
          
        </div>

      </React.Fragment>
    );
  }
}

export default hot(module)(App);
