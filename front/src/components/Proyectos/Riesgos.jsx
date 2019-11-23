import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button } from "@material-ui/core";
import CrearRiesgo from "./CrearRiesgo";


class Riesgos extends React.Component {
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
            nombre: "algun riesgo",
            probabilidadOcurrencia: 0.1,
            impactoProyecto: 0.3,
            exposicion: 10000
        },
        {
            nombre: "algun riesgo2",
            probabilidadOcurrencia: 0.1,
            impactoProyecto: 0.3,
            exposicion: 10000
        }
    ];

    return (
        <div className="riesgos-tab">
                <div className="riesgo numero">
                    Limite de riesgo: 0.4
                </div>
                <Table className="tabla-riesgos" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Riesgo</StyledTableCell>
                        <StyledTableCell align="right">Probabilidad  Ocurrencia</StyledTableCell>
                        <StyledTableCell align="right">Impacto en el proyecto</StyledTableCell>
                        <StyledTableCell align="right">Exposicion</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, i) => (
                    <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                            {row.nombre}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.probabilidadOcurrencia}</StyledTableCell>
                        <StyledTableCell align="right">{row.impactoProyecto}</StyledTableCell>
                        <StyledTableCell align="right">{row.exposicion}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            
            <Button variant="contained" color="primary">
                Crear nuevo riesgo
            </Button>
            <CrearRiesgo />
        </div>
        
    );
  }
}

export default Riesgos;
