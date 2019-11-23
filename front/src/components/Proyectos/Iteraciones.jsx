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
    
    const rows = [
        {
            nombreIteracion: "algun nombre",
            fechaInicio: "10/10/2019",
            capacidadEquipo: "Alta",
            hitos: "hito 1",
            tareas: "tarea 1"
        }
    ];

    return (
        <div className="iteraciones-tab">
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
            {rows.map((row, i) => (
                <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                        {row.nombreIteracion}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.nombreIteracion}</StyledTableCell>
                    <StyledTableCell align="right">{row.fechaInicio}</StyledTableCell>
                    <StyledTableCell align="right">{row.capacidadEquipo}</StyledTableCell>
                    <StyledTableCell align="right">{row.hitos}</StyledTableCell>
                    <StyledTableCell align="right">{row.tareas}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        
        <Button variant="contained" color="primary" id={"crear"}>
            Crear nueva iteraccion
        </Button>
        <CrearIteracion />
    </div>
    
    );
  }
}

export default Iteraciones;
