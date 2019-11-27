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
    this.state = {
        mostrarTabla: true,
        mostrarCrearTareas: false
    }
    this.intercambiarVisibilidadTablaCrear = this.intercambiarVisibilidadTablaCrear.bind(this);
  }

  intercambiarVisibilidadTablaCrear() {
    this.setState({
        mostrarTabla: !this.state.mostrarTabla,
        mostrarCrearTareas: !this.state.mostrarCrearTareas
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
        <div className="tareas-tab" hidden={!this.props.mostrarTareas}>
            <div hidden={!this.state.mostrarTabla}>
                <Table className="tabla-tareas" aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Prioridad</StyledTableCell>
                            <StyledTableCell align="right">Titulo</StyledTableCell>
                            <StyledTableCell align="right">Descripcion</StyledTableCell>
                            <StyledTableCell align="right">Tiempo Real</StyledTableCell>
                            <StyledTableCell align="right">Tiempo Estimado</StyledTableCell>
                            <StyledTableCell align="right">Estado</StyledTableCell>
                            <StyledTableCell align="right">Requisito asociado</StyledTableCell>
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
                            <StyledTableCell align="right">{row.tiempoEstimado + "hs"}</StyledTableCell>
                            <StyledTableCell align="right">{row.estado}</StyledTableCell>
                            <StyledTableCell align="right">{row.requisito}</StyledTableCell>
                            <StyledTableCell align="right">{row.desarrolladorAsignado}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                <div className="ui grid">
                    <div className="two wide column">
                        <Button id="boton-nueva-tarea" variant="contained" color="primary" onClick={this.intercambiarVisibilidadTablaCrear}>
                            Crear nueva tarea
                        </Button>
                    </div>
                    <div className="two wide column">
                        <Button variant="contained" color="primary" onClick={this.props.volverDeTareas}>
                            Volver
                        </Button>
                    </div>
                </div>
            </div>
            <CrearTarea requisitos={this.props.proyectos[this.props.proyectoSeleccionado].requisitos} mostrarCrearTareas={this.state.mostrarCrearTareas} intercambiarVisibilidadTablaCrear={this.intercambiarVisibilidadTablaCrear} agregarTareas={this.props.agregarTareas}/>
        </div>
        
    );
  }
}

export default Tareas;
