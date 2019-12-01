import React, { Component } from 'react';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Box, Card, TextField }from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class AtencionDeLlamada extends Component {
  constructor(props) {
    super(props);
    this.sorttitulo = this.sorttitulo.bind(this);
    this.sorttipo = this.sorttipo.bind(this);
    this.sortseveridad = this.sortseveridad.bind(this);
    this.sortproducto = this.sortproducto.bind(this);
    this.state = {
        titulosort: false,
        tiposort: false,
        severidadsort: false,
        productosort: false,
        ticketsCliente: [
          {
          titulo: "Falla por cantidad de usuarios",
          tipo: "Incidente",
          severidad: "S1",
          producto: "Green App",
          descripcion: "La app deja de responder si hay más de 127 usuarios registrados",
          alta: "24/11/2019"
          },
          {
          titulo: "Incorrecta conversión de monedas",
          tipo: "Incidente",
          severidad: "S0",
          producto: "Gestión App",
          descripcion: "La conversión de monedas arroja resultados erróneos",
          alta: "25/11/2019"
          }
        ],
        searchTerm: ""
    }
}


  componentWillUnmount() {
    document.ticketsCliente = this.state.ticketsCliente;
  }

  componentDidMount() {
    if (document.ticketsCliente) {
      this.setState({ticketsCliente:  document.ticketsCliente});
    }
  }

  update(){
    this.setState({ticketsCliente:[...this.state.ticketsCliente]})
  }

  sorttitulo(){
    if(this.state.titulosort){
      this.state.ticketsCliente.sort(function(first, second){
        return second.titulo.localeCompare(first.titulo);});
      this.setState({titulosort:false});
      this.update();
      return null;
    }
    this.state.ticketsCliente.sort(function(first, second){
      return first.titulo.localeCompare(second.titulo);});
    this.setState({titulosort:true});
    this.update();
    return null;
  }

  sorttipo(){
    if(this.state.tiposort){
      this.state.ticketsCliente.sort(function(first, second){
        return second.tipo.localeCompare(first.tipo);});
      this.setState({tiposort:false});
      this.update();
      return null;
    }
    this.state.ticketsCliente.sort(function(first, second){
      return first.tipo.localeCompare(second.tipo);});
    this.setState({tiposort:true});
    this.update();
    return null;
  }

  sortseveridad(){
    if(this.state.severidadsort){
      this.state.ticketsCliente.sort(function(first, second){
        return second.severidad.localeCompare(first.severidad);});
      this.setState({severidadsort:false});
      this.update();
      return null;
    }
    this.state.ticketsCliente.sort(function(first, second){
      return first.severidad.localeCompare(second.severidad);});
    this.setState({severidadsort:true});
    this.update();
    return null;
  }

  sortproducto(){
    if(this.state.productosort){
      this.state.ticketsCliente.sort(function(first, second){
        return second.producto.localeCompare(first.producto);});
      this.setState({productosort:false});
      this.update();
      return null;
    }
    this.state.ticketsCliente.sort(function(first, second){
      return first.producto.localeCompare(second.producto);});
    this.setState({productosort:true});
    this.update();
    return null;
  }

render() {
    return (
      <div>

      <Card style={{textAlign: "center", padding: "0px"}}>
        <Card style={{textAlign: "center", padding: "10px 10px 10px 10px"}}>
          <Box fontWeight="fontWeightMedium" fontSize="18pt" fontFamily="Arial, Helvetica, sans-serif">Atender llamada</Box>
        </Card>
        <div>
        <div style={{display: "inline-block", padding: "10px 10px 10px 10px", textAlign:"left"}}>
          <Box fontWeight="fontWeightMedium" fontSize="16pt" fontFamily="Arial, Helvetica, sans-serif">
            Llamada entrante de...</Box>
          <Box fontWeight="fontWeightLight" fontSize="12pt" fontFamily="Arial, Helvetica, sans-serif" style={{display: "inline-block", marginTop: "10px"}}>
            <span style={{fontWeight: "bold", marginRight: "5px"}}>Empresa:</span> Motorola</Box><br/>
          <Box fontWeight="fontWeightLight" fontSize="12pt" fontFamily="Arial, Helvetica, sans-serif" style={{display: "inline-block"}}>
            <span style={{fontWeight: "bold", marginRight: "5px"}}>Producto:</span> Green app</Box><br/>
          <Box fontWeight="fontWeightLight" fontSize="12pt" fontFamily="Arial, Helvetica, sans-serif" style={{display: "inline-block"}}>
            <span style={{fontWeight: "bold", marginRight: "5px"}}>Version:</span> 1.1</Box><br/>
        </div>
        <Card style={{textAlign: "center", padding: "10px 10px 10px 10px"}}>
          <Box fontWeight="fontWeightMedium" fontSize="16pt" fontFamily="Arial, Helvetica, sans-serif">Historial del cliente:</Box>
        </Card>
        </div>
      </Card>
      
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
                                <Typography className="heading" onClick={this.sorttitulo} style={{textAlign:"left"}}><b>Título</b>
                                    {this.state.titulosort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sorttipo} style={{textAlign:"left"}}><b>Tipo</b>
                                    {this.state.tiposort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sortseveridad} style={{textAlign:"left"}}><b>Severidad</b>
                                    {this.state.severidadsort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>


                            <div className="column" style={{flexBasis: '24.0%'}}>
                                <Typography className="heading" onClick={this.sortproducto} style={{textAlign:"left"}}><b>Producto</b>
                                    {this.state.productosort ? <i className="arrow circle down icon"></i> :
                                        <i className="arrow circle up icon"></i>}</Typography>
                            </div>

                        </ExpansionPanelSummary>
                    </ExpansionPanel>
            </div>

           {this.state.ticketsCliente.map ((ticket, i) => {
                if (this.state.searchTerm)
                    if (!ticket.titulo.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
                && !ticket.tipo.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) 
                && !ticket.severidad.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) 
                && !ticket.producto.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                        return null;
                   return<div id="ticket" key={i}  style={{position:"static",paddingLeft: "10%", paddingRight: "10%"}}>
                                <ExpansionPanel square>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-label="Expand" aria-controls="additional-actions3-content" id="additional-actions3-header">
                                        <div className="column" style={{flexBasis: '25%'}}>
                                            <Typography className="heading" style={{textAlign:"left",}}>{ticket.titulo}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{ticket.tipo}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{ticket.severidad}</Typography>
                                        </div>
                                        <div className="column" style={{flexBasis: '25.0%'}}>
                                            <Typography className="heading" style={{textAlign:"left"}}>{ticket.producto}</Typography>
                                        </div>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails style={{background: "rgb(245,245,245)"}}>
                                        <div className="column" style={{textAlign:"left"}}>
                                            <Typography className="heading" style={{marginTop:"10px"}}><b>Alta:</b> {ticket.alta}</Typography>
                                            <Typography className="heading" style={{marginTop:"10px"}}><b>Descripción:</b> {ticket.descripcion}</Typography>
                                        </div>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                   </div>
            })}

  </div>
    );
}
}

export default AtencionDeLlamada;

