import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Card } from "@material-ui/core";

class Soporte extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Card style={{textAlign: "center", padding: "30px 10px 30px 10px"}}>
        <Button
            component={Link}
            to="/Soporte/CrearTicket"
            variant="contained"
            color="secondary"
            style={{background: "#42d185", marginRight: "20px"}}>
          Crear ticket
        </Button>
        <Button
            component={Link}
            to="/Soporte/AtenderLlamada"
            variant="contained"
            color="secondary"
            style={{background: "#ffc109"}}>
          Atender llamada
        </Button>
      </Card>
    );
  }
}

export default Soporte;
