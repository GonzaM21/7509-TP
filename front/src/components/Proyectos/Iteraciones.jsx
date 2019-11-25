import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button } from "@material-ui/core";
import CrearIteracion from "./CrearIteracion";

class Iteraciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarTabla: true,
      mostrarCrearIteraciones: false
    }
    this.intercambiarEntreTablaYCrear = this.intercambiarEntreTablaYCrear.bind(this)
  }

  intercambiarEntreTablaYCrear() {
    this.setState({
      mostrarTabla: !this.state.mostrarTabla,
      mostrarCrearIteraciones: !this.state.mostrarCrearIteraciones
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
        <div className="iteraciones-tab" hidden={!this.props.mostrarIteraciones}>
          <div className="tabla" hidden={!this.state.mostrarTabla}>
              <Table className="tabla-iteraciones" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Iteraciones</StyledTableCell>
                        <StyledTableCell align="right">Fecha de Inicio</StyledTableCell>
                        <StyledTableCell align="right">Fecha de Finalizacion</StyledTableCell>
                        <StyledTableCell align="right">Capacidad del Equipo</StyledTableCell>
                        <StyledTableCell align="right">Hitos</StyledTableCell> 
                        <StyledTableCell align="right">Tareas</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {this.props.proyectos[this.props.proyectoSeleccionado].iteraciones.map((row, i) => (
                    <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                            {row.nombreIteracion}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.fechaInicio}</StyledTableCell>
                        <StyledTableCell align="right">{row.fechaDeFinalizacion}</StyledTableCell>
                        <StyledTableCell align="right">{row.capacidadEquipo}</StyledTableCell>
                        <StyledTableCell align="right">{row.hitos}</StyledTableCell>
                        <StyledTableCell align="right">{row.tareas}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            

            <div className="ui grid">
                <div className="two wide column">
                  <Button id="boton-nueva-iteracion" variant="contained" color="primary" onClick={this.intercambiarEntreTablaYCrear}>
                    Crear iteracion
                  </Button>
                </div>
                <div className="two wide column">
                  <Button variant="contained" color="primary" onClick={this.props.intercambiarTabIteraciones}>
                      Volver
                  </Button>
                </div>
            </div>
        </div>
      <CrearIteracion agregarIteracion={this.props.agregarIteracion} mostrarCrearIteraciones={this.state.mostrarCrearIteraciones} intercambiarEntreTablaYCrear={this.intercambiarEntreTablaYCrear}/>
    </div>
    
    );
  }
}

export default Iteraciones;
