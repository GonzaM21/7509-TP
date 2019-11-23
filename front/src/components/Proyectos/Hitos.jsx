import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button } from "@material-ui/core";
import CrearHitos from "./CrearHitos";

class Hitos extends React.Component {
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
            nombreHito: "algun nombre",
            fecha: "10/10/2019",
            features: "Alta",
            estado: "Demorado"
        }
    ];

    return (
        <div className="hitos-tab">
            <Table className="hitos-iteraciones" aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Hito</StyledTableCell>
                    <StyledTableCell align="right">Fecha</StyledTableCell>
                    <StyledTableCell align="right">Features</StyledTableCell>
                    <StyledTableCell align="right">Estado</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row, i) => (
                <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                        {row.nombreHito}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.fecha}</StyledTableCell>
                    <StyledTableCell align="right">{row.features}</StyledTableCell>
                    <StyledTableCell align="right">{row.estado}</StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        
        <Button variant="contained" color="primary" id={"crear"}>
            Crear hito
        </Button>
        <CrearHitos />
    </div>
    
    );
  }
}

export default Hitos;
