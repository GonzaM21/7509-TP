import React,{ Component } from 'react';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TextField, Typography }from '@material-ui/core';
import {ExpandMore} from "@material-ui/icons";
import AddProduct from "./AddProduct";


export default class Products extends Component {
    state = {};
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
                        <div className="column" style={{flexBasis: '50%'}}>
                            <Typography className="heading" onClick={this.props.sortproducts} style={{textAlign:"left"}}><b>Producto</b></Typography>
                        </div>
                        <div className="column" style={{flexBasis: '26%'}}>
                            <Typography className="heading" style={{textAlign:"left"}}><b>Versión Actual</b></Typography>
                        </div>
                        <div className="column" style={{flexBasis: '25%'}}>
                            <Typography className="heading" style={{textAlign:"left"}}><b>Fecha de Lanzamiento</b></Typography>
                        </div>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
            </div>
            {this.props.products.map((product,i) => {
                if (this.state.searchTerm)
                    if (!product.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()))
                        return null;
                    return <div id="products" key={i}  style={{paddingLeft: "10%", paddingRight: "10%"}}>
                        <ExpansionPanel square>
                            <ExpansionPanelSummary expandIcon={<ExpandMore/>} aria-label="Expand" aria-controls="additional-actions3-content" id="additional-actions-header">
                                <div className="column" style={{flexBasis: '50%'}}>
                                    <Typography className="heading" style={{textAlign:"left", marginTop: "6px"}}>{product.name}</Typography>
                                </div>
                                <div className="column" style={{flexBasis: '20%'}}>
                                    <Typography className="heading" style={{textAlign:"left",paddingLeft:"6%",marginTop: "6px"}}>V {product.version}</Typography>
                                </div>
                                <div className="column" style={{flexBasis: '20%'}}>
                                    <Typography className="heading" style={{textAlign:"center",paddingLeft:"5%",marginTop: "6px"}}>{product.date}</Typography>
                                </div>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{background: "rgb(245,245,245)"}}>
                                <div className="column" style={{flexBasis: '30%'}}>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Ultima Actualización:</b> {product.lastdate}</Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Anterior Versión:</b> V {product.previous}</Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Precio:</b> $ {product.price}</Typography>
                                </div>
                                <div className="column" style={{flexBasis:'60%'}}>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}><b>Carateristicas Principales:</b></Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}>{product.c1}</Typography>
                                    <Typography className="heading" style={{textAlign:"left",marginTop: "6px"}}>{product.c2}</Typography>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </div>
                }
            )}
            <div>
                <AddProduct addProduct={this.props.addProduct}/>
            </div>

        </div>
    }
}