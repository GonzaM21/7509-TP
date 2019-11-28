import React,{ Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button,TextField} from "@material-ui/core";
import AddClients from "./addClients";


export default class Clients  extends Component {
    constructor(props) {
        super(props);
        this.add= this.add.bind(this);
    }

    state ={};

    add(value){
        this.props.addClient(value);
    }

    render() {
        return <div>
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
                <ExpansionPanel square expanded={false} defaultExpanded TransitionProps={{timeout: 0}}>
                    <ExpansionPanelSummary>
                        <div className="column" style={{flexBasis: '20%'}}>
                            <Typography onClick={this.props.sortname} tyle={{textAlign:"center"}}><b>Nombre </b>
                                {this.props.clientsname ? <i className="arrow circle down icon"></i> :
                                    <i className="arrow circle up icon"></i>}</Typography>

                        </div>
                        <div className="column" style={{flexBasis: '20%'}}>
                            <Typography onClick={this.props.sortpriority} tyle={{textAlign:"center"}}><b>Prioridad </b> {this.props.clientspriority ? <i className="arrow circle down icon"></i> :
                                <i className="arrow circle up icon"></i>}</Typography>
                        </div>
                        <div className="column" style={{flexBasis: '30%'}}>
                            <Typography  onClick={this.props.sortproduct} style={{textAlign:"center"}}><b>Producto/s Adquirido/s </b>
                                {this.props.clientsproduct ? <i className="arrow circle down icon"></i> :
                                <i className="arrow circle up icon"></i>}
                            </Typography>
                        </div>
                        <div className="column" style={{flexBasis: '30%'}}>
                            <Typography className="heading" style={{textAlign:"center"}}><b>Fecha de Aquisición</b></Typography>
                        </div>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
            </div>
            {this.props.clients.map((client,i) => {
                if (this.state.searchTerm)
                    if (!client.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) &&
                        !client.priority.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) &&
                        !client.product.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                        return null;
                    return <div id="clients" key={i}  style={{paddingLeft: "10%", paddingRight: "10%"}}>
                        <ExpansionPanel square >
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-label="Expand" aria-controls="additional-actions3-content" id="additional-actions-header">
                                <div className="column" style={{flexBasis: '20%'}}>
                                    <Typography className="heading" style={{textAlign:"left", marginTop: "6px"}}>{client.name}</Typography>
                                </div>
                                <div className="column" style={{flexBasis: '30%'}}>
                                    <Button variant="contained" style={{background:client.colour,color:"white"}}>{client.priority}</Button>
                                </div>
                                <div className="column" style={{flexBasis: '20%'}}>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}>{client.product}</Typography>
                                </div>
                                <div className="column" style={{flexBasis: '20%'}}>
                                    <Typography className="heading" style={{textAlign:"right",marginTop: "6px"}}>{client.date}</Typography>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{background: "rgb(245,245,245)"}}>
                                <div className="column" style={{flexBasis: '46%'}}>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Descripción general:</b></Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Domicilio:</b> {client.sede}</Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Telefóno:</b> {client.phone}</Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Email:</b> {client.mail}</Typography>

                                </div>
                                <div className="column" style={{flexBasis: '15%'}}>
                                    {this.props.cps.map((cp) => {
                                        if (cp.client === client.name)
                                            return <Typography key={cp.product} className="heading" style={{
                                                textAlign: "center",
                                                marginTop: "6px"
                                            }}>{cp.product} V: {cp.version}
                                            </Typography>;
                                        return null;
                                    })}
                                </div>
                                <div className="column" style={{flexBasis: '28%'}}>
                                    {this.props.cps.map((cp) => {
                                        if (cp.name === client.name)
                                            return <Typography key={cp.date} className="heading"
                                                               style={{textAlign:"right",marginTop: "6px"}}>
                                                {cp.date}
                                            </Typography>;
                                        return null;
                                    })}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                }
            )}
            <div>
                <AddClients addClient={this.add}
                            products={this.props.products}
                            version={this.props.version}
                />
            </div>
        </div>
    }
}
