import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Button } from "@material-ui/core";
import CrearRequisito from "./CrearRequisito";


class Requisitos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarTabla: true,
      mostrarCrearRequisitos: false
    }
    this.intercambiarEntreTablaYCrear = this.intercambiarEntreTablaYCrear.bind(this)
  }

  intercambiarEntreTablaYCrear() {
    this.setState({
      mostrarTabla: !this.state.mostrarTabla,
      mostrarCrearRequisitos: !this.state.mostrarCrearRequisitos
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
        <div className="iteraciones-tab" hidden={!this.props.mostrarRequisitos}>
          <div className="tabla" hidden={!this.state.mostrarTabla}>
              <Table className="tabla-iteraciones" aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Requisitos</StyledTableCell>
                        <StyledTableCell align="right">Descripcion</StyledTableCell>
                        <StyledTableCell align="right">Prioridad</StyledTableCell>
                        <StyledTableCell align="right">Tiempo Estimado</StyledTableCell> 
                        <StyledTableCell align="right">Tiempo Real</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {this.props.proyectos[this.props.proyectoSeleccionado].requisitos.map((row, i) => (
                    <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                            {row.nombreRequisito}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.descripcion}</StyledTableCell>
                        <StyledTableCell align="right">{row.prioridad}</StyledTableCell>
                        <StyledTableCell align="right">{row.tiempoEstimado}</StyledTableCell>
                        <StyledTableCell align="right">{row.tiempoReal}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            

            <div className="ui grid">
                <div className="two wide column">
                  <Button id="boton-nueva-iteracion" variant="contained" color="primary" onClick={this.intercambiarEntreTablaYCrear}>
                    Crear Requisito
                  </Button>
                </div>
                <div className="two wide column">
                  <Button variant="contained" color="primary" onClick={this.props.intercambiarTabRequisitos}>
                      Volver
                  </Button>
                </div>
            </div>
        </div>
      <CrearRequisito agregarRequisito={this.props.agregarRequisito} mostrarCrearRequisitos={this.state.mostrarCrearRequisitos} intercambiarEntreTablaYCrear={this.intercambiarEntreTablaYCrear}/>
    </div>
    
    );
  }
}

export default Requisitos;
