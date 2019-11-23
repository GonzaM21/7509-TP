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

class Proyectos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proyectos: [],
      mostrarProyectos: true,
      mostrarCrearProyectos: false,
      mostrarTareas: false,
      proyectoSeleccionado: 0,
      cantidadDeProyecto: 0
    }
    this.agregarNuevoProyecto = this.agregarNuevoProyecto.bind(this);
    this.mostrarTareas = this.mostrarTareas.bind(this);
  }

  mostrarTareas(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto,
      mostrarProyectos: false,
      mostrarTareas: true
    })
  }
  

  agregarNuevoProyecto(proyecto) {
    this.setState({
      proyectos: [...this.state.proyectos, proyecto],
      cantidadDeProyecto: this.state.cantidadDeProyecto + 1
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
                  
                  <StyledTableCell align="right">{row.acciones}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          
          <Button variant="contained" color="primary" onClick={() => this.setState({mostrarProyectos: false, mostrarCrearProyectos: true})}>
            Crear proyecto
          </Button>
        </div>  
        <CrearProyecto agregarNuevoProyecto={this.agregarNuevoProyecto} mostrarCrearProyectos={this.state.mostrarCrearProyectos} cantidadDeProyecto={this.state.cantidadDeProyecto} mostrarTareas={this.mostrarTareas}/>
        <Tareas mostrarTareas={this.state.mostrarTareas}/>
      </div>
    );
  }
}

export default Proyectos;
