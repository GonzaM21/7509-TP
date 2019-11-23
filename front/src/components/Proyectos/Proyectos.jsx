import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from "@material-ui/core";
import Iteraciones from "./Iteraciones";
import Hitos from "./Hitos";
import Tareas from "./Tareas";
import CrearProyecto from "./CrearProyecto";
import Detalles from "./Detalles";

class Proyectos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proyectos: [
        {
          prioridad: 1,
          nombre: "PSA System",
          version: "Demo",
          lider: "Soluzzia",
          tipo: "Desarrollo",
          estado: "Desarrolando",
          tareas: [{
                  prioridad: 1,
                  titulo: "crear front",
                  descripcion: "se debe crear el front",
                  tiempoReal: "12hs",
                  tiempoEstimado: "10hs",
                  estado: "Desarrollando",
                  desarrolladorAsignado: "felipe"
              }],
          riesgos: [],
          iteraciones: [],
          hitos: [],
          limiteDeRiesgo: "0.3",
          fechaEstimadaDeFinalizacion: "25/11/2019"
      }
      ],
      mostrarProyectos: true,
      mostrarCrearProyectos: false,
      mostrarTareas: false,
      mostrarDetalles: false,
      proyectoSeleccionado: 0
    }
    this.agregarNuevoProyecto = this.agregarNuevoProyecto.bind(this);
    this.mostrarTareas = this.mostrarTareas.bind(this);
    this.agregarTareas = this.agregarTareas.bind(this);
    this.volverDeTareas = this.volverDeTareas.bind(this);
    this.volverDeProyectos = this.volverDeProyectos.bind(this);
    this.intercambiarTabDetalles = this.intercambiarTabDetalles.bind(this);
    this.mostrarDetalles = this.mostrarDetalles.bind(this);
  }
  mostrarDetalles(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto
    });
    this.intercambiarTabDetalles();
  }

  intercambiarTabDetalles() {
    this.setState({
      mostrarProyectos: !this.state.mostrarProyectos,
      mostrarDetalles: !this.state.mostrarDetalles
    });
  }

  agregarTareas(tarea) {
    let proyectosCopy = [...this.state.proyectos];
    
    let tareasNuevas = [...proyectosCopy[this.state.proyectoSeleccionado].tareas, tarea];
    proyectosCopy[this.state.proyectoSeleccionado].tareas = tareasNuevas;

    this.setState({
      proyectos: proyectosCopy
    });
  }

  mostrarTareas(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto,
      mostrarProyectos: false,
      mostrarTareas: true
    });
  }
  
  volverDeTareas() {
    this.setState({
      mostrarProyectos: true,
      mostrarTareas: false
    });
  }
  
  volverDeProyectos() {
    this.setState({
      mostrarProyectos: true,
      mostrarCrearProyectos: false
    });
  }
  
  agregarNuevoProyecto(proyecto) {
    this.setState({
      proyectos: [...this.state.proyectos, proyecto],
    });
    this.setState({
      mostrarProyectos: true,
      mostrarCrearProyectos: false
    })
  }

  render() {
    const StyledTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      body: {
        fontSize: 14,
      },
    }))(TableCell);
    
    const StyledTableRow = withStyles(theme => ({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },
    }))(TableRow);
    
    return (
      <div className="container">
        <div className="proyectos-tabs" hidden={!this.state.mostrarProyectos}>
          <h1 className="portafolio-title">
            Portafolio de Proyectos
          </h1>
          <h3>
            Listado de proyectos
          </h3>
          <Table className="tabla-proyectos" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> Prioridad</StyledTableCell>
                <StyledTableCell align="right">Nombre</StyledTableCell>
                <StyledTableCell align="right">Version</StyledTableCell>
                <StyledTableCell align="right">Lider</StyledTableCell>
                <StyledTableCell align="right">Tipo</StyledTableCell>
                <StyledTableCell align="right">Estado</StyledTableCell>
                <StyledTableCell align="right">Acciones</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.proyectos.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                    {row.prioridad}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                  <StyledTableCell align="right">{row.version}</StyledTableCell>
                  <StyledTableCell align="right">{row.lider}</StyledTableCell>
                  <StyledTableCell align="right">{row.tipo}</StyledTableCell>
                  <StyledTableCell align="right">{row.estado}</StyledTableCell>
                  
                  <StyledTableCell align="right">
                    <Button variant="contained" color="primary" onClick={() => this.mostrarTareas(i)}>
                      Tareas
                    </Button>, <Button variant="contained" color="primary">
                      Riesgos
                    </Button>, <Button variant="contained" color="primary" onClick={() => this.mostrarDetalles(i)}>
                      Detalles
                    </Button>, <Button variant="contained" color="primary">
                      Iteracion
                    </Button>, <Button variant="contained" color="primary">
                      Hitos
                    </Button>, <Button variant="contained" color="primary">
                      Cancelar
                    </Button>, <Button variant="contained" color="primary">
                      Finalizar
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          
          <Button variant="contained" color="primary" onClick={() => this.setState({mostrarProyectos: false, mostrarCrearProyectos: true})}>
            Crear proyecto
          </Button>
        </div>  
        <CrearProyecto volverDeProyectos={this.volverDeProyectos} agregarNuevoProyecto={this.agregarNuevoProyecto} mostrarCrearProyectos={this.state.mostrarCrearProyectos}/>
        <Tareas volverDeTareas={this.volverDeTareas} agregarTareas={this.agregarTareas} mostrarTareas={this.state.mostrarTareas} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
        <Detalles mostrarDetalles={this.state.mostrarDetalles} intercambiarTabDetalles={this.intercambiarTabDetalles}/>
      </div>
    );
  }
}

export default Proyectos;
