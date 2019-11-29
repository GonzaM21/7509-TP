import React,{ Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button, TextField} from "@material-ui/core";
import AddOpportunity from "./AddOpportunity";

export default class Sales extends Component {
    constructor(props) {
        super(props);
        this.add= this.add.bind(this);
    }

    state ={};

    add(value){
        this.props.addOpportunities(value);
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
                <ExpansionPanel square expanded={false}>
                    <ExpansionPanelSummary>
                        <div className="column" style={{flexBasis: '33%'}}>
                            <Typography className="heading" onClick={this.props.sortopportunity} style={{textAlign:"left"}}><b>Oportunidad de Negocio </b>
                                {this.props.opportinitysort ? <i className="arrow circle down icon"></i> :
                                <i className="arrow circle up icon"></i>}</Typography>
                        </div>
                        <div className="column" style={{flexBasis: '33%'}}>
                            <Typography className="heading" onClick={this.props.sortstakeholders} style={{textAlign:"left"}}><b>Interesado </b>
                                {this.props.stakerholdersort ? <i className="arrow circle down icon"></i> :
                                    <i className="arrow circle up icon"></i>}</Typography>
                        </div>
                        <div className="column" style={{flexBasis: '33%'}}>
                            <Typography className="heading" onClick={this.props.sortstate} style={{textAlign:"left"}}><b>Estado </b>
                                {this.props.statesort ? <i className="arrow circle down icon"></i> :
                                    <i className="arrow circle up icon"></i>}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
            </div>
            {this.props.Opportunities.map((opportunity,i) => {
                if (this.state.searchTerm)
                    if (!opportunity.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) &&
                        !opportunity.stakeholder.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()) &&
                        !opportunity.priority.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                        return null;
                    return <div id="products" key={i}  style={{paddingLeft: "10%", paddingRight: "10%"}}>
                        <ExpansionPanel square>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} aria-label="Expand" aria-controls="additional-actions3-content" id="additional-actions-header">
                                <div className="column" style={{flexBasis: '34%'}}>
                                    <Typography className="heading" style={{textAlign:"left", marginTop: "6px"}}>{opportunity.name}</Typography>
                                </div>
                                <div className="column" style={{flexBasis: '33%'}}>
                                    <Typography className="heading" style={{textAlign:"left", marginTop: "6px"}}>{opportunity.stakeholder}</Typography>
                                </div>
                                <div className="column" style={{flexBasis: '33%'}}>
                                    <Button variant="contained" style={{background:opportunity.colour,color:"white"}}>{opportunity.priority}</Button>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{background: "rgb(245,245,245)"}}>
                                <div className="column" style={{flexBasis: '100%'}}>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Descripción:</b> {opportunity.description}</Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Producto: </b>{ opportunity.product}</Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Versión del producto: </b> {opportunity.version}</Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                }
            )}
            <div>
                <AddOpportunity addOpportunities={this.add}
                                products={this.props.products}
                                version={this.props.version}
                                stakeholders={this.props.stakeholders}
                />
            </div>

        </div>
    }
}
