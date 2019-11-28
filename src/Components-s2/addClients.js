import React,{ Component } from 'react';
import TextField from "@material-ui/core/TextField";
import {Header, Modal} from "semantic-ui-react";
import {Button, Fab, InputAdornment, MenuItem} from "@material-ui/core";
import {Add, Email, Home, Phone} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";

const priority =[
    {value:"Alta", label:"Alta"},
    {value:"Media", label:"Media"},
    {value:"Baja", label:"Baja"},
]

export default class AddClients extends Component {
    state = {modalOpen: false,name:'',
        priority:'',
        product:'',
        version:'',
        date:"Wed Nov 27 2019 13:41:00 GMT-0300 (hora estándar de Argentina)",
        address:'',
        email:'',
        phone:'',
        errorname:false,
        errorpriority:false,
        errorproduct:false,
        errorversion:false,
        errordate:false};

    handleOpen = () => this.setState({modalOpen: true});
    handleClose = () => this.setState({modalOpen: false,errordate : false,
        errorversion : false,
        errorproduct : false,
        errorpriority : false,
        errorname : false});


    add(){
        if(!this.state.name || this.state.name === ""){
            this.setState({errorname : true});
        }
        if(!this.state.priority || this.state.priority === ""){
            this.setState({errorpriority : true});
        }
        if(!this.state.product || this.state.product === ""){
            this.setState({errorproduct : true});
        }
        if(!this.state.version || this.state.version === ""){
            this.setState({errorversion : true});
        }
        if(!this.state.date || this.state.date === ""){
            this.setState({errorndate : true});
        }

        if(this.state.errordate || this.state.errorversion || this.state.errorname || this.state.errorpriority || this.state.errorproduct) return null;

        var new_color = "#ff1744";
        if(this.state.priority === "media") {
            new_color = "#ffc107";
        }
        if(this.state.priority === "baja") {
            new_color = "#4caf50";
        }
        var client = {
            name:this.state.name,
            sede:this.state.address,
            priority:this.state.priority,
            colour:new_color,
            product:this.state.product,
            date:this.state.date.toString().slice(4,15),
            version:this.state.version,
            phone:this.state.phone,
            mail:this.state.email};
        if(!this.props.addClient(client)){
            this.setState({errorname : true});
        }

        this.handleClose();
    }

    add = this.add.bind(this);

    render() {
        return <div style={{position:"absolute",right:50,bottom:50}}>
            <Modal id="addclient"
                trigger={<Fab aria-label="add" style={{background:"#1769aa",color:"white"}} onClick={this.handleOpen}> <Add fontSize={"large"}/></Fab>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'>
                <Header icon='user plus' content='Nuevo Cliente'/>
                <Modal.Content>
                <form>
                        <TextField id="name"
                                   variant="outlined"
                                   label="Nombre"
                                   required error={this.state.errorname}
                                   onChange={event => this.setState({ name: event.target.value })}
                                   style={{width:"48%", marginTop:"1%",marginRight:"4%",marginBottom:"3%"}}/>
                        <TextField id="priority"
                                   variant="outlined"
                                   label="Prioridad"
                                   required error={this.state.errorpriority}
                                   select value={this.state.priority}
                                   onChange={event => this.setState({ priority: event.target.value })}
                                   style={{width:"48%",marginTop:"1%"}}>
                            {priority.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </form>
                    <Typography variant="overline">
                        Producto adquirido
                    </Typography>
                    <form>
                        <TextField id="product"
                                   variant="outlined"
                                   label="Producto adquirido"
                                   required error={this.state.errorproduct}
                                   select value={this.state.product}
                                   onChange={event => this.setState({ product: event.target.value })}
                                   style={{width:"30%",marginTop:"1%",marginRight:"5%"}}>
                            {this.props.products.map(option => (
                                <MenuItem key={option.product} value={option.product}>
                                    {option.product}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="version"
                                   variant="outlined"
                                   label="Versión"
                                   required error={this.state.errorversion}
                                   select value={this.state.version}
                                   onChange={event => this.setState({ version: event.target.value })}
                                   style={{width:"30%",marginTop:"1%",marginRight:"5%",marginBottom:"2%"}}>
                            {this.props.version.map((option) => {
                                if(!this.state.product) return undefined;
                                if (this.state.product === "") return undefined;
                                if (!(option.product === this.state.product)) return undefined;
                                return <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            })}
                        </TextField>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                id="date"
                                disableToolbar
                                format="dd/MM/yyyy"
                                margin="normal" error={this.state.errordate}
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
                        Datos del cliente
                    </Typography>
                    <form>
                        <TextField id="address"
                                   variant="outlined"
                                   label="Domicilio"
                                   value={this.state.address}
                                   onChange={event => this.setState({ address: event.target.value })}
                                   style={{width:"30%",marginTop:"1%",marginRight:"5%"}} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Home/>
                                </InputAdornment>
                            ),
                        }}/>
                        <TextField id="email"
                                   variant="outlined"
                                   label="Email"
                                   value={this.state.email}
                                   onChange={event => this.setState({ email: event.target.value })}
                                   style={{width:"30%",marginTop:"1%",marginRight:"5%"}} InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                         ),
                        }}/>
                        <TextField id="phone"
                                   variant="outlined"
                                   label="Telefono"
                                   value={this.state.phone}
                                   onChange={event => this.setState({ phone: event.target.value })}
                                   style={{width:"30%", marginTop:"1%"}}
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <Phone />
                                           </InputAdornment>
                                       ),
                                   }}/>
                    </form>
                </Modal.Content>
                <Modal.Actions>
                    <Button id="cancel" onClick={this.handleClose}
                            color='inherit'
                            style={{background:"#ff1744",marginRight:"1%",color:"white"}}>Cancelar</Button>
                    <Button id="add" onClick={this.add}
                            color='inherit'
                            style={{background:"#4caf50",marginRight:"1%",color:"white"}}>Agregar</Button>
                </Modal.Actions>
            </Modal>
        </div>
    }
}
