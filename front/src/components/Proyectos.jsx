import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from "@material-ui/core";

class Proyectos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = [
      {
        prioridad: 1,
        nombre: "el mejor tablero",
        version: "alpha",
        lider: "ceo",
        tipo: "Desarrollo",
        estado: "Desarrollando",
        acciones: [<Button variant="contained" color="primary" key={0}>
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
      },
      {
        prioridad: 1,
        nombre: "el mejor tablero",
        version: "alpha",
        lider: "ceo",
        tipo: "Desarrollo",
        estado: "Desarrollando",
        acciones: [<Button variant="contained" color="primary" key={0}>
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
      <div className="container">
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
            {rows.map((row, i) => (
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
      </div>
    );
  }
}

export default Proyectos;
