import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from "@material-ui/core";
import Iteraciones from "./Iteraciones";
import Hitos from "./Hitos";
import Riesgos from "./Riesgos";
import Tareas from "./Tareas";
import CrearProyecto from "./CrearProyecto";
import Detalles from "./Detalles";
import Requisitos from "./Requisitos";
import NavigationBar from '../../Components-s2/NavigationBar';

class Proyectos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proyectos: [
        {
          prioridad: 1,
          nombre: "PSA System",
          version: "Demo",
          lider: "Soluzzia",
          tipo: "Desarrollo",
          tareas: [{
                  prioridad: 1,
                  titulo: "Configuración de bases de datos",
                  descripcion: "Consultar qué bases de datos son necesarias y configurarlas",
                  tiempoReal: "12hs",
                  tiempoEstimado: "10",
                  estado: "Asignada",
                  requisito: "Requisito 1",
                  desarrolladorAsignado: "Felipe Codeo"
              }],
          riesgos: [{
                  nombre: "Perder clientes",
                  probabilidadOcurrencia: 0.2,
                  impactoProyecto: 0.7,
                  exposicion: (Number(0.7*0.2)).toFixed(2)
              },
              {
                  nombre: "Contaminacion ambiental",
                  probabilidadOcurrencia: 0.6,
                  impactoProyecto: 0.4,
                  exposicion: (Number(0.6*0.4)).toFixed(2)
              }],
          iteraciones: [{
            nombreIteracion: "Iteracion 1",
            fechaInicio: "01/12/2019",
            fechaDeFinalizacion: "26/12/2019",
            capacidadEquipo: "10",
            hitos: "Hito 1",
            tareas: "Tarea 1"
              }],
          hitos: [{
            nombreHito: "Hito 1",
            descripcion: "Entrega de la funcionalidad básica",
            requisito: "Requisito 1",
            estado: "A Tiempo"
              }],
          requisitos: [{
            nombreRequisito: "Requisito 1",
            descripcion: "Filtrar los emails bajo el tag PSA",
            prioridad: 10,
            tiempoEstimado: "12 hs",
            tiempoReal: "10 hs"
          }],
          limiteExposicion: "0.3",
          fechaEstimadaDeFinalizacion: "25/11/2019",
          mostrarBotones: true
      }
      ],
      mostrarProyectos: true,
      mostrarCrearProyectos: false,
      mostrarTareas: false,
      mostrarDetalles: false,
      mostrarRiesgos: false,
      mostrarIteraciones: false,
      mostrarHitos: false,
      mostrarRequisitos: false,
      proyectoSeleccionado: 0
    }
    this.agregarNuevoProyecto = this.agregarNuevoProyecto.bind(this);
    this.mostrarTareas = this.mostrarTareas.bind(this);
    this.agregarTareas = this.agregarTareas.bind(this);
    this.volverDeTareas = this.volverDeTareas.bind(this);
    this.volverDeProyectos = this.volverDeProyectos.bind(this);
    this.intercambiarTabDetalles = this.intercambiarTabDetalles.bind(this);
    this.mostrarDetalles = this.mostrarDetalles.bind(this);
    this.intercambiarTabRiesgos = this.intercambiarTabRiesgos.bind(this);
    this.mostrarRiesgos = this.mostrarRiesgos.bind(this);
    this.agregarRiesgos = this.agregarRiesgos.bind(this);
    this.finalizarProyecto = this.finalizarProyecto.bind(this);
    this.cancelarProyecto = this.cancelarProyecto.bind(this);
    this.mostrarIteraciones = this.mostrarIteraciones.bind(this);
    this.mostrarHitos = this.mostrarHitos.bind(this);
    this.intercambiarTabHitos = this.intercambiarTabHitos.bind(this);
    this.intercambiarTabIteraciones = this.intercambiarTabIteraciones.bind(this);
    this.agregarIteracion = this.agregarIteracion.bind(this);
    this.agregarHito = this.agregarHito.bind(this);
    this.mostrarRequisitos = this.mostrarRequisitos.bind(this);
    this.intercambiarTabRequisitos = this.intercambiarTabRequisitos.bind(this);
    this.agregarRequisito = this.agregarRequisito.bind(this);
  }

  componentWillUnmount() {
    document.proyectos = this.state.proyectos;
  }

  componentDidMount() {
    if (document.proyectos) {
      this.setState({proyectos:  document.proyectos});
    }
  }


  agregarRequisito(requisito) {
    let proyectosCopy = [...this.state.proyectos];

    let requisitosNuevos = [...proyectosCopy[this.state.proyectoSeleccionado].requisitos, requisito];
    proyectosCopy[this.state.proyectoSeleccionado].requisitos = requisitosNuevos;

    this.setState({
      proyectos: proyectosCopy
    });
  }

  mostrarRequisitos(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto
    });
    this.intercambiarTabRequisitos();
  }

  intercambiarTabRequisitos() {
    this.setState({
      mostrarProyectos: !this.state.mostrarProyectos,
      mostrarRequisitos: !this.state.mostrarRequisitos
    });
  }

  agregarHito(hito) {
    let proyectosCopy = [...this.state.proyectos];

    let hitosNuevos = [...proyectosCopy[this.state.proyectoSeleccionado].hitos, hito];
    proyectosCopy[this.state.proyectoSeleccionado].hitos = hitosNuevos;

    this.setState({
      proyectos: proyectosCopy
    });
  }


  intercambiarTabHitos() {
    this.setState({
      mostrarProyectos: !this.state.mostrarProyectos,
      mostrarHitos: !this.state.mostrarHitos
    });
  }

  mostrarHitos(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto
    });
    this.intercambiarTabHitos();
  }

  agregarIteracion(iteracion) {
    let proyectosCopy = [...this.state.proyectos];

    let iteracionesNuevas = [...proyectosCopy[this.state.proyectoSeleccionado].iteraciones, iteracion];
    proyectosCopy[this.state.proyectoSeleccionado].iteraciones = iteracionesNuevas;

    this.setState({
      proyectos: proyectosCopy
    });
  }

  intercambiarTabIteraciones() {
    this.setState({
      mostrarProyectos: !this.state.mostrarProyectos,
      mostrarIteraciones: !this.state.mostrarIteraciones
    });
  }

  mostrarIteraciones(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto
    });
    this.intercambiarTabIteraciones();
  }

  finalizarProyecto(numeroDeProyecto) {
    let proyectosCopy = [...this.state.proyectos];
    proyectosCopy[numeroDeProyecto].mostrarBotones = false;
    proyectosCopy[numeroDeProyecto].background = "#4caf50";

    this.setState({
      proyectos: proyectosCopy
    });
  }

  cancelarProyecto(numeroDeProyecto) {
    let proyectosCopy = [...this.state.proyectos];
    proyectosCopy[numeroDeProyecto].mostrarBotones = false;
    proyectosCopy[numeroDeProyecto].background = "#ff1744";

    this.setState({
      proyectos: proyectosCopy
    });
    console.log(this.state.proyectos);
  }

  agregarRiesgos(riesgo) {
    let proyectosCopy = [...this.state.proyectos];

    let riesgosNuevo = [...proyectosCopy[this.state.proyectoSeleccionado].riesgos, riesgo];
    proyectosCopy[this.state.proyectoSeleccionado].riesgos = riesgosNuevo;

    this.setState({
      proyectos: proyectosCopy
    });
  }

  mostrarRiesgos(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto
    });
    this.intercambiarTabRiesgos();
  }

  intercambiarTabRiesgos() {
    this.setState({
      mostrarProyectos: !this.state.mostrarProyectos,
      mostrarRiesgos: !this.state.mostrarRiesgos
    });
  }

  mostrarDetalles(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto
    });
    this.intercambiarTabDetalles();
  }

  intercambiarTabDetalles() {
    this.setState({
      mostrarProyectos: !this.state.mostrarProyectos,
      mostrarDetalles: !this.state.mostrarDetalles
    });
  }

  agregarTareas(tarea) {
    let proyectosCopy = [...this.state.proyectos];

    let tareasNuevas = [...proyectosCopy[this.state.proyectoSeleccionado].tareas, tarea];
    proyectosCopy[this.state.proyectoSeleccionado].tareas = tareasNuevas;

    this.setState({
      proyectos: proyectosCopy
    });
  }

  mostrarTareas(numeroDeProyecto) {
    this.setState({
      proyectoSeleccionado: numeroDeProyecto,
      mostrarProyectos: false,
      mostrarTareas: true
    });
  }

  volverDeTareas() {
    this.setState({
      mostrarProyectos: true,
      mostrarTareas: false
    });
  }

  volverDeProyectos() {
    this.setState({
      mostrarProyectos: true,
      mostrarCrearProyectos: false
    });
  }

  agregarNuevoProyecto(proyecto) {
    this.setState({
      proyectos: [...this.state.proyectos, proyecto],
    });
    this.setState({
      mostrarProyectos: true,
      mostrarCrearProyectos: false
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
    <React.Fragment>
        <NavigationBar/>
        <div className="container">
          <div className="proyectos-tabs" hidden={!this.state.mostrarProyectos} id="miId">
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
                  <StyledTableCell align="right">Limite de exposicion</StyledTableCell>
                  <StyledTableCell align="right">Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {this.state.proyectos.map((row, i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell component="th" scope="row">
                      {row.prioridad}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.nombre}</StyledTableCell>
                    <StyledTableCell align="right">{row.version}</StyledTableCell>
                    <StyledTableCell align="right">{row.lider}</StyledTableCell>
                    <StyledTableCell align="right">{row.tipo}</StyledTableCell>
                    <StyledTableCell align="right">{row.limiteExposicion}</StyledTableCell>
                    <StyledTableCell align="right">
                      <div className="botones-accion">
                        <Button id ="tarea-bar" variant="contained" color="primary" onClick={() => this.mostrarTareas(i)}>
                          Tareas
                        </Button>
                        <Button id="riesgo-bar" variant="contained" color="primary" style={{background: "#ff9800"}} onClick={() => this.mostrarRiesgos(i)}>
                          Riesgos
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => this.mostrarDetalles(i)}>
                          Detalles
                        </Button>
                        <Button id="iteracion-bar" variant="contained" color="primary" onClick={() => this.mostrarIteraciones(i)}>
                          Iteracion
                        </Button>
                        <Button id="hito-bar" variant="contained" color="primary" onClick={() => this.mostrarHitos(i)}>
                          Hitos
                        </Button>
                        <Button id="requisito-bar" variant="contained" color="primary" onClick={() => this.mostrarRequisitos(i)}>
                          Requisitos
                        </Button>
                        <span hidden={!row.mostrarBotones}>
                          <Button variant="contained" color="primary" style={{background:"#ff1744"}} onClick={() => this.cancelarProyecto(i)} >
                            Cancelar
                          </Button>
                        </span>
                        <span hidden={!row.mostrarBotones}>
                          <Button variant="contained" color="primary" style={{background:"#4caf50"}} onClick={() => this.finalizarProyecto(i)}>
                            Finalizar
                          </Button>
                        </span>
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            <div className="wrapper-boton-crear-proyecto">
              <Button id = "proyecto-bar" variant="contained" color="primary" onClick={() => this.setState({mostrarProyectos: false, mostrarCrearProyectos: true})}>
                Crear proyecto
              </Button>
            </div>
          </div>
          <CrearProyecto volverDeProyectos={this.volverDeProyectos} agregarNuevoProyecto={this.agregarNuevoProyecto} mostrarCrearProyectos={this.state.mostrarCrearProyectos}/>
          <Tareas volverDeTareas={this.volverDeTareas} agregarTareas={this.agregarTareas} mostrarTareas={this.state.mostrarTareas} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
          <Riesgos agregarRiesgos={this.agregarRiesgos} mostrarRiesgos={this.state.mostrarRiesgos} intercambiarTabRiesgos={this.intercambiarTabRiesgos} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
          <Detalles mostrarDetalles={this.state.mostrarDetalles} intercambiarTabDetalles={this.intercambiarTabDetalles} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
          <Iteraciones agregarIteracion={this.agregarIteracion} intercambiarTabIteraciones={this.intercambiarTabIteraciones} mostrarIteraciones={this.state.mostrarIteraciones} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
          <Hitos intercambiarTabHitos={this.intercambiarTabHitos} mostrarHitos={this.state.mostrarHitos} agregarHito={this.agregarHito} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
          <Requisitos agregarRequisito={this.agregarRequisito} intercambiarTabRequisitos={this.intercambiarTabRequisitos} mostrarRequisitos={this.state.mostrarRequisitos} proyectos={this.state.proyectos} proyectoSeleccionado={this.state.proyectoSeleccionado}/>
        </div>
    </React.Fragment>
    );
  }
}

export default Proyectos;
