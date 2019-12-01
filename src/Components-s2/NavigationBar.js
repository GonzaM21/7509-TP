import React, {Component} from "react";
import {Button, IconButton} from '@material-ui/core/';
import 'semantic-ui-css/semantic.min.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';


export default class NavigationBar extends Component {
    render() {
        return <div id="appbar" style={{position:"static",width: "100%", height: "60px", float: "left", clear: "both", background: "#1769aa", color: "white"}}>

            <Button id="home"
                    component={Link}
                    to="/"
                    color='inherit'
                    className="menu-item"
                    style={{fontSize:"20px",float: "left", marginRight: "1%", height:"100%"}}>
                PSA
            </Button>
            <Button id="projects"
                    component={Link}
                    to="/projects-s1"
                    color='inherit'
                    className="project"
                    style={{fontSize:"13px",float: "left", marginRight: "1%", height:"100%"}}>
                Proyectos
            </Button>
            <Button id="products"
                    component={Link}
                    to="/products-s2"
                    color='inherit'
                    className="products"
                    style={{fontSize:"13px",float: "left",marginRight: "1%", height:"100%"}}>
                Productos
            </Button>
            <Button id="clients"
                    component={Link}
                    to="/clients-s2"
                    color='inherit'
                    className="clients"
                    style={{fontSize:"13px",float: "left",marginRight: "1%", height:"100%"}}>
                Clientes
            </Button>
            <Button id="employee"
                    component={Link}
                    to="/employees-s2"
                    color='inherit'
                    className="employee"
                    style={{fontSize:"13px",float: "left",marginRight: "1%", height:"100%"}}>
                Empleados
            </Button>
            <Button id="sales"
                    component={Link}
                    to="/sales-s2"
                    color='inherit'
                    className="sales"
                    style={{fontSize:"13px",float: "left",marginRight: "1%", height:"100%"}}>
                Ventas
            </Button>
            <Button id="soporte"
                    component={Link}
                    to="/Soporte"
                    color='inherit'
                    className="sales"
                    name="soporteButton"
                    style={{fontSize:"13px",float: "left",marginRight: "1%", height:"100%"}}>
                Soporte
            </Button>
            <Button id="horas"
                    component={Link}
                    to="/GestionDeHoras"
                    color='inherit'
                    className="sales"
                    name="gestionDeHorasButton"
                    style={{fontSize:"13px",float: "left",marginRight: "1%", height:"100%"}}>
                Gestión de horas
            </Button>
            <IconButton component={Link} to="/HomerPage" style={{textAlign:'center', color: "inherit", float: "right",marginTop:".1%"}}>
                <AccountCircleIcon fontSize={"large"}/>
            </IconButton>
            <IconButton component={Link}  to="/Pointless" style={{textAlign:'center', color: "inherit", float: "right",marginTop:".5%"}}>
                <Badge badgeContent={9}
                       color="error">
                    <NotificationsIcon style={{margin:0}}/>
                </Badge>
            </IconButton>
        </div>
    }
}
