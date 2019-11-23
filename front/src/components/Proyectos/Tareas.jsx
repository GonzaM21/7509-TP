import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button } from "@material-ui/core";
import CrearTarea from "./CrearTarea";

class Tareas extends React.Component {
  constructor(props) {
    super(props);
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
        <div className="tareas-tab" hidden={!this.props.mostrarTareas}>
                <Table className="tabla-tareas" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Prioridad</StyledTableCell>
                        <StyledTableCell align="right">Titulo</StyledTableCell>
                        <StyledTableCell align="right">Descripcion</StyledTableCell>
                        <StyledTableCell align="right">Tiempo Real</StyledTableCell>
                        <StyledTableCell align="right">Tiempo Estimado</StyledTableCell>
                        <StyledTableCell align="right">Estado</StyledTableCell>
                        <StyledTableCell align="right">Desarrollador asignado</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {this.props.proyectos[this.props.proyectoSeleccionado].tareas.map((row, i) => (
                    <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                            {row.prioridad}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.titulo}</StyledTableCell>
                        <StyledTableCell align="right">{row.descripcion}</StyledTableCell>
                        <StyledTableCell align="right">{row.tiempoReal}</StyledTableCell>
                        <StyledTableCell align="right">{row.tiempoEstimado}</StyledTableCell>
                        <StyledTableCell align="right">{row.estado}</StyledTableCell>
                        <StyledTableCell align="right">{row.desarrolladorAsignado}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            <div className="ui grid">
                <div className="two wide column">
                    <Button variant="contained" color="primary">
                        Crear Tarea
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary">
                        Volver
                    </Button>
                </div>
            </div>
            <CrearTarea />
        </div>
        
    );
  }
}

export default Tareas;
