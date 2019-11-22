import React from "react";
import NavBar from "./components/NavBar";
import Proyectos from "./components/Proyectos";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <React.Fragment>
        <NavBar />
        <Proyectos />
      </React.Fragment>
    );
  }
}

export default App;
