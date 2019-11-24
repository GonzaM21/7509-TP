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
    this.state = {
      mostrarTabla: true,
      mostrarCrearHitos: false
    };
    this.intercambiarTablaCrearHitos = this.intercambiarTablaCrearHitos.bind(this);
  }

  intercambiarTablaCrearHitos() {
    this.setState({
      mostrarTabla: !this.state.mostrarTabla,
      mostrarCrearHitos: !this.state.mostrarCrearHitos
    });
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
        <div className="hitos-tab" hidden={!this.props.mostrarHitos}>
          <div className="tabla-hitos" hidden={!this.state.mostrarTabla}>
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
                  {this.props.proyectos[this.props.proyectoSeleccionado].hitos.map((row, i) => (
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
    
            <div className="ui grid">
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.intercambiarTablaCrearHitos}>
                        Crear Hito
                    </Button>
                </div>
                <div className="two wide column">
                    <Button variant="contained" color="primary" onClick={this.props.intercambiarTabHitos}>
                        Volver
                    </Button>
                </div>
            </div>
          </div>
            
        <CrearHitos agregarHito={this.props.agregarHito} intercambiarTablaCrearHitos={this.intercambiarTablaCrearHitos} mostrarCrearHitos={this.state.mostrarCrearHitos} />
    </div>
    
    );
  }
}

export default Hitos;
