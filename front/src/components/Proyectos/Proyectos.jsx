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
          fechaEstimadaDeFinalizacion: "25/11/2019",
          acciones: [<Button variant="contained" color="primary" key={0} onClick={() => this.mostrarTareas(0)}>
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
      }
      ],
      mostrarProyectos: true,
      mostrarCrearProyectos: false,
      mostrarTareas: false,
      proyectoSeleccionado: 0,
      cantidadDeProyecto: 1
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
        <Tareas mostrarTareas={this.state.mostrarTareas} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
      </div>
    );
  }
}

export default Proyectos;
