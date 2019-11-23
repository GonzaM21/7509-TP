import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button } from "@material-ui/core";

class Tareas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [
        {
            prioridad: 1,
            titulo: "la tarea",
            descripcion: "la tarea hace algo",
            tiempoReal: 12312,
            tiempoEstimado: 22222,
            estado: "Desarrollando",
            desarrolladorAsignado: "felipe"
        },
        {
            prioridad: 2,
            titulo: "la tarea",
            descripcion: "la tarea hace algo",
            tiempoReal: 12312,
            tiempoEstimado: 22222,
            estado: "Desarrollando",
            desarrolladorAsignado: "felipe"
        }
    ];

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
        <div className="tareas-tab">
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
                {rows.map((row, i) => (
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
            
            <Button variant="contained" color="primary">
                Crear Tarea
            </Button>
        </div>
        
    );
  }
}

export default Tareas;
