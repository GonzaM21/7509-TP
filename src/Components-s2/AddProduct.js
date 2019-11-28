import React,{ Component } from 'react';
import TextField from "@material-ui/core/TextField";
import {Header, Modal} from "semantic-ui-react";
import {Button, Fab, InputAdornment} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {Add, AttachMoney} from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

export default class AddProduct extends Component {
    state = {modalOpen: false,
        name:"",price:"",c1:"",c2:"",lastdate:"",previous:"",version:"1.0",date:"Wed Nov 27 2019 13:41:00 GMT-0300 (hora estándar de Argentina)",
        addButton:false};

    handleOpen = () => this.setState({modalOpen: true});
    handleClose = () => this.setState({modalOpen: false, name:"",price:"",
        c1:"",c2:"",lastdate:"",previous:"",version:"1.0",
        date:"Wed Nov 27 2019 13:41:00 GMT-0300 (hora estándar de Argentina)", addButton:false});

    addproduct = this.addproduct.bind(this);

    clicker = () => this.setState( { addButton: true});

    addproduct(){

        if(!this.state.name || this.state.name === ""){
            this.clicker();
            return null;
        }

        if(!this.state.price || this.state.price === ""){
            this.clicker();
            return null;
        }

        if(!this.state.version || this.state.version === ""){
            this.clicker();
            return null;
        }

        var product = {name:this.state.name,
            version:this.state.version,
            date:this.state.date.toString().slice(4,15),
            price:this.state.price,
            c1:this.state.c1,
            c2:this.state.c2,
            lastdate:this.state.date.toString().slice(4,15),
            previous: "0.0.1"};

        this.props.addProduct(product);
        this.handleClose();
    }

    render() {
        return <div style={{position:"absolute",right:50,bottom:50}}>
            <Modal id="addproduct"
                trigger={<Fab aria-label="add" style={{background:"#1769aa",color:"white"}} onClick={this.handleOpen}> <Add fontSize={"large"}/></Fab>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'>
                <Header icon='upload' content='Nuevo Producto'/>
                <Modal.Content>
                    <form>
                        <TextField id="outlined-basic"
                                   variant="outlined"
                                   label="Nombre"
                                   required error={this.state.name === "" && this.state.addButton}
                                   value={this.state.name}
                                   onChange={event => this.setState({ name: event.target.value })}
                                   style={{width:"100%", marginTop:"1%",marginBottom:"3%"}}/>
                    </form>
                    <Typography variant="overline">
                        Información
                    </Typography>
                    <form>
                        <TextField id="price"
                                   label="Precio"
                                   variant="outlined"
                                   required error={this.state.price === "" && this.state.addButton}
                                   value={this.state.price}
                                   onChange={event => this.setState({ price: event.target.value })}
                                   style={{width:"30%",marginTop:"1%",marginRight:"5%",marginBottom:"3%"}}
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <AttachMoney />
                                           </InputAdornment>),
                                   }}
                        />
                        <TextField id="version"
                                   label="Versión"
                                   variant="outlined"
                                   required error={this.state.version === "" && this.state.addButton}
                                   value={this.state.version}
                                   onChange={event => this.setState({ version: event.target.value })}
                                   style={{width:"30%", marginTop:"1%",marginRight:"5%"}}/>

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    id="date"
                                    disableToolbar
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    label="Fecha de Lanzamiento"
                                    value={this.state.date}
                                    style={{width:"30%",marginTop:"1%"}}
                                    onChange={event => this.setState({ date: new Date(event)})}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                        </MuiPickersUtilsProvider>
                    </form>
                    <Typography variant="overline">
                        Caracteristicas Principales
                    </Typography>
                    <form>
                        <TextField id="caracteristic1"
                                   variant="outlined"
                                   label="Caracteristica 1"
                                   value={this.state.c1}
                                   onChange={event => this.setState({ c1: event.target.value })}
                                   style={{width:"100%",marginTop:"1%"}}/>
                        <TextField id="caracteristic2"
                                   variant="outlined"
                                   label="Caracteristica 2"
                                   value={this.state.c2}
                                   onChange={event => this.setState({ c2: event.target.value })}
                                   style={{width:"100%",marginTop:"1%"}}/>
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <Button id="cancel" onClick={this.handleClose}
                            color='inherit'
                            style={{background:"#ff1744",marginRight:"1%",color:"white"}}>Cancelar</Button>
                    <Button id="add" onClick={this.addproduct}
                            color='inherit'
                            style={{background:"#4caf50",marginRight:"1%",color:"white"}}>Agregar</Button>
                </Modal.Actions>
            </Modal>
        </div>
    }
}
