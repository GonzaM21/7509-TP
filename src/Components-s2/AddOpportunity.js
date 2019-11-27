import React,{ Component } from 'react';
import TextField from "@material-ui/core/TextField";
import {Header, Modal} from "semantic-ui-react";
import {Button, Fab, MenuItem} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Add} from "@material-ui/icons";

export default class AddOpportunity extends Component {

    state = {modalOpen: false,name:"",
        stakeholder:"",
        priority:"Abierto",
        colour:"#ff1744",
        description:"",
        product:"",
        version:"",
        errordescription : false,
        errorname : false,
        errorstakeholder : false,};

    handleOpen = () => this.setState({modalOpen: true});
    handleClose = () => this.setState({modalOpen: false, errordescription : false,
        errorname : false,
        errorstakeholder : false});

    addOpportunity = this.addOpportunity.bind(this);


    addOpportunity(){
        if(!this.state.name || this.state.name === ""){
            this.setState({errorname : true});
        }
        if(!this.state.stakeholder || this.state.stakeholder === ""){
            this.setState({errorstakeholder : true});
        }
        if(!this.state.product || this.state.description === ""){
            this.setState({errordescription : true});
        }

        if(this.state.errordescription || this.state.errorstakeholder || this.state.errorname) return null;
        var opportunity = {name:this.state.name,
            stakeholder:this.state.stakeholder,
            priority:this.state.priority,
            colour:this.state.colour,
            description:this.state.description,
            product:this.state.product,
            version:this.state.version};

        this.props.addOpportunities(opportunity);
        this.handleClose();
    }

    render() {
        return <div style={{position:"absolute",right:50,bottom:50}}>
            <Modal id="addopportunity"
                trigger={<Fab aria-label="add" style={{background:"#1769aa",color:"white"}} onClick={this.handleOpen}> <Add fontSize={"large"}/></Fab>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'>
                <Header icon='lightbulb' content='Nueva oportunidad de negocio'/>
                <Modal.Content>
                    <form>
                        <TextField id="outlined-basic"
                                   variant="outlined"
                                   label="Nombre"
                                   required error={this.state.errorname}
                                   value={this.state.name}
                                   onChange={event => this.setState({ name: event.target.value })}
                                   style={{width:"100%", position:"left",marginTop:"1%",marginBottom:"4%"}}/>
                    </form>
                    <form>
                        <Typography variant="overline">
                            Datos
                        </Typography>
                    </form>
                    <TextField id="stakerholder"
                               variant="outlined" label="Interesado"
                               select value={this.state.stakeholder}
                               required error={this.state.errorstakeholder}
                               onChange={event => this.setState({ stakeholder: event.target.value })}
                               style={{width:"100%",marginTop:"1%"}}>
                        {this.props.stakeholders.map((option,i) => (
                            <MenuItem key={i} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                    <form>
                        <TextField id="product"
                                   variant="outlined"
                                   label="Producto"
                                   select value={this.state.product}
                                   onChange={event => this.setState({ product: event.target.value })}
                                   style={{width:"48%",marginTop:"2%",marginRight:"4%"}}>
                            {this.props.products.map(option => (
                                <MenuItem key={option.product} value={option.product}>
                                    {option.product}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="version"
                                   variant="outlined"
                                   label="Versión"
                                   select value={this.state.version}
                                   onChange={event => this.setState({ version: event.target.value })}
                                   style={{width:"48%",marginTop:"2%"}}>
                            {this.props.version.map((option) => { if (!this.state.product)
                                return null;

                                if (!(option.product === this.state.product))
                                    return null;
                                return <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            })}
                        </TextField>
                    </form>
                    <TextField id="description"
                               variant="outlined"
                               label="Descripción"
                               required error={this.state.errordescription}
                               value={this.state.description}
                               onChange={event => this.setState({ description: event.target.value })}
                               style={{ width:"100%", marginTop:"2%"}}/>

                </Modal.Content>
                <Modal.Actions>
                    <Button id="cancel" onClick={this.handleClose}
                            color='inherit'
                            style={{background:"#ff1744",marginRight:"1%",color:"white"}}>Cancelar</Button>
                    <Button id="add" onClick={this.addOpportunity}
                            color='inherit'
                            style={{background:"#4caf50",marginRight:"1%",color:"white"}}>Agregar</Button>
                </Modal.Actions>
            </Modal>
        </div>
    }
}