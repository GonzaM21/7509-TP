import React, { Component } from 'react';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, TextField }from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Horas extends Component {
  constructor(props) {
    super(props);
    this.sorttitulo = this.sorttitulo.bind(this);
    this.sortdesarrollador = this.sortdesarrollador.bind(this);
    this.state = {
        titulosort: false,
        desarrolladorsort: false,
        tareas: [
          {
          titulo: "Configuración de bases de datos",
          desarrollador: "Felipe Codeo",
          horasEstimadas: "12",
          horasConsumida: "8",
          descripcion: "Consultar qué bases de datos son necesarias y configurarlas",
          estado: "Asignada"
          },
          {
          titulo: "Imprimir información de un proyecto",
          desarrollador: "Felipe Codeo",
          horasEstimadas: "23",
          horasConsumida: "24",
          descripcion: "Generar un documento con la información de un proyecto apto para ser enviado al servidor de impresión",
          estado: "Iniciada"
          },
          {
          titulo: "Envíe notificaciones a celulares",
          desarrollador: "Ada Lovelace",
          horasEstimadas: "18",
          horasConsumida: "6",
          descripcion: "Implementar notificaciones push con Firebase Cloud Messaging",
          estado: "Iniciada"
          }
        ],
        searchTerm: ""
    }
  }

  componentWillUnmount() {
    document.tareas = this.state.tareas;
  }

  componentDidMount() {
    if (document.tareas) {
      this.setState({tareas:  document.tareas});
    }
  }

  update(){
    this.setState({tareas:[...this.state.tareas]})
  }

  sorttitulo(){
    if(this.state.titulosort){
      this.state.tareas.sort(function(first, second){
        return second.titulo.localeCompare(first.titulo);});
      this.setState({titulosort:false});
      this.update();
      return null;
    }
    this.state.tareas.sort(function(first, second){
      return first.titulo.localeCompare(second.titulo);});
    this.setState({titulosort:true});
    this.update();
    return null;
  }

  sortdesarrollador(){
    if(this.state.desarrolladorsort){
      this.state.tareas.sort(function(first, second){
        return second.desarrollador.localeCompare(first.desarrollador);});
      this.setState({desarrolladorsort:false});
      this.update();
      return null;
    }
    this.state.tareas.sort(function(first, second){
      return first.desarrollador.localeCompare(second.desarrollador);});
    this.setState({desarrolladorsort:true});
    this.update();
    return null;
  }

  render() {
    return (
      <div>
      <div id="search" style={{position:"static",paddingLeft:"10%",paddingRight:"10%"}}>
          <TextField label="Buscar"
                     value={this.state.searchTerm || ""}
                     onChange={(event) => {
                         this.setState({
                             searchTerm: event.target.value
                         })
                     }}
                     style={{
                         width: "100%"
                     }}
                     margin="normal"/>
      </div>
<div style={{paddingLeft: "10%", paddingRight: "10%",marginTop:"2%"}}>
                    <ExpansionPanel square expanded={false}>
                        <ExpansionPanelSummary>
                            <div className="column" style={{flexBasis: '24%'}}>
                                <Typography className="heading" onClick={this.sorttitulo} style={{textAlign:"left"}}><b>Tarea</b>
                                    {this.state.titulosort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sortdesarrollador} style={{textAlign:"left"}}><b>Desarrollador</b>
                                    {this.state.desarrolladorsort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                            <div className="column" style={{flexBasis: '25.0%'}}>
                                <Typography className="heading"  onClick={this.sorthorasestimadas} style={{textAlign:"left"}}><b>Horas estimadas</b>
                                </Typography>
                            </div>

                            <div className="column" style={{flexBasis: '25.0%'}}>
                                <Typography className="heading"  onClick={this.sorthorasincurridas} style={{textAlign:"left"}}><b>Horas consumidas</b>
                                </Typography>
                            </div>

                        </ExpansionPanelSummary>
                    </ExpansionPanel>
            </div>
           {this.state.tareas.map ((tarea, i) => {
                if (this.state.searchTerm)
                    if (!tarea.titulo.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) &&
                        !tarea.desarrollador.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                        return null;
                   return<div id="employee" key={i}  style={{position:"static",paddingLeft: "10%", paddingRight: "10%"}}>
                                <ExpansionPanel square>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-label="Expand" aria-controls="additional-actions3-content" id="additional-actions3-header">
                                        <div className="column" style={{flexBasis: '25%'}}>
                                            <Typography className="heading" style={{textAlign:"left",}}>{tarea.titulo}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{tarea.desarrollador}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{tarea.horasEstimadas}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}} onClick="event.stopPropagation()">
							    <TextField
                                                   name="campoHorasConsumidas"
								   value={this.state.tareas[i].horasConsumida}
								   onChange={(e) => {
									 let h = this.state.tareas
									 h[i].horasConsumida = e.target.value
									 this.setState({tareas: h});
								   }}
								   style={{
									 width: "100%"
								   }}
								   margin="none"/>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{background: "rgb(245,245,245)"}}>
                                        <div className="column" style={{textAlign:"left"}}>
                                            <Typography className="heading" style={{marginTop:"10px"}}><b>Estado:</b> {tarea.estado}</Typography>
                                            <Typography className="heading" style={{marginTop:"10px"}}><b>Descripción:</b> {tarea.descripcion}</Typography>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                   </div>
            })}
        </div>       
    );
  }
}

export default Horas;

