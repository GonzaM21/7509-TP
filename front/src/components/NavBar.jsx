import React from "react";
import { AppBar, Button } from "@material-ui/core";
import { Icon } from "semantic-ui-react";

class NavBar extends React.Component {
    
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div id="appbar" position={"static"} style={{width: "100%", background: "rgb(46, 61, 179)", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <span>
                <Button id="home" color='inherit' className="menu-item" href="/" >PSA</Button>
                <Button id="proyects" color='inherit' className="proyectos" href="/proyectos" >Proyectos</Button>
                <Button id="clients" color='inherit' className="clientes" href="/clientes" >Clientes</Button>
                <Button id="config" color='inherit' className="config" href="/configuración" >Configuración</Button>   
            </span>
            <span>
                <Button style={{textAlign: 'center', color: "white", height: "100%",  fontSize:"20px"}}>
                    <Icon name='user circle' style={{margin:0,marginLeft:"1%",height:"100%"}}/>
                </Button>
                <Button style={{textAlign: 'center', color: "white", height: "100%", margin:0, fontSize:"20px"}}>
                    <Icon name='bell' style={{margin:0,marginLeft:"1%",height:"100%"}}/>
                </Button>
            </span>
        </div>
    );
  }
}

export default NavBar;