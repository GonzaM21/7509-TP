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
    this.state = {
        mostrarTabla: true,
        mostrarCrearRiesgo: false
    }
    this.intercambiarTablaCrearRiesgo = this.intercambiarTablaCrearRiesgo.bind(this);
  }

  intercambiarTablaCrearRiesgo() {
      this.setState({
        mostrarTabla: !this.state.mostrarTabla,
        mostrarCrearRiesgo: !this.state.mostrarCrearRiesgo
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
        <div className="riesgos-tab" hidden={!this.props.mostrarRiesgos}>
            <div className="informacion-riesgo" hidden={!this.state.mostrarTabla}>
                <div className="riesgo-numero">
                    Limite de riesgo: {this.props.proyectos[this.props.proyectoSeleccionado].limiteDeRiesgo}
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
                        {this.props.proyectos[this.props.proyectoSeleccionado].riesgos.map((row, i) => (
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
                <div className="ui grid">
                    <div className="two wide column">
                        <Button variant="contained" color="primary" onClick={this.intercambiarTablaCrearRiesgo}>
                            Crear riesgo
                        </Button>
                    </div>
                    <div className="two wide column">
                        <Button variant="contained" color="primary" onClick={this.props.intercambiarTabRiesgos}>
                            Volver
                        </Button>
                    </div>
                </div>
            </div>
            
            <CrearRiesgo agregarRiesgos={this.props.agregarRiesgos} intercambiarTablaCrearRiesgo={this.intercambiarTablaCrearRiesgo} mostrarCrearRiesgo={this.state.mostrarCrearRiesgo}/>
        </div>
        
    );
  }
}

export default Riesgos;
